const mensaje = document.getElementById('mensaje');
const datos = new URLSearchParams(window.location.search);

if (datos.get('error')) {
  mensaje.textContent = datos.get('error');
  mensaje.className = 'error';
}

if (datos.get('mensaje')) {
  mensaje.textContent = datos.get('mensaje');
  mensaje.className = 'ok';
}
