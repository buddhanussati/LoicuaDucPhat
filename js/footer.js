"use strict";

/* Configuration */
const DEBUGGERIZE = false;
const sectionDivSelector = "hr, hgroup, h1, h2, h3, h4, h5, h6, div.glob";
const sectionDivHiddenSelector = "hr";
const spliceOpens = "hgroup, h1, h2, h3";
const spliceCloses = "p, blockquote, div";
const SECTION_DIV_SMALL_WEIGHT = 0.01;

/* Utility: safe URL capture */
const url_components = /.*\/([\w.]+)\/([\w.-]+)\.html/.exec(location.href) || [];
const division = url_components[1] || "";
var next_sutta = $("#next-sutta").attr("title", "Kinh Tiếp"),
  previous_sutta = $("#previous-sutta").attr("title", "Kinh Trước");

$("li.nextprev").append(previous_sutta).append(next_sutta);


/* Deterministic array split */
function arraySplit(array, splitFn, includeMatching = true) {
  const out = [];
  let current = [];
  for (let i = 0; i < array.length; i++) {
    const e = array[i];
    if (splitFn(e)) {
      if (current.length) out.push(current);
      if (includeMatching) out.push([e]);
      current = [];
    } else {
      current.push(e);
    }
  }
  if (current.length) out.push(current);
  return out;
}

/* Compute text lengths once (excluding .note text lengths) */
function computeLengths(nodeArray, sectionSelector) {
  const lengths = new Array(nodeArray.length);
  const isSection = new Array(nodeArray.length);
  for (let i = 0; i < nodeArray.length; i++) {
    const el = nodeArray[i];
    // fast textContent length
    let len = (el.textContent || "").length;
    // subtract notes quickly if present
    const notes = el.querySelectorAll ? el.querySelectorAll(".note") : [];
    if (notes && notes.length) {
      let notesLen = 0;
      for (let j = 0; j < notes.length; j++) notesLen += (notes[j].textContent || "").length;
      len = Math.max(0, len - notesLen);
    }
    const section = el.matches && el.matches(sectionSelector);
    isSection[i] = !!section;
    lengths[i] = section ? SECTION_DIV_SMALL_WEIGHT : len;
  }
  return { lengths, isSection };
}

/* Sum helper */
function sum(array, from = 0) {
  let s = 0;
  for (let i = from; i < array.length; i++) s += array[i];
  return s;
}

/* Group contiguous elements by simple heuristics (keeps behavior similar to original) */
function groupy(collection, isSectionArray, nodeArray) {
  const out = [];
  let group = [];
  for (let i = 0; i < collection.length; i++) {
    const e = collection[i];
    const idx = nodeArray ? nodeArray.indexOf(e) : -1;
    const isOpen = e.matches && e.matches(spliceOpens);
    const isClose = e.matches && e.matches(spliceCloses);
    if (isOpen && group.length && group[group.length - 1].matches && group[group.length - 1].matches(spliceCloses)) {
      out.push(group);
      group = [];
    }
    group.push(e);
    if (isClose && (!idx || !isSectionArray || !isSectionArray[idx] || true)) {
      // preserve previous idea: close groups on spliceCloses
      out.push(group);
      group = [];
    }
  }
  if (group.length) out.push(group);
  return out;
}

/* extraporlativeSplice: pair up sequences using precomputed lengths
   enElems/piElems are arrays of DOM nodes; enLengths/piLengths are arrays of numbers; enIsSection/piIsSection arrays of booleans */
