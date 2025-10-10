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
          <Route path="/Lucas" element={<Lucas />} />
          <Route path="/sebastian" element={<Sebastian />} />
          <Route path="/victoria" element={<Victoria />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
