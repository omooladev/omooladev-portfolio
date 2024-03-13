"use strict";
//<---------- HTML ELEMENTS ---------->
const body = document.body;
const lightThemeIcon = document.querySelector(".light-theme-icon");
const darkThemeIcon = document.querySelector(".dark-theme-icon");
//<---------- EVENT LISTENERS ---------->
//-----> Allow window to load and fetch the html, css and javascript files first
//       before user can see anything.
window.addEventListener("load", () => (body.style.opacity = "1"));
