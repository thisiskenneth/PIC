// Se declara un array global en el objeto window para almacenar los productos en memoria
window.productos = [];

// Escucha el evento personalizado "producto-registrado"
window.addEventListener("producto-registrado", (e) => {
  // Agrega el nuevo producto recibido desde el componente <registro-producto>
  window.productos.push(e.detail);

  // Si existe el componente <lista-productos> en el DOM, se vuelve a renderizar para mostrar el nuevo producto
  document.querySelector("lista-productos")?.render();
});

// Escucha el evento personalizado "producto-actualizado"
window.addEventListener("producto-actualizado", (e) => {
  // Busca el índice del producto que se desea actualizar dentro del array global
  const index = window.productos.findIndex(p => p.id === e.detail.id);

  if (index !== -1) {
    // Si se encuentra el producto, se actualiza en la misma posición
    window.productos[index] = e.detail;

    // Se vuelve a renderizar la lista de productos para reflejar los cambios
    document.querySelector("lista-productos")?.render();
  }
});

// Escucha el evento personalizado "producto-eliminado"
window.addEventListener("producto-eliminado", (e) => {
  // Filtra el array de productos, eliminando el producto cuyo ID coincide con el recibido
  window.productos = window.productos.filter(p => p.id !== e.detail.id);

  // Se vuelve a renderizar la lista para actualizar la vista sin el producto eliminado
  document.querySelector("lista-productos")?.render();
});
