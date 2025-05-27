class ContaminacionComponente extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render = () => {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: 'Segoe UI', sans-serif;
          color: #2c3e50;
          background: #f9f9f9;
          padding: 2rem;
          line-height: 1.6;
        }

        .contenedor {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          overflow: hidden;
          padding: 2rem;
          animation: fadeIn 0.6s ease-out;
        }

        h2 {
          color: #1abc9c;
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .imagen {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          border-radius: 10px;
          margin: 1rem 0;
        }
        .imagen2 {
          width: 50%;
          max-height: 100%;
          object-fit: cover;
          border-radius: 10px;
          margin: 1rem 0;
        
          display: block;
            margin-left: auto;  
            margin-right: auto;

        }

        ul {
          padding-left: 1.2rem;
        }

        li {
          margin-bottom: 0.5rem;
        }

        .seccion {
          margin-bottom: 2rem;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          .contenedor {
            padding: 1rem;
          }

          h2 {
            font-size: 1.5rem;
          }
        }

        .tabla-aqi-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  overflow-x: auto;
}

.tabla-aqi {
  border-collapse: collapse;
  width: 90%;
  max-width: 700px;
  border: 2px solid #1abc9c;
  text-align: left;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.tabla-aqi th,
.tabla-aqi td {
  border: 1px solid #ccc;
  padding: 0.8rem;
}

.tabla-aqi th {
  background-color: #1abc9c;
  color: white;
  text-align: center;
}

.tabla-aqi td {
  text-align: center;
}

@media (max-width: 600px) {
  .tabla-aqi {
    font-size: 0.9rem;
  }
}
      </style>

      <div class="contenedor">
  <h2>¿Qué es la Contaminación Atmosférica?</h2>
  <p>
    Es la presencia de sustancias nocivas en la atmósfera que alteran su composición natural. Esta contaminación puede provenir de actividades humanas, como la industria o el transporte, así como de fenómenos naturales, como erupciones volcánicas o incendios forestales.
  </p>

  <img class="imagen" src="./img/contaminacion.jpg" alt="Contaminación del aire en ciudad" loading="lazy">

  <div class="seccion">
    <h3>🌫️ Principales Contaminantes</h3>
    <ul>
      <li><strong>PM2.5 y PM10:</strong> Partículas sólidas y líquidas suspendidas en el aire, peligrosas por su capacidad de ingresar al sistema respiratorio.</li>
      <li><strong>Dióxido de azufre (SO₂):</strong> Gas irritante que proviene de la quema de combustibles fósiles.</li>
      <li><strong>Óxidos de nitrógeno (NOx):</strong> Generados por vehículos y procesos industriales, contribuyen a la formación de lluvia ácida y ozono a nivel del suelo.</li>
      <li><strong>Monóxido de carbono (CO):</strong> Gas incoloro y tóxico que impide el transporte de oxígeno en la sangre.</li>
      <li><strong>Ozono troposférico (O₃):</strong> Se forma por reacciones químicas en presencia de luz solar y es dañino para las vías respiratorias.</li>
    </ul>
  </div>

  <div class="seccion">
    <h3>🔍 Causas Comunes</h3>
    <ul>
      <li>Emisiones vehiculares y tráfico intenso</li>
      <li>Industrias sin sistemas de control de emisiones</li>
      <li>Quema de residuos sólidos a cielo abierto</li>
      <li>Uso excesivo de combustibles fósiles para generar energía</li>
      <li>Prácticas agrícolas inadecuadas (quema de rastrojos, pesticidas)</li>
    </ul>
  </div>

  <div class="seccion">
  <h3>📊 Índice de Calidad del Aire (AQI)</h3>
  <p>
    El AQI es un indicador que mide la calidad del aire en una escala de 0 a 500. A mayor valor, peor calidad del aire. Está dividido en categorías que indican el nivel de riesgo para la salud humana:
  </p>

  <div class="seccion">
  <h3>📊 Índice de Calidad del Aire (AQI)</h3>
  <p>
    El AQI es un indicador que mide la calidad del aire en una escala de 0 a 500. A mayor valor, peor calidad del aire. Está dividido en categorías que indican el nivel de riesgo para la salud humana:
  </p>

  <div class="tabla-aqi-container">
    <table class="tabla-aqi">
      <thead>
        <tr>
          <th>Rango AQI</th>
          <th>Categoría</th>
          <th>Color Representativo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0 – 50</td>
          <td>Buena</td>
          <td style="background-color: #00e400;">Verde</td>
        </tr>
        <tr>
          <td>51 – 100</td>
          <td>Moderada</td>
          <td style="background-color: #ffff00;">Amarillo</td>
        </tr>
        <tr>
          <td>101 – 150</td>
          <td>Dañina para grupos sensibles</td>
          <td style="background-color: #ff7e00;">Naranja</td>
        </tr>
        <tr>
          <td>151 – 200</td>
          <td>Dañina para la salud</td>
          <td style="background-color: #ff0000;">Rojo</td>
        </tr>
        <tr>
          <td>201 – 300</td>
          <td>Muy dañina</td>
          <td style="background-color: #8f3f97; color: white;">Púrpura</td>
        </tr>
        <tr>
          <td>301 – 500</td>
          <td>Peligrosa</td>
          <td style="background-color: #7e0023; color: white;">Borgoña oscuro</td>
        </tr>
      </tbody>
    </table>
  </div>

  <img class="imagen2" src="./img/air.jpg" alt="Escala visual del AQI">
</div>
</div>


  <div class="seccion">
    <h3>🧒👵 Grupos Vulnerables</h3>
    <p>Algunos grupos son más susceptibles a los efectos negativos del aire contaminado, como:</p>
    <ul>
      <li>Niños y adolescentes</li>
      <li>Personas mayores</li>
      <li>Individuos con enfermedades respiratorias o cardíacas</li>
      <li>Personas embarazadas</li>
    </ul>
  </div>
</div>

    `;
    }
}

customElements.define('contaminacion-componente', ContaminacionComponente);
