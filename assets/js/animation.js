"use ctrict";

function AnimForScrollTop(cell) {
  window.addEventListener("scroll", function () {
    let rec = cell.getBoundingClientRect();
    if (rec.top < document.body.offsetHeight - 200) {
      cell.classList.add("_is-active");
    }
  });
}


function AnimForScrollleft(cell) {
  window.addEventListener("scroll", function () {
    let rec = cell.getBoundingClientRect();
    if (rec.top < document.body.offsetHeight - 200) {
      cell.classList.add("_is-active");
    }
  });
}


function AnimForScrollRight(cell) {
  window.addEventListener("scroll", function () {
    let rec = cell.getBoundingClientRect();
    if (rec.top < document.body.offsetHeight - 200) {
      cell.classList.add("_is-active");
    }
  });
}


document.addEventListener("DOMContentLoaded", function () {

let animTop = document.querySelectorAll("._anim-top");
let animleft = document.querySelectorAll("._anim-left");
let animRight = document.querySelectorAll("._anim-right");
let paralax = document.querySelectorAll("._paralax");
let singlesTop = Array.prototype.slice.call(animTop);
let singlesleft = Array.prototype.slice.call(animleft);
let singlesRight = Array.prototype.slice.call(animRight);

if (singlesTop.length > 0) {
  singlesTop.forEach((cell) => {
    AnimForScrollTop(cell);
  });
}

if (singlesleft.length > 0) {
  singlesleft.forEach((cell) => {
    AnimForScrollleft(cell);
  });
}

if (singlesRight.length > 0) {
  singlesRight.forEach((cell) => {
    AnimForScrollRight(cell);
  });
}

});








// let = document.querySelector(' ')
// const MyForms = () => {
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