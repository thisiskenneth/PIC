class MainMenu extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        height: 60px;
        font-family: var(--font);
        background-color: var(--color-header);
        color: white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
      }

      nav {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
      }

      .brand {
        font-size: 1.6rem;
        font-weight: 700;
        letter-spacing: 0.5px;
        margin-right: 3rem; /* 💡 Espacio entre logo y botones */
      }

      .menu-buttons {
        display: flex;
        gap: 2.5rem; /* 💡 Espacio entre botones */
        align-items: center;
      }

      .menu-buttons button {
        background: none;
        border: none;
        color: white;
        font-size: 1.1rem;
        font-weight: 500;
        cursor: pointer;
        position: relative;
        transition: color 0.3s;
        padding: 0.4rem 0;
      }

      .menu-buttons button::after {
        content: '';
        position: absolute;
        width: 0%;
        height: 2px;
        left: 0;
        bottom: -4px;
        background-color: #caf0f8;
        transition: width 0.3s ease;
      }

      .menu-buttons button:hover {
        color: #caf0f8;
      }

      .menu-buttons button:hover::after {
        width: 100%;
      }
    `;

    const nav = document.createElement('nav');
    nav.innerHTML = `
      <div class="brand">AirGuard</div>
      <div class="menu-buttons">
        <button data-componente="inicio-section">Inicio</button>
        <button data-componente="acerca-section">Acerca de</button>
        <button data-componente="login-section">Login</button>
      </div>
    `;

    nav.querySelectorAll('button[data-componente]').forEach(btn => {
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
    this.shadow.appendChild(nav);
  }
}

customElements.define('main-menu', MainMenu);
