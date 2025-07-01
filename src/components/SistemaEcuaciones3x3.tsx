import React, { useState } from "react";
import { resolverSistema3x3 } from "../utils/matematicas";

export const SistemaEcuaciones3x3: React.FC = () => {
  const [matriz, setMatriz] = useState<number[][]>(
    Array(3)
      .fill([0, 0, 0])
      .map(() => Array(3).fill(0))
  );
  const [vector, setVector] = useState<number[]>([0, 0, 0]);
  const [resultado, setResultado] = useState<string | number[] | null>(null);
  const [error, setError] = useState<string>("");

  const manejarCambioMatriz = (fila: number, col: number, valor: string) => {
    const nuevaMatriz = matriz.map((r, i) =>
      r.map((c, j) => (i === fila && j === col ? parseFloat(valor) || 0 : c))
    );
    setMatriz(nuevaMatriz);
  };

  const manejarCambioVector = (indice: number, valor: string) => {
    const nuevoVector = [...vector];
    nuevoVector[indice] = parseFloat(valor) || 0;
    setVector(nuevoVector);
  };

  const manejarResolver = () => {
    try {
      const solucion = resolverSistema3x3(matriz, vector);
      if (typeof solucion === "string") {
        setResultado(null);
        setError(solucion);
      } else {
        setResultado(solucion);
        setError("");
      }
    } catch (e) {
      setResultado(null);
      setError("Error al calcular la solución.");
    }
  };

  const manejarLimpiar = () => {
    setMatriz(
      Array(3)
        .fill([0, 0, 0])
        .map(() => Array(3).fill(0))
    );
    setVector([0, 0, 0]);
    setResultado(null);
    setError("");
  };

  return (
    <div className="container">
      <h1>Resolución de Sistema de Ecuaciones 3x3</h1>
      <table>
        <tbody>
          {matriz.map((fila, i) => (
            <tr key={i}>
              {fila.map((valor, j) => (
                <td key={j}>
                  <input
                    type="number"
                    className="tabla-input"
                    value={valor}
                    onChange={(e) => manejarCambioMatriz(i, j, e.target.value)}
                  />
                </td>
              ))}
              <td>
                <input
                  type="number"
                    className="tabla-input"
                  value={vector[i]}
                  onChange={(e) => manejarCambioVector(i, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={manejarResolver}>Resolver</button>
      <button onClick={manejarLimpiar}>Limpiar</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {Array.isArray(resultado) && (
        <div>
          <h2>Solución:</h2>
          <ul>
            <li>x = {resultado[0]}</li>
            <li>y = {resultado[1]}</li>
            <li>z = {resultado[2]}</li>
          </ul>
        </div>
      )}
    </div>
  );
};
