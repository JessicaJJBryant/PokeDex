// POKEDEX PROJECT

const pokeContainer = document.querySelector(`#container`);
// Using the first 150 Pokemon (AKA Objects) in the PokeAPI because some don't have all values needed for project (images perhaps):
const numOfPokemon = 150;
// The createPokeCard function creates a new card (AKA Section element) and adds the new card to the webpage/document inside of the div with the id of "container". NOTE: the value/argument that will be passed in for the "pokemon" parameter will be the response received from an Axios request to the PokeAPI.
createPokeCard = (pokemon) => { //arrow function
// OR function createPokeCard(pokemon){
    const pokeCard = document.createElement(`section`);
    pokeCard.classList.add(`pokemon`);
    pokeContainer.append(pokeCard);
    // Setting the innerHTML for the new card using the data/object that is passed in to the "pokemon" parameter. Also, using the toUpperCase method on the pokemon name so it will display in UPPERCASE text.
    pokeCard.innerHTML = `
    <div class = "img-container">
        <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3> 
    `;                           //DON'T FORGET THE () ABOVE with toUpperCase
}
// The getPokemonData function makes an Axios GET request to the PokeAPI using a specific pokemon ID/number and then takes the returned data and passes it into the createPokeCard Function.
// NOTE: the argument/value passed into the "id" parameter will be a number created in the loop in the next function (AKA the getPokemon function)
async function getPokemonData(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url);
    console.log(pokemonData);
    console.log(pokemonData.data.sprites.front_shiny);
    console.log(pokemonData.data.name);
    createPokeCard(pokemonData);
}
// The getPokemon function loops through all the pokemon IDs and runs/executes the getPokemonData function for each ID
// NOTE: using async/await on this function because the code in the getPokemonData function is asynchronous and must wait (because there is an axios request in that function)
async function getPokemon(){
    for(i = 1; i <= numOfPokemon; i++){
        await getPokemonData(i);
    }
}
getPokemon();