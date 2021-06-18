var food = "chicken"
console.log(food)
eat()
function eat() {
    food = "half-chicken"
    console.log(food)
    var food = "gone"
}

// INTERPRETER
// var food
// food = "chicken"
// console.log(food) // log chicken
// function eat() {
//     var food
//     food = "half-chicken"
//     console.log(food) // log half-chicken
//     food = "gone"
// }
// eat()