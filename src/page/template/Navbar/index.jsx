import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  // const navigate = useNavigate();

  return (
    <nav className="navbar-component navbar navbar-expand-lg navbar-light ">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#">
          PinneApple Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link">iPad</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000?4">
                MacBook
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000?5">
                iPhone
              </a>
            </li>
          </ul>

          <BtnCadastro />
        </div>
      </div>
    </nav>
  );
};

const BtnCadastro = () => {
  return (
    <a className="btn-cadastrar">
      <button className="btn btn-outline-dark " type="submit">
        Cadastro
      </button>
    </a>
  );
};

export default NavBar;
