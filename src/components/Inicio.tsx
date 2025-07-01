import React from "react";
import { Link } from "react-router-dom";

export const Inicio: React.FC = () => {
  const fechaHoy = new Date().toLocaleDateString("es-EC", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="container">
      <h1>Bienvenido a la Aplicación</h1>

      <p style={{ marginBottom: "1.5rem", color: "#cbd5e1" }}>
        Esta plataforma contiene herramientas prácticas para realizar cálculos
        estadísticos, resolver sistemas de ecuaciones lineales 3x3 y gestionar
        inventarios. Explora las opciones disponibles a través del menú
        superior.
      </p>

      <div
        style={{
          marginBottom: "2rem",
          backgroundColor: "#0f172a",
          padding: "1rem",
          borderRadius: "8px",
          border: "1px solid #334155",
        }}
      >
        <p style={{ margin: 0, fontWeight: "500", color: "#93c5fd" }}>
          Estudiante: <span style={{ color: "#f8fafc" }}>Kenneth Cortez</span>
        </p>
        <p style={{ margin: 0, fontWeight: "500", color: "#93c5fd" }}>
          Curso:{" "}
          <span style={{ color: "#f8fafc" }}>
            Programación Integrativa de Componentes Web
          </span>
        </p>
        <p style={{ margin: 0, fontWeight: "500", color: "#93c5fd" }}>
          NRC: <span style={{ color: "#f8fafc" }}>21602</span>
        </p>
        <p style={{ margin: 0, fontWeight: "500", color: "#93c5fd" }}>
          Fecha: <span style={{ color: "#f8fafc" }}>{fechaHoy}</span>
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Link to="/estadistica">
          <button style={{ width: "100%" }}>
            Ir a Calculadora Estadística
          </button>
        </Link>

        <Link to="/ecuaciones">
          <button style={{ width: "100%" }}>
            Ir a Sistema de Ecuaciones 3x3
          </button>
        </Link>

        <Link to="/inventario">
          <button style={{ width: "100%" }}>Ir a Gestión de Inventario</button>
        </Link>
      </div>
    </div>
  );
};
