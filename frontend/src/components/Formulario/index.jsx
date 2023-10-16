import React, { useState } from "react";
import styles from "./Formulario.module.scss";
import { apiService } from "../../services/apiService";

const Formulario = ({ tipoDeFormulario }) => {
  const [dadosFormulario, setDadosFormulario] = useState({
    titulo: "",
    autor: "",
    classificacao: 0,
    resenha: "",
    imagem: "",
  });

  const aoMudarInput = (e) => {
    const { name, value } = e.target;
    setDadosFormulario({
      ...dadosFormulario,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    switch (tipoDeFormulario) {
      case "adicionar":
        await apiService.adicionarLivro(dadosFormulario);
        alert("Livro adicionado com sucesso!");
    }
    console.log(dadosFormulario);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <h1>Informações</h1>
        <div className={styles.infos}>
          <input
            type="text"
            name="titulo"
            placeholder="Digite um titulo"
            value={dadosFormulario.titulo}
            onChange={aoMudarInput}
            required
          />

          <input
            type="text"
            name="autor"
            placeholder="Digite o nome do Autor"
            value={dadosFormulario.autor}
            onChange={aoMudarInput}
            required
          />

          <input
            type="number"
            name="classificacao"
            placeholder="Dê uma nota de 1 a 5 para o livro."
            max={5}
            min={0}
            value={dadosFormulario.classificacao}
            onChange={aoMudarInput}
            required
          />
          <input
            type="url"
            name="imagem"
            placeholder="Insira o link da imagem"
            value={dadosFormulario.imagem}
            onChange={aoMudarInput}
            required
          />
        </div>
        <h1>Resenha</h1>
        <div className={styles.resenha}>
          <textarea
            name="resenha"
            cols="30"
            rows="10"
            value={dadosFormulario.resenha}
            onChange={aoMudarInput}
            required
          ></textarea>
        </div>
        <button type="submit">Adicionar Livro</button>
      </form>
    </div>
  );
};

export default Formulario;
