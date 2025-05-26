class DataCrud extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.data = JSON.parse(localStorage.getItem('recs')) || [];
  }

  async connectedCallback() {
    this.render();
  }

  fetchData = async () => {} // No se usa en este caso

  guardarData = () => {
    localStorage.setItem('recs', JSON.stringify(this.data));
    this.render();
  }

  agregarRecomendacion = (texto) => {
    if (texto.trim()) {
      this.data.push(texto);
      this.guardarData();
    }
  }

  eliminarRecomendacion = (index) => {
    this.data.splice(index, 1);
    this.guardarData();
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      h2 { color: #ff6f61; font-family: Arial, sans-serif; }
      input, button { margin: 0.5rem 0; padding: 0.5rem; font-size: 1rem; }
      ul { list-style: none; padding: 0; }
      li { margin-bottom: 0.5rem; background: #fff1e6; padding: 0.5rem; border-radius: 5px; }
      button.borrar { background: crimson; color: white; border: none; padding: 0.3rem 0.6rem; margin-left: 1rem; }
    `;

    const container = document.createElement('div');
    container.innerHTML = `<h2>Gestión de Recomendaciones</h2>`;

    const input = document.createElement('input');
    input.placeholder = 'Escribe una nueva recomendación';

    const btnAgregar = document.createElement('button');
    btnAgregar.textContent = 'Agregar';
    btnAgregar.onclick = () => this.agregarRecomendacion(input.value);

    const ul = document.createElement('ul');
    this.data.forEach((rec, i) => {
      const li = document.createElement('li');
      li.textContent = rec;

      const btnDel = document.createElement('button');
      btnDel.className = 'borrar';
      btnDel.textContent = 'Eliminar';
      btnDel.onclick = () => this.eliminarRecomendacion(i);

      li.appendChild(btnDel);
      ul.appendChild(li);
    });

    container.appendChild(input);
    container.appendChild(btnAgregar);
    container.appendChild(ul);

    this.shadow.innerHTML = '';
    this.shadow.appendChild(style);
    this.shadow.appendChild(container);
  }
}

customElements.define('data-crud', DataCrud);
