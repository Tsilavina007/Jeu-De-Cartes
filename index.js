const prompt = require('prompt-sync')();

const cartes = require('./interface/cartes');
const accueil = require('./interface/accueil')
 

const userPseudo = prompt('Entrer votre pseudo : ')
var resultats = []

jouer(userPseudo) // demarrer le jeux


/**
 * Fonction pour demarrer le jeux
 * @param {String} userPseudo 
 */
function jouer(userPseudo) {
    accueil.menu(userPseudo)  // afficher le menu (fonction importee dans le dossier interface)

    for (let i = 0; i < 3; i++) {
        console.log(`
        \n*************************************************************************
        \n        =============>         Manche ${i+1}         <=============\n`);
        let userCarte = prompt('Choisissez une carte (E,F,P): ')
        while (userCarte!='E' && userCarte!='F' && userCarte!='P') {
            userCarte = prompt(`La carte doit etre 'E' ou 'F' ou 'P': `)
        }
        let ordiCarte = ordiCarteRandom() 
        cartes.vs(carte(userCarte), carte(ordiCarte)).forEach((elm) => {console.log(elm);}) // afficher l'interface (user vs robot)

        console.log(verifierResultat(userCarte,ordiCarte)); // Verifier la resultat entre les deux
    }

    afficherResultatFinal(); // afficher le resultat final pendant les trois manches
};


/**
 * fonction pour modifier les lettres (E,F,P) en interface
 * @param Letter carte (E ou F ou P)
 * @returns tableau qui affiche l'interface d'une carte choisi
 */
function carte(carteSimple) {
    if (carteSimple == 'E') {
        return cartes.eau()
    } else if (carteSimple == 'F'){
        return cartes.feu()
    }else if (carteSimple == 'P'){
        return cartes.plante()
    }
}

/**
 * fonction pour choisir par hasard une carte pour le robot
 * @returns cartes au hasard pour le robot
 */
function ordiCarteRandom() {
    let cartes = ['E','F','P']
    return cartes[Math.floor(Math.random() * cartes.length)]
};


/**
 * fonction pour verifier les resultats
 * @param {string} userCarte 
 * @param {string} carteRobot 
 * @returns les resultats entre les deux cartes
 */
function verifierResultat(userCarte, carteRobot) {
    if (userCarte === carteRobot) {
        resultats.push('E') // E => Égalité !
        return '                              Égalité !';
    } else if (
        (userCarte === 'E' && carteRobot === 'F') ||
        (userCarte === 'F' && carteRobot === 'P') || 
        (userCarte === 'P' && carteRobot === 'E')
    ) { 
        resultats.push('U') // U => L'utilisateur gagne
        return '                           Vous avez gagné !';
    } else {
        resultats.push('R') // R => Le robot gagne
        return '                           Le robot a gagné !';
    };
};


/**
 * fonction pour afficher le resultats final pendant les trois manches
 */
function afficherResultatFinal() {
    if (resultats.filter((elm) => elm == 'U').length>1 || (resultats.filter((elm) => elm == 'U').length==1 && resultats.filter((elm) => elm == 'E').length>1)) {
        console.log(`
|======================================================================|
|             Félicitation! vous avez gagné de cet partie !            |
|======================================================================|`);        
    } else if (resultats.filter((elm) => elm == 'R').length>1 || (resultats.filter((elm) => elm == 'R').length==1 && resultats.filter((elm) => elm == 'E').length>1)) {
        console.log(`
|======================================================================|
|               Dommage! le robot a gagné de cet partie!                |
|======================================================================|`);
    } else {
        console.log(`
|======================================================================|
|               Weshh! Égalité, vous êtes insaisissable.               |
|======================================================================|
`);
        if (prompt(`Vous voulez retenter votre chance à nouveau (o/n) ? ==> `).toLowerCase() == 'o') {
            jouer(userPseudo);
        } else {
            console.log(`
|======================================================================|
|                           Merci beaucoup!                            |
|======================================================================|
`);
        };
    };
};;
