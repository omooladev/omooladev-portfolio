import { addDataToLocalStorage, fetchDataFromLocalStorage } from "../utils/localStorageData.js";

const lightModeTheme = window.matchMedia("(prefers-color-scheme:light)").matches;
const darkModeTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;
const setTheme = (newTheme) => {
  let theme;
  let themeExistInLocalStorage;
  if (newTheme) {
    theme = newTheme;
  } else {
    const themeFromLocalStorage = fetchDataFromLocalStorage().theme;

    if (lightModeTheme) {
      theme = "light-default-theme";
    }
    if (darkModeTheme) {
      theme = "dark-default-theme";
    }
    if (themeFromLocalStorage) {
      theme = themeFromLocalStorage;
      themeExistInLocalStorage = true;
    }
  }

  if (!themeExistInLocalStorage) {
    addDataToLocalStorage({ theme });
  }
  return setBodyClassName(theme);
};
const changeTheme = (event, theme) => {
  event.stopPropagation();
  return setTheme(theme);
};
const setBodyClassName = (theme) => {
  if (theme === body.className) {
    return;
  }
  if (body.className) {
    body.classList.remove(body.className);
  }

  return body.classList.add(theme);
};
export { setTheme, changeTheme };
