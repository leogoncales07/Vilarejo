// === Alternar Modo Escuro ===
const toggleBtn = document.getElementById('dark-mode-toggle');

// Carregar preferência salva
if (localStorage.getItem('modo-escuro') === 'true') {
  document.body.classList.add('modo-escuro');
}

// Alternar tema
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('modo-escuro');
  const estaEscuro = document.body.classList.contains('modo-escuro');
  localStorage.setItem('modo-escuro', estaEscuro);
});
