import { useContext, useEffect, useState } from "react";
import styles from "./Formulario.module.scss";
import { apiService } from "../../services/apiService";
import { LivrosContext } from "../../common/context/Livros";
import PropTypes from "prop-types";

const Formulario = ({ tipoDeFormulario }) => {
  const [dadosFormulario, setDadosFormulario] = useState({
    titulo: "",
    autor: "",
    classificacao: "",
    resenha: "",
    imagem: "",
  });

  const { idLivro, livro, setLivro } = useContext(LivrosContext);

  useEffect(() => {
    const pegaDadosParaEditar = async (idLivro) => {
      if (tipoDeFormulario === "editar") {
        const dadosLivro = await apiService.pegaUmLivro(idLivro);
        setLivro(dadosLivro);
      }
    };
    pegaDadosParaEditar(idLivro);
  }, [idLivro, setLivro, tipoDeFormulario]);

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
        break;
      case "editar":
        if (livro) {
          const dadosEditados = {
            titulo: dadosFormulario.titulo
              ? dadosFormulario.titulo
              : livro.titulo,
            autor: dadosFormulario.autor ? dadosFormulario.autor : livro.autor,
            classificacao: dadosFormulario.classificacao
              ? dadosFormulario.classificacao
              : livro.classificacao,
            resenha: dadosFormulario.resenha
              ? dadosFormulario.resenha
              : livro.resenha,
            imagem: dadosFormulario.imagem
              ? dadosFormulario.imagem
              : livro.imagem,
          };
          await apiService.editarLivro(idLivro, dadosEditados);
          alert("Livro Editado com sucesso!");
        }
    }
    setDadosFormulario("");
    setLivro("");
  };
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <h1>Informações</h1>
        <div className={styles.infos}>
          <input
            type="text"
            name="titulo"
            placeholder={livro ? livro.titulo : "Digite um titulo"}
            value={dadosFormulario.titulo}
            onChange={aoMudarInput}
            required={tipoDeFormulario === "adicionar" ? true : false}
          />

          <input
            type="text"
            name="autor"
            placeholder={livro ? livro.autor : "Digite o nome do Autor"}
            value={dadosFormulario.autor}
            onChange={aoMudarInput}
            required={tipoDeFormulario === "adicionar" ? true : false}
          />

          <input
            type="number"
            name="classificacao"
            placeholder={
              livro ? livro.classificacao : "Dê uma nota de 1 a 5 para o livro."
            }
            max={5}
            min={0}
            value={dadosFormulario.classificacao}
            onChange={aoMudarInput}
            required={tipoDeFormulario === "adicionar" ? true : false}
          />
          <input
            type="url"
            name="imagem"
            placeholder={livro ? livro.imagem : "Insira o link da imagem"}
            value={dadosFormulario.imagem}
            onChange={aoMudarInput}
            required={tipoDeFormulario === "adicionar" ? true : false}
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
            required={tipoDeFormulario === "adicionar" ? true : false}
          ></textarea>
        </div>
        <button type="submit">
          {tipoDeFormulario === "adicionar" ? "Adicionar Livro" : "Editar"}
        </button>
      </form>
    </div>
  );
};

export default Formulario;

Formulario.propTypes = {
  tipoDeFormulario: PropTypes.string,
};
