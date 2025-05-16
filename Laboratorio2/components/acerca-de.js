// Definición de la clase personalizada AcercaDe
class AcercaDe extends HTMLElement {
  constructor() {
    super(); // Llama al constructor de HTMLElement

    // Crea un Shadow DOM en modo abierto
    this.attachShadow({ mode: "open" });
  }

  // Se ejecuta automáticamente cuando el componente se añade al DOM
  connectedCallback() {
    this.render(); // Llama al método que renderiza el contenido
  }

  // Método que genera el HTML y CSS del componente
  render = () => {
    this.shadowRoot.innerHTML = `
      <style>
  p {
    font-size: 14px;
    background: #f1f1f1;
    color: #333;
    padding: 12px;
    margin: 10px;
    border-left: 4px solid #007acc;
    font-family: "Segoe UI", sans-serif;
  }
</style>



      <!-- Contenido que muestra el nombre del integrante -->
      <p>Integrantes: Kenneth Cortez, Sebastián Quinga, Michael Villacrés<p>
    `;
  }
}

// Registra el componente como un Custom Element con la etiqueta <acerca-de>
window.customElements.define("acerca-de", AcercaDe);
