
// Cette fonction permet de créer un menu de navigation dynamique. 
// Cela permet d'afficher ou masquer le menu en fonction de son état pour le rendre responsive.
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarNav = document.getElementById('navbar-nav');

    navbarToggler.addEventListener('click', function() {
        navbarNav.classList.toggle('active');
    });
});


// Cette fonction permet de cacher la flèche de défilement du carousel pour la première et dernière slide 
document.addEventListener('DOMContentLoaded', function () {

    // Fonction générique pour mettre à jour les boutons de contrôle d'un carrousel donné
    function setupCarouselControls(carouselId) {
        const carousel = document.querySelector(carouselId);
        const prevButton = carousel.querySelector('.carousel-control-prev');
        const nextButton = carousel.querySelector('.carousel-control-next');
        const carouselItems = carousel.querySelectorAll('.carousel-item');

        // Fonction pour vérifier la position actuelle du slide et cacher/montrer les flèches
        function updateCarouselControls() {
            const activeItem = carousel.querySelector('.carousel-item.active');
            const activeIndex = Array.from(carouselItems).indexOf(activeItem);

            // Si le premier slide est actif, cacher la flèche gauche (prev)
            if (activeIndex === 0) {
                prevButton.style.display = 'none';
            } else {
                prevButton.style.display = 'block';
            }

            // Si le dernier slide est actif, cacher la flèche droite (next)
            if (activeIndex === carouselItems.length - 1) {
                nextButton.style.display = 'none';
            } else {
                nextButton.style.display = 'block';
            }
        }

        // On appelle la fonction lors de l'initialisation pour vérifier la position initiale
        updateCarouselControls();

        // Ajoute d'un écouteur d'événement pour détecter le changement de slide
        carousel.addEventListener('slid.bs.carousel', updateCarouselControls);
    }

    // On applique la fonction à chaque carrousel
    setupCarouselControls('#carouselDashFuel');
    setupCarouselControls('#carouselDashBike');
});
