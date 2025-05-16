// Definición de la clase personalizada EditarProducto
class EditarProducto extends HTMLElement {
  constructor() {
    super(); // Llama al constructor de HTMLElement

    // Crea un Shadow DOM en modo abierto, lo que permite acceder a él desde JavaScript
    this.attachShadow({ mode: "open" });
  }

  // Método que se ejecuta automáticamente cuando el componente se inserta en el DOM
  connectedCallback() {
    // Busca el producto en el array global usando el atributo "idproducto"
    const producto = window.productos.find(p => p.id == this.getAttribute("idproducto"));

    // Si no se encuentra el producto, no hace nada
    if (!producto) return;

    // Llama a la función render para mostrar el formulario con los datos actuales del producto
    this.render(producto);

    // Agrega un listener al formulario para manejar la acción de envío (submit)
    this.shadowRoot.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault(); // Previene el comportamiento por defecto (recargar la página)
      const form = e.target; // Referencia al formulario enviado

      // Crea un objeto con los datos actualizados desde el formulario
      const actualizado = {
        id: producto.id, // Mantiene el mismo ID
        nombre: form.nombre.value.trim(), // Elimina espacios al inicio/final del nombre
        precio: parseFloat(form.precio.value), // Convierte a número decimal
        cantidad: parseInt(form.cantidad.value), // Convierte a entero
        descripcion: form.descripcion.value.trim() // Elimina espacios de la descripción
      };

      // Dispara un evento personalizado llamado "producto-actualizado"
      // Este evento se propaga en el DOM para que otros componentes lo escuchen
      this.dispatchEvent(new CustomEvent("producto-actualizado", {
        detail: actualizado, // El objeto actualizado se pasa como detalle del evento
        bubbles: true,       // Permite que el evento burbujee hacia arriba en el DOM
        composed: true       // Permite que el evento pase fuera del Shadow DOM
      }));

      // Muestra una alerta al usuario confirmando la actualización
      alert("Producto actualizado exitosamente.");
    });
  }

  // Función para mostrar el formulario con los datos del producto
  render = (producto) => {
    // Inyecta HTML y CSS dentro del Shadow DOM
    this.shadowRoot.innerHTML = `
      <style>
  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #fdfdfd;
    font-family: Arial, sans-serif;
  }

  input, textarea {
    padding: 8px;
    border: 1px solid #bbb;
    font-size: 14px;
    outline: none;
  }

  input:focus, textarea:focus {
    border-color: #007acc;
  }

  button {
    align-self: flex-start;
    background-color: #007acc;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #005e99;
  }
</style>



      <!-- Formulario con los valores actuales del producto -->
      <form>
        <input name="nombre" value="${producto.nombre}" required />
        <input name="precio" type="number" step="0.01" value="${producto.precio}" required />
        <input name="cantidad" type="number" value="${producto.cantidad}" required />
        <textarea name="descripcion" required>${producto.descripcion}</textarea>
        <button type="submit">Actualizar</button>
      </form>
    `;
  }
}

// Registra el componente como un Custom Element con la etiqueta <editar-producto>
window.customElements.define("editar-producto", EditarProducto);
