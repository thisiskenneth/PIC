class NavSidebar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
      aside {
        display: flex;
        flex-direction: column;
      }

      button {
        width: 100%;
        padding: 0.75rem 1rem;
        margin: 0.3rem 0;
        background: none;
        border: none;
        text-align: left;
        font-size: 1rem;
        color: #333;
        cursor: pointer;
        border-radius: 6px;
        position: relative;
        transition: background 0.3s, color 0.3s, transform 0.2s ease;
      }

      button:hover {
        background-color: #e3f2fd;
        color: #0077b6;
        transform: translateX(5px);
        box-shadow: 2px 2px 6px rgba(0, 119, 182, 0.2);
      }

      button::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background: #0077b6;
        border-radius: 0 4px 4px 0;
        opacity: 0;
        transition: opacity 0.3s;
      }

      button:hover::before {
        opacity: 1;
      }

      button.active {
        background-color: #d0e8ff;
        color: #0077b6;
        font-weight: bold;
      }

      button.active::before {
        opacity: 1;
      }
    `;

    const aside = document.createElement('aside');
    aside.innerHTML = `
      <button data-componente="contaminacion-componente">Contaminación</button>
      <button data-componente="educate-section">Educación</button>
      <button data-componente="air-quality-dashboard">Dashboard</button>
      <button data-componente="air-quality-chart">Gráfico</button>    
      <button data-componente="data-crud">Opina</button>
      <button data-componente="infografias-articulos-componente">Aprende Más</button>
      <button data-componente="user-recommendations">Recomendaciones</button>
    `;

    // Lógica de navegación y activación
    aside.querySelectorAll('button[data-componente]').forEach(btn => {
      btn.addEventListener('click', () => {
        const nombre = btn.dataset.componente;

        // Quitar clase activa de todos
        aside.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        // Activar el que se hizo clic
        btn.classList.add('active');

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
