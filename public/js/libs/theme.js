import { addDataToLocalStorage, fetchDataFromLocalStorage } from "../utils/localStorageData.js";
//----------> This code checks for the default browser theme, If it is light, dark and if otherwise we go with a light theme by default
const defaultBrowserTheme = window.matchMedia("(prefers-color-scheme:light)").matches
    ? "light-default"
    : window.matchMedia("(prefers-color-scheme:dark)").matches
        ? "dark-default"
        : "light-default";
export const setTheme = (newTheme) => {
    let theme;
    let themeExistInLocalStorage;
    if (newTheme) {
        theme = newTheme;
    }
    else {
        //----------> get theme from local storage
        const themeFromLocalStorage = fetchDataFromLocalStorage().theme;
        if (themeFromLocalStorage) {
            theme = themeFromLocalStorage;
        }
        else {
            theme = defaultBrowserTheme;
            //----------> store the default browser theme to the local storage
            addDataToLocalStorage({ theme });
        }
    }
    // return setBodyClassName(defaultBrowserTheme);
};
export const changeTheme = (event, theme) => {
    event.stopPropagation();
    return setTheme(theme);
};
// const setBodyClassName = (theme) => {
//   if (theme === body.className) {
//     return;
//   }
//   if (body.className) {
//     body.classList.remove(body.className);
//   }
//   return body.classList.add(theme);
// };
