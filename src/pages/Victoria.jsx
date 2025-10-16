import React, { useEffect, useRef } from "react";
import { Carousel } from "bootstrap";
import "../css/victoria.css";
import { Link } from "react-router-dom";

// Importar imágenes desde assets
import victoriaImg from "../assets/victoria-ind.png";
import debootImg from "../assets/victoria-deboot.png";
import hypedImg from "../assets/victoria-hyped.png";
import interactImg from "../assets/victoria-interact.png";
import orgulloImg from "../assets/vic-orgullo.webp";
import renglonesImg from "../assets/vic-renglones.jpg";
import koreanImg from "../assets/victoria-korean.jpg";
import hometownImg from "../assets/victoria-hometown.jpg";
import virginImg from "../assets/vic-virgin.jpeg";
import melodramaImg from "../assets/vic-melodrama.jpg";
import speaknowImg from "../assets/vic-speaknow.jpg";
import oysterImg from "../assets/vic-oyster.jpg";
import logoImg from "../assets/logo.svg";
import fondoImg from "../assets/victoria-fondo.webp";
import favicon from "../assets/victoria-favicon.png";

export default function Victoria() {
  const carouselRef = useRef(null);
  const pageContainerRef = useRef(null);


  useEffect(() => {

    const originalTitle = document.title;
    document.title = "Victoria";


    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    const originalIcon = link.href;
    link.href = favicon;


    return () => {
      document.title = originalTitle;
      if (originalIcon) {
        link.href = originalIcon;
      }
    };
  }, []);

  // Función de animación de corazones
  const crearCorazon = () => {
    if (!pageContainerRef.current) return;

    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "🧚🏻‍♀️";
    corazon.style.position = "fixed";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = Math.random() * 20 + 20 + "px";
    corazon.style.pointerEvents = "none";
    pageContainerRef.current.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 6000);
  };

  const mostrarCodigoEjemplo = () => {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        crearCorazon();
      }, i * 200);
    }
  };

  // Efecto "escribir nombre"
  useEffect(() => {
    const nombre = document.querySelector(".typing-effect");
    if (!nombre) return;

    const textoOriginal = "Victoria";
    nombre.textContent = "";
    let i = 0;

    const typing = setInterval(() => {
      if (i < textoOriginal.length) {
        nombre.textContent += textoOriginal.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  // Inicializar carousel
  useEffect(() => {
    const carrusel = document.querySelector("#carouselProyectos");
    if (carrusel) {
      new Carousel(carrusel, { interval: 3000, ride: "carousel" });
    }
  }, []);


  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowX = "";
      document.documentElement.style.overflowX = "";
    };
  }, []);

  const scrollSuave = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="top"
      ref={pageContainerRef}
      className="victoria-page-container"
      style={{ backgroundImage: `url(${fondoImg})` }}
    >
      {/* 🪶 Perfil Principal */}
      <section className="py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card profile-card shadow-lg">
                <div className="card-body p-5">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center mb-4 mb-lg-0">
                      <img
                        src={victoriaImg}
                        alt="Victoria"
                        className="profile-img mb-3"
                      />
                      <h2 className="fw-bold text-primary typing-effect">
                        Victoria
                      </h2>
                      <p className="text-muted mb-3">
                        <i className="bi bi-geo-alt-fill me-1"></i>Buenos Aires,
                        Argentina
                      </p>
                      <p className="text-muted mb-3">
                        <i className="bi bi-calendar-event me-1"></i>23 años
                      </p>
                      <button
                        className="btn btn-success"
                        onClick={mostrarCodigoEjemplo}
                      >
                        <i className="bi me-1"></i>¡Qué llueva!
                      </button>
                    </div>

                    <div className="col-lg-8">
                      <h3 className="text-primary mb-3">Sobre mí</h3>
                      <p className="lead mb-4">
                        Diseñadora multimedia especializada en UX/UI. Lo que más
                        me interesa es diseñar aplicaciones desde cero y darles
                        vida a través de interfaces intuitivas y visualmente
                        atractivas. Me apasiona transformar ideas en productos
                        digitales coherentes, usables y funcionales, combinando
                        el diseño con la programación para crear experiencias
                        completas y bien pensadas.
                      </p>

                      <h4 className="text-primary mb-3">Habilidades</h4>
                      <div className="skills-list mb-4">
                        <span className="skill-tag">Figma</span>
                        <span className="skill-tag">Adobe Suit</span>
                        <span className="skill-tag">Prototipado</span>
                        <span className="skill-tag">HTML</span>
                        <span className="skill-tag">CSS</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">Kotlin</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase de Proyectos */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card profile-card shadow-lg mt-4">
                <div className="card-body p-4">
                  <h3
                    className="text-primary mb-0 d-flex justify-content-between align-items-center"
                    style={{ cursor: "pointer" }}
                    data-bs-toggle="collapse"
                    data-bs-target="#showcaseProyectos"
                  >
                    Proyectos destacados
                    <i className="bi bi-chevron-down"></i>
                  </h3>
                </div>

                <div id="showcaseProyectos" className="collapse">
                  <div className="card-body pt-0">
                    <div
                      id="carouselProyectos"
                      className="carousel slide"
                      data-bs-ride="carousel"
                      ref={carouselRef}
                    >
                      <div className="carousel-inner">
                        {/* Proyecto 1 */}
                        <div className="carousel-item active">
                          <div className="row align-items-center">
                            <div className="col-md-6">
                              <img
                                src={debootImg}
                                className="img-fluid rounded shadow-sm"
                                alt="Deboot"
                              />
                            </div>
                            <div className="col-md-6">
                              <h4 className="text-primary">Deboot</h4>
                              <p className="text-muted">
                                Deboot es una aplicación diseñada
                                específicamente para ayudar a los estudiantes
                                universitarios a encontrar empleo. Ofrece una
                                conexión directa con empresas que buscan talento
                                joven y proporciona oportunidades de pasantías y
                                empleos a medio tiempo, facilitando la
                                transición del ámbito académico al profesional.
                              </p>
                              <a
                                href="https://www.figma.com/proto/REgjL9uQTrCKBtY75HD29B/Deboot?page-id=770%3A10540&node-id=770-11704&p=f&viewport=528%2C1022%2C0.04&t=OjVqIR37nmRkxoyT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=770%3A11696"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success mt-2"
                              >
                                Conoce el proyecto
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Proyecto 2 */}
                        <div className="carousel-item">
                          <div className="row align-items-center">
                            <div className="col-md-6">
                              <img
                                src={hypedImg}
                                className="img-fluid rounded shadow-sm"
                                alt="Hyped"
                              />
                            </div>
                            <div className="col-md-6">
                              <h4 className="text-primary">Hyped</h4>
                              <p className="text-muted">
                                Hyped es una aplicación destinada a descubrir
                                eventos y comprar entradas de manera fácil y
                                emocionante. Con una interfaz intuitiva y
                                emocionantes funcionalidades, te permite
                                explorar una amplia variedad de eventos y
                                asegurar tus entradas en pocos pasos, para que
                                nunca te pierdas tus experiencias favoritas.
                              </p>
                              <a
                                href="https://www.figma.com/proto/paQ5YEosDDSi5DOzWCowAu/HYPED---Event-App--Copy-?page-id=222%3A299&node-id=222-300&viewport=366%2C-2%2C0.12&t=zNvyxNiPJ5fxy0VC-1&scaling=scale-down&content-scaling=fixed"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success mt-2"
                              >
                                Conoce el proyecto
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Proyecto 3 */}
                        <div className="carousel-item">
                          <div className="row align-items-center">
                            <div className="col-md-6">
                              <img
                                src={interactImg}
                                className="img-fluid rounded shadow-sm"
                                alt="InteractxTech"
                              />
                            </div>
                            <div className="col-md-6">
                              <h4 className="text-primary">InteractxTech</h4>
                              <p className="text-muted">
                                InteractxTech es un sitio web que sirve como un
                                punto central para todo lo relacionado con la
                                realidad virtual y aumentada. Puedes encontrar
                                las últimas noticias, reseñas detalladas,
                                tutoriales para desarrolladores y una comunidad
                                apasionada por el panorama de la tecnología
                                inmersiva.
                              </p>
                              <a
                                href="https://www.figma.com/proto/1diO6i1TJgw2kV0o2e0837/InteractxTech--Behance-?page-id=901%3A13758&node-id=901-14625&p=f&viewport=-52%2C307%2C0.07&t=NnzLHGojKXjIHsqE-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=901%3A14625"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success mt-2"
                              >
                                Conoce el proyecto
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Controles del carrusel */}
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselProyectos"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon"></span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselProyectos"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon"></span>
                      </button>
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
                    <i className="bi bi-film me-2"></i>Películas y Series
                    Favoritas
                  </h4>
                  <ul className="favorites-list">
                    <li>
                      <img
                        src={orgulloImg}
                        alt="Orgullo y Prejuicio"
                        className="fav-img"
                      />
                      <div>
                        <strong>Orgullo y Prejuicio</strong>
                        <p className="mb-0 text-muted">
                          Película // Romance // 2005
                        </p>
                      </div>
                    </li>
                    <li>
                      <img
                        src={renglonesImg}
                        alt="Los Renglones Torcidos"
                        className="fav-img"
                      />
                      <div>
                        <strong>Los Renglones Torcidos de Dios</strong>
                        <p className="mb-0 text-muted">
                          Película // Suspenso - Misterio // 2022
                        </p>
                      </div>
                    </li>
                    <li>
                      <img
                        src={koreanImg}
                        alt="A Korean Odyssey"
                        className="fav-img"
                      />
                      <div>
                        <strong>A Korean Odyssey</strong>
                        <p className="mb-0 text-muted">
                          Serie // Drama // 2017
                        </p>
                      </div>
                    </li>
                    <li>
                      <img
                        src={hometownImg}
                        alt="Hometown Cha-Cha-Cha"
                        className="fav-img"
                      />
                      <div>
                        <strong>Hometown Cha-Cha-Cha</strong>
                        <p className="mb-0 text-muted">
                          Serie // Romance // 2021
                        </p>
                      </div>
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
                  <ul className="favorites-list">
                    <li>
                      <img
                        src={virginImg}
                        alt="Lorde Virgin"
                        className="fav-img"
                      />
                      <div>
                        <strong>Lorde - Virgin</strong>
                        <p className="mb-0 text-muted">Álbum // 2025</p>
                      </div>
                    </li>
                    <li>
                      <img
                        src={melodramaImg}
                        alt="Lorde Melodrama"
                        className="fav-img"
                      />
                      <div>
                        <strong>Lorde - Melodrama</strong>
                        <p className="mb-0 text-muted">Álbum // 2017</p>
                      </div>
                    </li>
                    <li>
                      <img
                        src={speaknowImg}
                        alt="Speak Now"
                        className="fav-img"
                      />
                      <div>
                        <strong>Taylor Swift - Speak Now</strong>
                        <p className="mb-0 text-muted">Álbum // 2010</p>
                      </div>
                    </li>
                    <li>
                      <img
                        src={oysterImg}
                        alt="Chloe Moriondo"
                        className="fav-img"
                      />
                      <div>
                        <strong>Chloe Moriondo - oyster</strong>
                        <p className="mb-0 text-muted">Álbum // 2025</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Navegación entre perfiles */}
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
                    <Link to="/integrantes/jose" className="btn btn-sm btn-outline-light">Jose</Link>
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