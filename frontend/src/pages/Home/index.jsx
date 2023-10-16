import { useContext, useEffect } from "react";
import styles from "./Home.module.scss";
import { apiService } from "../../services/apiService";
import { LivrosContext } from "../../common/context/Livros";

const Home = () => {
  const { livros, setLivros } = useContext(LivrosContext);

  useEffect(() => {
    const mostrarTodosOsLivros = async () => {
      const livros = await apiService.pegaTodosOslivros();
      setLivros(livros);
    };
    mostrarTodosOsLivros();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1>Livros recomendados pelos nossos colaboradores</h1>

        <div className={styles.cards}>
          {livros.map((item) => (
            <div key={item.id} className={styles.card}>
              <h1>{item.titulo}</h1>
              <h2>{item.autor}</h2>
              <h3>{item.classificacao}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
