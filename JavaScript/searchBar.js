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

const inputBox = document.getElementById('searchBox');
const resultsBox = document.querySelector('.resultBox');

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
        var pageLink = "<a href='" + generateLinks(list) + "'>" + list + '</a>';
        return '<li>' + pageLink + '</li>';
    });

    if (result.length) {
        resultsBox.innerHTML = '<ul>' + content.join('') + '</ul>';
    } else {
        resultsBox.innerHTML = '';
    }
}

function generateLinks(item) {
    const siteUrl = 'https://guillaumethiefine.github.io/DestinyGrimoire';
    const links = {
        /* Get links for enemy factions web pages */
        'Vex': `${siteUrl}/Enemies/Vex/`,
        'Diables Symbiotiques': `${siteUrl}/Enemies/DevilSplicer/`,
        'Déchus': `${siteUrl}/Enemies/Fallen/`,
        'Corrompus': `${siteUrl}/Enemies/Taken/`,
        'Cabals': `${siteUrl}/Enemies/Cabal/`,
        'Ruche': `${siteUrl}/Enemies/Hive/`,

        /* Get links for expansions web pages */
        'Les Ténèbres Souterraines': `${siteUrl}/Expansions/DarkBelow/`,
        'La Maison des Loups': `${siteUrl}/Expansions/HouseWolves/`,
        'Le Roi des Corrompus': `${siteUrl}/Expansions/TakenKing/`,
        'Les Seigneurs de Fer': `${siteUrl}/Expansions/RiseIron/`,
    };
    
    return links[item] || '#';
}
