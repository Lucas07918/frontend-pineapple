import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../page/home";
import Ipad from "../page/produtos/ipad";
import Iphone from "../page/produtos/iphone";
import Macbook from "../page/produtos/macbook";
import Cadastro from "../page/usuarios/cadastro";
import Listar from "../page/usuarios/listar";
import React from "react";
import Editar from "../page/usuarios/editar";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/usuarios/cadastro" element={<Cadastro />} />
      <Route path="/usuarios/listar" element={<Listar />} />
      <Route path="/produtos/ipad" element={<Ipad />} />
      <Route path="/produtos/iphone" element={<Iphone />} />
      <Route path="/produtos/macbook" element={<Macbook />} />
      <Route path="/usuarios/editar/:userId" element={<Editar />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
