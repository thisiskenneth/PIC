// Definición de la clase MenuNavegacion que extiende HTMLElement
class MenuNavegacion extends HTMLElement {
  constructor() {
    super();
    // Crea el Shadow DOM para encapsular el contenido y los estilos del componente
    this.attachShadow({ mode: 'open' });
  }

  // Método del ciclo de vida que se ejecuta cuando el componente se inserta en el DOM
  connectedCallback() {
    // Renderiza el contenido HTML del componente
    this.render();

    // Agrega event listeners a todos los enlaces del menú
    this.shadowRoot.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace

        // Obtiene el nombre del componente a mostrar desde el atributo data-componente
        const componente = e.target.getAttribute("data-componente");

        // Inserta dinámicamente el componente correspondiente en el contenedor con id "contenido"
        document.getElementById("contenido").innerHTML = `<${componente}></${componente}>`;
      });
    });
  }

  // Método render encapsulado para inyectar HTML y estilos al Shadow DOM
  render = () => {
    this.shadowRoot.innerHTML = `
      <style>
  nav {
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 10px 20px;
    gap: 20px;
  }

  a {
    color: #444;
    font-weight: 600;
    text-decoration: none;
    font-size: 14px;
    padding-bottom: 2px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
  }

  a:hover {
    border-color:rgb(23, 142, 12);
    color:rgb(101, 243, 136);
  }
</style>


      <nav>
        <a data-componente="lista-productos">Inicio</a>
        <a data-componente="registro-producto">Gestión Productos</a>
        <a data-componente="acerca-de">Acerca de</a>
      </nav>
    `;
  }
}

// Registra el componente personalizado para que pueda usarse como <menu-navegacion>
window.customElements.define("menu-navegacion", MenuNavegacion);
