import { useEffect, useState } from "react";
import "../css/Bitacora.css";
import { usePageMetadata } from "../hooks/usePageMetadata";
import favicon from "../assets/favicon.png";

export default function Bitacora() {
  usePageMetadata("Equipo Innovador - Bitácora", favicon);
  const [mostrarResumen, setMostrarResumen] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  const fases = [
    {
      titulo: "Fase 1: Planificación y Diseño",
      dias: "Días 1-3",
      puntos: [
        "Paleta de colores y tipografía",
        "Layout con tarjetas",
        "Planificación de componentes",
      ],
    },
    {
      titulo: "Fase 2: Desarrollo Frontend",
      dias: "Días 4-10",
      puntos: [
        "Bootstrap y CSS personalizado",
        "Diseño responsivo",
        "Animaciones y componentes interactivos",
      ],
    },
    {
      titulo: "Fase 3: Interactividad JS",
      dias: "Días 11-12",
      puntos: ["Scroll suave", "Contadores animados", "Funciones interactivas"],
    },
    {
      titulo: "Fase 4: Testing y Optimización",
      dias: "Días 13-14",
      puntos: ["Testeo responsivo", "Optimización de performance"],
    },
  ];

  return (
    <>
      <section className="bitacora-header">
        <div className="container">
          <h1>Bitácora del Proyecto</h1>
          <p>
            Registro detallado del proceso de desarrollo y decisiones tomadas
          </p>
        </div>
      </section>

      <section className="container py-5">
        {fases.map((fase, i) => (
          <div key={i} className="bitacora-card fade-in">
            <h3>
              {fase.titulo} <small>({fase.dias})</small>
            </h3>
            <ul>
              {fase.puntos.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </div>
        ))}

        <button
          className="bitacora-btn-resumen"
          onClick={() => setMostrarResumen(!mostrarResumen)}
        >
          Generar Resumen Ejecutivo
        </button>

        {mostrarResumen && (
          <div className="bitacora-section fade-in visible">
            <h3>Resumen Ejecutivo</h3>
            <ul>
              <li>Sitio web 100% responsivo</li>
              <li>Interactividad avanzada con JS</li>
              <li>Diseño moderno y profesional</li>
              <li>Código limpio y documentado</li>
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