function extraporlativeSplice(enElems, enLengths, enIsSection, piElems, piLengths, piIsSection, tbody) {
  let enIndex = 0, piIndex = 0;

  function calculateOverallRatio() {
    const enRem = sum(enLengths, enIndex);
    const piRem = sum(piLengths, piIndex) || 1;
    return enRem / piRem;
  }
  function calculateRatio(enIdxs, piIdxs, overallRatio) {
    const enSum = enIdxs.reduce((acc, i) => acc + enLengths[i], 0) || 1;
    const piSum = piIdxs.reduce((acc, i) => acc + piLengths[i], 0) || 1;
    return enSum / (piSum * overallRatio);
  }
  function quality(v) {
    return v > 1 ? 1 / v : v;
  }

  while (enIndex < enElems.length && piIndex < piElems.length) {
    const overallRatio = calculateOverallRatio();
    let enStack = [], piStack = [];

    // start new stacks with one element each (unless it's a section divider then include it but allow advancing)
    if (enIndex < enElems.length) {
      enStack.push(enIndex);
      enIndex++;
    }
    if (piIndex < piElems.length) {
      piStack.push(piIndex);
      piIndex++;
    }

    let ratio = calculateRatio(enStack, piStack, overallRatio);
    let bestQuality = quality(ratio);

    // grow pi side if english currently longer
    while (ratio > 1 && piIndex < piElems.length) {
      if (piIsSection[piIndex]) break;
      piStack.push(piIndex);
      piIndex++;
      const newRatio = calculateRatio(enStack, piStack, overallRatio);
      const newQ = quality(newRatio);
      if (newQ < bestQuality) {
        piStack.pop();
        piIndex--;
        break;
      }
      bestQuality = newQ;
      ratio = newRatio;
    }

    // grow en side if pali currently longer
    while (ratio < 1 && enIndex < enElems.length) {
      if (enIsSection[enIndex]) break;
      enStack.push(enIndex);
      enIndex++;
      const newRatio = calculateRatio(enStack, piStack, overallRatio);
      const newQ = quality(newRatio);
      if (newQ < bestQuality) {
        enStack.pop();
        enIndex--;
        break;
      }
      bestQuality = newQ;
      ratio = newRatio;
    }

    // append a row
    const tr = document.createElement("tr");
    const tdEn = document.createElement("td");
    tdEn.lang = "en";
    const tdPi = document.createElement("td");
    tdPi.lang = "pi";

    // move DOM nodes into cells using DocumentFragment
    const fragEn = document.createDocumentFragment();
    for (let ii = 0; ii < enStack.length; ii++) {
      const idx = enStack[ii];
      fragEn.appendChild(enElems[idx].cloneNode(true));
    }
    tdEn.appendChild(fragEn);

    const fragPi = document.createDocumentFragment();
    for (let ii = 0; ii < piStack.length; ii++) {
      const idx = piStack[ii];
      fragPi.appendChild(piElems[idx].cloneNode(true));
    }
    tdPi.appendChild(fragPi);

    tr.appendChild(tdEn);
    tr.appendChild(tdPi);
    tbody.appendChild(tr);
  }

  // leftover English
  if (enIndex < enElems.length) {
    const tr = document.createElement("tr");
    const tdEn = document.createElement("td"); tdEn.lang = "en";
    const tdPi = document.createElement("td"); tdPi.lang = "pi";
    const fragEn = document.createDocumentFragment();
    for (let i = enIndex; i < enElems.length; i++) fragEn.appendChild(enElems[i].cloneNode(true));
    tdEn.appendChild(fragEn);
    tr.appendChild(tdEn); tr.appendChild(tdPi);
    tbody.appendChild(tr);
  }
  // leftover Pali
  if (piIndex < piElems.length) {
    const tr = document.createElement("tr");
    const tdEn = document.createElement("td"); tdEn.lang = "en";
    const tdPi = document.createElement("td"); tdPi.lang = "pi";
    const fragPi = document.createDocumentFragment();
    for (let i = piIndex; i < piElems.length; i++) fragPi.appendChild(piElems[i].cloneNode(true));
    tdPi.appendChild(fragPi);
    tr.appendChild(tdEn); tr.appendChild(tdPi);
    tbody.appendChild(tr);
  }
}

