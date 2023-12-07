// import { setTheme } from "./libs/setTheme.js";
// // fetch the default theme of the browser
// try {
//   const lightModeTheme = window.mathMedia("(prefers-color-scheme:light)").matches;
//   const darkModeTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;
// } catch (error) {
//   console.log(error);
// }
// add
// console.log(lightModeTheme, darkModeTheme);

// lightThemeIcon.addEventListener("click", (event) => {
//   toggleTheme(event, "light-theme");
// });
// darkThemeIcon.addEventListener("click", (event) => {
//   toggleTheme(event, "dark-theme");
// });
import { addDataToLocalStorage, fetchDataFromLocalStorage } from "./utils/localStorageData.js";
fetchDataFromLocalStorage();
