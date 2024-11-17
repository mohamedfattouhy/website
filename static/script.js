
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

        location.reload();
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



function copyToClipboard(event) {
    const email = "m.fattouhy@hotmail.com";

    // Copie l'email dans le presse-papiers
    navigator.clipboard.writeText(email).then(() => {

        // Affiche la notification "Copié !" près du curseur
        const notification = document.getElementById("copyNotification");
        notification.style.opacity = 1; // Rend le message visible
        
        // // Positionne la notification à côté du curseur
        // notification.style.left = `${event.pageX + 150}px`;
        // notification.style.top = `${event.pageY + 15}px`;

        // Cache le message après 1 seconde
        setTimeout(() => {
            notification.style.opacity = 0;
        }, 1000);

    }).catch(err => {
        console.error("Erreur de copie : ", err);
    });
}

// Effet sur les items de la nav
function animationItemNav() {

    if (!sessionStorage.getItem('animationActivated')) {

        // console.log("Animation non activée, ajout de la classe.");
        
        const effetElementItem1 = document.getElementById('item1');
        const effetElementItem2 = document.getElementById('item2');
        const effetElementItem3 = document.getElementById('item3');


        effetElementItem1.style.color = 'rgba(0, 0, 0, 0.3)';
        effetElementItem2.style.color = 'rgba(0, 0, 0, 0.3)';
        effetElementItem3.style.color = 'rgba(0, 0, 0, 0.3)';

        // Pause de 2000 millisecondes = 2 secondes
        setTimeout(() => {}, 2000);

        // Ajoute une classe pour activer l'effet
        effetElementItem1.classList.add('effet-item-nav'); 
        effetElementItem2.classList.add('effet-item-nav'); 
        effetElementItem3.classList.add('effet-item-nav'); 

        // Enregistre dans sessionStorage que l'animation a été activée
        sessionStorage.setItem('animationActivated', 'true');

        // Retire la classe et le style après une pause de 2 secondes
        setTimeout(() => {
            effetElementItem1.classList.remove('effet-item-nav');
            effetElementItem2.classList.remove('effet-item-nav');
            effetElementItem3.classList.remove('effet-item-nav');

            effetElementItem1.style.removeProperty('color');
            effetElementItem2.style.removeProperty('color');
            effetElementItem3.style.removeProperty('color');
        }, 2000);
    }
}

// Vérification au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    animationItemNav();
});


// Crétion d'une instance de l'Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            // Activé h5 lorsque celui-ci apparait à l'écran
            entry.target.classList.add('h5'); 
        }
    });
});

// Sélectionner tous les éléments avec la classe 'qualites'
const qualities = document.querySelectorAll(".qualites");

// Observer chaque élément correspondant
qualities.forEach(e => {
    observer.observe(e);
});



// Ecartement non-linéaire du texte de présentation vers le haut en fonction du scroll
document.addEventListener('scroll', () => {

    // Récupération de la valeur de défilement vertical de la fenêtre
    const scrolled = window.scrollY;


    // Application de la transformation aux éléments avec les classes effet-vol
    document.querySelectorAll('.effet-scroll-texte-1').forEach(element => {
        element.style.transform = `translate3d(0, ${scrolled * -0.5}px, 0)`;
    });
    document.querySelectorAll('.effet-scroll-texte-2').forEach(element => {
        element.style.transform = `translate3d(0, ${scrolled * -0.4}px, 0)`;
    });
    document.querySelectorAll('.effet-scroll-texte-3').forEach(element => {
        element.style.transform = `translate3d(0, ${scrolled * -0.3}px, 0)`;
    });
    document.querySelectorAll('.effet-scroll-texte-4').forEach(element => {
        element.style.transform = `translate3d(0, ${scrolled * -0.1}px, 0)`;
    });

});


// Détecter l'entrée dans la page pour déclencher les effets

// Crétion une instance de l'Intersection Observer
const animationPresentation = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        
        // Vérifie si l'élément avec l'ID "effet-qualites" est visible
        if (entry.isIntersecting) {

            // Si l'élément est visible, on sélectionne le texte à animer
            const scrollText = entry.target;

            // Ajouter la classe visible lorsque l'élément est dans le viewport
            scrollText.style.opacity = 1;
            scrollText.style.transform = 'translateY(0)';
            
        } 
        
        // else {

            // Retirer la classe visible lorsque l'élément sort du viewport
            // const scrollText = entry.target;
        // }
    });
});

