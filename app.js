const navbar = document.getElementsByClassName('navbar')[0]

scrollNav = () => {
  if(window.pageYOffset > window.innerHeight) {
    navbar.classList.add('scrolled')
  } else if (window.pageYOffset < window.innerHeight) {
    navbar.classList.remove('scrolled')
  }
}