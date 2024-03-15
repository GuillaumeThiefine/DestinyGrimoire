
// ----- AFFICHAGE PERSONNALISE POUR FACTIONS ENNEMIES -----


const enemy_images = document.querySelectorAll('.enemy-factions-holder .enemy-image');

enemy_images.forEach(function(imageDiv) {
    imageDiv.addEventListener('mouseenter', function() {
        const index = imageDiv.getAttribute('data-index');
        const textDiv = document.querySelector('.enemy-factions-holder .enemy-text-outline .enemy-text[data-index="' + index + '"]');
        if (textDiv) {
            textDiv.classList.add('show');
        }
    });

    imageDiv.addEventListener('mouseleave', function() {
        const index = imageDiv.getAttribute('data-index');
        const textDiv = document.querySelector('.enemy-factions-holder .enemy-text-outline .enemy-text[data-index="' + index + '"]');
        if (textDiv) {
            textDiv.classList.remove('show');
        }
    });
});