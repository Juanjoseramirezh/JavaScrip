const { performance } = require('perf_hooks');
const start = performance.now();

let numPrime = []

var isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return number !== 1
}

for (let j = 2; j < 100; j++) {
    if (isPrime(j)) {
        numPrime.push(j)
    }
}



console.log(numPrime);
console.log(`This took ${performance.now() - start} milliseconds to run`);