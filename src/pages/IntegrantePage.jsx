import React from 'react';
import { useParams, Link } from 'react-router-dom';

// 1. Importa TODOS los componentes de las páginas de integrantes de forma estática
import LucasPage from './Lucas.jsx';
import VictoriaPage from './Victoria.jsx';
import EstivenPage from './Estiven.jsx';
import SebastianPage from './Sebastian.jsx';
import JosePage from './Jose.jsx';
// import OtroIntegrantePage from './integrantes/otro.jsx'; // <-- Añadirías más aquí

const PaginaNoEncontrada = () => (
  <div>
    <h2>Integrante no encontrado</h2>
    <p>El perfil que buscas no existe.</p>
    <Link to="/">Volver al inicio</Link>
  </div>
);

const IntegrantePage = () => {
  const { id } = useParams(); // Obtiene el 'id' de la URL

  // 2. Decide qué componente renderizar basado en el 'id'
  switch (id) {
    case 'lucas':
      return <LucasPage />;
    case 'victoria':
      return <VictoriaPage />;
    case 'estiven':
      return <EstivenPage />;
    case 'sebastian':
      return <SebastianPage />;
    case 'jose':
      return <JosePage />;
    default:
      // Si el 'id' no coincide con ningún caso, muestra la página de no encontrado
      return <PaginaNoEncontrada />;
  }
};

export default IntegrantePage;