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
const Sauron = new Boss ("Sauron", 7, 300) 
const Chronos = new Boss ("Chronos", 8, 350)
const Lilit = new Boss ("Lilith", 9, 200)

//Héros
const guerrier = new Guerrier ("Ardbert", 0, 0,["Attaque", "Defense"], "Guerrier", 0)
const mage = new Mage ("Rita", 0, 0,["Attaque", "Defense"], "Mage", 7)
const archer = new Archer ("Serah", 0, 0,["Attaque", "Defense"], "Archer", 6)

// Début du jeu

// créer un nom

let nomGuerrier = prompt("Entrer un nom pour le guerrier")
let nomMage = prompt("Entrer un nom pour la mage")
let nomArcher = prompt("Entrer un nom pour l'archère")

// repartir les points de vies et d'attaque

let PVrepartir = 150
let PAttakrepartir = 120

while (PVrepartir > 0) {
    guerrier.pointDeVie = parseInt(prompt("Repartir les PV (points de vie) au guerrier, " + PVrepartir + " restant"))
    mage.pointDeVie = parseInt(prompt("Raprtir les PV (points de vie) au mage," + PVrepartir + " restant"))
    archer.pointDeVie = parseInt(prompt("Raprtir les PV (points de vie) au archer," + PVrepartir + " restant"))
}
while (PAttakrepartir > 0) {
    guerrier.pointDeVie = parseInt(prompt("Repartir les PA (points d'attaque) au guerrier, " + PVrepartir + " restant"))
    mage.pointDeVie = parseInt(prompt("Raprtir les PA (points d'attaque) au mage," + PVrepartir + " restant"))
    archer.pointDeVie = parseInt(prompt("Raprtir les PA (points d'attaque) au archer," + PVrepartir + " restant"))
}


let repartirStats = prompt()
