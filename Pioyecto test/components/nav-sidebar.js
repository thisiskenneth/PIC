class NavSidebar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `button { width: 100%; padding: 0.8rem; font-size: 1rem; border: none; background: none; cursor: pointer; text-align: left; }`;

    const aside = document.createElement('aside');
    aside.innerHTML = `
      <button data-componente="air-quality-dashboard">Dashboard</button>
      <button data-componente="air-quality-chart">Gráfico</button>
      <button data-componente="user-recommendations">Recomendaciones</button>
      <button data-componente="data-crud">Gestión de Datos</button>
      <button data-componente="educate-section">Educación</button>
    `;

    // Escuchar clics dentro del shadowRoot
    aside.querySelectorAll('button[data-componente]').forEach(btn => {
      btn.addEventListener('click', () => {
        const nombre = btn.dataset.componente;
        this.dispatchEvent(new CustomEvent('navegar', {
          bubbles: true,
          composed: true,
          detail: nombre
        }));
      });
    });

    this.shadow.appendChild(style);
    this.shadow.appendChild(aside);
  }
}
customElements.define('nav-sidebar', NavSidebar);
