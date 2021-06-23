class Ninja {
    constructor(name) {
        this.name = name
        this.health = 100
        this.speed = 3
        this.strength = 3

    }

    sayName() {
        console.log(`the name of the ninja is ${this.name}`)
    }

    showStats() {
        console.log(`Name: ${this.name}, Health:${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`)
    }

    drinkSake() {
        this.health += 10
        console.log(`(Recover with sake) Health: ${this.health}`)
    }

}

let ninja1 = new Ninja("ORO")
ninja1.sayName
ninja1.showStats
ninja1.drinkSake
