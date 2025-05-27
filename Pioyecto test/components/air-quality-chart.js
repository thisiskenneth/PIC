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
      this.shadow.innerHTML = `<p>Error cargando datos</p>`;
    }
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      h2 {
        font-family: Arial, sans-serif;
        color: #0077b6;
      }

      canvas {
        max-width: 100%;
      }
    `;

    const title = document.createElement('h2');
    title.textContent = 'Gráfico de Indicadores del Aire (OpenWeather)';

    const canvas = document.createElement('canvas');

    this.shadow.innerHTML = '';
    this.shadow.appendChild(style);
    this.shadow.appendChild(title);
    this.shadow.appendChild(canvas);

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