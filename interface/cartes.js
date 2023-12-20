let carteFeu = [];
carteFeu[0] = ` ________________ `
carteFeu[1] = `|****************|`
carteFeu[2] = `|$     FEU      $|`
carteFeu[3] = `|$              $|`
carteFeu[4] = `|$              $|`
carteFeu[5] = `|$              $|`
carteFeu[6] = `|$      /\\      $|`
carteFeu[7] = `|$   /\\/  \\/\\   $|`
carteFeu[8] = `|$  (        )  $|`
carteFeu[9] = `|$   \\      /   $|`
carteFeu[10]= `|$    ======    $|`
carteFeu[11]= `|$              $|`
carteFeu[12]= `|________________|`


let carteEau = [];
carteEau[0] = ` ________________ `
carteEau[1] = `|****************|`
carteEau[2] = `|$     EAU      $|`
carteEau[3] = `|$              $|`
carteEau[4] = `|$              $|`
carteEau[5] = `|$              $|`
carteEau[6] = `|$    ~ ~ ~ ~   $|`
carteEau[7] = `|$   ~ ~ ~ ~ ~  $|`
carteEau[8] = `|$    ~ ~ ~ ~   $|`
carteEau[9] = `|$              $|`
carteEau[10]= `|$    ======    $|`
carteEau[11]= `|$              $|`
carteEau[12]= `|________________|`


let cartePlante = [];
cartePlante[0] = ` ________________ `
cartePlante[1] = `|****************|`
cartePlante[2] = `|$    PLANTE    $|`
cartePlante[3] = `|$              $|`
cartePlante[4] = `|$              $|`
cartePlante[5] = `|$     (\\/)     $|`
cartePlante[6] = `|$   (\\(\\/)/)   $|`
cartePlante[7] = `|$    (\\~~/)    $|`
cartePlante[8] = `|$      ||      $|`
cartePlante[9] = `|$      ||      $|`
cartePlante[10]= `|$    ======    $|`
cartePlante[11]= `|$              $|`
cartePlante[12]= `|________________|`



function lesCartes(carte1, carte2, carte3) {
    let cartes = []
    for (let i = 0; i < carte1.length; i++) {
        cartes.push(carte1[i]+'        '+carte2[i]+'        '+carte3[i])
    }
    cartes.unshift('    **************************************************************')
    cartes.push('','    **************************************************************')
    return cartes
}


lesCartes(carteEau, carteFeu, cartePlante).forEach((element) => {console.log(element);})

function carteVersus(carteUser, carteOrdi) {
    let vs = ['',`  |Votre Carte|                         |La carte de l'ordi|`]
    for (let i = 0; i < carteUser.length; i++) {vs.push(carteUser[i] + '                       '+carteOrdi[i])}

    return vs
}
