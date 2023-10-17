import { useContext, useEffect, useState } from "react";
import { apiService } from "../../services/apiService";
import { LivrosContext } from "../../common/context/Livros";
import styles from "./DetalhesLivro.module.scss";
import { useNavigate } from "react-router-dom";

const DetalhesLivro = () => {
  const [livro, setLivro] = useState();
  const { idLivro, setIdLivro } = useContext(LivrosContext);
  const navigate = useNavigate();

  useEffect(() => {
    const pegaDetalhesLivro = async (idLivro) => {
      const detalhesLivro = await apiService.pegaUmLivro(idLivro);
      setLivro(detalhesLivro);
    };

    if (idLivro) {
      pegaDetalhesLivro(idLivro);
    }
  }, [idLivro]);

  const editarLivro = (id) => {
    setIdLivro(id);
    navigate(`/editarLivro/${id}`);
  };

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
            <button onClick={() => editarLivro(livro.id)}>Editar</button>
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
