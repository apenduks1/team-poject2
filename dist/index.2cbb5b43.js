document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".switch"),e=document.body,o=document.querySelectorAll(".logo-stroke"),l=document.querySelectorAll(".logo-fill");t.addEventListener("click",(function(){var c=t.classList.toggle("on");c?(e.classList.remove("light-mode"),e.classList.add("dark-mode")):(e.classList.remove("dark-mode"),e.classList.add("light-mode")),o.forEach((function(t){t.setAttribute("stroke",c?"white":"black")})),l.forEach((function(t){t.setAttribute("fill",c?"white":"black")}))})),e.classList.add("light-mode")}));
//# sourceMappingURL=index.2cbb5b43.js.map
