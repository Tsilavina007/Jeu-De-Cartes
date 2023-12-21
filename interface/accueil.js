const prompt = require('prompt-sync')();

const cartes = require('./cartes');

function menu(userPseudo) {
    console.log('\n');
    cartes.lesCartes().forEach(element => {console.log(element);});

    let bienvenu =''
    for (let i = 0; i < 20-(userPseudo.length/2); i++) {
        bienvenu+=' '
    }

    console.log(`\n${bienvenu+userPseudo+', bienvenu sur le Jeu de Cartes'}\n
Pendant 3 manches, vous devrons affronter un robot dans une bataille de cartes.

    ==============================================================
    `);

}


function guide() {
    console.log(``);
}
exports.menu = menu