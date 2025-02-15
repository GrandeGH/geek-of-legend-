class Boss {
    constructor(nom, pointAttaque, pointDeVie,) {
        this.nom = nom 
        this.pointAttaque = pointAttaque
        this.pointDeVie = pointDeVie
    }
} 

class Héros extends Boss {
    constructor(nom, pointAttaque, pointDeVie, posture, classe) {
        super(nom, pointAttaque, pointDeVie)
        this.posture = posture
        this.classe = classe
    }

    attaque(boss) {
        let dégât = this.pointAttaque
        if (this.posture === "attaque") dégât * 1.2
        boss.pointDeVie -= dégât
        console.log(`${this.nom} inflige ${dégât} à ${bossRandom.nom}`)
    }
} 

class Guerrier extends Héros {
    constructor(nom, pointAttaque, pointDeVie, posture, classe, pointDeRage) {
        super(nom, pointAttaque, pointDeVie, posture, classe)
        this.pointDeRage = pointDeRage
    }
}

class Mage extends Héros {
    constructor(nom, pointAttaque, pointDeVie, posture, classe, pointDeMana) {
        super(nom, pointAttaque, pointDeVie, posture, classe)
        this.pointDeMana = pointDeMana
    }
}

class Archer extends Héros {
    constructor(nom, pointAttaque, pointDeVie, posture, classe, flèches) {
        super(nom, pointAttaque, pointDeVie, posture, classe)
        this.flèches = flèches
    }
}

// Boss
const Sauron = new Boss ("Sauron", 20, 400) 
const Chronos = new Boss ("Chronos", 15, 350)
const Lilith = new Boss ("Lilith", 25, 300)

const listeBoss = [Sauron, Chronos, Lilith]

//Héros
const guerrier = new Guerrier ("Ardbert", 0, 0, "défense", "Guerrier", 0)
const mage = new Mage ("Rita", 0, 0, "attaque", "Mage", 7)
const archer = new Archer ("Serah", 0, 0, "attaque", "Archer", 6)

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

// --------------- Boss aléatoire 

let bossRandom = listeBoss[Math.floor(Math.random() * listeBoss.length)]
alert(`Le boss que tu vas affronter est ${bossRandom.nom} !`)


// --------------- Déroulement de combat

function combat() {
    while (bossRandom.pointDeVie > 0 && guerrier.pointDeVie > 0 || mage.pointDeVie > 0 || archer.pointDeVie > 0) {
        for (const héros of [guerrier, mage, archer]) {
            if (héros.pointDeVie > 0) {
                héros.attaque(bossRandom);
                if (bossRandom.pointDeVie <= 0) {
                    console.log("Le boss est vaincu.")
                    return
                }
            }
        }
// -------------- le boss attaque un héros aléatoire
        const cibles = [guerrier, mage, archer].filter(héros => héros.pointDeVie > 0)
        const cible = cibles[Math.floor(Math.random() * cibles.length)]
        cible.pointDeVie -= bossRandom.pointAttaque

        console.log(`${bossRandom.nom} inflige ${bossRandom.pointAttaque} à ${cible.nom}`)
        if (cible.pointDeVie <= 0) {
            console.log(`${cible.nom} est en coma !`)
        }
    }

    if (bossRandom.pointDeVie <= 0) {
        console.log("Félicitation, vous avez vaincu le boss !")
    }
    else {
        console.log("Partie terminé !")
    }
}

// lance le combat
combat();