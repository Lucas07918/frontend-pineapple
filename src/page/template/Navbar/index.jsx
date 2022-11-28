import React from "react";
import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <nav className="navbar-component navbar navbar-expand-lg navbar-light ">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" onClick={() => navigate("/home")}>
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
            <li
              className="nav-item menu-link"
              onClick={() => navigate("/produtos/ipad")}
            >
              <a className="nav-link">iPad</a>
            </li>
            <li
              className="nav-item menu-link"
              onClick={() => navigate("/produtos/macbook")}
            >
              <a className="nav-link">MacBook</a>
            </li>
            <li
              className="nav-item menu-link"
              onClick={() => navigate("/produtos/iphone")}
            >
              <a className="nav-link">iPhone</a>
            </li>
          </ul>
          {!location.pathname.includes("cadastro") ? (
            <BtnCadastro />
          ) : (
            <BtnListar />
          )}
        </div>
      </div>
    </nav>
  );
};

const BtnCadastro = () => {
  const navigate = useNavigate();
  return (
    <a className="btn-cadastrar" onClick={() => navigate("/usuarios/cadastro")}>
      <button className="btn btn-outline-dark " type="button">
        Cadastro
      </button>
    </a>
  );
};

const BtnListar = () => {
  const navigate = useNavigate();
  return (
    <a className="btn-listar" onClick={() => navigate("/usuarios/listar")}>
      <button className="btn btn-outline-dark " type="button">
        Listar
      </button>
    </a>
  );
};

export default NavBar;
