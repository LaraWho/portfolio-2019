const navbar = document.getElementsByClassName("navbar")[0];

stickyNav = () => {
  if (window.pageYOffset > window.innerHeight) {
    navbar.classList.add("scrolled");
  } else if (window.pageYOffset < window.innerHeight) {
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

openSite = project => {
  window.open(project);
};
