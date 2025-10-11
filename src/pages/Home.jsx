import { useEffect, useState } from "react";
import "../css/styles.css";
import heroVideo from "../assets/hero-bg.mp4"; 
import lucasImg from "../assets/lucas_perfil.png";
import victoriaImg from "../assets/victoria-ind.png";
import sebastianImg from "../assets/sebastian-perfil.webp";
import joseImg from "../assets/jose.png";
import estivenImg from "../assets/est-avatar.png";

export default function Home() {
  const [clima, setClima] = useState(null);

  // --- Llamada a API de clima ---
  useEffect(() => {
    async function fetchClima() {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-34.61&longitude=-58.38&current_weather=true"
        );
        const data = await res.json();
        if (data.current_weather) {
          setClima(
            `Temperatura actual: ${data.current_weather.temperature}°C, Viento: ${data.current_weather.windspeed} km/h`
          );
        }
      } catch (error) {
        console.error("Error al obtener el clima:", error);
        setClima("No se pudo obtener el clima.");
      }
    }
    fetchClima();
  }, []);

  const integrantes = [
    { nombre: "Lucas", img: lucasImg, ubicacion: "Villa Devoto, CABA", descripcion: "Me encanta la tecnología, el desarrollo de software, los juegos, pasar tiempo en familia y el fútbol.", skills: ["HTML", "CSS", "JavaScript", "C#"] },
    { nombre: "Victoria", img: victoriaImg, ubicacion: "Buenos Aires, Argentina", descripcion: "Diseñadora multimedia especializada en UX/UI. Me apasiona transformar ideas en productos digitales.", skills: ["Figma", "Adobe Suite", "HTML", "JavaScript"] },
    { nombre: "Sebastián", img: sebastianImg, ubicacion: "Mendoza, Argentina", descripcion: "Administrador de redes especializado en infraestructura TI y seguridad de redes.", skills: ["Mikrotik", "Python", "PHP", "Firewall"] },
    { nombre: "Jose", img: joseImg, ubicacion: "???", descripcion: "Estudiante de desarrollo de software, web y de creación de videojuegos.", skills: ["HTML", "Python", "Flask", "Godot", "Maya", "Blender"] },
    { nombre: "Estiven", img: estivenImg, ubicacion: "Buenos Aires, Argentina", descripcion: "Desarrollador de software especializado en e-commerce y aplicaciones web.", skills: ["NodeJS", "MySQL", "Express", "NestJS"] }
  ];

  return (
    <div className="home trama">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundColor: "#111" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src={heroVideo} type="video/mp4" />
          Tu navegador no soporta video en HTML5.
        </video>

        <div className="container hero-content">
          <div className="row align-items-center min-vh-100 pt-5">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Equipo Innovador</h1>
              <p className="lead mb-4">
                Somos un grupo de estudiantes apasionados por la tecnología y el
                desarrollo web. Nuestro objetivo es crear soluciones innovadoras
                y aprender juntos en este emocionante viaje.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-lg">
                  <i className="bi bi-hand-thumbs-up me-2"></i>¡Bienvenido!
                </button>
                <a href="#equipo" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-arrow-down me-2"></i>Conocer al equipo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección del Equipo */}
      <section id="equipo" className="py-5">
        <div className="container text-center">
          <h2 className="display-5 fw-bold text-primary mb-3">Nuestro Equipo</h2>
          <p className="lead text-muted mb-5">
            Conoce a los integrantes de nuestro equipo y descubre sus habilidades e intereses.
          </p>

          <div className="row g-4">
            {integrantes.map((integrante, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="card h-100">
                  <img src={integrante.img} className="card-img-top" alt={integrante.nombre} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{integrante.nombre}</h5>
                    <p className="text-muted mb-3">
                      <i className="bi bi-geo-alt-fill me-1"></i>{integrante.ubicacion}
                    </p>
                    <p className="card-text">{integrante.descripcion}</p>
                    <div className="skills-list mb-3">
                      {integrante.skills.map((s, j) => (
                        <span key={j} className="skill-tag">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de clima */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h4 className="mb-3 text-primary">Clima actual en Buenos Aires 🌤️</h4>
          <p className="lead">{clima || "Cargando clima..."}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div>
            <h5>Equipo Innovador - Grupo 9</h5>
            <p className="mb-0">Desarrollando el futuro, una línea de código a la vez.</p>
          </div>
          <div className="text-md-end mt-3 mt-md-0">
            <p className="mb-0">
              <i className="bi bi-calendar-event me-1"></i> © 2025 - Proyecto de Desarrollo Web
            </p>
            <button
              className="btn btn-outline-light btn-sm mt-2"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <i className="bi bi-arrow-up"></i> Volver arriba
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
