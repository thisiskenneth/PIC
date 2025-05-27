class DataCrud extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.data = JSON.parse(localStorage.getItem('recs')) || [];
  }

  connectedCallback() {
    this.render();
  }

  guardarData = () => {
    localStorage.setItem('recs', JSON.stringify(this.data));
    this.render();
  }

  agregarRecomendacion = (texto) => {
    if (texto.trim()) {
      this.data.push(texto.trim());
      this.guardarData();
    }
  }

  eliminarRecomendacion = (index) => {
    this.data.splice(index, 1);
    this.guardarData();
  }

  editarRecomendacion = (index, nuevoTexto) => {
    if (nuevoTexto.trim()) {
      this.data[index] = nuevoTexto.trim();
      this.guardarData();
    }
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      * {
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .card {
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 2rem;
        width: 100%;
        max-width: 450px;
        margin: auto;
        margin-top: 2rem;
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        color: #333;
      }

      h2 {
        text-align: center;
        color: #ff4b5c;
        margin-bottom: 1rem;
      }

      input {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #ddd;
        border-radius: 10px;
        margin-bottom: 1rem;
        font-size: 1rem;
        transition: border 0.3s;
      }

      input:focus {
        border-color: #ff4b5c;
        outline: none;
      }

      button {
        background-color: #ff4b5c;
        color: white;
        border: none;
        padding: 0.6rem 1.2rem;
        border-radius: 10px;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.3s, transform 0.2s;
        margin-right: 0.5rem;
      }

      button:hover {
        background-color: #e04352;
        transform: scale(1.05);
      }

      ul {
        list-style: none;
        padding: 0;
      }

      li {
        background: white;
        border-radius: 12px;
        padding: 0.75rem 1rem;
        margin-bottom: 0.6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 6px rgba(0,0,0,0.08);
      }

      .btns {
        display: flex;
        gap: 0.3rem;
      }

      .borrar {
        background: crimson;
      }

      .borrar:hover {
        background: darkred;
      }

      .editar {
        background: #0077cc;
      }

      .editar:hover {
        background: #005fa3;
      }

      .edit-input {
        width: 100%;
        padding: 0.4rem;
        margin-top: 0.5rem;
        border: 2px solid #0077cc;
        border-radius: 8px;
      }

      .save-btn {
        margin-top: 0.5rem;
        background-color: #28a745;
      }

      .save-btn:hover {
        background-color: #218838;
      }

      .edit-container {
        margin-top: 0.5rem;
        width: 100%;
      }
    `;

    const container = document.createElement('div');
    container.classList.add('card');
    container.innerHTML = `<h2>📝 Danos tus recomendaciones de protección...</h2>`;

    const input = document.createElement('input');
    input.placeholder = 'Escribe una recomendación...';

    const btnAgregar = document.createElement('button');
    btnAgregar.textContent = 'Agregar';
    btnAgregar.onclick = () => {
      this.agregarRecomendacion(input.value);
      input.value = '';
    };

    const ul = document.createElement('ul');
    this.data.forEach((rec, i) => {
      const li = document.createElement('li');

      const textoSpan = document.createElement('span');
      textoSpan.textContent = rec;
      li.appendChild(textoSpan);

      const btnContainer = document.createElement('div');
      btnContainer.classList.add('btns');

      const btnEditar = document.createElement('button');
      btnEditar.className = 'editar';
      btnEditar.textContent = '🖊️';
      btnEditar.onclick = () => {
        const editDiv = document.createElement('div');
        editDiv.classList.add('edit-container');

        const inputEdit = document.createElement('input');
        inputEdit.className = 'edit-input';
        inputEdit.value = rec;

        const btnGuardar = document.createElement('button');
        btnGuardar.className = 'save-btn';
        btnGuardar.textContent = 'Guardar';
        btnGuardar.onclick = () => {
          this.editarRecomendacion(i, inputEdit.value);
        };

        editDiv.appendChild(inputEdit);
        editDiv.appendChild(btnGuardar);

        li.innerHTML = '';
        li.appendChild(editDiv);
      };

      const btnDel = document.createElement('button');
      btnDel.className = 'borrar';
      btnDel.textContent = '🗑️';
      btnDel.onclick = () => this.eliminarRecomendacion(i);

      btnContainer.appendChild(btnEditar);
      btnContainer.appendChild(btnDel);
      li.appendChild(btnContainer);

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
