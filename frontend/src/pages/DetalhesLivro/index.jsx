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

  const deletarLivro = async (id) => {
    const confirmar = confirm("Você tem certeza que deseja excluir este livro?")
    if(confirmar) {
      await apiService.excluirLivro(id)
      alert("Livro excluido com sucesso!")
      navigate("/")
    }
  }

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
            <button onClick={() => deletarLivro(livro.id)}>Excluir</button>
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
