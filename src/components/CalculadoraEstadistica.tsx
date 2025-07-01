import React, { useState } from "react";
import {
  calcularMedia,
  calcularMediana,
  calcularModa,
  calcularVarianza,
  calcularDesviacionEstandar,
  calcularRango,
  obtenerMinimo,
  obtenerMaximo,
} from "../utils/estadistica";

export const CalculadoraEstadistica: React.FC = () => {
  const [entrada, setEntrada] = useState<string>("");
  const [resultados, setResultados] = useState<Record<string, number | string>>(
    {}
  );
  const [error, setError] = useState<string>("");

  const parsearDatos = (texto: string): number[] => {
    return texto
      .split(/[\s,]+/)
      .map((item) => parseFloat(item))
      .filter((num) => !isNaN(num));
  };

  const manejarCalculo = () => {
    const datos = parsearDatos(entrada);

    if (datos.length < 2) {
      setError("Ingrese al menos 2 valores numéricos válidos.");
      setResultados({});
      return;
    }

    setError("");
    const media = calcularMedia(datos);
    const mediana = calcularMediana(datos);
    const moda = calcularModa(datos);
    const varianzaM = calcularVarianza(datos, true);
    const varianzaP = calcularVarianza(datos, false);
    const desviacionM = calcularDesviacionEstandar(varianzaM);
    const desviacionP = calcularDesviacionEstandar(varianzaP);
    const rango = calcularRango(datos);
    const min = obtenerMinimo(datos);
    const max = obtenerMaximo(datos);

    setResultados({
      Media: media,
      Mediana: mediana,
      Moda: moda,
      "Varianza Muestral": varianzaM,
      "Varianza Poblacional": varianzaP,
      "Desviación Estándar (Muestra)": desviacionM,
      "Desviación Estándar (Población)": desviacionP,
      Rango: rango,
      Mínimo: min,
      Máximo: max,
    });
  };

  const manejarLimpiar = () => {
    setEntrada("");
    setResultados({});
    setError("");
  };

  return (
    <div className="container">
      <h1>Calculadora Estadística</h1>
      <textarea
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        placeholder="Ingrese números separados por comas, espacios o saltos de línea"
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={manejarCalculo} disabled={!entrada.trim()}>
        Calcular
      </button>
      <button onClick={manejarLimpiar}>Limpiar datos</button>

      {error && <p className="error">{error}</p>}

      {Object.keys(resultados).length > 0 && (
        <div>
          <h2>Resultados:</h2>
          <ul>
            {Object.entries(resultados).map(([clave, valor]) => (
              <li key={clave}>
                {clave}: {valor}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
