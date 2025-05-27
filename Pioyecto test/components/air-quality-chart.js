class AirQualityChart extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.data = {};
  }

  async connectedCallback() {
    await this.fetchData();
    this.render();
  }

  fetchData = async () => {
    try {
      const lat = -0.2299;
      const lon = -78.5249;
      const res = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=881f98ded3e5f423ad34274681c3d050`);
      const json = await res.json();
      const { pm2_5, pm10, co } = json.list[0].components;

      this.data = {
        pm25: pm2_5,
        pm10: pm10,
        co2: (co / 1000).toFixed(2)
      };
    } catch (error) {
      console.error("Error al obtener datos:", error);
      this.shadow.innerHTML = `<p style="color:red;">Error cargando datos del aire</p>`;
    }
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      h2 {
        font-family: Arial, sans-serif;
        color: #0077b6;
        margin-bottom: 0.2rem;
      }

      .description {
        font-family: Arial, sans-serif;
        font-size: 0.95rem;
        color: #444;
        margin-bottom: 1.2rem;
      }

      canvas {
        max-width: 100%;
      }

      ul {
        font-size: 0.85rem;
        color: #555;
        margin-top: 1rem;
        padding-left: 1.2rem;
      }

      ul li {
        margin-bottom: 0.3rem;
      }
    `;

    const title = document.createElement('h2');
    title.textContent = 'Gráfico de Indicadores del Aire (OpenWeather)';

    const description = document.createElement('div');
    description.className = 'description';
    description.innerHTML = `
      Este gráfico muestra los niveles actuales de contaminantes atmosféricos en Quito, Ecuador, medidos por la API de OpenWeatherMap.
    `;

    const explanation = document.createElement('ul');
    explanation.innerHTML = `
      <li><strong>PM2.5</strong>: Partículas muy finas (menos de 2.5 micras) que pueden penetrar profundamente en los pulmones.</li>
      <li><strong>PM10</strong>: Partículas de hasta 10 micras, pueden causar irritación respiratoria.</li>
      <li><strong>CO₂</strong>: Representado aquí con los valores de monóxido de carbono (CO), aproximado en ppm (partes por millón).</li>
    `;

    const canvas = document.createElement('canvas');

    this.shadow.innerHTML = '';
    this.shadow.appendChild(style);
    this.shadow.appendChild(title);
    this.shadow.appendChild(description);
    this.shadow.appendChild(canvas);
    this.shadow.appendChild(explanation);

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['PM2.5', 'PM10', 'CO₂ (ppm)'],
        datasets: [{
          label: 'Nivel actual',
          data: [this.data.pm25, this.data.pm10, this.data.co2],
          backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
}

customElements.define('air-quality-chart', AirQualityChart);
