function greeting(name, role) {
    console.log(`Hello, my name is ${name}`);
    console.log(`I'm a ${role}`);
}

setTimeout(greeting, 100, 'Juan', 'Software developer');