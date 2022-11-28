import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Listar = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/user")
      .then((sucesso) => {
        console.log("sucesso", sucesso.data);
        setUsuarios(sucesso.data);
      })
      .catch((error) => {
        console.log("erro", error);
      });
  }, []);

  function handleDelete(usuarios) {
    axios
      .delete(`http://localhost:3333/user/${usuarios.id}`)
      .then((sucesso) => {
        console.log("sucesso", sucesso.data);
        axios
          .get("http://localhost:3333/user")
          .then((sucesso) => {
            console.log("sucesso", sucesso.data);
            setUsuarios(sucesso.data);
          })
          .catch((error) => {
            console.log("erro", error);
          });
      })
      .catch((error) => {
        console.log("erro", error);
      });
  }

  return (
    <table
      className="table table-hover 
        table-striped table-bordered tabela-componente"
    >
      <tr>
        <th>id</th>
        <th>Nome</th>
        <th>Cpf</th>
        <th>Cep</th>
        <th>Telefone</th>
        <th>Genero</th>
        <th>E-mail</th>
        <th>Data de Nascimento</th>
        <th>Ações</th>
      </tr>

      {usuarios.map((usuarios) => {
        return (
          <tr>
            <td>{usuarios.id}</td>
            <td>{usuarios.nome}</td>
            <td>{usuarios.cpf}</td>
            <td>{usuarios.cep}</td>
            <td>{usuarios.telefone}</td>
            <td>{usuarios.genero}</td>
            <td>{usuarios.email}</td>
            <td>{usuarios.data_nasc}</td>
            <td>
              <button
                className="btn btn-success"
                onClick={() => navigate(`/usuarios/editar/${usuarios.id}`)}
              >
                Editar
              </button>

              <button
                className="btn btn-danger"
                onClick={() => handleDelete(usuarios)}
              >
                Excluir
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default Listar;
