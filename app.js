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
    <h3 class="name">${pokemon.data.name.toUpperCase}</h3>
    `;
}