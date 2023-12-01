const lightModeTheme = window.matchMedia("(prefers-color-scheme:light)");
const darkModeTheme = window.matchMedia("(prefers-color-scheme:dark)");

//elements
const body = document.body;
const lightThemeIcon = document.querySelector(".light-theme-icon");
const darkThemeIcon = document.querySelector(".dark-theme-icon");
const setTheme = (theme) => {
  body.classList.remove(body.className);
  body.classList.add(theme);
};
const toggleTheme = (event, theme) => {
  event.stopPropagation();
  setTheme(theme);
};
// event listeners

lightThemeIcon.addEventListener("click", (event) => {
  toggleTheme(event, "light-theme");
});
darkThemeIcon.addEventListener("click", (event) => {
  toggleTheme(event, "dark-theme");
});
