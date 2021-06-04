document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");

  var oldPos = 0;
  window.addEventListener("scroll", function () {
    var newPos = document.documentElement.scrollTop;
    if (newPos > oldPos) {
      // Scrolling _down_ the page => hide the nav
      navbar.style.top = "-100%";
    } else {
      // Scrolling _up_ the page => show the nav
      navbar.style.top = "0";
    }
    // Mobile overscroll gives negative positions.
    oldPos = Math.max(0, newPos);
  });

  var navbarItems = document.getElementById("navbar-items");
  var navbarShow = document.getElementById("navbar-show");
  var navbarHide = document.getElementById("navbar-hide");
  navbarShow.addEventListener("click", function () {
    navbarItems.classList.remove("hidden");
  });
  navbarHide.addEventListener("click", function () {
    navbarItems.classList.add("hidden");
  });
});
