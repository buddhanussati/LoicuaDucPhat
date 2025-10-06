"use strict";
var next_sutta = $("#next-sutta").attr("title", "Kinh Tiếp"),
  previous_sutta = $("#previous-sutta").attr("title", "Kinh Trước");

$("li.nextprev").append(previous_sutta).append(next_sutta);
document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");
  const rawSuttas = document.querySelectorAll(".raw_sutta");

  rawSuttas.forEach(section => {
    const piDiv = section.querySelector("span[lang=pi]");
    if (!piDiv) return;

    // Clone and append to #content
    const clone = piDiv.cloneNode(true);
    content.appendChild(clone);
  });

  // Patch the selector to include div[lang=pi] instead of td[lang=pi]
  if (typeof generateLookupMarkup === "function") {
    generateLookupMarkup = function () {
      generateMarkupCallback.nodes = $("td[lang=pi], span[lang=pi]").toArray();
      generateMarkupCallback.start = Date.now();
      generateMarkupCallback();
    };
  }

  // Run the lookup initializer
  if (typeof enablePaliLookup === "function") {
    enablePaliLookup();
  }
});
