import React from "react";
import IPADD from "../../../assets/IPADD.png";

const Ipad = () => {
  return (
    <div class="py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="row gx-4 gx-lg-5 align-items-center">
          <div class="col-md-6">
            <img class="card-img-top mb-5 mb-md-0" src={IPADD} alt="Ipad" />
          </div>
          <div class="col-md-6 fundo-branco">
            <div class="small mb-1">Eletronicos</div>
            <h1 class="display-5 fw-bolder">iPad Pro</h1>
            <div class="fs-5 mb-5">
              <span class="text-decoration-line-through">$8500.00</span>
              <span> $8000.00</span>
            </div>
            <p class="lead">
              A experiencia definitiva em iPad. Agora com o desempenho fora de
              série do chip M1. A impressionante tela Liquid Retina XDR de 12,9
              polegadas e conexão celular 5G ultrarrápida. Prepare-se.
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

export default Ipad;
