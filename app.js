const navbar = document.getElementsByClassName("navbar")[0];
const title = document.getElementsByClassName("title")[0];
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");

scrollNav = () => {
  if (window.pageYOffset > window.innerHeight) {
    navbar.classList.add("scrolled");
    title.classList.remove("scrolled");
  } else if (window.pageYOffset < window.innerHeight) {
    navbar.classList.remove("scrolled");
    title.classList.add("scrolled");
  }
};

scrollToAbout = () => {
  about.scrollIntoView(true);
};

scrollToSkills = () => {
  skills.scrollIntoView(true);
};

scrollToPortfolio = () => {
  portfolio.scrollIntoView(true);
};

scrollToContact = () => {
  contact.scrollIntoView(true);
};
