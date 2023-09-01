// variable
var asideEl = document.getElementById("side-navigation");
var menuBar = document.getElementById('menu-bars');
var gameSection = document.getElementById("games");
const brightEl = document.getElementById("light");
// navigatin bar animation variables
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const navItems = [nav1, nav2, nav3, nav4];

// Animation for each nav
function navAnimation(dir1, dir2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${dir1}-${i + 1}`, `slide-${dir2}-${i + 1}`)
  });
}
// changing the bar and hiding the side navigation bar
function hide() {
  //  toggle the menu bar on and off
  menuBar.classList.toggle('change');
  // Making the aside bar active
  asideEl.classList.toggle('activate');
  if (asideEl.classList.contains('activate')) {
    // Animating in the side bar
    asideEl.classList.replace('slide-left', 'slide-right');
    // Sliding in the navigation Items
    navAnimation("out", "in");
  } else {
    // Animating out the side bar
    asideEl.classList.replace('slide-right', 'slide-left');
    // Animating out the navigation items
    navAnimation("in", "out");
  }

}


// event listeners
menuBar.addEventListener('click', hide);
// for each item
navItems.forEach((nav) => {
  nav.addEventListener("click", hide);
});
// on scroll
