
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



// Pop-up si le site est consulté sur mobile pour inciter à desactiver le mode sombre

// Fonction pour vérifier si l'utilisateur est sur mobile
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Fonction pour afficher le pop-up si le mode sombre est activé
function checkDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && isMobileDevice()) {
        document.getElementById('darkModePopup').style.display = 'block';
    }
}

// // Fonction pour fermer le pop-up
// function closePopup() {
//     document.getElementById('darkModePopup').style.display = 'none';
// }

function closePopup() {
    // Logique pour fermer le popup
    const popup = document.getElementById('darkModePopup'); // Assure-toi d'avoir un élément avec cet ID
    if (popup) {
      popup.style.display = 'none'; // Cache le popup
    }
  }

// Vérification au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    checkDarkMode();
});


// Gestion de la progression de la barre en fonction du scroll
const main = document.querySelector('main'),
  progressBar = document.querySelector('#progress');

document.addEventListener('scroll', () => {

  let totalHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight,
      );
    //   clientHeight = document.documentElement.clientHeight,
    //   userScroll = window.scrollY,
    //   pctScrolled = Math.round((userScroll / (totalHeight-clientHeight))*1.05*100);

    const clientHeight = window.innerHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
    const pctScrolled = Math.min(100, Math.round((scrollTop / (totalHeight - clientHeight)) * 100));
      
  // MAJ du width de la barre de progression
  progressBar.style.width = pctScrolled + '%';

});