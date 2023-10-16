import React from "react";
import styles from "./NovoLivro.module.scss";
import Formulario from "../../components/Formulario";

const NovoLivro = () => {
  return (
    <div>
      <Formulario tipoDeFormulario={"adicionar"}/>
    </div>

  );
};

export default NovoLivro;
