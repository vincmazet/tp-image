document.addEventListener('keydown', function(event) {
    if (event.key === 'm' || event.key === 'M') {
        // Sélectionner toutes les balises <mark> sur la page
        const marks = document.querySelectorAll('mark');
        marks.forEach(mark => {
            mark.classList.toggle('active');
        });
    }
});
