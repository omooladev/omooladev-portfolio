const widthToRemoveOffCanvas = 600;
const backDrop = document.querySelector(".backdrop") as HTMLElement;
const offCanvas = document.querySelector(".offcanvas") as HTMLElement;
const closeIcon = document.querySelector(".close-icon") as HTMLElement;
const menuIcon = document.querySelector(".menu-icon") as HTMLElement;

const handleMenu = (event: Event, action: { type: string }) => {
  if (action.type === "open") {
    offCanvas.classList.add("show");
    backDrop.classList.add("show");
  }
  if (action.type === "close") {
    offCanvas.classList.remove("show");
    backDrop.classList.remove("show");
  }
};
const handleResize = (event: Event) => {
  const browserWidth = window.innerWidth;
  if (browserWidth >= widthToRemoveOffCanvas) {
    //----------> check if active
    if (offCanvas.className.includes("show")) {
      return handleMenu(event, { type: "close" });
    } else {
      return;
    }
  } else {
    //----------> do nothing
    return;
  }
};
//<--------- EVENT LISTENERS ---------->
menuIcon.addEventListener("click", (event: Event) => {
  handleMenu(event, { type: "open" });
});

closeIcon.addEventListener("click", (event: Event) => {
  handleMenu(event, { type: "close" });
});

backDrop.addEventListener("click", (event: Event) => {
  handleMenu(event, { type: "close" });
});

window.addEventListener("resize", handleResize);
