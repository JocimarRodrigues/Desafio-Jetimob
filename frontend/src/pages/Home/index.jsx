import { useContext, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { apiService } from "../../services/apiService";
import { LivrosContext } from "../../common/context/Livros";
import { useNavigate } from "react-router-dom";
import Classificacao from "../../components/Classificacao";
import { AiOutlineLoading } from "react-icons/ai";

const Home = () => {
  const { livros, setLivros } = useContext(LivrosContext);
  const { setIdLivro } = useContext(LivrosContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const irParaDetalhes = async (id) => {
    setIdLivro(id);
    navigate(`detalhesLivro/${id}`);
  };

  useEffect(() => {
    const mostrarTodosOsLivros = async () => {
      const livros = await apiService.pegaTodosOslivros();
      setLivros(livros);
      setLoading(false);
    };
    mostrarTodosOsLivros();
  }, []);

  return (
    <>
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loading}>
            <AiOutlineLoading className={styles.icon} />
          </div>
        ) : (
          <div className={styles.cards}>
            {livros?.map((item) => (
              <div key={item.id} className={styles.card}>
                <img src={item.imagem} alt={item.titulo} />
                <h1>{item.titulo}</h1>
                <h2>{item.autor}</h2>
                <Classificacao classificacao={item.classificacao} />
                <button onClick={() => irParaDetalhes(item.id)}>
                  Detalhes
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
