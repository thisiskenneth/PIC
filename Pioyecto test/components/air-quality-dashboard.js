class AirQualityDashboard extends HTMLElement {
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
    const { pm25, pm10, co2, zona } = this.data;
    const style = document.createElement('style');
    style.textContent = `
      .box {
        background: #e3f2fd;
        padding: 1rem;
        border-radius: 10px;
        margin-bottom: 1rem;
        font-family: Arial, sans-serif;
      }
      h2 {
        color: #0077b6;
      }
    `;

    const container = document.createElement('div');
    container.innerHTML = `
      <h2>Dashboard de Calidad del Aire</h2>
      <div class="box"><strong>Zona:</strong> ${zona}</div>
      <div class="box"><strong>PM2.5:</strong> ${pm25} µg/m³</div>
      <div class="box"><strong>PM10:</strong> ${pm10} µg/m³</div>
      <div class="box"><strong>CO₂:</strong> ${co2} ppm</div>
    `;

    this.shadow.innerHTML = '';
    this.shadow.appendChild(style);
    this.shadow.appendChild(container);
  }
}

customElements.define('air-quality-dashboard', AirQualityDashboard);
