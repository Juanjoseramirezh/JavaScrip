console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// INTERPRETER 
// var genre
// console.log(genre) // log undefinded
// genre = "disco"
// function rewind() {
//     var genre
//     genre = "rock"
//     console.log(genre) // log rock
//     genre = "ryb"
//     console.log(genre) // log ryb
// }
// rewind()
// console.log(genre) // log disco