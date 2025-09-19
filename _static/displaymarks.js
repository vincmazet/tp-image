/*document.addEventListener('keydown', function(event) {
    if (event.key === 'm' || event.key === 'M') {
        // Sélectionner toutes les balises <mark> sur la page
        const marks = document.querySelectorAll('mark');
        marks.forEach(mark => {
            mark.classList.toggle('active');
        });
    }
});*/





// Fonction pour vérifier et appliquer le style à toutes les balises <mark>
function toggleMarkStyle() {
    const marks = document.querySelectorAll('mark');
    marks.forEach(mark => {
        mark.classList.toggle('active');
    });

    // Sauvegarder l'état actuel dans le localStorage
    const activeState = document.querySelectorAll('mark.active').length > 0;
    localStorage.setItem('marksActive', activeState);
}

// Vérifier au chargement de la page si le style doit être appliqué
document.addEventListener('DOMContentLoaded', function() {
    const activeState = localStorage.getItem('marksActive') === 'true';

    if (activeState) {
        // Si l'état est sauvegardé comme "true", appliquer le style
        toggleMarkStyle();
    }
});

// Écouter les pressions de touche
document.addEventListener('keydown', function(event) {
    if (event.key === 'm' || event.key === 'M') {
        toggleMarkStyle();
    }
});
