import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "bootstrap";
import "../css/jose.css"; // solo para este componente


export default function Jose() {
  const imagenesLogan = [
    "/img/logan.png",
    "/img/logan2.jpeg",
    "/img/logan3.jpeg",
    "/img/logan4.jpeg",
  ];
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
    <div id="top">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src="/img/logo.svg" alt="Logo" width="40" height="40" className="me-2" />
            Equipo Innovador
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Inicio</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown">
                  Integrantes
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/lucas">Lucas</a></li>
                  <li><a className="dropdown-item" href="/victoria">Victoria</a></li>
                  <li><a className="dropdown-item" href="/sebastian">Sebastián</a></li>
                  <li><a className="dropdown-item active" href="/jose">Jose</a></li>
                  <li><a className="dropdown-item" href="/estiven">Estiven</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/bitacora">Bitácora</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sección perfil */}
      <section className="py-5 mt-5">
        <div className="container">
          <div className="row g-4">

            {/* Col Izquierda */}
            <div className="col-lg-6">
              <div className="card profile-card shadow-lg h-100">
                <div className="card-body p-5">
                  <img src="/img/jose.png" alt="José" className="profile-img mb-3" />
                  <p className="text-muted mb-3">Rafaela, Santa Fe</p>
                  <p className="text-muted mb-3">38 años</p>

                  <h3 className="text-warning mb-3">Sobre Jose</h3>
                  <p className="lead mb-4">
                    Simplemente un estudiante que busca su camino en el apasionante mundo de la programación.
                    Me gusta aprender y crear juegos 2D, además de jugar videojuegos indie. La naturaleza y
                    el ejercicio me parecen un dúo fantástico.
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
                  <div id="carruselJose" className="carousel slide mt-4 shadow-lg">
                    <div className="carousel-inner rounded">
                      <div className="carousel-item active">
                        <img src="/img/juego1.png" className="d-block w-100" alt="Imagen 1 de José" />
                      </div>
                      <div className="carousel-item">
                        <img src="/img/juego2.png" className="d-block w-100" alt="Imagen 2 de José" />
                      </div>
                      <div className="carousel-item">
                        <img src="/img/juego3.png" className="d-block w-100" alt="Imagen 3 de José" />
                      </div>
                      <div className="carousel-item">
                        <img src="/img/juego4.png" className="d-block w-100" alt="Imagen 4 de José" />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carruselJose" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carruselJose" data-bs-slide="next">
                      <span className="carousel-control-next-icon"></span>
                    </button>
                  </div>

                  <hr />
                  <p className="lead mb-0">
                    Al no tener mucho que agregar sobre mí, quisiera usar la página para presentar al héroe de Marvel, Wolverine.
                  </p>
                </div>
              </div>
            </div>

            {/* Col Derecha */}
            <div className="col-lg-6">
              <div className="card profile-card shadow-lg h-100 position-relative">
                <video autoPlay muted loop playsInline className="video-bg">
                  <source src="/video/logan fondo.mp4" type="video/mp4" />
                </video>
                <div className="card-body p-5 text-center">
                  <img ref={imgRef} src={imagenesLogan[indiceImagen]} alt="Wolverine" className="profile-img mb-3" id="profile-image" />
                  <h2 className="fw-bold text-warning">Wolverine</h2>
                  <button className="btn btn-info mb-4" onClick={cambiarImagen}>Cambiar imagen</button>
                  <button className="btn btn-danger mt-3" onClick={datoRandom}>Dato Random</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Equipo Innovador</h5>
              <p className="mb-0">Desarrollando el futuro, un proyecto a la vez.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0">&copy; 2025 Equipo Innovador. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
