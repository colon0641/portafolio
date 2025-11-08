
const botonModo = document.getElementById('modo-btn');
if (botonModo) {
  botonModo.addEventListener('click', () => {
    document.body.classList.toggle('oscuro');
    botonModo.textContent = document.body.classList.contains('oscuro') ? '☀️' : '🌙';
  });
}

const form = document.getElementById('form-contacto');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('mensaje-exito').classList.remove('oculto');
    form.reset();
  });
}
