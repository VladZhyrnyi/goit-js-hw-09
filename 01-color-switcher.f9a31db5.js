let t;const e={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};function a(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.stop.disabled=!0,e.start.addEventListener("click",(function(o){if(t)return;t=setInterval(a,1e3),e.start.disabled=!0,e.stop.disabled=!1})),e.stop.addEventListener("click",(function(a){clearInterval(t),t=0,e.start.disabled=!1,e.stop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.f9a31db5.js.map
