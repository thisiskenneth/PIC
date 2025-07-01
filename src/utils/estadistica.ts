export const calcularMedia = (datos: number[]): number => {
  const suma = datos.reduce((acc, val) => acc + val, 0);
  return parseFloat((suma / datos.length).toFixed(2));
};

export const calcularMediana = (datos: number[]): number => {
  const ordenados = [...datos].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);
  if (ordenados.length % 2 === 0) {
    return parseFloat(
      ((ordenados[mitad - 1] + ordenados[mitad]) / 2).toFixed(2)
    );
  }
  return ordenados[mitad];
};

export const calcularModa = (datos: number[]): number | string => {
  const conteo: Record<number, number> = {};
  datos.forEach((num) => (conteo[num] = (conteo[num] || 0) + 1));
  const maxFrecuencia = Math.max(...Object.values(conteo));
  const modas = Object.entries(conteo)
    .filter(([_, freq]) => freq === maxFrecuencia)
    .map(([valor]) => parseFloat(valor));

  if (modas.length === datos.length) return "No hay moda";
  if (modas.length > 1) return modas.join(", ");
  return modas[0];
};

export const calcularVarianza = (
  datos: number[],
  muestral: boolean = true
): number => {
  const media = calcularMedia(datos);
  const sumaCuadrados = datos.reduce(
    (acc, val) => acc + Math.pow(val - media, 2),
    0
  );
  const divisor = muestral ? datos.length - 1 : datos.length;
  return parseFloat((sumaCuadrados / divisor).toFixed(2));
};

export const calcularDesviacionEstandar = (varianza: number): number => {
  return parseFloat(Math.sqrt(varianza).toFixed(2));
};

export const calcularRango = (datos: number[]): number => {
  return obtenerMaximo(datos) - obtenerMinimo(datos);
};

export const obtenerMinimo = (datos: number[]): number => {
  return Math.min(...datos);
};

export const obtenerMaximo = (datos: number[]): number => {
  return Math.max(...datos);
};
