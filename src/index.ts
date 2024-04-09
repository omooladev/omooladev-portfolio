//<---------- HTML ELEMENTS ---------->
const body = document.body;
const themeContainer = document.querySelector(".theme-container") as HTMLElement;
const lightThemeIcon = document.querySelector(".light-theme-icon") as HTMLElement;
const darkThemeIcon = document.querySelector(".dark-theme-icon") as HTMLElement;
const navigationList = document.querySelectorAll(".navigation-list") as NodeListOf<HTMLElement>;
const makeNavigationLinkActive = (event: Event) => {
  let targetElement = event.target as HTMLElement;
  //----------> remove all the active classes
  if (targetElement.className.includes("navigation-links")) {
    //----------> If the target element is a link
    navigationList.forEach((navigation) => {
      if (targetElement.innerHTML === navigation.children[0].innerHTML) {
        //----------> If the inner html of the target element is the same as the inner html of one of the children of
        //            the parent element, add active. Just ensures that i add the active class for all the links with that
        //            inner html
        navigation.classList.add("active");
      } else {
        navigation.classList.remove("active");
      }
    });
  }
};
//<---------- EVENT LISTENERS ---------->
navigationList.forEach((navigation) => navigation.addEventListener("click", makeNavigationLinkActive));
//-----> Allow window to load and fetch the html, css and javascript files first
//       before user can see anything.
window.addEventListener("load", () => (body.style.opacity = "1"));
