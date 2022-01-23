var elPokemonForm = document.querySelector(".pokemon--form");
var elPokemonInputURL = document.querySelector(".pokemon__input--url");
var elPokemonInputName = document.querySelector(".pokemon__input--name");
var elPokemonInputType = document.querySelector(".pokemon__input--type");
var elPokemonInputHeight = document.querySelector(".pokemon__input--height");
var elPokemonInputWeight = document.querySelector(".pokemon__input--weight");
var elPokemonsList = document.querySelector(".pokemons__list");

function addNewPokemon(url, name, type, height, weight, pokemonList) {
  var newPokemonUrl = url.value.trim();
  var newPokemonName = name.value.trim();
  var newPokemonType = type.value.trim();
  var newPokemonHeight = height.value.trim();
  var newPokemonWeight = weight.value.trim();

  var newPokemon = {
    img: newPokemonUrl,
    name: newPokemonName,
    type: newPokemonType,
    height: newPokemonHeight,
    weight: newPokemonWeight,
  };

  pokemonList.unshift(newPokemon);
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  addNewPokemon(
    elPokemonInputURL,
    elPokemonInputName,
    elPokemonInputType,
    elPokemonInputHeight,
    elPokemonInputWeight,
    pokemons
  );

  renderPokemons(pokemons);
}
elPokemonForm.addEventListener("submit", handleFormSubmit);

function renderPokemons(_pokemons, element) {
  element.innerHTML = null;
  for (var i = 0; i < _pokemons.length; i++) {
    // Creating Elements
    var newLi = document.createElement("li");
    var newImg = document.createElement("img");
    var newHeading = document.createElement("h3");
    var newType = document.createElement("p");
    var newHeight = document.createElement("p");
    var newWeight = document.createElement("p");

    // Set Attributes
    newLi.setAttribute("class", "pokemon");
    newLi.setAttribute("class", "");
    newImg.setAttribute("src", _pokemons[i].img);
    newImg.setAttribute("alt", _pokemons[i].name + "poster");
    newImg.setAttribute("width", 157);
    newImg.setAttribute("height", 157);
    newHeading.setAttribute("class", "pokemon__name");
    newType.setAttribute("class", "pokemon__type");
    newHeight.setAttribute("class", "pokemon__height");
    newWeight.setAttribute("class", "pokemon__weight");

    // Assign values
    newHeading.textContent = _pokemons[i].name;
    newType.textContent = _pokemons[i].type;
    newHeight.textContent = _pokemons[i].height;
    newWeight.textContent = _pokemons[i].weight;

    // Append
    newLi.appendChild(newImg);
    newLi.appendChild(newHeading);
    newLi.appendChild(newType);
    newLi.appendChild(newHeight);
    newLi.appendChild(newWeight);

    elPokemonsList.appendChild(newLi);
  }
}

renderPokemons(pokemons, elPokemonsList);
