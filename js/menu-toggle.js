"use strict";
const widthToRemoveOffCanvas = 600;
const backDrop = document.querySelector(".backdrop");
const offCanvas = document.querySelector(".offcanvas");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");
const handleMenu = (event, action) => {
    if (action.type === "open") {
        offCanvas.classList.add("show");
        backDrop.classList.add("show");
    }
    if (action.type === "close") {
        offCanvas.classList.remove("show");
        backDrop.classList.remove("show");
    }
};
const handleResize = (event) => {
    const browserWidth = window.innerWidth;
    if (browserWidth >= widthToRemoveOffCanvas) {
        //----------> check if active
        if (offCanvas.className.includes("show")) {
            return handleMenu(event, { type: "close" });
        }
        else {
            return;
        }
    }
    else {
        //----------> do nothing
        return;
    }
};
//<--------- EVENT LISTENERS ---------->
menuIcon.addEventListener("click", (event) => {
    handleMenu(event, { type: "open" });
});
closeIcon.addEventListener("click", (event) => {
    handleMenu(event, { type: "close" });
});
backDrop.addEventListener("click", (event) => {
    handleMenu(event, { type: "close" });
});
window.addEventListener("resize", handleResize);
