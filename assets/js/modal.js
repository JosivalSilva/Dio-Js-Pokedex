// Função para abrir a modal
function openModal() {
  document.getElementById('myModal').style.display = 'block';
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