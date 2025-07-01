class UserRecommendations extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.data = [];
  }

  async connectedCallback() {
    await this.fetchData();
    this.render();
  }

  fetchData = async () => {
    const res = await fetch('./data/recomendaciones.json');
    this.data = await res.json();
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      .contenedor {
        font-family: 'Segoe UI', sans-serif;
        background: #f0f9f9;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        max-width: 800px;
        margin: auto;
      }

      h2 {
        text-align: center;
        color: #005f73;
        margin-bottom: 1.5rem;
      }

      .recomendacion {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        background: #e0f7fa;
        margin-bottom: 1rem;
        padding: 1rem;
        border-left: 5px solid #00bcd4;
        border-radius: 8px;
      }

      .icono {
        font-size: 1.5rem;
      }

      .texto {
        flex-grow: 1;
      }

      .categoria {
        font-size: 0.85rem;
        color: #007b83;
        font-weight: bold;
      }

      img.infografia {
        display: block;
        margin: 1rem auto;
        max-width: 100%;
        border-radius: 8px;
      }
    `;

    const container = document.createElement('div');
    container.classList.add('contenedor');

    container.innerHTML = `<h2>🛡️ Recomendaciones para Protegerte de la Contaminación</h2>
    <img class="infografia" src="./img/proteccion-aire.jpg" alt="Infografía protección aire" loading="lazy">`;

    this.data.forEach(rec => {
      const div = document.createElement('div');
      div.classList.add('recomendacion');
      div.innerHTML = `
        <div class="icono">💡</div>
        <div class="texto">
          <p class="categoria">${rec.categoria}</p>
          <p>${rec.mensaje}</p>
        </div>
      `;
      container.appendChild(div);
    });

    this.shadow.innerHTML = '';
    this.shadow.appendChild(style);
    this.shadow.appendChild(container);
  }
}

customElements.define('user-recommendations', UserRecommendations);
