class InicioSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      .hero {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background: linear-gradient(135deg, #e3f2fd 0%, #f1fcff 100%);
        padding: 4rem 3rem;
        border-radius: 20px;
        font-family: 'Segoe UI', sans-serif;
        box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        margin: 2rem auto;
        max-width: 1100px;
        gap: 3rem;
      }

      .text-content {
        flex: 1;
      }

      h2 {
        font-size: 2.5rem;
        color: #0077b6;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.2rem;
        color: #333;
        line-height: 1.6;
        margin-bottom: 2rem;
      }

      button {
        background-color: #0077b6;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      button:hover {
        background-color: #005f8a;
      }

      .hero-image {
        flex: 1;
        display: flex;
        justify-content: center;
      }

      .hero-image img {
        max-width: 100%;
        max-height: 300px;
        border-radius: 10px;
        object-fit: contain;
      }

      @media (max-width: 768px) {
        .hero {
          flex-direction: column;
          padding: 2rem;
          text-align: center;
        }

        .hero-image {
          margin-top: 2rem;
        }

        h2 {
          font-size: 2rem;
        }

        p {
          font-size: 1rem;
        }
      }
    `;

    const container = document.createElement('div');
    container.classList.add('hero');
    container.innerHTML = `
      <div class="text-content">
        <h2>Bienvenido a AirGuard</h2>
        <p>Explora la calidad del aire en tu ciudad, infórmate sobre los contaminantes atmosféricos y recibe recomendaciones personalizadas para cuidar tu salud.</p>
      </div>
      <div class="hero-image">
        <img src="https://cdn-icons-png.flaticon.com/512/12294/12294739.png
" alt="Ilustración del aire limpio">
      </div>
    `;

    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(container);
  }
}

customElements.define('inicio-section', InicioSection);
