"use ctrict";

const Header = () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".menu");
  const info = document.createElement("div");

  burger.addEventListener("click", function (event) {
    menu.classList.add("menu-active");
    info.classList.add("header__info", "info");
    info.innerHTML =
      "<a class='info__phone' href='#!'>+7(000) 123 45 65</a><form class='info__search '><input type='text' placeholder='Поиск' /><svg> <use xlink:href='#search'></use></svg><input type='submit'/></form>";
    menu.append(info);
    function activeInfo() {
      info.classList.add("info-active");
    }
    setTimeout(activeInfo, 200);
    document.querySelector("body").classList.add("lock");
  });

  // --------------------------

  document
    .querySelector(".header__close")
    .addEventListener("click", function (event) {
      menu.classList.remove("menu-active");
      menu.querySelector(".info").remove();
      info.classList.remove("info-active");
      document.querySelector("body").classList.remove("lock");
    });

  // --------------------------

  window.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 100) {
      document.querySelector(".header").classList.add("responciveHeader");
    } else {
      document.querySelector(".header").classList.remove("responciveHeader");
    }
  });

  // ---------------------------------------------
  window.onresize = function () {
    if (window.innerWidth >= 999) {
      if (menu.querySelector(".header__info")) {
        menu.querySelector(".header__info").remove();
      }

      menu.classList.remove("menu-active");
      document.querySelector(".info").classList.remove("info-active");
      document.querySelector("body").classList.remove("lock");
    }
  };
};

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  if (header) {
    Header();
  }
});

// const ItemActive = (cell) => {
//   cell.addEventListener("click", (e) => {
//       e.preventDefault();
//     const ItemActiveAll = document.querySelectorAll(".menu__link");
//     let singles = Array.prototype.slice.call(ItemActiveAll);
// for (let i = 0; i < singles.length; ++i) {
//     let item = singles[i]
//     item.classList.add("me");

// }

//   });
// };

document.addEventListener("DOMContentLoaded", function () {
  const copy = document.querySelectorAll(".menu__link ");
  let singles = Array.prototype.slice.call(copy);

  const activeItemHEAD = (singles) => {
    singles.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        singles.forEach((c) => {
          if (c.classList.contains("menu__link--active")) {
            c.classList.remove("menu__link--active");
          }
          e.target.classList.add("menu__link--active");
        });
      });
    });
  };

  if (singles.length > 0) {
    activeItemHEAD(singles);
  }
});
