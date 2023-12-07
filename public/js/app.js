import { changeTheme, setTheme } from "./libs/theme.js";
//----------> set theme of the website
setTheme();

lightThemeIcon.addEventListener("click", (event) => {
  changeTheme(event, "light-default");
});
darkThemeIcon.addEventListener("click", (event) => {
  changeTheme(event, "dark-default");
});
