class Ninja {
    constructor(name) {
        this.name = name
        this.health = 200
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

class SuperSensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10)
        this.wisdom = 10
    }

    speakWisdom() {
        super.drinkSake()
        console.log(`(drink the sake with Wisdom`)
    }
}

let sensei = new SuperSensei("The Sensei")
sensei.speakWisdom()
sensei.showStats()
sensei.sayName()