// src/components/Footer/Footer.jsx

import React from "react";
import "./Footer.css";

const Footer = () => {
  // Función para hacer scroll suave hacia el tope de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-title">Equipo Innovador - Grupo 9</p>
          <p className="footer-subtitle">
            Desarrollando el futuro, un proyecto a la vez.
          </p>
        </div>
        <div className="footer-center">
          <p>&copy; 2025 - Proyecto de Desarrollo Web</p>
        </div>
        <div className="footer-right">
          <button onClick={scrollToTop} className="scroll-to-top-btn">
            ↑ Volver arriba
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
