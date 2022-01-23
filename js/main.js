var elPokemonForm = document.querySelector(".js-pokemon-form");
var elPokemonInputURL = document.querySelector(".pokemon__input--url");
var elPokemonInputName = document.querySelector(".pokemon__input--name");
var elPokemonInputType = document.querySelector(".pokemon__input--type");
var elPokemonInputHeight = document.querySelector(".pokemon__input--height");
var elPokemonInputWeight = document.querySelector(".pokemon__input--weight");
var elPokemonsList = document.querySelector(".pokemons__list");

renderPokemons();

elPokemonForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const pokemon = getFormValues(elPokemonForm);

  const newPokemon = addNewPokemon(pokemon);

  const singleHTML = getHTML(newPokemon);

  elPokemonsList.insertAdjacentHTML("afterbegin", singleHTML);

  elPokemonForm.reset();
});

function addNewPokemon(pokemon) {
  // Add new object
  var newPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    type: pokemon.type.split(","),
    height: `${pokemon.height / 100} m`,
    weight: `${pokemon.weight} kg`,
  };

  pokemons.unshift(newPokemon);

  return newPokemon;
}

function renderPokemons() {
  var html = "";
  for (var i = 0; i < pokemons.length; i++) {
    html += getHTML(pokemons[i]);
  }
  elPokemonsList.innerHTML = html;
}

function getHTML(pokemon) {
  // Rendering Pokemon
  return `<div class="col-lg-3 col-md-4 col-sm-6 col-12">
  <div class="card h-100 custom-card">
    <div class="img-wrapper">
      <img width="157" height="157" src="https://www.serebii.net/art/th/${
        pokemon.id
      }.png" loading="lazy" class="card-img-top mx-auto" alt="${pokemon.name}">
    </div>
    <div class="card-body">
      <h4 class="card-title fw-bold">${pokemon.name}</h4>
      <p class="fw-bolder">${pokemon.type.join(", ")}</p>
      <strong class="me-4">${pokemon.weight}</strong>
      <strong>${pokemon.height}</strong>
    </div>
  </div>
</div>`;
}

function getFormValues(elForm) {
  const elsInput = elForm.querySelectorAll("input[name]");
  const pokemon = {};

  elsInput.forEach((el) => {
    pokemon[el.name] = el.value;
  });

  return pokemon;
}
