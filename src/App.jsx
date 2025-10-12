import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

// 1. Importar componentes de layout
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

// 2. Importar los componentes de las páginas
import HomePage from "./pages/Home";
import BitacoraPage from "./pages/Bitacora";
import IntegrantePage from "./pages/IntegrantePage";
// (Aquí importarías las nuevas páginas cuando las crees)
import JsonPage from "./data/galeria.json";
// import ApiPage from './pages/ApiPage';

// --- Componente Layout ---
// Este componente define la estructura visual que se repetirá en todas las páginas:
// la barra lateral a la izquierda y el contenido principal con el footer a la derecha.
const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginLeft: "250px", // Este margen es clave para no quedar debajo del Sidebar
          minHeight: "100vh", // Asegura que el layout ocupe al menos toda la altura de la pantalla
        }}
      >
        <main
          style={{ flex: "1 0 auto"}}
        >
          {/* Outlet es el marcador de posición donde React Router renderizará la página actual */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

// --- Componente Principal App ---
// Aquí se define la lógica de enrutamiento de la aplicación.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="bitacora" element={<BitacoraPage />} />

        {/* La ruta vuelve a ser como al principio */}
        <Route path="integrantes/:id" element={<IntegrantePage />} />
      </Route>
    </Routes>
  );
}

export default App;
