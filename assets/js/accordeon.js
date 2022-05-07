"use ctrict";

const Accord = (accord) => {
  let head = accord.querySelector(".accord-header-js");
  let accordHidden = accord.querySelector(".accord-hidden-js");
  let headItems = Array.prototype.slice.call(head.children);
  let accordHiddenChildren = Array.prototype.slice.call(accordHidden.children);

  const activeHEAD = (e) => {
    headItems.forEach((cell) => {
      let temp = cell.getAttribute("rel");
      let cont = accordHidden.querySelector(`#${temp}`);

      if (e.target == cell) {
        headItems.forEach((item) => {
          item == cell
            ? cell.classList.contains("_is-active")
              ? cell.classList.remove("_is-active")
              : cell.classList.add("_is-active")
            : item.classList.remove("_is-active");
        });

        accordHiddenChildren.forEach((item) => {
          item == cont
            ? cont.classList.contains("_is-active")
              ? cont.classList.remove("_is-active")
              : cont.classList.add("_is-active")
            : item.classList.remove("_is-active");
        });
      }
    });
  };

  const close = () => {
    headItems.forEach((item) => {
      item.classList.remove("_is-active");
    });
    accordHiddenChildren.forEach((item) => {
      item.classList.remove("_is-active");
    });
  };

  const activeAccord = (e) => {
    if (e.target.closest(".accord-header-js") == head) {
      activeHEAD(e);
    } else if (!e.target.classList.contains("accord-hidden-item")) {
      close();
    }
  };

  document.addEventListener("click", activeAccord);
};

document.addEventListener("DOMContentLoaded", function () {
  const accords = document.querySelectorAll(".accord-js");
  if (accords.length > 0) {
    accords.forEach((accord) => {
      Accord(accord);
    });
  }
});
