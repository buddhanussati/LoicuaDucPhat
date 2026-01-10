 if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('Service Worker registered'))
      .catch((error) => console.error('Error registering Service Worker', error));
  }


"use strict";
var next_sutta = $("#next-sutta").attr("title", "Kinh Tiếp"),
  previous_sutta = $("#previous-sutta").attr("title", "Kinh Trước");

$("li.nextprev").append(previous_sutta).append(next_sutta);
document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");
  const rawSuttas = document.querySelectorAll(".raw_sutta");





  // Run the lookup initializer
  if (typeof enablePaliLookup === "function") {
    enablePaliLookup();
  }
});

 function openRandomSutta3() {
  const randomIndex = Math.floor(Math.random() * suttaFiles.length);
  const selectedFile = suttaFiles[randomIndex];

  // Get root path of your site 
  const currentPath = location.pathname;
  const rootPath = currentPath.split("/").slice(0, -1).join("/") + "/";

  // Redirect to the correct file
  window.location.href = rootPath + selectedFile;
}

 function openRandomSutta2() {
  const randomIndex = Math.floor(Math.random() * suttaFiles.length);
  const selectedFile = suttaFiles[randomIndex];

  // Get root path of your site 
  const currentPath = location.pathname;
  const rootPath = currentPath.split("/").slice(0, -2).join("/") + "/";

  // Redirect to the correct file
  window.location.href = rootPath + selectedFile;
}
function openRandomSutta() {
  // Example: /bw2_20250319/dn/dn1.htm
  const currentPath = location.pathname;

  // Extract the folder name (e.g., "dn")
  const parts = currentPath.split("/");
  const currentFolder = parts[parts.length - 2]; // second-to-last segment

  // Filter suttaFiles to only those inside the same folder
  const sameFolderFiles = suttaFiles.filter(file => file.startsWith(currentFolder + "/"));

  // Pick a random file from that filtered list
  const randomIndex = Math.floor(Math.random() * sameFolderFiles.length);
  const selectedFile = sameFolderFiles[randomIndex];

  // Build root path (strip last two segments)
  const rootPath = parts.slice(0, -2).join("/") + "/";

  // Redirect
  window.location.href = rootPath + selectedFile;
}



    document.addEventListener("DOMContentLoaded", function () {
      if (typeof enablePaliLookup === "function") {
        enablePaliLookup();
      } else {
        console.error("enablePaliLookup is not defined");
      }
    });




 // Script to open and close sidebar
 	function w3_open() {
 	document.getElementById("mySidebar").style.display = "block";
 	}
 		function w3_close() {
 		document.getElementById("mySidebar").style.display = "none";
 	}

function toggle_light_mode() {
 			var app = document.getElementsByTagName("BODY")[0];
 				if (localStorage.lightMode == "dark") {
 			localStorage.lightMode = "light";
 			app.setAttribute("light-mode", "light");
 		} else {
 					localStorage.lightMode = "dark";
 					app.setAttribute("light-mode", "dark");
 	}
 		}
 
 		window.addEventListener("storage", function () {
 			if (localStorage.lightMode == "dark") {
 				app.setAttribute("light-mode", "dark");
 				} else {
 				app.setAttribute("light-mode", "light");
 		}
 		}, false);
		

 		var app = document.getElementsByTagName("BODY")[0];
 		if (localStorage.lightMode == "dark") {
 			app.setAttribute("light-mode", "dark");
 	}
 
 

 		function toggle_light_mode() {
 			var app = document.getElementsByTagName("BODY")[0];
 				if (localStorage.lightMode == "dark") {
 			localStorage.lightMode = "light";
 			app.setAttribute("light-mode", "light");
 		} else {
 					localStorage.lightMode = "dark";
 					app.setAttribute("light-mode", "dark");
 	}
 		}
 
 		window.addEventListener("storage", function () {
 			if (localStorage.lightMode == "dark") {
 				app.setAttribute("light-mode", "dark");
 				} else {
 				app.setAttribute("light-mode", "light");
 		}
 		}, false);
		
