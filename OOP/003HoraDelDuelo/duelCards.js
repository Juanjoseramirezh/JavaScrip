class Card {
    constructor(name, cost, /*imgUrl, rarity*/) {
        // the class card have the own name, cost, image, rarity
        this.name = name
        this.cost = cost
        // this.imgUrl = imgUrl
        // this.rarity = rarity
    }
}

class UnitClass extends Card {
    constructor(name, cost, /*imgUrl, rarity,*/ power, resilencie) {
        super(name, cost /*,imgUrl, rarity*/)
        this.power = power
        this.resilencie = resilencie
        this.text = `${this.power} Power n\ ${this.resilencie} Resilence`
    }
    attack(target) {
        // reduce target res by power
        if (target instanceof UnitClass) {
            target.resilencie -= this.power
            console.log(`${this.name} attacks ${target.name}, dealing ${this.power} damage`)
        } else {
            console.log(`${this.name} can only attack another Unit card`)
        }


    }
}

class EffectClass extends Card {
    constructor(name, cost, /*imgUrl, rarity,*/ stat, magintud) {
        super(name, cost /*,imgUrl, rarity*/)
        this.magintud = magintud
        this.stat = stat
        let mod = ""
        if (magintud > 0) {
            mod = "Raise"
        } else {
            mod = "Lower"
        }
        this.text = `${mod} the target's ${stat} by ${Math.abs(this.magintud)}`
    }

    play(target) {
        if (target instanceof UnitClass) {
            if (this.stat == "resilence") {
                target.resilencie += this.magintud
                console.log(this.text)
            } else if (this.stat == "power") {
                target.power += this.magintud
                console.log(this.text)
            } else {
                console.log("that's not an option")
            }

        } else {
            console.log(`${this.name} can only be played on a Unit Card`)
        }
    }
}

const HardAlgorithm = new EffectClass("Hard Algorithm", 2, "resilence", 3)
const UnhandlePromiseRejection = new EffectClass("Unhandle Promise Rejection", 1, "resilence", -2)
const PairProgramming = new EffectClass("Pair Programming", 3, "power", 2)


// TURN 1 
const RedBeltNinja = new UnitClass("Red Belt Ninja", 2, 3, 4)
HardAlgorithm.play(RedBeltNinja)

// TURN 2 
const BlackBeltNinja = new UnitClass("Black Belt Ninja", 4, 5, 4)
UnhandlePromiseRejection.play(RedBeltNinja)

// TURN 3
PairProgramming.play(RedBeltNinja)
RedBeltNinja.attack(BlackBeltNinja)

console.log(RedBeltNinja)
console.log(BlackBeltNinja)