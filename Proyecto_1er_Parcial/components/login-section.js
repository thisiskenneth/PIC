class LoginSection extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.isLoggedIn = false; // Estado simulado
  }

  connectedCallback() {
    this.render();
  }

  toggleLogin = () => {
    this.isLoggedIn = !this.isLoggedIn;
    this.render();
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      section {
        font-family: 'Segoe UI', sans-serif;
        max-width: 400px;
        margin: 3rem auto;
        padding: 2rem;
        background: linear-gradient(135deg, #fff3e0, #ffe0b2);
        border-radius: 20px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        text-align: center;
      }

      h2 {
        font-size: 2rem;
        color: #ef6c00;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1rem;
        color: #444;
        margin-bottom: 1.5rem;
      }

      button {
        background-color: #ef6c00;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      button:hover {
        background-color: #e65100;
      }

      img {
        width: 100px;
        margin-bottom: 1rem;
      }
    `;

    const container = document.createElement('section');
    const statusText = this.isLoggedIn
      ? 'Has iniciado sesión correctamente.'
      : 'Esta es una simulación visual del inicio de sesión.';

    const buttonLabel = this.isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión';

    container.innerHTML = `
      <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Login icon">
      <h2>${buttonLabel}</h2>
      <p>${statusText}</p>
      <button>${buttonLabel}</button>
    `;

    this.shadow.innerHTML = '';
    this.shadow.appendChild(style);
    this.shadow.appendChild(container);

    // Agregar evento al botón
    this.shadow.querySelector('button').addEventListener('click', this.toggleLogin);
  }
}

customElements.define('login-section', LoginSection);
