const defaultData = [];

//----------> A function for fetching data from the local storage
export const fetchDataFromLocalStorage = (): LocalStorageData => {
  const data = localStorage.getItem("omooladev-portfolio");
  if (data) {
    return JSON.parse(data);
  }
  return { theme: "" };
};

export const addDataToLocalStorage = (data: object) => {
  //----------> fetch data from the local storage
  let localStorageData = fetchDataFromLocalStorage();
  //----------> update the data
  const updatedData = JSON.stringify({ ...localStorageData, ...data });
  return localStorage.setItem("omooladev-portfolio", updatedData);
};
