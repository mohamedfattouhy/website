
// Cette fonction permet de créer un menu de navigation dynamique. 
// Cela permet d'afficher ou masquer le menu en fonction de son état pour le rendre responsive.
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarNav = document.getElementById('navbar-nav');

    navbarToggler.addEventListener('click', function() {
        navbarNav.classList.toggle('active');
    });
});


// Pop-up si le site est consulté sur mobile pour inciter à desactiver le mode sombre

// localStorage.removeItem("darkMode");
// sessionStorage.removeItem("darkMode");

// Fonction pour vérifier si l'utilisateur est sur mobile
function isMobileDevice() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}

// Affichage conditionnel du popup
function showPopup() {

    const popupDisplayed = sessionStorage.getItem("darkMode") === "true";
    return !popupDisplayed;
}

// Fonction pour afficher le pop-up pour inviter a l'utilisateur a desactiver le mode sombre
// window.matchMedia('(prefers-color-scheme: dark)').matches 
function checkDarkMode() {
    if (isMobileDevice() && showPopup()) {

        // Evite d'afficher la popup plusieurs fois dans la même session
        sessionStorage.setItem("darkMode", "true");

        // Supprime l'effet de flou
        document.querySelectorAll(".popup-blur").forEach(element => {
            element.classList.add("blur-in");
        });

        document.querySelector('.popup').style.display = 'block';
    }

}

// Vérification au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    checkDarkMode();}
);

function closePopup() {
    
    // Logique pour fermer le popup
    const popup = document.getElementById('darkModePopup');

    if (popup) {

        // Masque le popup
        popup.style.display = 'none';

        // Supprime l'effet de flou
        document.querySelectorAll(".popup-blur").forEach(element => {
            element.classList.remove("blur-in");
        });

        document.querySelectorAll(".popup-blur").forEach(element => {
            element.classList.add("blur-out");
        });

        
    }
  }


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
