import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/estiven.css";
import SequentialCarousel from "../components/carousel3d/Carousel";
import Carousel3D from "../components/carousel3d/Carousel3D";

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

  // DATOS PARA LOS CARRUSELES - DEBEN ESTAR DEFINIDOS
  const moviesData = [
    { 
      image: shelterMovie, 
      title: "Shelter", 
      description: "Obligado a renunciar a sus sueños de estudiar arte, Zach pasa sus días trabajando en un trabajo sin futuro y ayudando a su hermana necesitada a cuidar a su hijo. En su tiempo libre, surfea, dibuja y pasa tiempo con su mejor amigo, Gabe, quien vive en la zona adinerada de la ciudad. Cuando el hermano mayor de Gabe, Shaun, regresa a casa, se siente atraído por la generosidad y el talento de Zach. Zach se enamora de Shaun mientras lucha por conciliar sus propios deseos con las necesidades de su familia." 
    },
    { 
      image: thamePoMovie, 
      title: "Thame y Po", 
      description: "En la despedida de la banda de chicos tailandesa Mars, el camarógrafo Po hace un vínculo con el cantante Thame, quien le confiesa sus planes de emprender una carrera en solitario en Corea del Sur, dejando atrás a sus compañeros de banda." 
    },
    { 
      image: sense8Movie, 
      title: "Sense 8", 
      description: "Un grupo de personas en todo el mundo están repentinamente vinculados mentalmente, y deben encontrar una manera de sobrevivir siendo cazados por quienes los ven como una amenaza para el orden mundial." 
    },
    { 
      image: magiMovie, 
      title: "Magi", 
      description: "Alibaba es un muchacho que vive en mundo en el que han aparecido misteriosas torres por el mundo conocidas como 'Mazmorras'. Se dice que quien entre en una y consiga llegar hasta el final, conseguirá tesoros y poderes de incalculable valor. Alibaba conoce un día al pequeño Aladdin, el cual le ayudará a cumplir su sueño de finalizar una mazmorra y tal vez, su destino." 
    },
    { 
      image: heartstopperMovie, 
      title: "Heartstopper", 
      description: "Una serie que sigue la historia de amor entre Charlie Spring y Nick Nelson, dos estudiantes de secundaria británicos. Charlie, un chico abiertamente gay, se enamora de Nick, un popular jugador de rugby. La serie explora temas de identidad, amistad, amor adolescente y la importancia de la aceptación personal y familiar, todo contado con una sensibilidad única y representación LGBTQ+ auténtica." 
    },
  ];

  const musicData = [
    { 
      img: hallOfFameSong, 
      title: "Hall of Fame", 
      description: "'Hall of Fame' es una canción de la banda irlandesa The Script con William.i.am. Primer sencillo de su álbum #3, trata sobre perseguir sueños y dejar huella en el mundo. Desde su lanzamiento, ha sido licenciada para uso en diversos medios." 
    },
    { 
      img: ghostSong, 
      title: "Ghost", 
      description: "'Ghost' es una balada emotiva de Justin Bieber del álbum 'Justice' (2021). La canción explora temas de pérdida, nostalgia y el anhelo por alguien que ya no está presente. Con su melodía melancólica y letras profundas, se convirtió en uno de los temas más emotivos del álbum." 
    },
    { 
      img: theNightsSong, 
      title: "The Nights", 
      description: "'The Nights' es una canción de Avicii (2014) que combina folk y EDM. Con letras inspiradoras sobre vivir la vida al máximo, se convirtió en uno de sus mayores éxitos y un himno generacional." 
    },
    { 
      img: youAreTheReasonSong, 
      title: "You Are The Reason", 
      description: "'You Are The Reason' es una emotiva balada de Calum Scott (2017) que se convirtió en un éxito mundial con letras sobre el amor y la vulnerabilidad." 
    },
  ];

  const rotarImagen = () => {
    setRotation(rotation + 90);
  };

  return (
    <div className="estiven-page">
      {/* Sección del Perfil */}
      <section className="py-5 mt-5">
        <div className="container">
          <div className="card profile-card shadow-lg ">
            <div className="card-body p-5">
              <div className="row align-items-center">
                <div className="col-lg-4 text-center mb-4 mb-lg-0">
                  <img
                    src={estivenImg}
                    alt="Estiven"
                    className="profile-img mb-3"
                    style={{ 
                      transform: `rotate(${rotation}deg)`, 
                      transition: "transform 0.5s ease" 
                    }}
                  />
                  <h2 className="fw-bold text-primary">Estiven</h2>
                  <p className="text-muted mb-3">
                    <i className="bi bi-geo-alt-fill me-1"></i>Buenos Aires, Argentina
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
                    Soy un desarrollador de software estudiando en el Instituto de Formación Técnica Superior N° 29. 
                    Trabajo desarrollando aplicaciones web para una empresa mediana y me especializo en el área de e-commerce 
                    para una empresa que vende muebles de pino. Me enfoco principalmente en desarrollo para PC.
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
                    <p className="text-muted mb-2">Empresa Mediana • 2022 - Presente</p>
                    <p>Desarrollo de aplicaciones web utilizando NodeJS, Express, NestJS, NextJS y MySQL para soluciones empresariales.</p>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-bold">Desarrollador E-Commerce</h5>
                    <p className="text-muted mb-2">Empresa de Muebles de Pino • 2020 - Presente</p>
                    <p>Desarrollo y mantenimiento de plataforma e-commerce especializada en venta de muebles de pino, enfocado en aplicaciones para PC.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Favoritos */}
      <section className="py-5 bg-light favorites-section">
        <div className="container">
          <h3 className="text-center mb-5 text-primary">Mis Favoritos</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-cpu display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Inteligencia Artificial</h5>
                  <p className="card-text">Exploro las posibilidades de la IA y su aplicación en desarrollo.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-tv display-4 text-warning mb-3"></i>
                  <h5 className="card-title">Series y Películas</h5>
                  <p className="card-text">Disfruto viendo series y películas en mi tiempo libre.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-book display-4 text-success mb-3"></i>
                  <h5 className="card-title">Lectura y Aprendizaje</h5>
                  <p className="card-text">Me encanta leer y aprender cosas nuevas constantemente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel de Películas usando SequentialCarousel */}
      <section className="py-5">
        <div className="container">
          <h3 className="section-title text-primary">
            <i className="bi bi-film me-2"></i>Series y Películas Favoritas
          </h3>
          
          <SequentialCarousel 
            items={moviesData}
            autoRotate={true}
            interval={5000}
            showIndicators={true}
            showControls={true}
          />
        </div>
      </section>

      {/* Carrusel de Música usando Carousel3D */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="section-title music text-primary">
            <i className="bi bi-music-note-beamed me-2"></i>Música Favorita
          </h3>
          
          <Carousel3D 
            items={musicData}
            autoRotate={false}
            interval={6000}
          />
        </div>
      </section>

      {/* Navegación entre integrantes */}
      <section className="py-4 bg-primary text-white">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/integrantes/jose" className="btn btn-outline-light">
            <i className="bi bi-arrow-left me-1"></i>Perfil anterior
          </Link>
          <div className="text-center">
            <small>Otros integrantes:</small>
            <div className="mt-2">
              <Link to="/integrantes/lucas" className="btn btn-sm btn-outline-light me-2">Lucas</Link>
              <Link to="/integrantes/victoria" className="btn btn-sm btn-outline-light me-2">Victoria</Link>
              <Link to="/integrantes/sebastián" className="btn btn-sm btn-outline-light me-2">Sebastián</Link>
              <Link to="/integrantes/jose" className="btn btn-sm btn-outline-light">Jose</Link>
            </div>
          </div>
          <Link to="/integrantes/lucas" className="btn btn-outline-light">
            Siguiente perfil<i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Estiven;