/* Build aligned pairs for one .raw_sutta section */
function alignedSplicer(sectionEl, tbody) {
  // collect english and pali node lists under div[lang=en] and div[lang=pi]
  const enContainer = sectionEl.querySelector("div[lang=en]");
  const piContainer = sectionEl.querySelector("div[lang=pi]");
  if (!enContainer && !piContainer) return;

  const enNodes = enContainer ? Array.from(enContainer.children).filter(n => n.nodeType === 1) : [];
  const piNodes = piContainer ? Array.from(piContainer.children).filter(n => n.nodeType === 1) : [];

  // show elements that are hidden section dividers
  enNodes.forEach(n => { if (n.matches && n.matches(sectionDivHiddenSelector)) n.style.display = ""; });
  piNodes.forEach(n => { if (n.matches && n.matches(sectionDivHiddenSelector)) n.style.display = ""; });

  // compute lengths once
  const enData = computeLengths(enNodes, sectionDivSelector);
  const piData = computeLengths(piNodes, sectionDivSelector);

  // split on section dividers to keep consistent blocks (use selector that matches hr/hgroup/etc)
  const splitFnEn = e => e.matches && e.matches(sectionDivSelector);
  const splitFnPi = e => e.matches && e.matches(sectionDivSelector);

  const enGroups = arraySplit(enNodes, splitFnEn, true);
  const piGroups = arraySplit(piNodes, splitFnPi, true);

  const maxGroups = Math.max(enGroups.length, piGroups.length);
  for (let gi = 0; gi < maxGroups; gi++) {
    const enGroup = enGroups[gi] || [];
    const piGroup = piGroups[gi] || [];

    // For each group, prepare arrays and translate indices to the original arrays for lengths
    const enIdxs = enGroup.map(g => enNodes.indexOf(g)).filter(i => i >= 0);
    const piIdxs = piGroup.map(g => piNodes.indexOf(g)).filter(i => i >= 0);

    const enElems = enIdxs.map(i => enNodes[i]);
    const enLengths = enIdxs.map(i => enData.lengths[i]);
    const enIsSection = enIdxs.map(i => enData.isSection[i]);

    const piElems = piIdxs.map(i => piNodes[i]);
    const piLengths = piIdxs.map(i => piData.lengths[i]);
    const piIsSection = piIdxs.map(i => piData.isSection[i]);

    extraporlativeSplice(enElems, enLengths, enIsSection, piElems, piLengths, piIsSection, tbody);
  }
}

/* Chunked processing to keep UI responsive for large suttas */
function buildPairsTableChunked(rawSuttaEls, onDone) {
  const frag = document.createDocumentFragment();
  const table = document.createElement("table");
  table.className = "pairs";
  const caption = document.createElement("caption");
  table.appendChild(caption);
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);
  frag.appendChild(table);

  let i = 0;
  const CHUNK = 2; // process few suttas per frame; increase if you have few but large suttas

  function step() {
    const end = Math.min(i + CHUNK, rawSuttaEls.length);
    for (; i < end; i++) {
      alignedSplicer(rawSuttaEls[i], tbody);
    }
    if (i < rawSuttaEls.length) {
      requestAnimationFrame(step);
    } else {
      onDone(table);
    }
  }
  requestAnimationFrame(step);
}

/* Pali visibility state handling */
// Always force Pali visible
localStorage.setItem("paliVisible", "true");
let paliVisible = true;

function setPaliVisibility() {
  // show all Pali cells
  document.querySelectorAll("td[lang=pi]").forEach(td => td.style.display = "");
  // mark button active
  const btn = document.getElementById("pali");
  if (btn) btn.classList.add("active");
  // persist as true
  localStorage.setItem("paliVisible", "true");
  // always load lookup
  loadPaliLookup();
}

function loadPaliLookup() {
  if (typeof enablePaliLookup === "function") return enablePaliLookup();
  if (document.querySelector(".lookup") == null) {
    jQuery.ajax({
      url: "../js/pali-lookup-standalone.js",
      dataType: "script",
      crossDomain: true,
      success: function () {
        if (typeof enablePaliLookup === "function") enablePaliLookup();
      }
    });
  } else if (typeof enablePaliLookup === "function") {
    enablePaliLookup();
  }
}

function unloadPaliLookup() {
  if (typeof disablePaliLookup === "function") return disablePaliLookup();
}

// Document ready replacement for building table
document.addEventListener("DOMContentLoaded", function () {
  const rawSuttas = Array.from(document.querySelectorAll(".raw_sutta"));
  if (!rawSuttas.length) return;

  buildPairsTableChunked(rawSuttas, function (table) {
    // hide english column
    const enTds = table.querySelectorAll("td[lang=en]");
    for (let i = 0; i < enTds.length; i++) enTds[i].style.display = "none";

    // caption from first H1
    const h1 = document.querySelector("h1");
    if (h1) {
      const caption = table.querySelector("caption");
      caption.appendChild(h1.cloneNode(true));
    }

    document.getElementById("content").appendChild(table);
    setPaliVisibility();   // no argument needed
  });

  // remove #pali button if no Pali content exists
  if (document.querySelectorAll(".raw_sutta div[lang=en] > *").length === 0) {
    const paliBtn = document.getElementById("pali");
    if (paliBtn && paliBtn.parentNode) paliBtn.parentNode.removeChild(paliBtn);
  }

  // bind toggle (optional: but here it won’t hide, just re‑enforce visibility)
  const paliBtn = document.getElementById("pali");
  if (paliBtn) {
    paliBtn.addEventListener("click", function () {
      setPaliVisibility();
    });
  }
});

