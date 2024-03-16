const alerta = document.querySelector('#alerta');
const botaForm = document.querySelector('#_form_1_submit');

botaForm.addEventListener('click', () => {
  alerta.classList.add('mostrar');
})