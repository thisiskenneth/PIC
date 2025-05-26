class AirQualityChart extends HTMLElement {
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
    const res = await fetch('./api/datos-calidad-aire.json');
    this.data = await res.json();
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
    title.textContent = 'Gráfico de Indicadores del Aire';

    const canvas = document.createElement('canvas');

    this.shadow.innerHTML = '';
    this.shadow.appendChild(style);
    this.shadow.appendChild(title);
    this.shadow.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['PM2.5', 'PM10', 'CO₂'],
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
