const content = document.getElementById('detail');
let id = Number(window.location.hash.replace("#", ""));

async function getCharacterDetail() {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();

    content.innerHTML = `
      <h2>${data.name}</h2>
      <img src="${data.image}" alt="${data.name}" width="200"/>
      <p><strong>Espécie:</strong> ${data.species}</p>
      <p><strong>Gênero:</strong> ${data.gender}</p>
      <p><strong>Mundo/Dimensão:</strong> ${data.origin.name}</p>
      <p><strong>Status:</strong> ${data.status}</p>
    `;
  } catch (error) {
    content.innerHTML = `<p>Personagem não encontrado.</p>`;
  }
}

getCharacterDetail();


