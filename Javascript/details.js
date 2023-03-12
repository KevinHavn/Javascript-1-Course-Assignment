const container = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = "https://rickandmortyapi.com/api/character/" + id;
async function getCharacter() {
  try {
    const response = await fetch(url);
    const character = await response.json();
    createHtml(character);
  } catch (error) {
    console.log(error);
    {
      container.innerhtml = message("error", error);
    }
  }
}
getCharacter();

function createHtml(character) {
  container.innerHTML = "";
  container.innerHTML = `<div class="object details"><h1> ${character.name} </h1>
    <img src="${character.image}">
    <p>Status: ${character.status}</p>
    <p>Species: ${character.species}</p>
    <p>Gender: ${character.gender}</p>
    <p>Origin: ${character.origin.name}</p>
    <p>Location: ${character.location.name}</p>
    </div>`;
  document.title = `Rick And Morty Infosphere | ${character.name}`;
}
