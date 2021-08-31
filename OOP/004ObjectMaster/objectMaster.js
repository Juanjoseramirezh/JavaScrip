const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);


// UNA SERIE DE OBJETOS POKEMON DONDE LA ID ES DIVISIBLE POR 3

const pokemonId3 = pokemon.filter(items => items.id % 3 === 0)
console.log('******** ID DIVISIBLE POR 3')
console.log(pokemonId3)

// UNA SERIE DE OBJETOS POKEMON TIPO FUEGO

const firePokemon = pokemon.filter(items => items.types.includes('fire'))
console.log('******** POKEMON DE FUEGO')
console.log(firePokemon)

// POKEMON CON DOS TIPOS

const biTypesPokemon = pokemon.filter(items => items.types.length % 2 === 0)
console.log('******** POKEMON CON DOS TIPOS')
console.log(biTypesPokemon)

// MATRIZ SOLO LOS NOMBRES

const onlyNamePokemon = pokemon.map(items => items.name)
console.log('******** SOLO LOS NOMBRES')
console.log(onlyNamePokemon)

//MATRIZ SOLO CON LOS NOMBRES CON LOS ID MAYOR A 99

const only99NamePokemon = pokemon.filter(items => items.id >= 99).map(items => items.name)
console.log('******** SOLO LOS NOMBRES CON ID MAYOR A 99')
console.log(only99NamePokemon)

// MATRIZ SOLO LOS NOMBRES CON TIPO VENENO

const onlyNamePoisonPokemon = pokemon.filter(items => items.types.includes('poison')).map(items => items.name)
console.log('******** NOMBRE DE LOS POKEMON VENENOS')
console.log(onlyNamePoisonPokemon)

// MATRIZ CON LOS POKEMON QUE EL PRIMER TIPO ES VOLADOR

const flyTypePokemon = pokemon.filter(items => { items.types[1].includes('flying') })
console.log(flyTypePokemon)