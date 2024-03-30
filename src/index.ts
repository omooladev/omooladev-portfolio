//<---------- HTML ELEMENTS ---------->
const body = document.body;
const themeContainer = document.querySelector(".theme-container") as HTMLElement;
const lightThemeIcon = document.querySelector(".light-theme-icon") as HTMLElement;
const darkThemeIcon = document.querySelector(".dark-theme-icon") as HTMLElement;

//<---------- EVENT LISTENERS ---------->
//-----> Allow window to load and fetch the html, css and javascript files first
//       before user can see anything.
window.addEventListener("load", () => (body.style.opacity = "1"));
