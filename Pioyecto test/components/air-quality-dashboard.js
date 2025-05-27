class AirQualityDashboard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.airData = {};
    this.weatherData = {};
    this.energyData = {};
  }

  async connectedCallback() {
    // Esperamos las 3 APIs
    await Promise.all([
      this.fetchAirData(),
      this.fetchWeatherData(),
      this.fetchEnergyData(),
    ]);
    this.render();
  }

  async fetchAirData() {
    try {
      const response = await fetch('https://api.example.com/air-quality'); // Cambia esta URL por la real
      if (!response.ok) throw new Error('Error en API Calidad de Aire');
      this.airData = await response.json();
    } catch (e) {
      console.error(e);
      // Datos fallback en caso de error
      this.airData = { pm25: 'N/A', pm10: 'N/A', co2: 'N/A', zona: 'Desconocida' };
    }
  }

  async fetchWeatherData() {
    try {
      const response = await fetch('https://api.example.com/weather'); // Cambia esta URL por la real
      if (!response.ok) throw new Error('Error en API Clima');
      this.weatherData = await response.json();
    } catch (e) {
      console.error(e);
      this.weatherData = { temp: 'N/A', humidity: 'N/A', wind: 'N/A', zona: 'Desconocida' };
    }
  }

  async fetchEnergyData() {
    try {
      const response = await fetch('https://api.example.com/energy'); // Cambia esta URL por la real
      if (!response.ok) throw new Error('Error en API Energía');
      this.energyData = await response.json();
    } catch (e) {
      console.error(e);
      this.energyData = { consumption: 'N/A', production: 'N/A', zona: 'Desconocida' };
    }
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      * { box-sizing: border-box; }
      :host {
        display: block;
        max-width: 900px;
        margin: 2rem auto;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #333;
        background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);
        border-radius: 20px;
        box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        overflow: hidden;
        padding: 2rem;
      }
      h2 {
        margin: 0 0 1rem 0;
        font-weight: 900;
        font-size: 2rem;
        color: #222;
        text-align: center;
        text-shadow: 1px 1px 4px rgba(0,0,0,0.2);
      }
      .dashboards-container {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
      }
      .dashboard {
        background: rgba(255, 255, 255, 0.9);
        border-radius: 20px;
        padding: 1.5rem 2rem;
        box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        flex: 1 1 280px;
        max-width: 280px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.3s ease;
        cursor: default;
      }
      .dashboard:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.3);
      }
      .dashboard strong {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: #555;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .value {
        font-size: 2.5rem;
        font-weight: 900;
        color: #0077b6;
        text-shadow: 1px 1px 3px rgba(0, 119, 182, 0.5);
        margin-bottom: 1rem;
      }
      .icon {
        font-size: 3.5rem;
        margin-bottom: 0.7rem;
        color: #00b4d8;
        filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.15));
      }
      .shape {
        position: absolute;
        border-radius: 50%;
        opacity: 0.15;
        z-index: 0;
        pointer-events: none;
      }
      .shape1 {
        width: 180px;
        height: 180px;
        background: #48cae4;
        top: -60px;
        right: -60px;
      }
      .shape2 {
        width: 120px;
        height: 120px;
        background: #00b4d8;
        bottom: -50px;
        left: -40px;
      }
    `;

    const container = document.createElement('div');
    container.style.position = 'relative';

    // Para mostrar zona preferí tomar la zona del primer dashboard que tenga y si no, 'Desconocida'
    const zone = this.airData.zona || this.weatherData.zona || this.energyData.zona || 'Desconocida';

    container.innerHTML = `
      <h2>Dashboards Combinados - Zona ${zone}</h2>
      <div class="dashboards-container">
        <div class="dashboard" title="Calidad del Aire">
          <div class="icon">🌫️</div>
          <strong>PM2.5</strong>
          <div class="value">${this.airData.pm25}</div>
          <strong>PM10</strong>
          <div class="value">${this.airData.pm10}</div>
          <strong>CO₂</strong>
          <div class="value">${this.airData.co2}</div>
        </div>
        <div class="dashboard" title="Clima">
          <div class="icon">🌤️</div>
          <strong>Temperatura</strong>
          <div class="value">${this.weatherData.temp}</div>
          <strong>Humedad</strong>
          <div class="value">${this.weatherData.humidity}</div>
          <strong>Viento</strong>
          <div class="value">${this.weatherData.wind}</div>
        </div>
        <div class="dashboard" title="Energía">
          <div class="icon">⚡</div>
          <strong>Consumo</strong>
          <div class="value">${this.energyData.consumption}</div>
          <strong>Producción</strong>
          <div class="value">${this.energyData.production}</div>
        </div>
      </div>
      <div class="shape shape1"></div>
      <div class="shape shape2"></div>
    `;

    this.shadow.innerHTML = '';
    this.shadow.appendChild(style);
    this.shadow.appendChild(container);
  }
}

customElements.define('air-quality-dashboard', AirQualityDashboard);
