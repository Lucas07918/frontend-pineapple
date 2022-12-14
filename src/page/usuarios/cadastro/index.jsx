import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputs = {};
    for (let i = 0; i < form.length; i++) {
      if (form[i].type === "radio") {
        if (form[i].checked) {
          inputs[form[i].name] = form[i].value;
        }
      } else {
        inputs[form[i].name] = form[i].value;
      }
    }
    //console.log(inputs);
    axios
      .post("http://localhost:3333/user", inputs)
      .then((sucesso) => {
        alert(sucesso.data.message);
        navigate("/usuarios/listar");
      })
      .catch((error) => {
        alert(`${error.response.status} - ${error.response.data.message}`);
      });
    //console.log(form);
  }
  return (
    <div class="container margem">
      <h1>Novo Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label>Nome</label>
          <input type="text" name="nome" class="form-control" />
        </div>
        <div class="mb-3">
          <label>E-mail</label>
          <input type="email" name="email" class="form-control" />
        </div>
        <div class="mb-3">
          <label>Senha</label>
          <input type="password" name="senha" class="form-control" />
        </div>
        <div class="mb-3">
          <label>Data de Nascimento</label>
          <input type="date" name="data_nasc" class="form-control" />
        </div>
        <div class="mb-3">
          <label>CPF</label>
          <input type="text" name="cpf" class="form-control" />
        </div>
        <div class="mb-3">
          <label>CEP</label>
          <input type="text" name="cep" class="form-control" />
        </div>
        <div class="mb-3">
          <label>Telefone</label>
          <input type="text" name="telefone" class="form-control" />
        </div>
        <label>Gênero</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value={1}
            name="genero"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Masculino
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value={2}
            name="genero"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Feminino
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value={3}
            name="genero"
            id="flexRadioDefault3"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault3">
            Outro
          </label>
        </div>
        <div class="mb-3" style={{ marginTop: "10px" }}>
          <button
            type="reset"
            class="btn btn-primary"
            style={{ marginRight: "10px" }}
          >
            Limpar
          </button>
          <button type="submit" class="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
