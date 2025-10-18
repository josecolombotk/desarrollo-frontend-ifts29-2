import { useEffect, useState } from "react";
// Asegúrate de que la ruta a tu archivo CSS sea la correcta.
import "../css/Bitacora.css"; 
import { usePageMetadata } from "../hooks/usePageMetadata";
import favicon from "../assets/favicon.png";

export default function Bitacora() {
  usePageMetadata("Equipo Innovador - Bitácora del Proyecto", favicon);
  // Estado para controlar la visibilidad del resumen ejecutivo.
  const [mostrarResumen, setMostrarResumen] = useState(false);

  // Hook para animar la aparición de las tarjetas al hacer scroll.
  useEffect(() => {
    const cards = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  // Array con los datos de cada fase del proyecto de migración.
  const fases = [
    {
      titulo: "Fase 1: Planificación y Configuración del Entorno",
      dias: "Días 1-2",
      puntos: [
        "Creación de un nuevo repositorio en GitHub para el proyecto.",
        "Inicialización del proyecto React utilizando Vite para un entorno de desarrollo rápido y moderno.",
        "Análisis del TP1 para definir la jerarquía de componentes y planificación de la estructura de carpetas (assets, components, pages, data).",
        "Configuración inicial de Vercel para el despliegue continuo.",
      ],
    },
    {
      titulo: "Fase 2: Migración Estructural y Componentización",
      dias: "Días 3-7",
      puntos: [
        "Desarrollo de componentes reutilizables (Navbar, Footer, etc.).",
        "Implementación del nuevo Sidebar como componente fijo para la navegación principal.",
        "Migración de las páginas estáticas (Portada, Bitácora, Perfiles) a componentes de React dentro de la carpeta 'pages'.",
        "Implementación de React Router para establecer la navegación tipo SPA y las rutas de la aplicación (/bitacora, /integrantes/:id).",
      ],
    },
    {
      titulo: "Fase 3: Desarrollo de Nuevas Secciones de Datos",
      dias: "Días 8-11",
      puntos: [
        "Creación de un archivo JSON local con 20 objetos para la nueva sección de datos.",
        "Desarrollo del componente encargado de leer el archivo JSON y renderizar la información dinámicamente en formato de tarjetas.",
        "Selección e integración de una API pública para la segunda sección de datos.",
        "Creación de un componente para consumir la API, manejar el estado de carga y mostrar los resultados de forma asíncrona.",
      ],
    },
    {
      titulo: "Fase 4: Testing, Documentación y Despliegue Final",
      dias: "Días 12-14",
      puntos: [
        "Revisión y ajuste del diseño responsivo para 3 puntos de quiebre (móvil, tablet, escritorio).",
        "Elaboración de los diagramas de Árbol de Renderizado y Organización de Carpetas utilizando Draw.io.",
        "Actualización completa del archivo README.md con la nueva documentación del proyecto.",
        "Realización de commits finales y verificación del despliegue exitoso en Vercel.",
      ],
    },
  ];

  return (
    <>
      <section className="bitacora-header">
        <div className="container">
          <h1>Bitácora del Proyecto</h1>
          <p>Registro del proceso de migración a React y desarrollo de nuevas funcionalidades para el TP2.</p>
        </div>
      </section>

      <section className="container py-5">
        {fases.map((fase, i) => (
          <div key={i} className="bitacora-card fade-in">
            <h3>{fase.titulo} <small className="text-muted">({fase.dias})</small></h3>
            <ul>
              {fase.puntos.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
          </div>
        ))}

        <div className="text-center mt-4">
          <button
            className="btn btn-success btn-lg"
            onClick={() => setMostrarResumen(!mostrarResumen)}
          >
            <i className="bi bi-file-earmark-check me-2"></i>
            {mostrarResumen ? "Ocultar Resumen" : "Mostrar Resumen Ejecutivo"}
          </button>
        </div>

        {mostrarResumen && (
          <div className="bitacora-section fade-in visible mt-4">
            <div>
              <div className="card-header">
                <h3>Resumen Ejecutivo del Proyecto</h3>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">✅ Proyecto migrado exitosamente a una SPA con React.</li>
                <li className="list-group-item">✅ Implementación de React Router para una navegación fluida sin recargas.</li>
                <li className="list-group-item">✅ Renderizado dinámico de datos desde un archivo JSON local y una API pública.</li>
                <li className="list-group-item">✅ Código organizado en componentes reutilizables y estructura de carpetas modular.</li>
                <li className="list-group-item">✅ Sitio web 100% responsivo y desplegado en Vercel.</li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </>
  );
}