var navbar = document.querySelector('.navBar');
var handleScroll = function () {
    if (window.scrollY > 65) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255)';
    }
    else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }
};
window.addEventListener('scroll', handleScroll);
var handlePageLoad = function () {
    navbar.style.transition = 'top 0.7s ease-in-out';
    navbar.style.top = '0';
};
window.addEventListener('load', handlePageLoad);
