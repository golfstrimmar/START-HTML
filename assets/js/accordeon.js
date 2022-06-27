"use ctrict";

class Accord {
  constructor(accord) {
    this.button = accord;
    this.header = accord.closest(".accord-header-js");
    this.hidden = this.header.nextElementSibling;
    this.HiddenItemIndex = accord.getAttribute("rel");
    this.HiddenChildren = [...this.hidden.children];
    this.hiddenItemActive = "";
    for (let i = 0; i < this.HiddenChildren.length; ++i) {
      if (i == this.HiddenItemIndex) {
        this.hiddenItemActive = this.HiddenChildren[i];
      }
    }
    this.neibours = [...accord.closest(".accord-header-js").children];
    this.timeout = 0;

    this.neibours.forEach((cell) => {
      if (cell.matches("._is-active")) {
        this.timeout = 300;
      }
    });
  }

  activeAdd(arg) {
    arg.classList.add("_is-active");
  }
  notActiveAdd(arg) {
    arg.classList.remove("_is-active");
  }

  start() {
    Accord.resetAll();

    this.hiddenItemActive.style.height = this.hiddenItemActive.scrollHeight;
    this.neibours.forEach((cell) => {
      cell == this.button ? this.activeAdd(cell) : this.notActiveAdd(cell);
      for (let i = 0; i < this.HiddenChildren.length; ++i) {
        this.notActiveAdd(this.HiddenChildren[i]);
        this.HiddenChildren[i].style.height = "0px";
      }
      setTimeout(() => {
        this.activeAdd(this.hiddenItemActive);
        this.hiddenItemActive.style.height =
          this.hiddenItemActive.scrollHeight + "px";
      }, this.timeout);
    });
  }

  stop() {
    this.notActiveAdd(this.button);
    this.notActiveAdd(this.hiddenItemActive);
    this.hiddenItemActive.style.height = 0;
  }

  static resetAll() {
    document.querySelectorAll(".accord-header-item").forEach((cell) => {
      cell.classList.remove("_is-active");
    });
    document.querySelectorAll(".accord-hidden-item").forEach((cell) => {
      cell.classList.remove("_is-active");
      cell.style.height = "0px";
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let All = document.querySelectorAll(".accord-js");
  if (All.length > 0) {
    document.addEventListener("click", (e) => {
      if (e.target.closest(".accord-js")) {
        if (e.target.matches(".accord-header-item")) {
          const accord = new Accord(e.target);
          !e.target.matches("._is-active")
            ? accord.start()
            : accord.stop();
        }
      } else {
        Accord.resetAll();
      }
    });
  }
});









// const Myaccord = (accord) => {
//   let header = accord.querySelector(".accord-header-js"),
//     headerItems = [...header.children],
//     hidden = accord.querySelector(".accord-hidden-js"),
//     hiddenItems = [...hidden.children],
//     duration = 300,
//     flag = true;
//   hiddenItems.forEach((cell) => {
//     cell.style.height = `0px`;
//   });

//   // ===========
//   function Clear() {
//     hiddenItems.forEach((cell) => {
//       if (cell.classList.contains("_is-active")) {
//         cell.style.height = `0px`;
//         cell.classList.remove("_is-active");
//         cell.animate(
//           [{ minHeight: `${total.scrollHeight}px` }, { minHeight: "0px" }],
//           {
//             duration: duration,
//             easing: "ease-in-out",
//           }
//         );
//       }
//     });
//   }
//   // ===========
//   const openTab = (target) => {
//     target.classList.add("_is-active");
//     for (let i = 0; i < hiddenItems.length; ++i) {
//       if (i == target.getAttribute("rel")) {
//         total = hiddenItems[i];
//         total.classList.add("_is-active");
//         total.animate(
//           [{ height: "0px" }, { height: `${total.scrollHeight}px` }],
//           {
//             duration: duration,
//             easing: "ease-in-out",
//           }
//         );
//         total.style.height = `${total.scrollHeight}px`;
//       }
//     }
//   };

//   // ===========
//   document.addEventListener("click", (e) => {
//     let target = e.target;

//     if (!target.closest(".accord-js")) {
//       headerItems.forEach((cell) => {
//         if (cell.classList.contains("_is-active")) {
//           cell.classList.remove("_is-active");
//         }
//       });
//       Clear();
//       flag = true;
//     } else if (
//       target.closest(".accord-header-js") == header &&
//       !target.classList.contains("_is-active") &&
//       flag == false
//     ) {
//       headerItems.forEach((cell) => {
//         if (cell.classList.contains("_is-active")) {
//           cell.classList.remove("_is-active");
//         }
//       });

//       Clear();
//       setTimeout(() => {
//         openTab(target);
//       }, duration);
//     } else if (
//       target.closest(".accord-header-js") == header &&
//       target.classList.contains("_is-active") &&
//       flag == false
//     ) {
//       headerItems.forEach((cell) => {
//         if (cell.classList.contains("_is-active")) {
//           cell.classList.remove("_is-active");
//         }
//       });
//       Clear();
//       flag = true;
//     } else if (
//       target.closest(".accord-header-js") == header &&
//       !target.classList.contains("_is-active") &&
//       flag == true
//     ) {
//       headerItems.forEach((cell) => {
//         if (cell.classList.contains("_is-active")) {
//           cell.classList.remove("_is-active");
//         }
//       });
//       openTab(target);
//       flag = false;
//     }
//   }); // ===click========
// };

// document.addEventListener("DOMContentLoaded", function () {
//   let All = document.querySelectorAll(".accord-js");

//   if (All.length > 0) {
//     All.forEach((accord) => {
//       Myaccord(accord);
//     });
//   }
// });



// let = document.querySelector(' ')
// const MyForms = () => {}
// .addEventListener('click',(e) =>{ });
// .innerHTML =
// .getAttribute('name');
// document.createElement(' ')
// document.addEventListener('DOMContentLoaded', function(){ })
// if(){}else{};
// for (let i = 0; i < inputs.length; ++i) { }
// const activeHEAD = (e) => {}
// .classList.add('_is-active')
// .classList.remove('_is-active')
// .classList.contains('_is-active')
// .classList.toggle('_is-active')
// .closest(' ')
// .forEach((cell) => {});
// e.target
// .style.height = ' ';
// let head = accord.querySelector('.accord-header-js');
// let headItems = [...head.children];
// const copy = document.querySelectorAll('.copy');
// let singles = Array.prototype.slice.call(copy);
// .style.height = `${hidden.scrollHeight}px`;
