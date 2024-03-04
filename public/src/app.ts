// import { changeTheme, setTheme } from "./libs/theme.js";
// //----------> set theme of the website

import { changeTheme, setTheme } from "./libs/theme.js";

//----------> initialize the set theme function on page load
setTheme();

//<---------- EVENT LISTENERS ---------->
lightThemeIcon.addEventListener("click", (event: Event) => {
  changeTheme(event, "light-default");
});
darkThemeIcon.addEventListener("click", (event: Event) => {
  changeTheme(event, "dark-default");
});
