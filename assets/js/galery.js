"use ctrict";

const MyGalery = (galery) => {
  const navItems = galery.querySelectorAll(".galery__nav-item"),
    galeryItems = [...galery.querySelectorAll(".galery__item")],
    plaza = galery.querySelector(".galery__items");

  let pseudo = [],
    timeout = 0,
    temp;
  // for (let i = 0; i < galeryItems.length; ++i) {

  let i = 0;
  while (i < galeryItems.length) {
    pseudo[i] = { data: "", src: "" };
    pseudo[i].data = galeryItems[i].getAttribute("data");
    pseudo[i].src = galeryItems[i].querySelector("img").getAttribute("src");
    pseudo.push(pseudo[i]);
    ++i;
  }
  pseudo.pop();

  // =======================
  const rem = () => {
    [...plaza.children].forEach((cell) => {
      cell.classList.remove("_is-anim-open");
      cell.classList.add("_is-anim-close");
      setTimeout(() => {
        cell.remove();
      }, timeout);
    });
  };
  // =======================
  const create = (cell) => {
    let temp = document.createElement("li");
    temp.classList.add("galery__item", "rel", "_is-anim-open");
    temp.setAttribute("data", `${cell.data}`);
    temp.innerHTML = `<div class='imgs'><img src='${cell.src}' alt=''></div>`;
    plaza.append(temp);
  };
  // =======================
  navItems.forEach((Item) => {
    Item.addEventListener("click", (e) => {
      if (Item == temp) {
        return;
      }

      galery.querySelector(".galery__nav-item").disabled = false;
      let data = Item.getAttribute("data");

      if (data == "all") {
        rem();
        navItems.forEach((sell) => {
          sell == Item
            ? sell.classList.add("_is-active")
            : sell.classList.remove("_is-active");
        });

        setTimeout(() => {
          plaza.classList.remove("_is-active");
          pseudo.forEach((cell) => {
            create(cell);
          });
          temp = Item;
        }, timeout);
        return;
      }

      plaza.classList.add("_is-active");
      navItems.forEach((sell) => {
        sell == Item
          ? sell.classList.add("_is-active")
          : sell.classList.remove("_is-active");
      });
      if ([...plaza.children].length > 0) {
        timeout = 300;
      }
      rem();
      setTimeout(() => {
        pseudo.forEach((cell) => {
          if (cell.data == data) {
            create(cell);
          }
        });
      }, timeout);
      temp = Item;
    });
  });

  const TargetPop = (target) => {
    document.querySelector("#slider-galery").style.display = "block";
    const imgSrc = target.querySelector("img").getAttribute("src"),
      popup = document.querySelector(".popup-js"),
      popupInner = popup.querySelector(".popup__inner"),
      popupContent = popup.querySelectorAll(".popup__content");
    galerySlider = document.querySelector("#slider-galery");
    let plazaChildren = [...plaza.children];
    let plazaChildrenSrc = [];
    let indexOf = 0;

    // ==============================
    const init = () => {
      popup.style.display = "block";
      popup.animate([{ opacity: "0" }, { opacity: "1" }], {
        duration: 200,
      });
      popup.style.opacity = "1";
      document.querySelector("body").style.cssText = "overflow: hidden";

      popupContent.forEach((cell) => {
        cell.style.display = "none";
      });
    };

    // ==============================
    init();

    // popupInner.style.paddingBottom = "60vh";
    // popupInner.style.backgroundImage = `url("${imgSrc}")`;
    // popupInner.classList.add("bg");

    plazaChildren.forEach((cell) => {
      if (cell == target) {
        indexOf = plazaChildren.indexOf(cell);
      }
    });

    

    for (let i = 0; i < plazaChildren.length; ++i) {
      plazaChildrenSrc[i] = plazaChildren[i]
        .querySelector("img")
        .getAttribute("src");
    }



    document.querySelector(".slider-js-galery .swiper-wrapper").innerHTML = "";

    const swiperGalery = new Swiper(".slider-js-galery", {
      navigation: {
        prevEl: ".arrow-galery-prev",
        nextEl: ".arrow-galery-next",
      },
      slidesPerView: 1,
      loop: "false",
      speed: 800,
      initialSlide: indexOf,
    });

    for (let i = 0; i < plazaChildrenSrc.length; ++i) {
      let create = document.createElement("div");
      create.classList.add("slider__item", "swiper-slide");
      let html = `<div class='imgs'><img src= ${plazaChildrenSrc[i]}></div>`;
      create.innerHTML = html;
      document
        .querySelector(".slider-js-galery .swiper-wrapper")
        .append(create);
    }

    popupInner.append(galerySlider);

    document.addEventListener("click", (e) => {
      if (
        e.target.matches(".popup-overlay-js") ||
        e.target.closest(".popup-close-js") ||
        e.target.closest(".popups-init-js")
      ) {
        document.querySelector("#slider-galery .swiper-wrapper").innerHTML = "";
        document.querySelector("#slider-galery").style.display = "none";
        indexOf = 0;
        let plazaChildren = [...plaza.children];
        let plazaChildrenSrc = [];
        swiperGalery.destroy();
        // popupContent.forEach((cell) => {
        // popupInner.style.paddingBottom = "0px";
        // popupInner.classList.remove("bg");
        // popupInner.style.backgroundImage = "none";
        // });
      }
    });
  };

  // ========================
  document.addEventListener("click", (e) => {
    if (e.target.closest(".galery__item")) {
      let target = e.target.closest(".galery__item");
      TargetPop(target);
    } else if (!e.target.closest(".galery") && !e.target.closest(".popup")) {
      rem();
      setTimeout(() => {
        pseudo.forEach((cell) => {
          create(cell);
        });
        temp = "";
        plaza.classList.remove("_is-active");
      }, timeout);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  let galerys = document.querySelectorAll(".galery");

  if (galerys.length > 0) {
    galerys.forEach((galery) => {
      MyGalery(galery);
    });
  }
});


