class MainMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = `nav { font-weight: bold; font-size: 1.2rem; }`;
    const nav = document.createElement('nav');
    nav.innerHTML = `🌍 AirGuard - Calidad del Aire`;
    this.shadowRoot.append(style, nav);
  }
}
customElements.define('main-menu', MainMenu);