function toggleVi() {
      const btn = document.getElementById('toggleViBtn');
      const hidden = !document.body.classList.contains('vi-hidden');

      if (hidden) {
        // Hide Vietnamese
        document.body.classList.add('vi-hidden');
        btn.textContent = 'Pali';
        btn.classList.add('hidden');
        localStorage.setItem('viHidden', 'true');

        document.querySelectorAll('p.vi').forEach(p => {
          const children = Array.from(p.childNodes);
          for (let node of children) {
            if (node.nodeType === Node.TEXT_NODE) {
              node._originalText = node.textContent;
              node.textContent = '';
            } else if (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains('pali')) {
              node.style.display = 'none';
            }
          }
        });

        showPali();

      } else {
        // Show Vietnamese
        document.body.classList.remove('vi-hidden');
        btn.textContent = 'Pali';
        btn.classList.remove('hidden');
        localStorage.setItem('viHidden', 'false');

        document.querySelectorAll('p.vi').forEach(p => {
          const children = Array.from(p.childNodes);
          for (let node of children) {
            if (node.nodeType === Node.TEXT_NODE && node._originalText !== undefined) {
              node.textContent = node._originalText;
            } else if (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains('pali')) {
              node.style.display = '';
            }
          }
        });
      }
    }

    function togglePali() {
      const paliTexts = document.querySelectorAll('.pali');
      const btn = document.getElementById('togglePaliBtn');
      const anyHidden = Array.from(paliTexts).some(el => el.style.display === 'none');
      const hideNext = !anyHidden;

      paliTexts.forEach(span => {
        span.style.display = hideNext ? 'none' : '';
      });

      btn.textContent = hideNext ? 'Việt' : 'Việt';
      btn.classList.toggle('hidden', hideNext);
      localStorage.setItem('paliHidden', hideNext ? 'true' : 'false');

      if (hideNext) {
        showVi();
      }
    }

    function showVi() {
      document.body.classList.remove('vi-hidden');
      const btn = document.getElementById('toggleViBtn');
      btn.textContent = 'Pali';
      btn.classList.remove('hidden');

      document.querySelectorAll('p.vi').forEach(p => {
        const children = Array.from(p.childNodes);
        for (let node of children) {
          if (node.nodeType === Node.TEXT_NODE && node._originalText !== undefined) {
            node.textContent = node._originalText;
          } else if (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains('pali')) {
            node.style.display = '';
          }
        }
      });
    }

    function showPali() {
      const paliTexts = document.querySelectorAll('.pali');
      paliTexts.forEach(span => span.style.display = '');
      const btn = document.getElementById('togglePaliBtn');
      btn.textContent = 'Việt';
      btn.classList.remove('hidden');
    }

    // Restore state on page load
    window.addEventListener('DOMContentLoaded', () => {
      const viHidden = localStorage.getItem('viHidden') === 'true';
      const paliHidden = localStorage.getItem('paliHidden') === 'true';

      if (viHidden) {
        toggleVi();
      }
      if (paliHidden) {
        togglePali();
      }
    });

function togglePaliLookup(enabled){
  if(enabled){
    enablePaliLookup();
    localStorage.setItem('paliLookupEnabled', 'true');
  } else {
    disablePaliLookup();
    localStorage.setItem('paliLookupEnabled', 'false');
  }
}

// 🔹 Restore state on page load
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('paliLookupEnabled');

  // If no saved value, default to enabled
  const lookupEnabled = saved === null ? true : saved === 'true';

  // set checkbox state to match
  const checkbox = document.getElementById('paliSwitch');
  checkbox.checked = lookupEnabled;

  // apply the state
  togglePaliLookup(lookupEnabled);
});

	function openSuttaTopic() {
    window.location.href = "../tn/tn.html";
  }
  
  function SuttaQuotes() {
    window.location.href = "../congcu/trichdan.html";
  }
  
/**
 * COMBINED SCRIPT: QUICK OPEN + PAGE SEARCH
 * Priority:
 * 1. Checks if input is a valid Sutta Citation (e.g., 'dn1', 'mn 22'). If yes -> Redirect.
 * 2. If not a citation, treats input as text -> Highlights text on page.
 */

/* =========================================
   PART 1: CONFIGURATION & DATA (Quick Open)
   ========================================= */
const collections = {
    dn: 'dn',
    mn: 'mn',
    sn: 'sn',
    an: 'an',
    kp: 'kp',
    dhp: 'dhp',
    ud: 'ud',
    snp: 'snp',
    thag: 'thag',
    thig: 'thig',
    iti: 'iti',
    bhkp: 'Bhikkhu-Patimokkha'
};

