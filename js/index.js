const menuList = document.getElementById("menu");

const menuButton = document.getElementById("toggle-menu-button");

const hamburguerIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="18"><g fill="#242D52" fill-rule="evenodd"><path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z"/></g></svg>';

const iconClose =
  '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="22"><path fill="#242D52" fill-rule="evenodd" d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"/></svg>';

let menuButtonWasClicked = false;

function showHideMenu() {
  menu.classList.toggle("is-hidden");
  if (!menuButtonWasClicked) {
    menuButtonWasClicked = true;
    menuButton.innerHTML = iconClose;
  } else {
    menuButtonWasClicked = false;
    menuButton.innerHTML = hamburguerIcon;
  }
}

menuButton.addEventListener("click", showHideMenu);
