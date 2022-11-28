import React from "react";
import IPHONE from "../../../assets/IPHONE.png";

const Iphone = () => {
  return (
    <div class="py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="row gx-4 gx-lg-5 align-items-center">
          <div class="col-md-6">
            <img class="card-img-top mb-5 mb-md-0" src={IPHONE} alt="Iphone" />
          </div>
          <div class="col-md-6 fundo-branco">
            <div class="small mb-1">Eletronicos</div>
            <h1 class="display-5 fw-bolder">iPhone 13</h1>
            <div class="fs-5 mb-5">
              <span class="text-decoration-line-through">$4500.00</span>
              <span> $4000.00</span>
            </div>
            <p class="lead">
              O iPhone 13 tem uma tela superbrilhante projetada para ser
              resistente. Faz vídeos com qualidade de cinema. Seu chip tem uma
              velocidade impressionante. E ganhou um aumento notável em bateria.
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
              <button
                class="btn btn-outline-dark flex-shrink-0"
                id="adicionado"
                type="button"
              >
                <i class="bi-cart-fill me-1"></i>
                Adicionado
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iphone;
