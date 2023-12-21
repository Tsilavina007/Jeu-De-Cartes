const prompt = require('prompt-sync')();

const cartes = require('./cartes');

function menu(userPseudo) {
    console.log('\n');
    cartes.lesCartes().forEach(element => {console.log(element);});

    let bienvenu =''
    for (let i = 0; i < 20-(userPseudo.length/2); i++) {
        bienvenu+=' '
    }

    console.log(`\n${bienvenu+userPseudo+', bienvenu sur le Jeu de Cartes'}
                           _________________
                          |                 |
                          |   1 - Jouer     |
                          |   2 - Guides    |
                          |   3 - Quitter   |
                          |_________________|\n`);

}

exports.menu = menu