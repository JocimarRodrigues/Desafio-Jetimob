import { useContext, useEffect, useState } from "react";
import { apiService } from "../../services/apiService";
import { LivrosContext } from "../../common/context/Livros";
import { useNavigate } from "react-router-dom";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import styles from "./DetalhesLivro.module.scss";
import Classificacao from "../../components/Classificacao";

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
    const confirmar = confirm(
      "Você tem certeza que deseja excluir este livro?"
    );
    if (confirmar) {
      await apiService.excluirLivro(id);
      alert("Livro excluido com sucesso!");
      navigate("/");
    }
  };

  return (
    <div className={styles.container}>
      {livro ? (
        <>
          <div className={styles.card}>
            <img src={livro.imagem} alt="" />
            <h1>{livro.titulo}</h1>
            <h2>Autor: {livro.autor}</h2>
            {/* <h3>Idmb: {livro.classificacao}</h3> */}
            <Classificacao classificacao={livro.classificacao} />
          </div>
          <div className={styles.conteudo}>
            <h1>Resenha</h1>
            <p>{livro.resenha}</p>
            {/* <AiTwotoneEdit onClick={() => editarLivro(livro.id)} cursor={"pointer"}/>
            <AiFillDelete onClick={() => deletarLivro(livro.id)} cursor={"pointer"}/> */}
            <button onClick={() => editarLivro(livro.id)} className={styles.editar}>
              Editar <AiTwotoneEdit />
            </button>
            <button onClick={() => deletarLivro(livro.id)} className={styles.excluir}>
              Excluir <AiFillDelete />
            </button>
          </div>
          {/* 
          <div className={styles.buttons}>
          </div> */}
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
