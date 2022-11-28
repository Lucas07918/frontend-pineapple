import React from "react";
import MACBOOK2 from "../../../assets/MACBOOK2.png";

const Macbook = () => {
  return (
    <div class="py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="row gx-4 gx-lg-5 align-items-center">
          <div class="col-md-6">
            <img class="card-img-top mb-5 mb-md-0" src={MACBOOK2} alt="Ipad" />
          </div>
          <div class="col-md-6 fundo-branco">
            <div class="small mb-1">Eletronicos</div>
            <h1 class="display-5 fw-bolder">MacBook Air</h1>
            <div class="fs-5 mb-5">
              <span class="text-decoration-line-through">$7500.00</span>
              <span> $7000.00</span>
            </div>
            <p class="lead">
              Desenhado sob medida para o novo chip M2, o MacBook Air une
              rapidez excepcional e consumo inteligente de energia. É um
              notebook cheio de possibilidades, em uma estrutura de alumínio
              resistente, leve e superfina. Perfeito para trabalhar, jogar ou
              criar o que você quiser, em qualquer lugar.
            </p>
            <div class="d-flex">
              <input
                class="form-control text-center me-3"
                id="inputQuantity"
                type="number"
                value="1"
                min="1"
                style={{ width: "4rem" }}
              />
              <button
                class="btn btn-outline-dark flex-shrink-0"
                id="adicionar"
                type="button"
              >
                <i class="bi-cart-fill me-1"></i>
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Macbook;
