class FooterApp extends HTMLElement {
  constructor() {
    super();
    // Se crea el Shadow DOM para encapsular el contenido del footer
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Cuando el componente es insertado en el DOM, se renderiza su contenido
    this.render();
  }

  render = () => {
    // Estructura HTML y estilos del pie de página
    this.shadowRoot.innerHTML = `
      <style>
  :host {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  footer {
    background: #ececec;
    color: #444;
    padding: 12px;
    text-align: center;
    font-size: 13px;
    border-top: 1px solid #ccc;
  }

  a {
    margin: 0 8px;
    color: #007acc;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
</style>

      <footer>
        © 2025 Todos los derechos reservados.
        <div>
          <a href="https://github.com" target="_blank">GitHub</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        </div>
      </footer>
    `;
  }
}

// Se registra el componente personalizado como <footer-app>
window.customElements.define("footer-app", FooterApp);
