// src/components/Footer.jsx
import React from "react";
import { useLocation } from 'react-router-dom';
import "./Footer.css";
import integrantesData from '../../data/integrantes.json';

const Footer = () => {
  const location = useLocation();
  
  const getIntegranteActual = () => {
    const path = location.pathname;
    return integrantesData.integrantes.find(integrante => 
      path.includes(integrante.id)
    ) || null;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const integranteActual = getIntegranteActual();

  if (integranteActual) {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p className="footer-title">{integranteActual.nombre}</p>
            <p className="footer-subtitle">{integranteActual.rol}</p>
          </div>
          <div className="footer-center">
            <p>© 2025 - Proyecto de Desarrollo Web</p>
          </div>
          <div className="footer-right">
            {integranteActual.email && (
              <p style={{fontSize: "0.85rem", color: "#8b949e", marginBottom: "10px"}}>
                {integranteActual.email}
              </p>
            )}
            <button onClick={scrollToTop} className="scroll-to-top-btn">
              ↑ Volver arriba
            </button>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-title">Equipo Innovador - Grupo 9</p>
          <p className="footer-subtitle">Desarrollando el futuro, un proyecto a la vez.</p>
        </div>
        <div className="footer-center">
          <p>© 2025 - Proyecto de Desarrollo Web</p>
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