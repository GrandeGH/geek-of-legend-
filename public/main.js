class Boss {
    constructor(nom, pointAttaque, pointDeVie,) {
        this.nom = nom 
        this.pointAttaque = pointAttaque
        this.pointDeVie = pointDeVie
    }
} 

class Héros extends Boss {
    constructor(nom, pointAttaque, pointDeVie, postureDeCombat, classe) {
        super(nom, pointAttaque, pointDeVie)
        this.postureDeCombat = postureDeCombat
        this.classe = classe
    }
} 

class Guerrier extends Héros {
    constructor(nom, pointAttaque, pointDeVie, postureDeCombat, classe, pointDeRage) {
        super(nom, pointAttaque, pointDeVie, postureDeCombat, classe)
        this.pointDeRage = pointDeRage
    }
}

class Mage extends Héros {
    constructor(nom, pointAttaque, pointDeVie, postureDeCombat, classe, pointDeMana) {
        super(nom, pointAttaque, pointDeVie, postureDeCombat, classe)
        this.pointDeMana = pointDeMana
    }
}

class Archer extends Héros {
    constructor(nom, pointAttaque, pointDeVie, postureDeCombat, classe, flèches) {
        super(nom, pointAttaque, pointDeVie, postureDeCombat, classe)
        this.flèches = flèches
    }
}

// Boss
const Sauron = new Boss ("Sauron", 20, 400) 
const Chronos = new Boss ("Chronos", 15, 350)
const Lilith = new Boss ("Lilith", 25, 300)

const listeBoss = [Sauron, Chronos, Lilith]

//Héros
const guerrier = new Guerrier ("Ardbert", 0, 0,["Attaque", "Defense"], "Guerrier", 0)
const mage = new Mage ("Rita", 0, 0,["Attaque", "Defense"], "Mage", 7)
const archer = new Archer ("Serah", 0, 0,["Attaque", "Defense"], "Archer", 6)

// Début du jeu

// créer un nom

let nomGuerrier = prompt("Entrer un nom pour le guerrier")
let nomMage = prompt("Entrer un nom pour la mage")
let nomArcher = prompt("Entrer un nom pour l'archer")

// repartir les points de vies et d'attaque

let PVrepartir = 150
let PAttakrepartir = 120

while (true) {
    // ---attribuer au guerrier
    guerrier.pointDeVie = parseInt(prompt(`Repartir les PV (points de vie) à ${nomGuerrier}, ${PVrepartir} restant`))
    PVrepartir -= guerrier.pointDeVie
    // vérification
    if (guerrier.pointDeVie < 1 || PVrepartir < 0) {
        alert("Le guerrier doit au moins avoir 1 points de vie ou les points de disponiblité ont dépassés.")
        PVrepartir += guerrier.pointDeVie
        continue // recommencer le boucle

    // if (guerrier.pointDeVie >= 1)
    //     console.log(`${guerrier.pointDeVie} du guerrier`)
    //     break
    // }
    // if (guerrier.pointDeVie ) {
    //     alert("Il manque des points à repartir au Guerrier. Reessayez")
    //     PVrepartir += guerrier.pointDeVie
    }

    // ---attribuer au Mage
    mage.pointDeVie = parseInt(prompt(`Repartir les PV (points de vie) à ${nomMage}, ${PVrepartir} restant`))
    PVrepartir -= mage.pointDeVie
    // vérification
    if (mage.pointDeVie <= 0 || PVrepartir < 0) {
        alert("Le mage doit au moins avoir 1 points de vie ou les points de disponiblité ont dépassés.")
        PVrepartir += guerrier.pointDeVie + mage.pointDeVie
        continue
    }

    // ---attribuer au Archer
    archer.pointDeVie = parseInt(prompt(`Repartir les PV (points de vie) à ${nomArcher}, ${PVrepartir} restant`))
    PVrepartir -= archer.pointDeVie
    // vérification
    if (archer.pointDeVie <= 0 || PVrepartir < 0) {
        alert("L'archer doit au moins avoir 1 points de vie ou les points de disponiblité ont dépassés.")
        PVrepartir += guerrier.pointDeVie + mage.pointDeVie + archer.pointDeVie
        continue
    }



    // si tous les points ont été repartis
    if (PVrepartir === 0) {
        alert("Tous les points ont été repartis !")
        break
    }
    else {
        alert("Il manque des points à repartir.")
        PVrepartir += guerrier.pointDeVie + mage.pointDeVie + archer.pointDeVie
    }
}

// -------------point d'attaque
while (true) {
    // ---attribuer au guerrier
    guerrier.pointAttaque = parseInt(prompt(`Repartir les points d'attaque à ${nomGuerrier}, ${PAttakrepartir} restant`))
    PAttakrepartir -= guerrier.pointAttaque
    // vérification
    if (guerrier.pointAttaque < 1 || PAttakrepartir < 0) {
        alert("Le guerrier doit au moins avoir 1 points d'attaque ou les points de disponiblité ont dépassés.")
        PAttakrepartir += guerrier.pointAttaque
        continue // recommencer le boucle

    // if (guerrier.pointDeVie >= 1)
    //     console.log(`${guerrier.pointDeVie} du guerrier`)
    //     break
    // }
    // if (guerrier.pointDeVie ) {
    //     alert("Il manque des points à repartir au Guerrier. Reessayez")
    //     PVrepartir += guerrier.pointDeVie
    }

    // ---attribuer au Mage
    mage.pointAttaque = parseInt(prompt(`Repartir les points d'attaque à ${nomMage}, ${PAttakrepartir} restant`))
    PAttakrepartir -= mage.pointAttaque
    // vérification
    if (mage.pointAttaque <= 0 || PAttakrepartir < 0) {
        alert("Le mage doit au moins avoir 1 points d'attaque ou les points de disponiblité ont dépassés.")
        PVrepartir += guerrier.pointAttaque + mage.pointAttaque
        continue
    }

    // ---attribuer au Archer
    archer.pointAttaque = parseInt(prompt(`Repartir les points d'attaque à ${nomArcher}, ${PAttakrepartir} restant`))
    PAttakrepartir -= archer.pointAttaque
    // vérification
    if (archer.pointAttaque <= 0 || PAttakrepartir < 0) {
        alert("L'archer doit au moins avoir 1 points d'attaque ou les points de disponiblité ont dépassés.")
        PAttakrepartir += guerrier.pointAttaque + mage.pointAttaque + archer.pointAttaque
        continue
    }



    // si tous les points ont été repartis
    if (PAttakrepartir === 0) {
        alert("Tous les points ont été repartis !")
        break
    }
    else {
        alert("Il manque des points à repartir !")
        PAttakrepartir += guerrier.pointAttaque + mage.pointAttaque + archer.pointAttaque
    }
}

// Boss aléatoire 

let bossRandom = listeBoss[Math.floor(Math.random() * listeBoss.length)]
alert(`Le boss que tu vas affronter est ${bossRandom.nom} !`)
