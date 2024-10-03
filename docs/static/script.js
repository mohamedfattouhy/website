
/* Cette fonction permet de créer un menu de navigation dynamique. 
Cela permet d'afficher ou masquer le menu en fonction de son état pour le rendre responsive. */
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarNav = document.getElementById('navbar-nav');

    navbarToggler.addEventListener('click', function() {
        navbarNav.classList.toggle('active');
    });
});
