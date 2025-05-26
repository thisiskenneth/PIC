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
      h2 {
        color: #007b83;
        font-family: Arial, sans-serif;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      li {
        background: #d9f3f3;
        padding: 0.75rem;
        margin-bottom: 0.5rem;
        border-radius: 8px;
        font-family: Arial, sans-serif;
      }
    `;

    const container = document.createElement('div');
    container.innerHTML = `<h2>Recomendaciones de Protección</h2>`;

    const ul = document.createElement('ul');
    this.data.forEach(rec => {
      const li = document.createElement('li');
      li.textContent = `💡 ${rec}`;
      ul.appendChild(li);
    });

    container.appendChild(ul);
    this.shadow.innerHTML = '';
    this.shadow.appendChild(style);
    this.shadow.appendChild(container);
  }
}

customElements.define('user-recommendations', UserRecommendations);
