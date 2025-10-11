import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/bitacora">Bitácora</Link> |{" "}
        <Link to="/estiven">Estiven</Link> |{" "}
        <Link to="/jose">Jose</Link> |{" "}
        <Link to="/lucas">Lucas</Link> |{" "}
        <Link to="/sebastian">Sebastian</Link> |{" "}
        <Link to="/victoria">Victoria</Link>
      </nav>
    </header>
  );
}
