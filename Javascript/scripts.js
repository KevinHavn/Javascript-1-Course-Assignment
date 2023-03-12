const url = "https://rickandmortyapi.com/api/character";
const container = document.querySelector(".container");
let html = "";
async function getCharacter() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const character = results.results;
    createHtml(character);
    container.innerHTML = html;
  } catch (error) {
    console.log(error);
    {
      container.innerHTML = message("error", error);
    }
  }
}
getCharacter();
function createHtml(character) {
  for (let i = 0; i < character.length; i++) {
    html =
      html +
      `<div class="object"> <h1>` +
      character[i].name +
      `</h1><p> Status: ` +
      character[i].status +
      `</p><p> Species: ` +
      character[i].species +
      `</p><p> Gender: ` +
      character[i].gender +
      `</p><a href=details.html?id=${character[i].id}>Details</a></div>
    `;
  }
}
