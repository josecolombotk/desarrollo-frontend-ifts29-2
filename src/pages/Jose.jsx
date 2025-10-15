import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "bootstrap";
import "../css/jose.css"; 
import joseImg from "../assets/jose.png";
import juego1Img from "../assets/juego1.png";
import juego2Img from "../assets/juego2.png";
import juego3Img from "../assets/juego3.png";
import juego4Img from "../assets/juego4.png";
import loganFondoVideo from "../assets/logan fondo.mp4";
import logan1Img from "../assets/logan.png";
import logan2Img from "../assets/logan2.jpeg";
import logan3Img from "../assets/logan3.jpeg";
import logan4Img from "../assets/logan4.jpeg";
import joseFavicon from "../assets/jose-favicon.png";

export default function Jose() {
  useEffect(() => {
    const link = document.createElement("link");
    const title = document.createElement("title");
    link.rel = "icon";
    link.href = joseFavicon;
    title.textContent = "José - Perfil";
    document.head.appendChild(link);
    document.head.appendChild(title);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(title);
    };
  }, []);

  const imagenesLogan = [logan1Img, logan2Img, logan3Img, logan4Img];
  const [indiceImagen, setIndiceImagen] = useState(0);
  const imgRef = useRef(null);

  const cambiarImagen = () => {
    if (!imgRef.current) return;

    imgRef.current.style.opacity = 0;
    setTimeout(() => {
      setIndiceImagen((prev) => (prev + 1) % imagenesLogan.length);
      imgRef.current.style.opacity = 1;
    }, 400);
  };

  const datoRandom = () => {
    const datos = [
      "mi nombre real es James Howlett, aunque la mayoría me conoce como Logan.",
      "Nací en Canadá a finales del siglo XIX.",
      "Mis garras originalmente eran de hueso, no de metal.",
      "El adamantium fue implantado en mi cuerpo en el experimento del proyecto Arma X.",
      "He peleado en la Primera y la Segunda Guerra Mundial.",
      "Formé parte del equipo Alpha Flight, antes de unirme a los X-Men.",
      "Mi primera aparición fue en The Incredible Hulk #180 (1974).",
      "Soy considerado uno de los mutantes más populares de Marvel.",
      "He tenido una fuerte relación con Jean Grey, aunque ella siempre estuvo con Cíclope.",
      "Fuí mentor de varios jóvenes mutantes como Kitty Pryde, Rogue y Jubilee.",
      "He pasado parte de mi vida en Japón, donde aprendí artes marciales y me casé.",
      "Mi factor de curación me hace casi inmortal y ralentiza mucho el envejecimiento.",
      "El esqueleto recubierto de adamantium me hace prácticamente indestructible.",
      "Aunque soy rudo y solitario, en el fondo tengo un gran sentido del honor.",
      "He sido miembro de los Vengadores además de los X-Men.",
      "En la saga 'Old Man Logan' se muestra un futuro donde sobrevivo a todos.",
      "En la película Logan (2017) se muestra mi faceta más humana y vulnerable.",
      "Mi frase icónica es: 'Soy el mejor en lo que hago, pero lo que hago no es muy agradable.'",
    ];
    const random = datos[Math.floor(Math.random() * datos.length)];
    alert(random);
  };

  const scrollSuave = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const carrusel = document.querySelector("#carruselJose");
    if (carrusel) new Carousel(carrusel, { interval: 1300, ride: "carousel" });
  }, []);

  return (
    <div id="top" className="jose-page-container">
      {/* Sección perfil */}
      <section className="py-5 mt-5">
        <div className="container">
          <div className="row g-4">
            {/* Col Izquierda */}
            <div className="col-lg-6">
              <div className="card profile-card shadow-lg h-100">
                <div className="card-body p-5">
                  <img src={joseImg} alt="José" className="profile-img mb-3" />
                  <p className="text-muted mb-3">Rafaela, Santa Fe</p>
                  <p className="text-muted mb-3">38 años</p>

                  <h3 className="text-warning mb-3">Sobre Jose</h3>
                  <p className="lead mb-4">
                    Simplemente un estudiante que busca su camino en el
                    apasionante mundo de la programación. Me gusta aprender y
                    crear juegos 2D, además de jugar videojuegos indie. La
                    naturaleza y el ejercicio me parecen un dúo fantástico.
                  </p>

                  <h4 className="text-warning mb-3">Habilidades</h4>
                  <div className="skills-list mb-4">
                    <span className="skill-tag">HTML</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Flask</span>
                    <span className="skill-tag">Godot</span>
                    <span className="skill-tag">Maya</span>
                    <span className="skill-tag">Blender</span>
                    <span className="skill-tag">Gimp</span>
                  </div>

                  {/* Carrusel */}
                  <div
                    id="carruselJose"
                    className="carousel slide mt-4 shadow-lg"
                  >
                    <div className="carousel-inner rounded">
                      <div className="carousel-item active">
                        <img
                          src={juego1Img}
                          className="d-block w-100"
                          alt="Imagen 1 de José"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={juego2Img}
                          className="d-block w-100"
                          alt="Imagen 2 de José"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={juego3Img}
                          className="d-block w-100"
                          alt="Imagen 3 de José"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={juego4Img}
                          className="d-block w-100"
                          alt="Imagen 4 de José"
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carruselJose"
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carruselJose"
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon"></span>
                    </button>
                  </div>
                  <hr />
                  <p className="lead mb-0">
                    Al no tener mucho que agregar sobre mí, quisiera usar la
                    página para presentar al héroe de Marvel, Wolverine.
                  </p>
                </div>
              </div>
            </div>

            {/* Col Derecha */}
            <div className="col-lg-6">
              <div className="card profile-card shadow-lg h-100 position-relative">
                {/* Video de fondo */}
                <video autoPlay muted loop playsInline className="video-bg">
                  <source src={loganFondoVideo} type="video/mp4" />
                </video>
                <div className="card-body p-5 text-center">
                  <img
                    ref={imgRef}
                    src={imagenesLogan[indiceImagen]}
                    alt="Wolverine"
                    className="profile-img mb-3"
                    id="profile-image"
                  />
                  <h2 className="fw-bold text-warning">Wolverine</h2>
                  <p className="text-muted mb-3">
                    <i className="bi bi-geo-alt-fill me-1"></i>Canadá
                  </p>
                  <p className="text-muted mb-3">
                    <i className="bi bi-calendar-event me-1"></i>Más de 100 años
                  </p>

                  <button
                    className="btn btn-info mb-4"
                    id="btn-cambiar"
                    onClick={cambiarImagen}
                  >
                    <i className="bi bi-arrow-repeat me-1"></i>Cambiar imagen
                  </button>

                  <p className="lead mb-4">
                    Nací a finales del siglo XIX en Canadá, bajo el nombre de
                    James Howlett, siendo hijo de una familia rica. Durante mi
                    infancia, descubrí mi naturaleza mutante cuando me brotaron
                    garras óseas de las manos tras presenciar un trauma
                    familiar. Desde ese momento huí de casa y adopté el nombre
                    de Logan, llevando una vida errante marcada por la violencia
                    y la soledad.
                  </p>

                  <h4 className="text-warning mb-3">Habilidades</h4>
                  <div className="skills-list mb-4">
                    <span className="skill-tag">
                      Factor de curación acelerado
                    </span>
                    <span className="skill-tag">Garras de adamantium</span>
                    <span className="skill-tag">Combate cuerpo a cuerpo</span>
                    <span className="skill-tag">Sentidos agudizados</span>
                    <span className="skill-tag">Resistencia sobrehumana</span>
                    <span className="skill-tag">
                      Envejecimiento casi inexistente
                    </span>
                  </div>

                  <h4 className="text-warning mb-3">Experiencia</h4>
                  <div className="mb-4">
                    <h5 className="fw-bold">Miembro de los X-Men</h5>
                    <p className="text-muted mb-2">
                      Instituto Xavier • Desde 1975
                    </p>
                    <p>
                      Lucho por la paz y la coexistencia entre mutantes y
                      humanos, protegiendo a quienes no pueden defenderse.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h5 className="fw-bold">Soldado y mercenario</h5>
                    <p className="text-muted mb-2">
                      Diversas guerras y conflictos
                    </p>
                    <p>
                      He peleado en guerras a lo largo de los años, incluyendo
                      las dos guerras mundiales, siempre sobreviviendo y
                      adaptándome.
                    </p>
                  </div>

                  <div className="mb-4">
                    <button
                      className="btn btn-danger mt-3"
                      onClick={datoRandom}
                    >
                      <i className="bi bi-lightning-charge-fill me-1"></i>Dato
                      Random
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="py-5">
          <div className="container">
            <div className="row g-4"> 
              <div className="col-md-6"> 
                <div className="card h-100 shadow bitacora-card">
                  <div className="card-body">
                    <h4 className="card-title text-warning mb-4">
                      <i className="bi bi-film me-2"></i>Películas Favoritas
                    </h4>
                    <ul className="favorites-list mb-0">
                      <li>
                        <strong>Logan</strong>
                        <p className="mb-0 text-muted">Una última aventura cruda y realista.</p>
                      </li>
                      <li>
                        <strong>X-Men 2</strong>
                        <p className="mb-0 text-muted">Una de las mejores historias del equipo.</p>
                      </li>
                      <li>
                        <strong>Days of Future Past</strong>
                        <p className="mb-0 text-muted">Viajes en el tiempo y decisiones imposibles.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 shadow bitacora-card">
                  <div className="card-body">
                    <h4 className="card-title text-warning mb-4">
                      <i className="bi bi-music-note-beamed me-2"></i>Playlist
                    </h4>
                    <ul className="favorites-list mb-0" id="lista-musica">
                      <li><strong>La Renga - Montaña roja</strong></li>
                      <li><strong>La Renga - Motor, alma y sangre</strong></li>
                      <li><strong>La Renga - Cuando vendrán</strong></li>
                      <li><strong>La Renga - En pie</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      <section className="mb-5 py-4 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/integrantes/sebastian" className="btn btn-outline-light">
                  <i className="bi bi-arrow-left me-1"></i>Perfil anterior
                </Link>
                <div className="text-center">
                  <small>Otros integrantes:</small>
                  <div className="mt-2">
                    <Link to="/integrantes/lucas" className="btn btn-sm btn-outline-light me-2">Lucas</Link>
                    <Link to="/integrantes/sebastian" className="btn btn-sm btn-outline-light me-2">Sebastian</Link>
                    <Link to="/integrantes/estiven" className="btn btn-sm btn-outline-light me-2">Estiven</Link>
                    <Link to="/integrantes/victoria" className="btn btn-sm btn-outline-light">Victoria</Link>
                  </div>
                </div>
                <Link to="/integrantes/estiven" className="btn btn-outline-light">
                  Siguiente perfil<i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
