import React, { useState, useEffect } from "react";
import "../css/galeria.css";
import galeriaData from "../data/galeria.json";

export default function GaleriaJsonPage() {
  const [datos, setDatos] = useState([]);
  const [filtro, setFiltro] = useState("todos");
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setDatos(galeriaData);
      setLoading(false);
    }, 500);
  }, []);

  // Obtener categorías únicas
  const categorias = ["todos", ...new Set(datos.map(item => item.categoria))];

  // Filtrar datos
  const datosFiltrados = datos.filter(item => {
    const cumpleFiltro = filtro === "todos" || item.categoria === filtro;
    const cumpleBusqueda = item.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                          item.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return cumpleFiltro && cumpleBusqueda;
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando galería...</p>
      </div>
    );
  }

  return (
    <div className="galeria-container">
      {/* Header */}
      <header className="galeria-header">
        <div className="container">
          <h1 className="galeria-titulo">
            <i className="bi bi-grid-3x3-gap-fill me-3"></i>
            Ideas de Proyectos Innovadores
          </h1>
          <p className="galeria-subtitulo">
            Explora nuestra colección de {datos.length} ideas de proyectos increíbles
          </p>
        </div>
      </header>

      {/* Controles */}
      <section className="controles-section">
        <div className="container">
          <div className="row g-3 align-items-center">
            {/* Buscador */}
            <div className="col-md-6">
              <div className="search-box">
                <i className="bi bi-search"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar proyectos..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
                {busqueda && (
                  <button className="clear-btn" onClick={() => setBusqueda("")}>
                    <i className="bi bi-x-circle-fill"></i>
                  </button>
                )}
              </div>
            </div>

            {/* Filtros */}
            <div className="col-md-6">
              <div className="filtros-container">
                {categorias.map(cat => (
                  <button
                    key={cat}
                    className={`filtro-btn ${filtro === cat ? 'active' : ''}`}
                    onClick={() => setFiltro(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="resultados-info mt-3">
            <i className="bi bi-check-circle-fill me-2"></i>
            Mostrando {datosFiltrados.length} de {datos.length} proyectos
          </div>
        </div>
      </section>

      {/* Galería de tarjetas */}
      <section className="galeria-grid">
        <div className="container">
          {datosFiltrados.length === 0 ? (
            <div className="no-resultados">
              <i className="bi bi-inbox"></i>
              <h3>No se encontraron resultados</h3>
              <p>Intenta con otros términos de búsqueda o filtros</p>
              <button className="btn btn-primary" onClick={() => { setBusqueda(""); setFiltro("todos"); }}>
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {datosFiltrados.map(item => (
                <div key={item.id} className="col-lg-4 col-md-6">
                  <div className="proyecto-card">
                    <div className="card-image-container">
                      <img src={item.imagen} alt={item.titulo} className="card-img" />
                      <div className="card-overlay">
                        <span className="categoria-badge">{item.categoria}</span>
                        <span className="año-badge">{item.año}</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-titulo">{item.titulo}</h3>
                      <p className="card-descripcion">{item.descripcion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="galeria-footer">
        <div className="container text-center">
          <p className="mb-0">© 2025 Equipo Innovador - Todos los derechos reservados</p>
          <button 
            className="btn-volver-arriba"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <i className="bi bi-arrow-up-circle-fill"></i>
          </button>
        </div>
      </footer>
    </div>
  );
}