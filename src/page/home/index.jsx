import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-center">
      <h1>Bem-Vindo!</h1>
      <Produtos />
    </div>
  );
};

const Produtos = () => {
  return (
    <div className="products">
      <div class="product-square ipad"></div>
      <div class="product-square iphone"></div>
      <div class="product-square macbook"></div>
    </div>
  );
};

export default Home;
