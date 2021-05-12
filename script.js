/* 
Utilizando la api de Pokemons https://pokeapi.co/ y usando sólo async/await:

1.Obtener un Pokemon de manera aleatoria (fetch)

2.Tras obtener dicho Pokémon Obten su imágen correspondiente

3.Obtener nombre del Pokémon

4.Dibujar nombre e imágen del Pokémon en el DOM

OJO!! Te tocará estudiar cómo funciona la API de Pokémon para encontrar la imágen. Puede que tengas que hacer más de un fetch!! (depende de la ruta de consulta que uses) */


let random = Math.floor(Math.random() * 898)
let raza = "african"

const radmonPokemon = async (num) => {

    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    let data = await res.json();
    return data

}

let paintDom = (url, name) => {
    let figure = document.createElement("figure")
    let img = document.createElement("img")
    let figcaption = document.createElement("figcaption")
    let txt = document.createTextNode(name)
    figcaption.appendChild(txt)
    img.src = url
    figure.appendChild(img)
    figure.appendChild(figcaption)
    document.querySelector("body").appendChild(figure)
}

let paintVS = (str) => {
    let paraf = document.createElement("h1")
    let txt = document.createTextNode(str)
    paraf.appendChild(txt)
    document.querySelector("body").appendChild(paraf)
}
const randomPuppy = async (breed) => {

    let res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    let data = await res.json();
    return data

}
console.log(randomPuppy)
const randomFight = async () => {
    let src = "official-artwork"
    await radmonPokemon(random).then(data => paintDom(data.sprites.other[src].front_default, (data.name).toUpperCase()))
    paintVS("VS")
    randomPuppy(raza).then(data => paintDom(data.message, raza.toUpperCase())).then(document.querySelector("body").style.opacity="0");

}

// console.log(randomPuppy('akita'))

Promise.all([radmonPokemon(random), randomPuppy(raza)]).then(randomFight())

/* Usando la API de Pokémon queremos hacer una batalla particular entre perritos y Pokémons.Recordemos que la API de perritos era 'https://dog.ceo/dog-api/'.

    Tareas:

Obtener de manera random la imágen de un perrito(fetch)
Obtener de manera random la imágen de un Pokémon(otro fetch)
Dibujar en el DOM la batalla. "Pikachu" vs "Pug".¿Te imaginas ? */

// let randomPokemonGrande = async () => {
//     let src = "official-artwork"
//     let resp = await fetch("https://pokeapi.co/api/v2/pokemon/1")
//     let data = await resp.json();
//     return console.log(data.sprites.other[src].front_default)

// }
// randomPokemonGrande();
// []
// official-artwork.front_default

