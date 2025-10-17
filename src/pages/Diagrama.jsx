import React from "react";
import arbolRenderizado from "../assets/arbol_renderizado.png";
import "../css/diagrama.css";
import arbolCarpetas from "../assets/arbol_carpetas.png";

const Diagrama = () => {
  return (
    <div className="diagrama-container">
      <h1>Diagrama de Componentes y Estructura de Carpetas</h1>

      <h2>Árbol de Renderizado de Componentes</h2>
      <img
        src={arbolRenderizado}
        alt="Árbol de renderizado de componentes"
        className="diagrama-image"
      />

      <h2>Estructura de Carpetas del Proyecto</h2>
      <img
        src={arbolCarpetas}
        alt="Estructura de carpetas del proyecto"
        className="diagrama-image"
      />
    </div>
  );
};

export default Diagrama;
