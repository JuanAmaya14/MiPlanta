import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

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
            <div className="collapse navbar-collapse" id="navbarNav">
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
