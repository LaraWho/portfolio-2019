const navbar = document.getElementsByClassName('navbar')[0]

scrollNav = () => {
  if(window.pageYOffset > 718) {
    navbar.classList.add('scrolled')
  } else if (window.pageYOffset < 718) {
    navbar.classList.remove('scrolled')
  }
}