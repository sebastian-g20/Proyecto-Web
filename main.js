let temaActual = 'claro';
const botonTema = document.querySelector('#BotonTema');
const saludoElemento = document.querySelector('#saludo');
function cambiarTema() {
document.body.classList.toggle('oscuro');
temaActual = temaActual === 'claro' ? 'oscuro' : 'claro';
botonTema.textContent = temaActual === 'claro' ? '🌙 Modo oscuro' : '☀ Modo claro';
}
function saludar() {
const horaActual = new Date().getHours();
// TODO: definir el mensaje según el rango de horaActual
// TODO: asignar el mensaje a saludoElemento.textContent
}
botonTema.addEventListener('click', cambiarTema);
saludar();