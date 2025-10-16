import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import "../css/estiven.css";
import estivenFavicon from "../assets/est-favicon.png";

import estivenImg from "../assets/est-avatar.png";
import shelterMovie from "../assets/est-shelter-movie.png";
import thamePoMovie from "../assets/est-thameypo-movie.webp";
import sense8Movie from "../assets/est-sense8-movie.jpg";
import magiMovie from "../assets/est-magi-movie.jpg";
import heartstopperMovie from "../assets/est-heartstopper-movie.jpg";

import hallOfFameSong from "../assets/est-hall_of_fame-song.jpg";
import ghostSong from "../assets/est-ghost-song.jpg";
import theNightsSong from "../assets/est-the_nights-song.jpg";
import youAreTheReasonSong from "../assets/est-you_are_the_reason-song.jpg";

const Estiven = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    document.title = "Estiven - Perfil";

    const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");
    link.rel = "icon";
    link.href = estivenFavicon;
    document.head.appendChild(link);
  }, []);

  // Función para rotar imagen
  const rotarImagen = () => {
    setRotation(rotation + 90);
  };
  return (
    <div className="estiven-page">
      <section className="py-5 mt-5">
        <div className="container">
          <div className="card profile-card shadow-lg">
            <div className="card-body p-5">
              <div className="row align-items-center">
                <div className="col-lg-4 text-center mb-4 mb-lg-0">
                  <img
                    src={estivenImg}
                    alt="Estiven"
                    className="profile-img mb-3"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transition: "transform 0.5s ease",
                    }}
                  />{" "}
                  <h2 className="fw-bold text-primary">Estiven</h2>
                  <p className="text-muted mb-3">
                    <i className="bi bi-geo-alt-fill me-1"></i>Buenos Aires,
                    Argentina
                  </p>
                  <p className="text-muted mb-3">
                    <i className="bi bi-calendar-event me-1"></i>31 años
                  </p>
                  <button className="btn btn-info" onClick={rotarImagen}>
                    <i className="bi bi-arrow-clockwise me-1"></i>Rotar imagen
                  </button>
                </div>

                <div className="col-lg-8">
                  <h3 className="text-primary mb-3">Sobre mí</h3>
                  <p className="lead mb-4">
                    Soy un desarrollador de software estudiando en el Instituto
                    de Formación Técnica Superior N° 29. Trabajo desarrollando
                    aplicaciones web para una empresa mediana y me especializo
                    en el área de e-commerce para una empresa que vende muebles
                    de pino. Me enfoco principalmente en desarrollo para PC.
                  </p>

                  <h4 className="text-primary mb-3">Habilidades</h4>
                  <div className="skills-list mb-4">
                    <span className="skill-tag">NodeJS</span>
                    <span className="skill-tag">MySQL</span>
                    <span className="skill-tag">Express</span>
                    <span className="skill-tag">NestJS</span>
                    <span className="skill-tag">NextJS</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">C#</span>
                    <span className="skill-tag">.NET</span>
                  </div>

                  <h4 className="text-primary mb-3">Experiencia</h4>
                  <div className="mb-4">
                    <h5 className="fw-bold">Desarrollador Web</h5>
                    <p className="text-muted mb-2">
                      Empresa Mediana • 2022 - Presente
                    </p>
                    <p>
                      Desarrollo de aplicaciones web utilizando NodeJS, Express,
                      NestJS, NextJS y MySQL para soluciones empresariales.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-bold">Desarrollador E-Commerce</h5>
                    <p className="text-muted mb-2">
                      Empresa de Muebles de Pino • 2020 - Presente
                    </p>
                    <p>
                      Desarrollo y mantenimiento de plataforma e-commerce
                      especializada en venta de muebles de pino, enfocado en
                      aplicaciones para PC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light favorites-section">
        <div className="container">
          <h3 className="text-center mb-5 text-primary">Mis Favoritos</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-cpu display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Inteligencia Artificial</h5>
                  <p className="card-text">
                    Exploro las posibilidades de la IA y su aplicación en
                    desarrollo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-tv display-4 text-warning mb-3"></i>
                  <h5 className="card-title">Series y Películas</h5>
                  <p className="card-text">
                    Disfruto viendo series y películas en mi tiempo libre.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-book display-4 text-success mb-3"></i>
                  <h5 className="card-title">Lectura y Aprendizaje</h5>
                  <p className="card-text">
                    Me encanta leer y aprender cosas nuevas constantemente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel de Películas/Series */}
      <section className="py-5">
        <div className="container">
          <h3 className="section-title text-primary mb-4">
            <i className="bi bi-film me-2"></i>Series y Películas Favoritas
          </h3>

          <div
            id="moviesCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {[
                {
                  img: shelterMovie,
                  title: "Shelter",
                  desc: "Zach trabaja y cuida de su familia mientras encuentra el amor con Gabe.",
                },
                {
                  img: thamePoMovie,
                  title: "Thame y Po",
                  desc: "Po hace un vínculo con Thame, que planea carrera en solitario en Corea.",
                },
                {
                  img: sense8Movie,
                  title: "Sense 8",
                  desc: "Un grupo en todo el mundo está vinculado mentalmente y debe sobrevivir.",
                },
                {
                  img: magiMovie,
                  title: "Magi",
                  desc: "Alibaba y Aladdin exploran mazmorras en busca de tesoros y poder.",
                },
                {
                  img: heartstopperMovie,
                  title: "Heartstopper",
                  desc: "Historia de amor entre Charlie y Nick, con representación LGBTQ+.",
                },
              ].map((movie, idx) => (
                <div
                  className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  key={idx}
                >
                  <div className="d-flex align-items-center p-4">
                    <div className="flex-shrink-0 me-4">
                      <img
                        src={movie.img}
                        alt={movie.title}
                        style={{
                          width: "200px",
                          height: "280px",
                          objectFit: "cover",
                          borderRadius: "15px",
                          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                        }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="text-primary">{movie.title}</h5>
                      <p>{movie.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#moviesCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#moviesCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Carrusel de Música */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="section-title text-primary mb-4">
            <i className="bi bi-music-note-beamed me-2"></i>Música Favorita
          </h3>

          <div
            id="musicCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {[
                {
                  img: hallOfFameSong,
                  title: "Hall of Fame",
                  desc: "The Script con William.i.am, sobre perseguir sueños y dejar huella.",
                },
                {
                  img: ghostSong,
                  title: "Ghost",
                  desc: "Justin Bieber, balada emotiva sobre pérdida y nostalgia.",
                },
                {
                  img: theNightsSong,
                  title: "The Nights",
                  desc: "Avicii, himno generacional sobre vivir la vida al máximo.",
                },
                {
                  img: youAreTheReasonSong,
                  title: "You Are The Reason",
                  desc: "Calum Scott, emotiva balada sobre amor y vulnerabilidad.",
                },
              ].map((song, idx) => (
                <div
                  className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  key={idx}
                >
                  <div className="d-flex align-items-center p-4">
                    <div className="flex-shrink-0 me-4">
                      <img
                        src={song.img}
                        alt={song.title}
                        style={{
                          width: "200px",
                          height: "280px",
                          objectFit: "cover",
                          borderRadius: "15px",
                          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                        }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="text-primary">{song.title}</h5>
                      <p>{song.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#musicCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon text"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#musicCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-4 bg-primary text-white">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/integrantes/victoria" className="btn btn-outline-light">
            <i className="bi bi-arrow-left me-1"></i>Perfil anterior
          </Link>
          <div className="text-center">
            <small>Otros integrantes:</small>
            <div className="mt-2">
              <Link
                to="/integrantes/lucas"
                className="btn btn-sm btn-outline-light me-2"
              >
                Lucas
              </Link>
              <Link
                to="/integrantes/victoria"
                className="btn btn-sm btn-outline-light me-2"
              >
                Victoria
              </Link>
              <Link
                to="/integrantes/sebastian"
                className="btn btn-sm btn-outline-light me-2"
              >
                Sebastián
              </Link>
              <Link
                to="/integrantes/jose"
                className="btn btn-sm btn-outline-light"
              >
                Jose
              </Link>
            </div>
          </div>
          <Link to="/integrantes/jose" className="btn btn-outline-light">
            Siguiente perfil<i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Estiven;
