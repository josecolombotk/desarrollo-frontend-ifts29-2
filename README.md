 Proyecto SPA React – Desarrollo Frontend IFTS N°29
 
Carrera: Técnico Superior en Desarrollo de Software
Materia: Desarrollo Frontend
Profesor:  LUCIANO ARIEL MARTINEZ
Año: 2025

Equipo Innovador - Grupo 9
Integrantes:
Sebastián	Gutierrez
Estiven	Fernandez
Lucas	Tarantino
Jose Luis Colombo
Victoria Sobral

Este proyecto es una Single Page Application (SPA) desarrollada con React y Vite, como parte de la materia Desarrollo Frontend en el *Instituto de Formación Técnica Superior N°29*. 
El objetivo principal es transformar un sitio web estático en una aplicación moderna, interactiva y modular, integrando componentes dinámicos como una API de clima en tiempo real.


 Características principales
- Navegación sin recargar la página gracias a **React Router DOM**.  
-  Video de fondo en la sección principal.  
-  Integración con **API de clima** (Open-Meteo) mostrando temperatura en tiempo real.  
-  Componentes reutilizables y organizados por secciones (Home, Bitácora, Integrantes, Victoria, etc.).  
-  Diseño responsive con **Bootstrap** y CSS personalizado.  
-  Configuración optimizada con **Vite** para desarrollo rápido.


Tecnologías utilizadas
| React | Biblioteca principal para la interfaz de usuario |
| Vite | Entorno de desarrollo rápido y moderno |
| CSS / Bootstrap | Estilos visuales y diseño responsive |
| Open-Meteo API | Consulta de datos meteorológicos en tiempo real |
| React Router DOM | Manejo de rutas en la SPA |


 Estructura del proyecto
src/
├── assets/ # Imágenes, videos y recursos multimedia
├── components/ # Componentes reutilizables (Navbar, Footer, etc.)
├── pages/ # Páginas principales (Home, Bitacora, Victoria, etc.)
├── css/ # Estilos CSS personalizados
├── App.jsx # Enrutamiento principal de la SPA
└── main.jsx # Punto de entrada

 
API del Clima
El proyecto obtiene información del clima actual de Buenos Aires utilizando la API pública Open-Meteo.
Instalación y ejecución
Si desea ejecutar el proyecto en su máquina local, siga estos pasos:


Clonar el repositorio
git clone https://github.com/josecolombotk/desarrollo-frontend-ifts29-2.git

Entrar en el proyecto
cd desarrollo-frontend-ifts29-2

Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
Luego abra en su navegador:
http://localhost:5173





Objetivos del proyecto
-Aplicar los conceptos de componentización y reutilización de React.
-Integrar servicios externos mediante APIs públicas.
-Implementar una interfaz responsiva y atractiva.
-Practicar control de versiones con Git y GitHub.