// Sélectionner l'élément avec l'ID "effet-scroll-liste-qualites" à observer
const presentationTexte = document.querySelectorAll("#effet-scroll-liste-qualites");


// Observer chaque élément correspondant
presentationTexte.forEach(e => {
    animationPresentation.observe(e);
});

// Création une instance de l'Intersection Observer
const animationPresentation2 = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        
        // Vérifie si l'élément avec l'ID "effet-qualites" est visible
        if (entry.isIntersecting) {

            console.log(entry.isIntersecting)

            // Si l'élément est visible, on sélectionne le texte à animer
            const scrollText = entry.target;

            // Ajouter la classe visible lorsque l'élément est dans le viewport
            scrollText.style.opacity = 1;
            scrollText.style.transform = 'translateY(0)';
            
        }
    });
});

// Sélectionner l'élément avec l'ID "effet-scroll-presentation" à observer
const presentationTexte2 = document.querySelectorAll("#effet-scroll-presentation");

// Observer chaque élément correspondant
presentationTexte2.forEach(e => {
    animationPresentation2.observe(e);
});


// Création une instance de l'Intersection Observer
const animationTiitreSection = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        
        // Vérifie si l'élément avec l'ID "titre-section" est visible
        if (entry.isIntersecting) {

            // Si l'élément est visible, on sélectionne le texte à animer
            const scrollText = entry.target;

            // Ajouter la classe visible lorsque l'élément est dans le viewport
            scrollText.style.opacity = 1;
            scrollText.style.transform = 'translateX(0)';
            
        }
    });
});

// Sélectionner l'élément avec l'ID "titre-section" à observer
const titreSection  = document.querySelectorAll("#titre-section");

// Observer chaque élément correspondant
titreSection.forEach(e => {
    animationTiitreSection.observe(e);
});


// Crétion une instance de l'Intersection Observer
const animationContenuSection = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        // Vérifie si l'élément avec l'ID "competences" est visible
        if (entry.isIntersecting) {

            console.log(entry.isIntersecting)

            // Si l'élément est visible, on sélectionne le texte à animer
            const scrollText = entry.target;

            // Ajouter la classe visible lorsque l'élément est dans le viewport
            scrollText.style.opacity = 1;
            scrollText.style.transform = 'translateX(0)';

            // const effetElementS = document.querySelectorAll('#competences-content span.effet-surlignage-span');

            // setTimeout(() => {
            //     effetElementS.forEach((element) => {
            //         element.classList.add('effet-surlignage');
            //     });
            // }, 300); 
            
        }
    });
});

// Sélectionner l'élément avec l'ID "contenu-section" à observer
const contenuSection  = document.querySelectorAll("#contenu-section");

// Observer chaque élément correspondant
contenuSection.forEach(e => {
    animationContenuSection.observe(e);
});


// Adaptation automatique du width pour les div de la section "parcours étudiant"
window.addEventListener('load', function() {

    // Sélectionne des divs de la section "parcours etudiant"
    const parcoursEtudiantDiv1 = document.getElementById("parcours-etudiant-1");
    const parcoursEtudiantDiv2 = document.getElementById("parcours-etudiant-2");
    const parcoursEtudiantDiv3 = document.getElementById("parcours-etudiant-3");

    // Obtiens la largeur de la première div
    const parcoursEtudiantDiv1Widht = parcoursEtudiantDiv1.offsetWidth;

    // Applique cette largeur aux deux autres div
    parcoursEtudiantDiv2.style.width = parcoursEtudiantDiv1Widht + 'px';
    parcoursEtudiantDiv3.style.width = parcoursEtudiantDiv1Widht + 'px';
});


// Crétion d'une instance de l'Intersection Observer
const carJobAnimation = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            // On récuoere la classe ".card-job"
            const scrollText = entry.target.querySelector('.card-job');

            // On change le style de la classe
            scrollText.style.opacity = 1;
            scrollText.style.transform = 'rotateX(0deg)';

        }
    });
});

// Sélectionner tous les éléments avec l'id "Jobs"
const cardJob = document.querySelectorAll("#Jobs");

// Observer chaque élément correspondant
cardJob.forEach(e => {
    carJobAnimation.observe(e);
});


// Arrêter l'animation typewriter après 3s
setTimeout(() => {
    const heading = document.querySelector('.typewriter h1');
    heading.classList.add('typing-done');
  }, 3000);