// Sort keys by length DESC to match specific keys first (e.g. 'dhp' before 'dn' if overlapping)
const sortedKeys = Object.keys(collections).sort((a, b) => b.length - a.length);

const dhpRanges = [
    { start: 1, end: 20 }, { start: 21, end: 32 }, { start: 33, end: 43 },
    { start: 44, end: 59 }, { start: 60, end: 75 }, { start: 76, end: 89 },
    { start: 90, end: 99 }, { start: 100, end: 115 }, { start: 116, end: 128 },
    { start: 129, end: 145 }, { start: 146, end: 156 }, { start: 157, end: 166 },
    { start: 167, end: 178 }, { start: 179, end: 196 }, { start: 197, end: 208 },
    { start: 209, end: 220 }, { start: 221, end: 234 }, { start: 235, end: 255 },
    { start: 256, end: 272 }, { start: 273, end: 289 }, { start: 290, end: 305 },
    { start: 306, end: 319 }, { start: 320, end: 333 }, { start: 334, end: 359 },
    { start: 360, end: 382 }, { start: 383, end: 423 }
];

/* =========================================
   PART 2: LOGIC FUNCTIONS
   ========================================= */

// --- Quick Open Helpers ---

function getDhpRangeFile(num) {
    const verse = parseInt(num, 10);
    for (const r of dhpRanges) {
        if (verse >= r.start && verse <= r.end) {
            return `dhp${r.start}-${r.end}.html#content`;
        }
    }
    return null;
}

/**
 * Attempts to parse input as a citation and redirect.
 * Returns TRUE if it initiates a redirect (or finds a valid citation pattern).
 * Returns FALSE if the input should be treated as a text search.
 */
function tryQuickOpen(rawInput) {
    if (!rawInput) return false;
    
    // Remove spaces for checking pattern (e.g. "mn 22" -> "mn22")
    const cleanInput = rawInput.toLowerCase().replace(/\s+/g, '');
    let coll = '', num = '';

    // 1. Identify Collection
    for (const key of sortedKeys) {
        if (cleanInput.startsWith(key)) {
            coll = key;
            num = cleanInput.slice(key.length);
            break;
        }
    }

    // If no collection key found, it's a search term (e.g., "Buddha")
    if (!coll) return false;

    // 2. Strict Check: Is the remainder a number/citation?
    // If the remainder contains letters (e.g. "an lac"), it's likely a text search, not a citation.
    // Allowed in citation: Empty (index), Digits, Dots, Hyphens.
    const isCitationFormat = /^[\d\.\-\:]*$/.test(num);

    if (!isCitationFormat) {
        return false; // Fallback to Search
    }

    // --- Proceed with Redirect Logic ---
    
    // Case A: Collection Index (e.g., input was just "dn")
    if (!num) {
        const folderPath = collections[coll];
        const baseFolder = coll === 'bhkp' ? 'gioiluat' : folderPath;
        const url = `./${baseFolder}/${collections[coll]}.html#content`;
        location.href = url;
        return true;
    }

    // Case B: Specific Sutta
    const folderPath = collections[coll];
    let filename, url;

    if (coll === 'dhp') {
        filename = getDhpRangeFile(num);
        if (!filename) {
            alert(`Không tìm thấy: DHP ${num}`);
            return true; // We handled it (even if error), don't fallback to search
        }
        url = `./${folderPath}/${filename}`;
    } else {
        filename = `${coll}${num}.html#content`;
        url = `./${folderPath}/${filename}`;
    }

    // Check if file exists before redirecting
    fetch(url, { method: 'HEAD' })
        .then(r => {
            if (r.ok) location.href = url;
            else alert(`Không tìm thấy kinh: ${coll.toUpperCase()} ${num}\n(URL: ${url})`);
        })
        .catch(() => location.href = url); // Optimistic redirect on network error

    return true;
}


// --- Search Page Helpers ---

let currentHighlight = null;
let highlights = [];
let currentIndex = -1;

function clearHighlights() {
    document.querySelectorAll('.page-search-highlight').forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
    });
    document.querySelectorAll('.page-search-current').forEach(el => el.classList.remove('page-search-current'));
    highlights = [];
    currentIndex = -1;
}

