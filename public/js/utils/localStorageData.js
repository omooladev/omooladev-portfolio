const defaultData = [];
const fetchDataFromLocalStorage = () => {
  const data = localStorage.getItem("omooladev-portfolio");
  if (data) {
    return JSON.parse(data);
  }
  return {};
};

const addDataToLocalStorage = (data) => {
  let localStorageData = fetchDataFromLocalStorage();
  const updatedData = JSON.stringify({ ...localStorageData, ...data });
  return localStorage.setItem("omooladev-portfolio", updatedData);
};

export { addDataToLocalStorage, fetchDataFromLocalStorage };
