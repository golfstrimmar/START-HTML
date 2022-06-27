"use ctrict";


const MyTab = () => {
  let tabs = document.querySelectorAll(".tab-js");
  let singles = Array.prototype.slice.call(tabs);
  let hiddens = document.querySelectorAll(".hidden");

  const resetAll = () => {
    tabs.forEach((cell) => {
      cell.classList.remove("_is-active");
    });
    hiddens.forEach((cell) => {
      cell.classList.remove("_is-active");
    });
  };

  singles.forEach((cell) => {
    const act = (arg) => {
      arg.classList.add("_is-active");
    };
    const rem = (arg) => {
      arg.classList.remove("_is-active");
    };
  

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".tabs-container-js")) {
        resetAll();
      }
    });

    cell.querySelector(".tab-title-js").addEventListener("click", (e) => {
      singles.forEach((c) => {
        let nabours = [...cell.closest(".tabs-container-js").children];
        let children = [...c.children];
        let hidden = children.find((item) => item.matches(".hidden"));

        if (c == cell && !c.matches("._is-active")) {
          act(c);
          act(hidden);
          nabours.forEach((nabour) => {
            if (nabour !== cell) {
              rem(nabour);
            }
          });
        } else if (c == cell && c.matches("._is-active")) {
          rem(c);
          c.querySelectorAll(".hidden").forEach((cell) => {
            rem(cell);
          });
          c.querySelectorAll(".tab").forEach((cell) => {
            rem(cell);
          });
        } else {
          nabours.forEach((nabour) => {
            if (nabour !== cell) {
              rem(nabour);
              nabour.querySelectorAll(".tab-js").forEach((cell) => {
                rem(cell);
              });
              nabour.querySelectorAll(".hidden").forEach((cell) => {
                rem(cell);
              });
            }
          });
        }
      });
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  let tabs = document.querySelectorAll(".tab-js");
  if (tabs.length > 0) {
    MyTab();
  }
});



// let = document.querySelector(' ')
// const MyForms = () => {}
// .forEach((cell) => {
//    cell.addEventListener('click', (e) => {});
// });
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





// class Tab {
//   constructor(tab) {
//     this.tab = tab;
//     this.neibours = [...tab.closest(".tabs-container-js").children];
//     this.hidden = tab.querySelector(".tab-hidden-js");
//   }

//   activeAdd(arg) {
//     arg.classList.add("_is-active");
//   }
//   notActiveAdd(arg) {
//     arg.classList.remove("_is-active");
//   }

//   start() {
//     //  Tab.resetAll();
//     this.neibours.forEach((cell) => {
//       if (cell.classList.contains("_is-active")) {
//         cell.classList.remove("_is-active");
//       }
//     });

//     this.neibours.forEach((cell) => {
//       if (cell == this.tab) {
//         this.activeAdd(this.tab);
//         this.hidden.style.height = this.hidden.scrollHeight + "px";
//       } else {
//         this.notActiveAdd(cell);
//         cell.querySelector(".tab-hidden-js").style.height = "0px";
//       }
//     });
//   }

//   stop() {
//     this.notActiveAdd(this.tab);
//     this.hidden.style.height = "0px";
//   }

//   static resetAll() {
//     document.querySelectorAll(".tab-js").forEach((cell) => {
//       cell.classList.remove("_is-active");
//     });
//     document.querySelectorAll(".tab-hidden-js").forEach((cell) => {
//       cell.classList.remove("_is-active");
//       cell.style.height = "0px";
//     });
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   let All = document.querySelectorAll(".tabs-container-js");
//   if (All.length > 0) {
//     All.forEach((cell) => {
//       cell.addEventListener("click", (e) => {

//       });
//     });

//     document.addEventListener("click", (e) => {
//       let target;
//       if (e.target.closest(".tab-js")) {
//         target = e.target.closest(".tab-js");

//         if (e.target.closest(".tab-title-js")) {
//           const tab = new Tab(target);
//           !target.classList.contains("_is-active") ? tab.start() : tab.stop();
//         }
//       } else {
//         Tab.resetAll();
//       }
//     });
//   }
// });

// class Tab {
//   constructor(cell, e) {
//     this.tabContainer = cell;
//     this.tabs = [...this.tabContainer.children];
//     this.target = e.target;
//   }

//   start() {
//     Tab.stopAll();
//     let title = this.target.closest(".tab-title-js");
//     let tab = this.target.closest(".tab-js");
//     let hidden = tab.querySelector(".tab-hidden-js");
//     if (title) {
//       this.tabs.forEach((cell) => {
//         if (cell == tab) {
//           cell.classList.contains("_is-active")
//             ? (cell.classList.remove("_is-active"), (hidden.style.height = 0))
//             : (cell.classList.add("_is-active"),
//               (hidden.style.height = hidden.scrollHeight + "px"));
//         } else {
//           cell.classList.remove("_is-active");
//           cell.querySelector(".tab-hidden-js").style.height = 0;
//         }
//       });
//     }
//   }

//   stop() {
//     this.tabs.forEach((cell) => {
//       cell.classList.remove("_is-active");
//       cell.querySelector(".tab-hidden-js").style.height = 0;
//     });
//   }

//   static stopAll() {
//     document.querySelectorAll(".tab-js").forEach((cell) => {
//       cell.classList.remove("_is-active");
//     });
//     document.querySelectorAll(".tab-hidden-js").forEach((cell) => {
//       cell.style.height = 0;
//     });
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   let All = document.querySelectorAll(".tabs-container-js");
//   if (All.length > 0) {
//     All.forEach((cell) => {
//       cell.addEventListener("click", (e) => {
//         const tab = new Tab(cell, e);

//         tab.start();
//       });
//     });
//     document.addEventListener("click", (e) => {
//       if (!e.target.closest(".tabs-container-js")) {
//         Tab.stopAll();
//       }
//     });
//   }
// });