function highlightText(searchTerm) {
    const formEl = document.getElementById('form');
    const resultInfo = document.getElementById('result-info');
    const closeBtn = document.getElementById('close-float');

    if (!searchTerm.trim()) {
        clearHighlights();
        if(resultInfo) resultInfo.textContent = '';
        if(formEl) {
            formEl.classList.remove('float-search');
            formEl.classList.add('inline-search');
        }
        if(closeBtn) closeBtn.style.display = 'none';
        return;
    }

    clearHighlights();

    // Start searching from body or specific content p tags
    const startEl = document.querySelector('p[lang="vi"].vi') || document.body;

    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: node => {
                // Ignore scripts, styles, forms
                if (node.parentNode.closest && (
                    node.parentNode.closest('script') ||
                    node.parentNode.closest('style') ||
                    node.parentNode.closest('#form') ||
                    node.parentNode.closest('#form2')
                )) {
                    return NodeFilter.FILTER_REJECT;
                }
                
                // Ensure order
                if (!(startEl.contains(node) ||
                      (startEl.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING))) {
                    return NodeFilter.FILTER_REJECT;
                }

                return node.textContent.toLowerCase().includes(searchTerm.toLowerCase())
                    ? NodeFilter.FILTER_ACCEPT
                    : NodeFilter.FILTER_REJECT;
            }
        }
    );

    const nodesToHighlight = [];
    let node;
    while (node = walker.nextNode()) {
        nodesToHighlight.push(node);
    }

    nodesToHighlight.forEach(textNode => {
        const parent = textNode.parentNode;
        const text = textNode.textContent;
        const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const parts = text.split(regex);

        parts.forEach(part => {
            if (regex.test(part)) {
                const span = document.createElement('span');
                span.textContent = part;
                span.className = 'page-search-highlight';
                highlights.push(span);
                parent.insertBefore(span, textNode);
            } else {
                parent.insertBefore(document.createTextNode(part), textNode);
            }
        });
        parent.removeChild(textNode);
    });

    if (highlights.length > 0) {
        currentIndex = 0;
        highlights[0].classList.add('page-search-current');
        highlights[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        if(resultInfo) resultInfo.textContent = `${currentIndex + 1}/${highlights.length}`;
    } else {
        if(resultInfo) resultInfo.textContent = 'Không tìm thấy';
    }

    if(formEl) {
        formEl.classList.remove('inline-search');
        formEl.classList.add('float-search');
    }
    if(closeBtn) closeBtn.style.display = 'inline-block';
}

