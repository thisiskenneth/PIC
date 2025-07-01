import React, { useState } from "react";
import { FichaProducto } from "./FichaProducto";
import { productosInit, type Producto } from "../data/productos";

interface ProductoType {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
}

export const Inventario: React.FC = () => {
const [productos, setProductos] = useState<Producto[]>(productosInit);
  const [nombre, setNombre] = useState<string>("");
  const [cantidad, setCantidad] = useState<number>(0);
  const [precio, setPrecio] = useState<number>(0);

  const agregarProducto = () => {
    if (!nombre.trim() || cantidad < 0 || precio < 0) return;

    const nuevoProducto: ProductoType = {
      id: Date.now(),
      nombre,
      cantidad,
      precio,
    };

    setProductos([...productos, nuevoProducto]);
    setNombre("");
    setCantidad(0);
    setPrecio(0);
  };

  const actualizarCantidad = (id: number, nuevaCantidad: number) => {
    setProductos((prev) =>
      prev.map((prod) =>
        prod.id === id ? { ...prod, cantidad: nuevaCantidad } : prod
      )
    );
  };

  const eliminarProducto = (id: number) => {
    setProductos((prev) => prev.filter((prod) => prod.id !== id));
  };

  return (
    <div className="container">
      <h1>Gestión de Inventario</h1>

      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(parseFloat(e.target.value))}
        />
        <button onClick={agregarProducto}>Agregar producto</button>
      </div>

      <FichaProducto
        productos={productos}
        actualizarCantidad={actualizarCantidad}
        eliminarProducto={eliminarProducto}
      />
    </div>
  );
};
