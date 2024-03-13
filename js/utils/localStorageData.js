const defaultData = [];
//----------> A function for fetching data from the local storage
export const fetchDataFromLocalStorage = () => {
    const data = localStorage.getItem("omooladev-portfolio");
    if (data) {
        return JSON.parse(data);
    }
    return { theme: "" };
};
export const addDataToLocalStorage = (data) => {
    //----------> fetch data from the local storage
    let localStorageData = fetchDataFromLocalStorage();
    //----------> update the data
    const updatedData = JSON.stringify(Object.assign(Object.assign({}, localStorageData), data));
    return localStorage.setItem("omooladev-portfolio", updatedData);
};
