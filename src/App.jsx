import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";


//  Importar componentes de layout
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer.jsx";

// Importar los componentes de las páginas
import HomePage from "./pages/Home";
import BitacoraPage from "./pages/Bitacora";
import IntegrantePage from "./pages/IntegrantePage";
import Galeria from './pages/GaleriaJsonPage';
import ApiPage from './pages/Apipage';

// --- Componente Layout ---
const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div
        className="main-content"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <main style={{ flex: "1 0 auto" }}>
          {/* Outlet es el marcador de posición donde React Router renderizará la página actual */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

// se define la lógica de enrutamiento de la aplicación.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="bitacora" element={<BitacoraPage />} />
         <Route path="galeria" element={<Galeria />} />
         <Route path="apipage" element={<ApiPage />} />

        {/* La ruta vuelve a ser como al principio */}
        <Route path="integrantes/:id" element={<IntegrantePage />} />
      </Route>
    </Routes>
  );
}

export default App;
