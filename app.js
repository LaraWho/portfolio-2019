stickyNav = () => {
  const navbar = document.getElementsByClassName("navbar")[0];
  if (window.scrollY > window.innerHeight) {
    navbar.classList.add("scrolled");
  } else if (window.scrollY < window.innerHeight) {
    navbar.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", highlightNav = () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.scrollY;
  sections.forEach(currentSection => {
    const sectionHeight = currentSection.offsetHeight;
    const sectionTop = currentSection.offsetTop - 100;
    const sectionId = currentSection.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
    }
  })
});

openSite = (project) => {
  window.open(project);
};

toggleDarkMode = () => {
  const pageBody = document.body;
  const lightBulbOn = document.getElementById("toggle-on");
  const lightBulbOff = document.getElementById("toggle-off");

  lightBulbOn.classList.toggle("dark-mode");
  lightBulbOff.classList.toggle("dark-mode");
  pageBody.classList.toggle("dark-mode");
};