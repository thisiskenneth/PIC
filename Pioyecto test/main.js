const main = document.getElementById('contenido');

const cargarComponente = (nombre) => {
  main.innerHTML = '';
  try {
    const elemento = document.createElement(nombre);
    main.appendChild(elemento);
  } catch (err) {
    main.innerHTML = `<p style="color:red;">Error al cargar: ${nombre}</p>`;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  cargarComponente('contaminacion-componente');
});

// Escuchar evento personalizado 'navegar' desde nav-sidebar
window.addEventListener('navegar', e => {
  cargarComponente(e.detail);
});
