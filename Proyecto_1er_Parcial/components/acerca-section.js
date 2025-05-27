class AcercaSection extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      section {
        padding: 2rem;
        font-family: 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #f1f8e9, #e8f5e9);
        border-radius: 20px;
        max-width: 1100px;
        margin: 2rem auto;
        box-shadow: 0 8px 20px rgba(0,0,0,0.08);
      }

      h2 {
        font-size: 2rem;
        color: #2e7d32;
        text-align: center;
        margin-bottom: 2rem;
      }

      .grid {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
      }

      .card {
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
        width: 260px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        text-align: center;
      }

      .card img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 1rem;
      }

      .card h3 {
        margin: 0.5rem 0 0.3rem;
        font-size: 1.2rem;
        color: #0077b6;
      }

      .card p {
        font-size: 0.95rem;
        color: #444;
      }
    `;

    const container = document.createElement('section');
    container.innerHTML = `
      <h2>Conoce al Equipo</h2>
      <div class="grid">
        <div class="card">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Kenneth">
          <h3>Kenneth Cortez</h3>
        </div>
        <div class="card">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Miembro 2">
          <h3>Sebastian Quinga</h3>
        </div>
        <div class="card">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Miembro 3">
          <h3>Michael Villacrés</h3>
        </div>
      </div>
    `;

    this.shadow.innerHTML = '';
    this.shadow.appendChild(style);
    this.shadow.appendChild(container);
  }
}

customElements.define('acerca-section', AcercaSection);
