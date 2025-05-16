
class RegistroProducto extends HTMLElement { 
  constructor() { // Constructor de la clase
    super(); // Llama al constructor de HTMLElement
    this.attachShadow({ mode: "open" }); // Crea un Shadow DOM encapsulado para el componente
  }

  connectedCallback() {
    // Se ejecuta cuando el componente se añade al DOM
    this.render(); // Llama al método render para generar el HTML

    // Escucha el evento submit del formulario dentro del Shadow DOM
    this.shadowRoot.getElementById("form-registro").addEventListener("submit", (e) => {
      e.preventDefault(); // Previene que el formulario se envíe por defecto y recargue la página
      const form = e.target;

      // Crea un nuevo objeto producto con los datos del formulario
      const producto = {
        id: Date.now(), // Genera un ID único basado en la marca de tiempo
        nombre: form.nombre.value.trim(),
        precio: parseFloat(form.precio.value),
        cantidad: parseInt(form.cantidad.value),
        descripcion: form.descripcion.value.trim()
      };

      // Validación de campos obligatorios
      if (!producto.nombre || isNaN(producto.precio) || isNaN(producto.cantidad) || !producto.descripcion) {
        alert("Todos los campos son obligatorios y deben ser válidos.");
        return; // Sale de la función si hay campos inválidos
      }

      // Emite un evento personalizado con los datos del producto registrado
      this.dispatchEvent(new CustomEvent("producto-registrado", {
        detail: producto, // El producto se envía como detalle del evento
        bubbles: true,    // Permite que el evento burbujee fuera del Shadow DOM
        composed: true    // Permite que el evento atraviese el Shadow DOM
      }));

      alert("Producto registrado exitosamente."); // Mensaje de confirmación
      form.reset(); // Limpia el formulario después de registrar
    });
  }

  // Método que genera el contenido HTML y estilos del componente
  render = () => {
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
    border-color: rgb(23, 142, 12);
  }

  button {
    align-self: flex-start;
    background-color: rgb(23, 142, 12);
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: rgb(101, 183, 94);
  }
</style>


      <form id="form-registro">
        <input name="nombre" placeholder="Nombre del producto" required />
        <input name="precio" type="number" step="0.01" placeholder="Precio" required />
        <input name="cantidad" type="number" placeholder="Cantidad" required />
        <textarea name="descripcion" placeholder="Descripción" required></textarea>
        <button type="submit">Registrar</button>
      </form>
    `;
  }
}

// Registra el componente como una Custom Element para que pueda usarse en HTML como <registro-producto>
window.customElements.define("registro-producto", RegistroProducto);