function navigate(direction) {
    if (highlights.length === 0) return;
    const resultInfo = document.getElementById('result-info');

    highlights[currentIndex].classList.remove('page-search-current');
    currentIndex = (currentIndex + direction + highlights.length) % highlights.length;
    highlights[currentIndex].classList.add('page-search-current');
    highlights[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    if(resultInfo) resultInfo.textContent = `${currentIndex + 1}/${highlights.length}`;
}

/* =========================================
   PART 3: EVENT INITIALIZATION
   ========================================= */

// Function to handle the unified submit logic
function handleUnifiedSubmit(inputElement) {
    const rawValue = inputElement.value;
    
    // 1. Try Quick Open (Redirect)
    const isRedirecting = tryQuickOpen(rawValue);

    // 2. If not redirecting, do Page Search
    if (!isRedirecting) {
        highlightText(rawValue.trim());
    }
}

// Initialize on DOMContentLoaded to ensure elements exist
document.addEventListener('DOMContentLoaded', () => {

    // --- Inputs & Forms ---
    // We look for 'searchpage' (Search.js) or 'citation' (Quickopen.js)
    const primaryInput = document.getElementById('searchpage') || document.getElementById('citation');
    const form1 = document.getElementById('form');
    
    // Main Form Submit
    if (form1) {
        form1.addEventListener('submit', e => {
            e.preventDefault();
            // Use whichever input is active/available inside this form
            const input = form1.querySelector('input[type="text"], input[type="search"]') || primaryInput;
            if (input) handleUnifiedSubmit(input);
        });
    }

    // Secondary Form (if exists, from quickopen logic)
    const form2 = document.getElementById('form2');
    if (form2) {
        form2.addEventListener('submit', e => {
            e.preventDefault();
            const input = document.getElementById('citation2');
            if (input) handleUnifiedSubmit(input);
        });
    }

    // Input "Enter" Key (Real-time handling for searchpage if desired, or just safety)
    if (primaryInput) {
        primaryInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                // If form handles it, this might be redundant, but safe.
                // We rely on form submit usually. 
            }
            // Clear highlights if empty
            setTimeout(() => {
                if (primaryInput.value.trim() === '') {
                    clearHighlights();
                    const info = document.getElementById('result-info');
                    if(info) info.textContent = '';
                }
            }, 50);
        });
    }

    // --- Search Navigation & UI ---
    
    // Keyboard Shortcuts
    document.addEventListener('keydown', e => {
        // F3 to focus search
        if (e.key === 'F3' || (e.ctrlKey && e.key === 'f')) {
            e.preventDefault();
            if(primaryInput) primaryInput.focus();
        }
        // Arrows to navigate results
        if (highlights.length > 0 && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
            // Only if not typing in the box
            if (document.activeElement !== primaryInput) {
                e.preventDefault();
                navigate(e.key === 'ArrowDown' ? 1 : -1);
            }
        }
        // Escape to blur/close
        if (e.key === 'Escape') {
            if(primaryInput) primaryInput.blur();
            clearHighlights(); // Optional: Clear on ESC?
        }
    });

    // Button Events
    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => navigate(-1));

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.addEventListener('click', () => navigate(1));

    const closeBtn = document.getElementById('close-float');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            clearHighlights();
            if(primaryInput) primaryInput.value = '';
            const info = document.getElementById('result-info');
            if(info) info.textContent = '';
            
            if(form1) {
                form1.classList.remove('float-search');
                form1.classList.add('inline-search');
            }
            closeBtn.style.display = 'none';
        });
    }

    // Sutta Buttons (from quickopen logic) -> Fill input & Focus
    document.querySelectorAll('.sutta-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Determine target input (citation2 or primary)
            const targetInput = document.getElementById('citation2') || primaryInput;
            if (targetInput) {
                targetInput.value = btn.dataset.id;
                targetInput.focus();
                // Optional: Auto-submit?
                // handleUnifiedSubmit(targetInput); 
            }
        });
    });

    // Inject CSS for highlighting
    const style = document.createElement('style');
    style.textContent = `
        .page-search-highlight {
            background-color: #ffeb3b !important;
            padding: 0 2px;
            border-radius: 2px;
            color: black;
        }
        .page-search-current {
            background-color: #ff9800 !important;
            color: white !important;
        }
        /* Ensure float/inline styles exist if not in CSS file */
        .float-search {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            background: white;
            padding: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            border-radius: 5px;
        }
        .inline-search {
            position: relative;
        }
    `;
    document.head.appendChild(style);
});

// Create the button
const copyBtn = document.createElement("button");
copyBtn.id = "copySuttaBtn";
copyBtn.innerText = "📜";
copyBtn.title = "Chép Kinh";
copyBtn.type = "button";

// Minimal inline styling
copyBtn.style.position = "absolute";   // position relative to page
copyBtn.style.left = "20px";           // stick to left margin
copyBtn.style.padding = "2px 6px";     // smaller padding
copyBtn.style.border = "none";
copyBtn.style.borderRadius = "4px";
copyBtn.style.cursor = "pointer";
copyBtn.style.border = "1px solid currentColor";  // thin border in same color as text
copyBtn.style.borderRadius = "4px";              // rounded corners
// ✅ inherit background and text color from parent
copyBtn.style.background = "inherit";
copyBtn.style.color = "inherit";

// ✅ make font smaller
copyBtn.style.fontSize = "0.8em";

// Attach click handler
copyBtn.onclick = copySutta;

// Find the first <p lang="vi" class="vi"> and align button with it
const firstPara = document.querySelector("p[lang='vi']");
if (firstPara) {
  const rect = firstPara.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const topPos = rect.top + scrollTop;

  copyBtn.style.top = topPos + "px";

  document.body.appendChild(copyBtn);
}

// Copy function
function copySutta() {
  const paragraphs = document.querySelectorAll("p.vi, p[lang='vi'], p[lang='pi']");
  let textToCopy = "";

  paragraphs.forEach(p => {
    if (p.style.textAlign === "right" && p.style.fontStyle === "italic") {
      return;
    }
    textToCopy += p.innerText.trim() + "\n\n";
  });

  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Kinh đã được chép!");
  }).catch(err => {
    console.error("Copy failed:", err);
  });
}

