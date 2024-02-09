import Button from "../Button/Button";
import CartWidget from "../cartWidget/cartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to={'/'} style={{ textDecoration: 'none' }}>
        <a className="navbar-brand">
          Vinilos
        </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <Link to={'/category/Nacionales'} className="nav-link">
              <Button text="Nacionales"/>
            </Link>
            <Link to={'/category/Importados'} className="nav-link">
            <Button text="Importados"/>
            </Link>
            <Link to={'/category/Accesorios'} className="nav-link">
            <Button text="Accesorios"/>
            </Link>
          </ul>
          <Link to={'/cart'} style={{ textDecoration: 'none' }}>
          <ul className="navbar-nav ms-auto">
            <CartWidget notificationCount={0} />
          </ul>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;