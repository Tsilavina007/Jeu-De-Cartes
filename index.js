const prompt = require('prompt-sync')();

const cartes = require('./interface/cartes');
const accueil = require('./interface/accueil')



const userPseudo = prompt('Entrer votre pseudo : ')

accueil.menu(userPseudo)

for (let i = 0; i < 3; i++) {
    console.log(`Manche ${i+1}`);
    let userCarte = prompt('Choisissez une carte (E,F,P): ')
    console.log(`${userCarte} vs ${ordiCarteRandom()}`);
    
    // asio miantso function mverifier oe iza n mandresy eto, zany oe mcreer function vaovao miverifier oe iza n mandresy mihintsy, de affichena ny resultat
}

function ordiCarteRandom() {
    let cartes = ['E','F','P']
    return cartes[Math.floor(Math.random() * cartes.length)]
}