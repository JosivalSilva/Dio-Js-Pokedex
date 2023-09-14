const pokemon = document.getElementById("pokemonPicked")

// Função para abrir a modal
function openModal(idPicked) {
  document.getElementById('myModal').style.display = 'block';

// Chamando a função para buscar informações sobre o Pokémon com ID 1 (Bulbasaur)
getPokemon(idPicked);
}

// Função para fechar a modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Fechar a modal se o usuário clicar fora dela
window.onclick = function(event) {
  if (event.target == document.getElementById('myModal')) {
      closeModal();
  }
}

// Função para buscar dados do Pokemon escolhido pelo usuário
function getPokemon(id) {
  // URL da PokeAPI para obter informações de um Pokémon pelo ID
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  // Fazer uma solicitação HTTP GET usando o método fetch
  fetch(apiUrl)
    .then((response) => {
      // Verificar se a resposta da API está OK (código de status 200)
      if (!response.ok) {
        throw new Error(`Não foi possível buscar os dados do Pokémon (Código ${response.status})`);
      }
      // Se a resposta estiver OK, parsear os dados JSON
      return response.json();
    })
    .then((data) => {
      //Chamando a função de exibição dos dados na modal passando os dados do pokemon
      showDetailPokemonPicked(data);
    })
    .catch((error) => {
      console.error(`Erro: ${error.message}`);
    });
}

function showDetailPokemonPicked(data) {
  const newHtml = `
    <div class="modal-detail-name">
      <span class="modal-name">${data.name}</span>
      <span class="modal-id">#0${data.id}</span>
    </div>
    <div class= "color-content ${data.types[0].type.name}">
      <ol class="modal-characters">
        <li class="modal-detail"> <img src= ${data.sprites.other.dream_world.front_default}
          alt=${data.name}></li>
        <li>Tipo: ${data.types[0].type.name}</li>
        <li>Altura: ${data.height}dc</li>
        <li>Peso: ${data.weight}kg</li>
      </ol>
    </div>`

  pokemonPicked.innerHTML = newHtml
}

