import { addDataToLocalStorage, fetchDataFromLocalStorage } from "../utils/localStorageData.js";
//----------> This code checks for the default browser theme, If it is light, dark and if otherwise we go with a light theme by default
const defaultBrowserTheme = window.matchMedia("(prefers-color-scheme:light)").matches
    ? "light-default"
    : window.matchMedia("(prefers-color-scheme:dark)").matches
        ? "dark-default"
        : "dark-default"; //----------> making dark mode to be the default
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
            themeExistInLocalStorage = true;
        }
        else {
            theme = defaultBrowserTheme;
            themeExistInLocalStorage = false;
        }
    }
    //----------> store the default browser theme to the local storage
    if (!themeExistInLocalStorage) {
        addDataToLocalStorage({ theme });
    }
    return setBodyClassName(theme);
};
export const changeTheme = (event, theme) => {
    event.stopPropagation();
    return setTheme(theme);
};
const setBodyClassName = (theme) => {
    //----------> get the theme color meta tag
    //const metaTheme = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
    if (theme === body.className) {
        return;
    }
    if (body.className) {
        body.classList.remove(body.className);
    }
    if (theme === "dark-default") {
        themeContainer.classList.add("dark");
    }
    if (theme === "light-default") {
        themeContainer.classList.remove("dark");
    }
    return body.classList.add(theme);
};
