// Animação fade-in ao rolar
const fadeElements = document.querySelectorAll('.fade-in');

function checkFadeIn() {
  const triggerBottom = window.innerHeight * 0.9;

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);

// Simular envio de formulário de contato
const formContato = document.getElementById('form-contato');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

if (formContato) {
  formContato.addEventListener('submit', e => {
    e.preventDefault(); // evita envio real
    mensagemSucesso.style.display = 'block';
    formContato.reset(); // limpa o formulário
  });
}
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}
