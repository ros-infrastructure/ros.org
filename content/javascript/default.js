function closeMenus(menuId, event) {
  let dots = document.getElementById("submenu-dots");
  let topDot = document.getElementById("dot-top");
  let bottomDot = document.getElementById("dot-bottom");
  let classes = dots.classList;
  let dotTopClasses = topDot.classList;
  let dotBottomClasses = bottomDot.classList;

  let aboutList = document.getElementById("submenu-about");
  let aboutClasses = aboutList.classList;

  // stop checking in parent elements further up the DOM
  window.event.stopPropagation();
  const menuIds = ["about", "submenu-about", "dropdown-dots", "submenu-dots"];
  if (menuIds.includes(menuId.id)) {
    return;
  } else if (menuId.id == "dropdown-dots") {
    return;
  } else {
    classes.remove("show");
    classes.add("hidden");

    dotTopClasses.remove("invisible");
    dotTopClasses.add("visible");

    dotBottomClasses.remove("invisible");
    dotBottomClasses.add("visible");

    aboutClasses.add("hidden");
    aboutClasses.remove("show");
  }
}

function openCloseDotsMenu() {
  let dots = document.getElementById("submenu-dots");
  let topDot = document.getElementById("dot-top");
  let bottomDot = document.getElementById("dot-bottom");
  let classes = dots.classList;
  let dotTopClasses = topDot.classList;
  let dotBottomClasses = bottomDot.classList;
  let aboutList = document.getElementById("submenu-about");
  let aboutClasses = aboutList.classList;

  if (classes.contains("hidden")) {
    classes.remove("hidden");
    classes.add("show");

    dotTopClasses.add("invisible");
    dotTopClasses.remove("visible");

    dotBottomClasses.add("invisible");
    dotBottomClasses.remove("visible");

    aboutClasses.add("hidden");
    aboutClasses.remove("show");
  } else {
    classes.remove("show");
    classes.add("hidden");

    dotTopClasses.remove("invisible");
    dotTopClasses.add("visible");

    dotBottomClasses.add("visible");
    dotBottomClasses.remove("invisible");
  }
}

function openCloseAbout() {
  let aboutList = document.getElementById("submenu-about");
  let classes = aboutList.classList;
  let dots = document.getElementById("submenu-dots");
  let topDot = document.getElementById("dot-top");
  let bottomDot = document.getElementById("dot-bottom");
  let dotsMenuClasses = dots.classList;
  let dotTopClasses = topDot.classList;
  let dotBottomClasses = bottomDot.classList;

  if (classes.contains("hidden")) {
    classes.remove("hidden");
    classes.add("show");

    dotsMenuClasses.remove("show");
    dotsMenuClasses.add("hidden");

    dotTopClasses.remove("invisible");
    dotTopClasses.add("visible");

    dotBottomClasses.remove("invisible");
    dotBottomClasses.add("visible");
  } else {
    classes.remove("show");
    classes.add("hidden");
  }
}
