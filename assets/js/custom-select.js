"use strict";


const Select = (select) => {

  const $button = select.querySelector('.dropdown-button'),
        $list = select.querySelector('.dropdown-list'),
        items = $list.querySelectorAll('.dropdown-list__item'),
        input = select.querySelector('.drop__input');

  select.addEventListener('click', (e) => {
    e.preventDefault;
    let target = e.target
    if (target.tagName == "BUTTON") {
      target.classList.toggle('dropdown-button-active');
      $list.classList.toggle("_active");
     
      items.forEach(item => {
        item.addEventListener('click', (e) => {
          items.forEach(item => {
  item == target
  ? item.classList.add("_item-active")
  : item.classList.remove("_item-active");
          });
          e.stopPropagation();
          $button.innerHTML = item.innerHTML;
          input.value = item.getAttribute("data-value")
          $list.classList.remove("_active");
          $button.classList.remove('dropdown-button-active');
        });
      })
      
    } 
  });

  document.addEventListener('click', (e) => {
    if (e.target !== $button) {
      $button.classList.remove('dropdown-button-active');
      $list.classList.remove("_active");
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === "Tab" || e.key === "Escape") {
      $button.classList.remove('dropdown-button-active');
      $list.classList.remove("_active");
    }
  });
}



window.onload = () => {
  const selects = [...document.querySelectorAll(".select-custom")];
  if (selects.length > 0) {
    selects.forEach((select) => {
      Select(select);
    });
  }
}