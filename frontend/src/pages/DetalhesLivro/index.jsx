import React, { useContext, useEffect, useState } from "react";
import { apiService } from "../../services/apiService";
import { LivrosContext } from "../../common/context/Livros";
import styles from "./DetalhesLivro.module.scss";

const DetalhesLivro = () => {
  const [livro, setLivro] = useState();
  const { idLivro } = useContext(LivrosContext);

  useEffect(() => {
    const pegaDetalhesLivro = async (idLivro) => {
      const detalhesLivro = await apiService.pegaUmLivro(idLivro);
      setLivro(detalhesLivro);
    };

    if (idLivro) {
      pegaDetalhesLivro(idLivro);
    }
  }, [idLivro]);

  return (
    <div className={styles.container}>
      {livro ? (
        <>
          <div className={styles.imagem}>
            <img src={livro.imagem} alt="" />
          </div>
          <div className={styles.conteudo}>
            <h1>{livro.titulo}</h1>
            <h2>{livro.autor}</h2>
            <h3>{livro.classificacao}</h3>
            <p>{livro.resenha}</p>
          </div>

          <div className={styles.buttons}>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </>
      ) : (
        <div>
          <h1>Livro não encontrado</h1>
        </div>
      )}
    </div>
  );
};

export default DetalhesLivro;
