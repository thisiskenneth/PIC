class ListaProductos extends HTMLElement {
  constructor() {
    super();
    // Crea un Shadow DOM para encapsular el contenido y estilos del componente
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // Se ejecuta cuando el componente se inserta en el DOM
    this.render(); // Llama al método para renderizar la tabla de productos
  }

  render = () => {
    this.shadowRoot.innerHTML = `
      <style>
  :host {
    display: block;
    margin: 1em auto;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin-top: 1.5em;
    border: 1px solid #ccc;
  }

  th, td {
    padding: 10px 14px;
    border-bottom: 1px solid #e0e0e0;
  }

  th {
    background-color: #fafafa;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 0.5px;
    color: #666;
  }

  tr:hover {
    background-color: #f9f9f9;
  }

  td {
    font-size: 14px;
    color: #333;
  }

  button {
    background: transparent;
    border: 1px solid rgb(23, 142, 12);
    color: rgb(23, 142, 12);
    padding: 5px 10px;
    font-size: 13px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    margin-right: 5px;
  }

  button:hover {
    background: rgb(23, 142, 12);
    color: white;
  }
</style>


      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${
            // Recorre el array global de productos y genera una fila para cada uno
            window.productos.map(p => `
              <tr>
                <td>${p.nombre}</td>
                <td>${p.precio}</td>
                <td>${p.cantidad}</td>
                <td>${p.descripcion}</td>
                <td>
                  <!-- Botón para editar: reemplaza el contenido con el componente editar-producto -->
                  <button onclick="document.getElementById('contenido').innerHTML='<editar-producto idproducto=${p.id}></editar-producto>'">Editar</button>
                  
                  <!-- Botón para eliminar: lanza evento personalizado con el ID del producto -->
                  <button onclick="window.dispatchEvent(new CustomEvent('producto-eliminado', { detail: { id: ${p.id} } }))">Eliminar</button>
                </td>
              </tr>
            `).join("") // Une todas las filas en un solo string
          }
        </tbody>
      </table>
    `;
  }
}

// Registra el componente personalizado como <lista-productos>
window.customElements.define("lista-productos", ListaProductos);

