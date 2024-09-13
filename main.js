const mots = [
    "angle", "armoire", "banc", "bureau", "cabinet", "carreau", "chaise", "classe",
    "cle", "coin", "couloir", "dossier", "eau", "ecole", "ecriture", "entree", "escalier",
    "etagere", "etude", "exterieur", "fenetre", "interieur", "lavabo", "lecture", "lit", "marche",
    "matelas", "maternelle", "meuble", "mousse", "mur", "peluche", "placard", "plafond", "porte",
    "portemanteau", "poubelle", "radiateur", "rampe", "recreation", "rentree", "rideau", "robinet",
    "salle", "savon", "serrure", "serviette", "siege", "sieste", "silence", "sol", "sommeil", "sonnette",
    "sortie", "table", "tableau", "tabouret", "tapis", "tiroir", "toilette", "vitre", "crayon", "stylo",
    "feutre", "pointe", "mine", "gomme", "dessin", "coloriage", "rayure", "peinture",
    "pinceau", "couleur", "craie", "papier", "feuille", "cahier", "carnet", "carton", "ciseaux",
    "decoupage", "pliage", "pli", "colle", "affaire", "boite", "casier", "caisse", "trousse",
    "cartable", "jouet", "jeu", "pion", "de", "domino", "puzzle", "cube", "perle",
    "chose", "forme","carre", "rond", "tampon", "livre", "histoire",
    "bibliotheque", "image", "album", "titre", "conte",
    "dictionnaire", "magazine", "catalogue", "page", "ligne", "mot", "enveloppe",
    "etiquette", "affiche", "alphabet", "appareil", "camescope",
    "cassette", "cede", "cederom", "chaine", "chanson", "chiffre", "contraire",
    "difference", "doigt", "ecran", "ecriture", "film", "fois", "idee", "instrument",
    "intrus", "lettre", "liste", "magnetoscope", "main", "micro", "modele", "musique",
    "nom", "nombre", "orchestre", "ordinateur", "photo", "point", "poster", "pouce",
    "prenom", "question", "radio", "sens", "tambour", "telecommande", "telephone",
    "television", "trait", "trompette", "voix", "xylophone", "zero"
];

const chiffres = "0123456789";
const caracteresSpeciaux = "!@#$%^&*()_+[]{}|;:,.<>?";

// Fonction utilitaire pour sélectionner un élément aléatoire dans un tableau ou une chaîne
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generatePassword(event) {
    event.preventDefault();
    let input = document.querySelector("#myPass");
    let motDePasse = "";

    // Ajouter des mots aléatoires jusqu'à ce que la longueur soit >= 10 caractères
    let longueurMot = 0;
    while (longueurMot < 10) {
        let motAleatoire = getRandomElement(mots);
        motDePasse += motAleatoire;
        longueurMot += motAleatoire.length;
    }

    // Ajouter un caractère spécial aléatoire
    // motDePasse += getRandomElement(caracteresSpeciaux);

    // Ajouter 4 chiffres aléatoires
    for (let i = 0; i < 4; i++) {
        motDePasse += getRandomElement(chiffres);
    }

    // Mélanger les caractères pour améliorer la sécurité
    // motDePasse = motDePasse.split('').sort(() => 0.5 - Math.random()).join('');

    // Assigner le mot de passe généré à l'input
    input.value = motDePasse;
}
