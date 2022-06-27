"use ctrict";

const BUTTONS = (e) => {

  let target = e.target,
  //  targetstyle = window
  //   .getComputedStyle(target, null)
  //   .getPropertyValue("background-color"),
   mValue = Math.max(target.clientWidth, target.clientHeight),
   addDiv = document.createElement("div"),
   rect = target.getBoundingClientRect();
  addDiv.classList.add("addDiv");
  // addDiv.style.background = targetstyle ;
  addDiv.style.width = addDiv.style.height = mValue + 'px';
  addDiv.style.left = e.clientX - rect.left - (mValue/2) + 'px';
  addDiv.style.top = e.clientY - rect.top - (mValue/2) + 'px';
  target.append(addDiv);
  setTimeout(() => {
    addDiv.remove();
  }, 500);


};

document.addEventListener("DOMContentLoaded", function () {
  let wave = document.querySelectorAll(".but-wave");
  let singles = Array.prototype.slice.call(wave);
  singles.forEach((cell) => {
    cell.addEventListener("click", BUTTONS);
  });
});

