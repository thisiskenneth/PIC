import React from "react";
import { Producto } from "./Producto";

interface ProductoType {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
}

interface FichaProductoProps {
  productos: ProductoType[];
  actualizarCantidad: (id: number, nuevaCantidad: number) => void;
  eliminarProducto: (id: number) => void;
}

export const FichaProducto: React.FC<FichaProductoProps> = ({
  productos,
  actualizarCantidad,
  eliminarProducto,
}) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((prod) => (
          <Producto
            key={prod.id}
            {...prod}
            onActualizarCantidad={actualizarCantidad}
            onEliminar={eliminarProducto}
          />
        ))}
      </tbody>
    </table>
  );
};
