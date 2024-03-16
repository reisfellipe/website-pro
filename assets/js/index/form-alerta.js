const alerta = document.querySelector('#alerta');
const botaForm = document.querySelector('#_form_1_submit');

botaForm.addEventListener('click', () => {
  setTimeout(() => {
    alerta.classList.add('mostrar');
  }, 1000);
});

function hiddenElement() {
  alerta.style.display = 'none'; // Corrigido para ocultar o elemento alerta
}

setTimeout(hiddenElement, 7000);
