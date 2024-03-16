const alerta = document.querySelector('#alerta');
const botaForm = document.querySelector('#_form_1_submit');

botaForm.addEventListener('click', () => {
    alerta.classList.add('mostrar');
  });

function hiddenElement() {
  alerta.style.display = 'none'; // Corrigido para ocultar o elemento alerta
}

setTimeout(hiddenElement, 7000);
