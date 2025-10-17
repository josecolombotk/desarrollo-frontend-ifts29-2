import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/lucas.css";
import { usePageMetadata } from "../hooks/usePageMetadata";
import lucasPerfilImg from "../assets/lucas_perfil.png";
import pelisFotoImg from "../assets/pelis_foto.png";
import edFotoImg from "../assets/ed_foto.png";
import favicon from "../assets/lucas_icn.ico";

export default function LucasPage() {
  usePageMetadata("Lucas - Guardián del Muro", favicon);

  // Estado para manejar la visibilidad de la información adicional
  const [infoVisible, setInfoVisible] = useState(false);

  // Estado para manejar el lema y su cambio
  const lemas = [
    '"El invierno se acerca..."',
    '"Escucha mi rugido!"',
    '"Fuego y Sangre"',
    '"Nunca doblegado, nunca roto"',
    '"Crece fuerte"',
  ];
  const [lemaActual, setLemaActual] = useState(lemas[0]);

  // Función para cambiar el lema a uno aleatorio que no sea el actual
  const cambiarLema = () => {
    let nuevoLema;
    do {
      nuevoLema = lemas[Math.floor(Math.random() * lemas.length)];
    } while (nuevoLema === lemaActual);
    setLemaActual(nuevoLema);
  };

  //  Función para el saludo
  const saludar = () => {
    alert(
      "¡Gracias por visitar mi perfil! Que los Antiguos Dioses y los Nuevos te acompañen."
    );
  };

  //  Estructura del Componente (reemplaza al body del HTML) 
  return (
    <div className="lucas-page-container">
      {/* Sección del Perfil */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card profile-card shadow-lg">
                <div className="card-body p-5">
                  <div className="row align-items-center">
                    <div className="col-lg-5 text-center mb-4 mb-lg-0">
                      <img
                        src={lucasPerfilImg}
                        alt="Lucas de la Guardia de la Noche"
                        className="profile-img mb-3"
                      />
                      <h2 className="fw-bold text-primary">Lucas</h2>
                      <strong
                        className="text-muted mb-4 mt-3"
                        id="slogan-display"
                      >
                        {lemaActual}
                      </strong>
                      <p className="text-muted mb-3 mt-3">
                        <i className="bi bi-geo-alt-fill me-1"></i>Villa Devoto,
                        CABA
                      </p>
                      <p className="text-muted mb-3">
                        <i className="bi bi-calendar-event me-1"></i>31 años
                      </p>
                      <button className="btn btn-primary" onClick={cambiarLema}>
                        <i className="bi bi-shuffle me-1"></i>Cambiar Lema
                      </button>
                    </div>

                    <div className="col-lg-7">
                      <h3 className="text-primary mb-3">Sobre mí</h3>
                      <p className="lead mb-4">
                        Soy Lucas, me encanta la tecnología, el desarrollo de
                        software, los juegos, pasar tiempo en familia y el
                        fútbol.
                        <br />
                        <br />
                        Hace ya 3 años que en paralelo con mi trabajo a tiempo
                        completo (fuera de sistemas) aprendo sobre desarrollo de
                        software tanto de manera formal como también
                        autodidacta.
                      </p>

                      <h4 className="text-primary mb-3">Habilidades</h4>
                      <div className="skills-list mb-4">
                        <span className="skill-tag">HTML</span>
                        <span className="skill-tag">CSS</span>
                        <span className="skill-tag">POO</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">SQL</span>
                        <span className="skill-tag">C#</span>
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">Kotlin</span>
                        <span className="skill-tag">
                          Modelado y diseño de Software
                        </span>
                        <span className="skill-tag">
                          Forjador de Telarañas Digitales
                        </span>
                        <span className="skill-tag">Maestro de Código</span>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <button
                            className="btn btn-outline-primary mb-3"
                            onClick={() => setInfoVisible(!infoVisible)}
                          >
                            <i className="bi bi-info-circle me-1"></i>
                            {infoVisible
                              ? "Ocultar información"
                              : "Más información"}
                          </button>
                        </div>
                        <div className="col-md-6">
                          <button
                            className="btn btn-outline-success"
                            onClick={saludar}
                          >
                            <i className="bi bi-heart me-1"></i>Saludar
                          </button>
                        </div>
                      </div>

                      {infoVisible && (
                        <div className="mt-3 p-3 rounded dark-bg">
                          <h5>Información adicional</h5>
                          <p>
                            <strong>Experiencia:</strong> Más de una década en
                            el reino de la tecnología, los videos juegos y el
                            software.
                          </p>
                          <p>
                            <strong>Hobbies:</strong> Disfrutar con familia y
                            amigos, jugar al fútbol y jugar juegos.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Favoritos */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h4 className="card-title text-primary mb-4">
                    <i className="bi bi-film me-2"></i>Películas/Series
                    Favoritas
                  </h4>
                  <a
                    href="https://www.youtube.com/watch?v=SJZfCg51xlU&list=RDSJZfCg51xlU&start_radio=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block text-center mb-3"
                  >
                    <img
                      src={pelisFotoImg}
                      alt="Póster de Game of Thrones"
                      className="favorite-image img-fluid"
                    />
                  </a>
                  <ul className="favorites-list">
                    <li className="text-primary">
                      <strong className="text-primary">Game Of Thrones</strong>
                      <p className="mb-0 text-muted">
                        Batallas épicas por el trono de hierro y el dominio de
                        los 7 reinos.
                      </p>
                    </li>
                    <li>
                      <strong className="text-primary">Breaking Bad</strong>
                      <p className="mb-0 text-muted">
                        Un profesor de química...y algo más.
                      </p>
                    </li>
                    <li>
                      <strong className="text-primary">
                        Rápidos y furiosos
                      </strong>
                      <p className="mb-0 text-muted">
                        Una pelicula de autos... pero muy pochoclera jaja.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h4 className="card-title text-primary mb-4">
                    <i className="bi bi-music-note-beamed me-2"></i>Música
                    Favorita
                  </h4>
                  <a
                    href="https://www.youtube.com/watch?v=ZCLhaPWwVwM&list=RDZCLhaPWwVwM&start_radio=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block text-center mb-3"
                  >
                    <img
                      src={edFotoImg}
                      alt="Foto de Ed Sheeran"
                      className="favorite-image img-fluid"
                    />
                  </a>
                  <ul className="favorites-list">
                    <li>
                      <strong className="text-primary">Ed Sheeran</strong>
                      <p className="mb-0 text-muted">
                        Baladas románticas muy melosas.
                      </p>
                    </li>
                    <li>
                      <strong className="text-primary">El Kuelgue</strong>
                      <p className="mb-0 text-muted">Una banda un poco loca.</p>
                    </li>
                    <li>
                      <strong className="text-primary">Coldplay</strong>
                      <p className="mb-0 text-muted">
                        Mas baladas románticas melosas y para estar de chill.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Navegación entre perfiles */}
      <section className="py-4 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/integrantes/jose" className="btn btn-outline-light">
                  <i className="bi bi-arrow-left me-1"></i>Anterior Hermano
                </Link>

                <Link
                  to="/integrantes/sebastián"
                  className="btn btn-outline-light"
                >
                  Siguiente Hermano<i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
