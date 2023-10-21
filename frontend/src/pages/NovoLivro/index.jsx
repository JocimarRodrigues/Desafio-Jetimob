import { useContext } from "react";
import Formulario from "../../components/Formulario";
import { LivrosContext } from "../../common/context/Livros";

const NovoLivro = () => {
  const { setLivro } = useContext(LivrosContext);
  setLivro(null);

  return (
    <div>
      <Formulario tipoDeFormulario={"adicionar"} />
    </div>
  );
};

export default NovoLivro;
