const prompt = require('prompt-sync')();

const cartes = require('./interface/cartes');
const accueil = require('./interface/accueil')



const userPseudo = prompt('Entrer votre pseudo : ')

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

function verifierResultat (userCarte, carteRobot) {
    if (userCarte === carteRobot) {
        return '                              Égalité !';
    } else if (
        (userCarte === 'E' && carteRobot === 'P') ||
        (userCarte === 'F' && carteRobot === 'E') ||
        (userCarte === 'P' && carteRobot === 'F')
    ) {
        return 'Vous avez gagné !';
    } else {
        return 'Vous avez perdu !';
    }
};
