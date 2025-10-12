// src/components/Sidebar/Sidebar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../assets/logo.svg'; // Asegúrate de tener tu logo en la carpeta assets

const Sidebar = () => {
  // Lista de integrantes para el submenú
  const integrantes = [
    { id: 'lucas', nombre: 'Lucas' },
    { id: 'victoria', nombre: 'Victoria' },
    { id: 'sebastian', nombre: 'Sebastián' },
    { id: 'jose', nombre: 'José' },
    { id: 'estiven', nombre: 'Estiven' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Logo Equipo Innovador" className="sidebar-logo" />
        <h3>Equipo Innovador</h3>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/bitacora" className={({ isActive }) => (isActive ? 'active' : '')}>
              Bitácora
            </NavLink>
          </li>
          <li className="integrantes-menu">
            <span>Integrantes</span>
            <ul className="submenu">
              {integrantes.map((integrante) => (
                <li key={integrante.id}>
                  <NavLink
                    to={`/integrantes/${integrante.id}`}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {integrante.nombre}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;