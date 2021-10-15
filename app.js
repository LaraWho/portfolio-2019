const navbar = document.getElementsByClassName("navbar")[0];

stickyNav = () => {
  if (window.scrollY > window.innerHeight) {
    navbar.classList.add("scrolled");
  } else if (window.scrollY < window.innerHeight) {
    navbar.classList.remove("scrolled");
  }
};

scrollToSection = (element) => {
  const navItemFormatting = element.target.outerText.toLowerCase().replace(/\s+/g, '-');
  const navItem = document.getElementById(navItemFormatting);
  navItem.scrollIntoView(true);
};

Array.from(navbar.children).forEach(element => {
  element.addEventListener('click', scrollToSection, false);
});

openSite = (project) => {
  window.open(project);
};

toggleDarkMode = () => {
  const pageBody = document.body;
  const lightBulb = document.getElementById("toggle");

  if (lightBulb.src.match("on")) {
    lightBulb.src = "assets/lightbulb-off.png"
  } else {
    lightBulb.src = "assets/lightbulb-on.png"
  }

  pageBody.classList.toggle("dark-mode");
}
