class InfografiasArticulosComponente extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    await this.fetchData();
    this.render();
  }

  fetchData = async () => {
    const res = await fetch('./data/infografias.json');
    this.data = await res.json();
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
        padding: 2rem;
        background: linear-gradient(135deg, #e0f2f1, #f1f8e9);
        font-family: 'Segoe UI', sans-serif;
      }

      .card {
        background: #fff;
        border-radius: 14px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        overflow: hidden;
        transition: transform 0.3s, box-shadow 0.3s;
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.2);
      }

      .card img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      .card:hover img {
        transform: scale(1.05);
      }

      .content {
        padding: 1.4rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .titulo {
        font-size: 1.3rem;
        color: #00796b;
        margin: 0 0 0.7rem;
      }

      .desc {
        font-size: 0.98rem;
        color: #444;
        flex-grow: 1;
        line-height: 1.6;
      }

      .categoria {
        font-size: 0.85rem;
        color: #777;
        margin-top: 1.2rem;
        font-style: italic;
      }
    `;

    const grid = document.createElement('div');
    grid.classList.add('grid');

    this.data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <img src="${item.imagen}" alt="${item.titulo}">
        <div class="content">
          <h3 class="titulo">${item.titulo}</h3>
          <p class="desc">${item.descripcion}</p>
          <div class="categoria">Categoría: ${item.categoria}</div>
        </div>
      `;
      grid.appendChild(card);
    });

    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(grid);
  }
}

customElements.define('infografias-articulos-componente', InfografiasArticulosComponente);
