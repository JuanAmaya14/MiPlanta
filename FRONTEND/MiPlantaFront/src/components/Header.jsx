import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import "../scss/components/Header.scss";

function Header() {
  return (
    <>
      <header id="head">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img
              className="navbar-brand"
              src={logo}
              alt="Logo"
              width="40"
              height="54"
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/graficas">
                    Graficas
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <br />
    </>
  );
}

export default Header;
