var needle = "haystack"
test()
function test() {
    var needle = "magnet"
    console.log(needle)
}

// // AFTER HOISTING BY THE INTERPRETER
// var needle
// needle = "haystack"
// function test() {
//     var needle
//     needle = "magnet"
//     console.log(needle) // log magnet
// }
// test()