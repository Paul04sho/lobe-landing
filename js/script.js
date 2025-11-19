
let hamburgerMenu = document.querySelector('.mobile-nav');
let mainMenu = document.querySelector('.nav-list');

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle('open');
    mainMenu.classList.toggle('open');
})