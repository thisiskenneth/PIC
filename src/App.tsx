import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CalculadoraEstadistica } from "./components/CalculadoraEstadistica";
import { SistemaEcuaciones3x3 } from './components/SistemaEcuaciones3x3';
import { Inventario } from './components/Inventario';
import { Inicio } from './components/Inicio';

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/estadistica" element={<CalculadoraEstadistica />} />
          <Route path="/ecuaciones" element={<SistemaEcuaciones3x3 />} />
          <Route path="/inventario" element={<Inventario />} />
        </Routes>
      </div>
    </>
  );
}

export default App
