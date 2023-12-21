function carteFeu() {

    let carteFeuList = [];
    carteFeuList[0] = ` ________________ `
    carteFeuList[1] = `|****************|`
    carteFeuList[2] = `|$     FEU      $|`
    carteFeuList[3] = `|$              $|`
    carteFeuList[4] = `|$              $|`
    carteFeuList[5] = `|$              $|`
    carteFeuList[6] = `|$      /\\      $|`
    carteFeuList[7] = `|$   /\\/  \\/\\   $|`
    carteFeuList[8] = `|$  (        )  $|`
    carteFeuList[9] = `|$   \\      /   $|`
    carteFeuList[10]= `|$    ======    $|`
    carteFeuList[11]= `|$              $|`
    carteFeuList[12]= `|________________|`

    return carteFeuList
}


function carteEau() {
    let carteEauList = [];
    carteEauList[0] = ` ________________ `
    carteEauList[1] = `|****************|`
    carteEauList[2] = `|$     EAU      $|`
    carteEauList[3] = `|$              $|`
    carteEauList[4] = `|$              $|`
    carteEauList[5] = `|$              $|`
    carteEauList[6] = `|$    ~ ~ ~ ~   $|`
    carteEauList[7] = `|$   ~ ~ ~ ~ ~  $|`
    carteEauList[8] = `|$    ~ ~ ~ ~   $|`
    carteEauList[9] = `|$              $|`
    carteEauList[10]= `|$    ======    $|`
    carteEauList[11]= `|$              $|`
    carteEauList[12]= `|________________|`

    return carteEauList
}

function cartePlante() {
    let cartePlanteListe = [];
    cartePlanteListe[0] = ` ________________ `
    cartePlanteListe[1] = `|****************|`
    cartePlanteListe[2] = `|$    PLANTE    $|`
    cartePlanteListe[3] = `|$              $|`
    cartePlanteListe[4] = `|$              $|`
    cartePlanteListe[5] = `|$     (\\/)     $|`
    cartePlanteListe[6] = `|$   (\\(\\/)/)   $|`
    cartePlanteListe[7] = `|$    (\\~~/)    $|`
    cartePlanteListe[8] = `|$      ||      $|`
    cartePlanteListe[9] = `|$      ||      $|`
    cartePlanteListe[10]= `|$    ======    $|`
    cartePlanteListe[11]= `|$              $|`
    cartePlanteListe[12]= `|________________|`

    return cartePlanteListe
}



function lesCartes() {
    let carte1 = carteEau()
    let carte2 = carteFeu()
    let carte3 = cartePlante()
    let cartes = []
    for (let i = 0; i < carte1.length; i++) {
        cartes.push(carte1[i]+'        '+carte2[i]+'        '+carte3[i])
    }
    cartes.unshift('    **************************************************************')
    cartes.push('','    **************************************************************')
    return cartes
}


function carteVersus(carteUser, carteOrdi) {
    let vs = ['',`  |Votre Carte|                         |La carte de l'ordi|`]
    for (let i = 0; i < carteUser.length; i++) {vs.push(carteUser[i] + '                       '+carteOrdi[i])}

    return vs
}

lesCartes().forEach((element) => {console.log(element);})