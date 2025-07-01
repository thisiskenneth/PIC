export type Producto = {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
};

export const productosInit: Producto[] = [
  { id: 1, nombre: "Laptop Lenovo", cantidad: 10, precio: 750.5 },
  { id: 2, nombre: "Mouse Logitech", cantidad: 25, precio: 19.99 },
  { id: 3, nombre: "Teclado Redragon", cantidad: 15, precio: 35.75 },
  { id: 4, nombre: 'Monitor LG 24"', cantidad: 8, precio: 180.0 },
  { id: 5, nombre: "Disco SSD 512GB", cantidad: 20, precio: 64.9 },
];
