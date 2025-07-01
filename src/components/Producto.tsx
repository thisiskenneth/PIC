import React from "react";

interface ProductoProps {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
  onActualizarCantidad: (id: number, nuevaCantidad: number) => void;
  onEliminar: (id: number) => void;
}

export const Producto: React.FC<ProductoProps> = ({
  id,
  nombre,
  cantidad,
  precio,
  onActualizarCantidad,
  onEliminar,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>
        <input
          type="number"
          className="tabla-input"
          value={cantidad}
          onChange={(e) => onActualizarCantidad(id, parseInt(e.target.value))}
        />
      </td>
      <td>${precio.toFixed(2)}</td>
      <td>
        <button onClick={() => onEliminar(id)}>Eliminar</button>
      </td>
    </tr>
  );
};
