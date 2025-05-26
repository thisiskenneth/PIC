class EducateSection extends HTMLElement {
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
    const res = await fetch('./data/educacion.json');
    this.data = await res.json();
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      h2 {
        font-family: Arial, sans-serif;
        color: #673ab7;
      }

      .articulo {
        margin-bottom: 1rem;
        background: #f3e5f5;
        padding: 1rem;
        border-radius: 8px;
        font-family: Arial, sans-serif;
      }

      .articulo h3 {
        margin-top: 0;
        color: #512da8;
      }
    `;

    const container = document.createElement('div');
    container.innerHTML = `<h2>Sección Educativa</h2>`;

    this.data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'articulo';
      div.innerHTML = `
        <h3>${item.titulo}</h3>
        <p>${item.descripcion}</p>
      `;
      container.appendChild(div);
    });

    this.shadow.innerHTML = '';
    this.shadow.appendChild(style);
    this.shadow.appendChild(container);
  }
}

customElements.define('educate-section', EducateSection);
