"use strict";

const Popup = () => {
  const popup = document.querySelector(".popup-js"),
    body = document.querySelector("body"),
    contents = popup.querySelectorAll(".popup__content");

  document.addEventListener("click", (e) => {
    const target = e.target;

    // ==========================
    const openPop = () => {
      const initTarget = popup.querySelector(target.getAttribute("rel"));
      console.log(initTarget);
      const contents = popup.querySelectorAll(".popup__content");
      contents.forEach((cell) => {
        if (cell == initTarget) {
          initTarget.style.display = "block";
        } else {
          cell.style.display = "none";
        }
      });

      popup.style.display = "block";
      popup.animate([{ opacity: "0" }, { opacity: "1" }], {
        duration: 200,
      });
      setTimeout(() => {
        popup.style.opacity = "1";
      }, 200);
      body.style.cssText = "overflow: hidden";
    };
    // ==========================
    const closePop = () => {
      popup.animate([{ opacity: "1" }, { opacity: "0" }], {
        duration: 200,
      });
      setTimeout(() => {
        popup.style.display = "none";
        popup.style.opacity = "0";
      }, 180);
      body.style.cssText = "overflow: visible";
      contents.forEach((cell) => {
        cell.style.display = "none";
      });
    };
    // ==========================

    if (target.closest(".popups-init-js")) {
      openPop();
    } else if (
      target.matches(".popup-overlay-js") ||
      target.closest(".popup-close-js")
    ) {
      closePop();
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const popupsInit = document.querySelectorAll(".popups-init-js ");
  if (popupsInit.length > 0) {
    Popup();
  }
});
