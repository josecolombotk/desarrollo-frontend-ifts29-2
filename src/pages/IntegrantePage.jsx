import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Importa TODOS los componentes de las páginas de integrantes de forma estática
import LucasPage from './Lucas.jsx';
import VictoriaPage from './Victoria.jsx';
import EstivenPage from './Estiven.jsx';
import SebastianPage from './Sebastian.jsx';
import JosePage from './Jose.jsx';

const PaginaNoEncontrada = () => (
  <div>
    <h2>Integrante no encontrado</h2>
    <p>El perfil que buscas no existe.</p>
    <Link to="/">Volver al inicio</Link>
  </div>
);

const IntegrantePage = () => {
  const { id } = useParams(); 

  // Decide qué componente renderizar basado en el 'id'
  switch (id) {
    case 'lucas':
      return <LucasPage />;
    case 'victoria':
      return <VictoriaPage />;
    case 'estiven':
      return <EstivenPage />;
    case 'sebastián':
      return <SebastianPage />;
    case 'jose':
      return <JosePage />;
    default:
      return <PaginaNoEncontrada />;
  }
};

export default IntegrantePage;