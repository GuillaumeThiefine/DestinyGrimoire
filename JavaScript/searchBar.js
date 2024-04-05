let availableKeywords = [
    'Voyageur',
    'Destinations',
    'Avant-Garde',
    'Dernière Cité',
    'Vex',
    'Diables Symbiotiques',
    'Déchus',
    'Corrompus',
    'Cabals',
    'Ruche',
    'Les Ténèbres Souterraines',
    'La Maison des Loups',
    'Le Roi des Corrompus',
    'Les Seigneurs de Fer',
    'La Malédiction d\'Osiris',
    'L\'Esprit Tutélaire',
    'Renégats',
    'Bastion des Ombres',
    'Au-delà de la Lumière',
    'La Reine Sorcière',
    'Éclipse',
    'La Forme Finale',
];

const inputBox = document.getElementById('search-box');
const resultsBox = document.querySelector('.result-box');

var sitePath = './';

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;

    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);
}

function display(result) {
    const content = result.map((list) => {
        var pageLink = "<a href='" + sitePath + generateLinks(list) + "'>" + list + "</a>";
        return "<li>" + pageLink + "</li>";
    });

    if (result.length) {
        resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
    } else {
        resultsBox.innerHTML = "";
    }
}

function generateLinks(item) {
    const links = {
        /* Récupère les liens pour les pages Web principales */
        'Voyageur': 'LastCity/Traveler',
        'Destinations': 'Planets/SolarSystem',
        'Avant-Garde': 'LastCity/Vanguard',
        'Dernière Cité': 'LastCity/LastCity',

        /* Récupère les liens pour les pages Web des factions ennemies */
        'Vex': 'Enemies/Vex/',
        'Diables Symbiotiques': 'Enemies/DevilSplicer/',
        'Déchus': 'Enemies/Fallen/',
        'Corrompus': 'Enemies/Taken/',
        'Cabals': 'Enemies/Cabal/',
        'Ruche': 'Enemies/Hive/',

        /* Récupère les liens pour les pages Web des extensions */
        'Les Ténèbres Souterraines': 'Content/DarkBelow/',
        'La Maison des Loups': 'Content/HouseWolves/',
        'Le Roi des Corrompus': 'Content/TakenKing/',
        'Les Seigneurs de Fer': 'Content/RiseIron/',
        'La Malédiction d\'Osiris': 'Content/CurseOsiris',
        'Au-delà de la Lumière': 'Content/BeyondLight',
    };
    
    return links[item] || '#';
}