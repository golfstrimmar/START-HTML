"use ctrict";

// const My = (item) => {
//   const navItems = [ ...item.querySelectorAll(".")],
//         galeryItems = [ ...item.querySelectorAll(".")],
//         timeout = 300;

//   // galeryItems.forEach((cell) => {
//   //   cell.classList.add("_is-active");
//   // });

//   navItems.forEach((Item) => {
//     // ==================================
//     const OpenCat = (category) => {
//       galeryItems.forEach((cell) => {
//         if (cell.classList.contains(category)) {
//           cell.classList.add("_is-active");
//           cell.animate([{ height: "0px" }, { height: `300px` }], {
//             duration: timeout,
//             easing: "ease-in-out",
//           });
//           setTimeout(() => {
//             cell.style.height = `300px`;
//           }, timeout);
//         }
//       });
//     };

//     // =================================

//     const CloseCat = () => {
//       galeryItems.forEach((cell) => {
//         if (cell.classList.contains("_is-active")) {
//           cell.animate([{ height: `300px` }, { height: "0px" }], {
//             duration: timeout,
//             easing: "ease-in-out",
//           });
//           setTimeout(() => {
//             cell.classList.remove("_is-active");
//             // cell.style.height = `0px`;
//           }, 195);
//         }
//       });
//     };

//     // =================================

//     Item.addEventListener("click", (e) => {
//       let target = e.target;
//       let category = target.getAttribute("data");
//       CloseCat();
//       setTimeout(() => {
//         OpenCat(category);
//       }, timeout);
//     });

//     // =================================
//   });
// };

// document.addEventListener("DOMContentLoaded", () => {
//   let galerys = [ ...document.querySelectorAll(".")] ;
//   if (galerys.length > 0) {
//     .forEach((item) => {
//       My(item);
//     });
//   }
// });
