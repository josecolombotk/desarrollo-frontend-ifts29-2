import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bitacora from './pages/Bitacora';
import Estiven from './pages/Estiven';
import Jose from './pages/Jose';
import Lucas from './pages/Lucas';
import Sebastian from './pages/Sebastian';
import Victoria from './pages/Victoria';
import ApiPage from './pages/Apipage'; // importa  página de clima

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/estiven" element={<Estiven />} />
          <Route path="/jose" element={<Jose />} />
          <Route path="/lucas" element={<Lucas />} />
          <Route path="/sebastian" element={<Sebastian />} />
          <Route path="/victoria" element={<Victoria />} />
          <Route path="/clima" element={<ApiPage />} /> {/* <-- Nueva ruta */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
