class EducateSection extends HTMLElement {
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
      .contenedor {
        font-family: 'Segoe UI', sans-serif;
        background: #f7fafd;
        padding: 2rem;
        border-radius: 14px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        max-width: 960px;
        margin: auto;
      }

      h2 {
        text-align: center;
        color: #2c3e50;
        font-size: 2.2rem;
        margin-bottom: 2rem;
      }

      .seccion {
        margin-bottom: 2.5rem;
      }

      .seccion h3 {
        font-size: 1.6rem;
        color: #00695c;
        margin-bottom: 0.7rem;
      }

      .seccion p {
        font-size: 1.05rem;
        color: #444;
        line-height: 1.7;
      }

      .seccion ul {
        margin-top: 0.5rem;
        padding-left: 1.4rem;
      }

      .seccion li {
        margin-bottom: 0.6rem;
        color: #555;
      }

      .imagen {
        width: 100%;
        max-width: 700px;
        display: block;
        margin: 1.5rem auto;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      }

      .tip-box {
        background-color: #e3f2fd;
        border-left: 6px solid #2196f3;
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 8px;
      }

      .tip-box strong {
        color: #0d47a1;
      }

      .dato-box {
        background: #fff3e0;
        border-left: 6px solid #ff9800;
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1rem;
      }

      .dato-box strong {
        color: #e65100;
      }
    `;

    const container = document.createElement('div');
    container.classList.add('contenedor');

    container.innerHTML = `
      <h2>🌿 Educación Ambiental: Contaminación Atmosférica</h2>

      <div class="seccion">
        <h3>🌍 ¿Qué es la Contaminación Atmosférica?</h3>
        <p>
          Es la alteración de la calidad del aire provocada por la presencia de sustancias nocivas como partículas, gases, vapores y olores. Afecta la salud humana, la biodiversidad y el clima.
        </p>
        <img class="imagen" src="./img/conta.jpg" alt="Educación sobre contaminación">
      </div>

      <div class="seccion">
        <h3>🔬 Principales Fuentes de Contaminación</h3>
        <ul>
          <li>🚗 Transporte: emisiones de vehículos diésel y gasolina.</li>
          <li>🏭 Industrias: liberan gases tóxicos y partículas pesadas.</li>
          <li>🔥 Incendios forestales y quema de basura.</li>
          <li>⚡ Centrales eléctricas que usan carbón o petróleo.</li>
        </ul>
        <img class="imagen" src="./img/Fuentes.jpg" alt="Fuentes de contaminación">
      </div>

      <div class="seccion">
        <h3>📈 Efectos a Corto y Largo Plazo</h3>
        <ul>
          <li>😷 Aumento de enfermedades respiratorias y cardiovasculares.</li>
          <li>🌾 Daños a cultivos, bosques y cuerpos de agua.</li>
          <li>🐦 Pérdida de biodiversidad en ambientes urbanos.</li>
          <li>🌡️ Contribuye al calentamiento global y al cambio climático.</li>
        </ul>

        <div class="dato-box">
          <strong>DATO:</strong> La contaminación del aire mata a más de 7 millones de personas al año según la OMS.
        </div>
      </div>

      <div class="seccion">
        <h3>💡 ¿Qué Puedes Hacer Tú?</h3>
        <p>La acción ciudadana es fundamental para combatir este problema. Aquí algunas ideas:</p>
        <div class="tip-box">
          <strong>Consejo:</strong> Usa bicicleta, transporte público o comparte auto.
        </div>
        <div class="tip-box">
          <strong>Consejo:</strong> Reduce tu consumo energético en casa y elige fuentes renovables.
        </div>
        <div class="tip-box">
          <strong>Consejo:</strong> Planta árboles y apoya campañas ecológicas.
        </div>
        <img class="imagen" src="./img/cuidado.jpg" alt="Acciones para ayudar">
      </div>

      <div class="seccion">
        <h3>📚 ¿Sabías que...?</h3>
        <ul>
          <li>🌆 El aire en interiores puede estar más contaminado que el exterior.</li>
          <li>⏳ La contaminación puede cruzar continentes por los vientos globales.</li>
          <li>🌐 Algunos países monitorean la calidad del aire en tiempo real por satélite.</li>
        </ul>
      </div>
    `;

    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(container);
  }
}

customElements.define('educate-section', EducateSection);
