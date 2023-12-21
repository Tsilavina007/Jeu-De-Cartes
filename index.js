const prompt = require('prompt-sync')();

const cartes = require('./interface/cartes');
const accueil = require('./interface/accueil')



const userPseudo = prompt('Entrer votre pseudo : ')

accueil.menu(userPseudo)  // afficher le menu (fonction importee dans le dossier interface)

for (let i = 0; i < 3; i++) {
    console.log(`\n\n        =============>         Manche ${i+1}         <=============\n`);
    let userCarte = prompt('Choisissez une carte (E,F,P): ')
    let ordiCarte = ordiCarteRandom() 
    cartes.vs(carte(userCarte), carte(ordiCarte)).forEach((elm) => {console.log(elm);}) // afficher l'interface (user vs ordi)

    console.log(verifierResultat(userCarte,ordiCarte)); // De eto tyh ny atsona

}


// modifier les lettres (E,F,P) en interface
function carte(carteSimple) {
    if (carteSimple == 'E') {
        return cartes.eau()
    } else if (carteSimple == 'F'){
        return cartes.feu()
    }else if (carteSimple == 'P'){
        return cartes.plante()
    }
}


function ordiCarteRandom() {
    let cartes = ['E','F','P']
    return cartes[Math.floor(Math.random() * cartes.length)]
}

function verifierResultat(userCarte, carteRobot) {
    if (userCarte === carteRobot) {
        return 'Égalité !';
    } else if (
        (userCarte === 'E' && carteRobot === 'F') ||
        (userCarte === 'F' && carteRobot === 'P') || // le condition teto ny nambariko kely (E>F, F>P, P>E)
        (userCarte === 'P' && carteRobot === 'E')
    ) {
        return 'Vous avez gagné !';
    } else {
        return 'Le robot a gagné !';
    }
}
