export const determinante3x3 = (m: number[][]): number => {
  const [a, b, c] = m[0];
  const [d, e, f] = m[1];
  const [g, h, i] = m[2];
  return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
};

export const reemplazarColumna = (
  matriz: number[][],
  columna: number,
  nuevaColumna: number[]
): number[][] => {
  return matriz.map((fila, i) =>
    fila.map((valor, j) => (j === columna ? nuevaColumna[i] : valor))
  );
};

export const resolverSistema3x3 = (
  A: number[][],
  B: number[]
): number[] | string => {
  const detA = determinante3x3(A);
  if (detA === 0) return "Matriz singular: el sistema no tiene solución única.";

  const detX = determinante3x3(reemplazarColumna(A, 0, B));
  const detY = determinante3x3(reemplazarColumna(A, 1, B));
  const detZ = determinante3x3(reemplazarColumna(A, 2, B));

  return [
    parseFloat((detX / detA).toFixed(2)),
    parseFloat((detY / detA).toFixed(2)),
    parseFloat((detZ / detA).toFixed(2)),
  ];
};
