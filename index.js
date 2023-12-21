const prompt = require('prompt-sync')();

const cartes = require('./interface/cartes');
const accueil = require('./interface/accueil')

const userPseudo = prompt('Entrer votre pseudo : ')

accueil.menu(userPseudo)

while (true) {
    let userChoice = prompt('Votre choix : ')
    break
}