import { changeTheme, setTheme } from "./libs/theme.js";
//----------> initialize the set theme function on page load
setTheme();
//<---------- EVENT LISTENERS ---------->
lightThemeIcon.addEventListener("click", (event) => {
    changeTheme(event, "light-default");
});
darkThemeIcon.addEventListener("click", (event) => {
    changeTheme(event, "dark-default");
});
