import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LivrosContext = createContext();
LivrosContext.displayName = "Contexto De Livros";

export const LivrosProvider = ({ children }) => {
  const [livros, setLivros] = useState([]);
  const [idLivro, setIdLivro] = useState(0)


  return (
    <LivrosContext.Provider
      value={{
        livros,
        setLivros,
        idLivro,
        setIdLivro
      }}
    >
      {children}
    </LivrosContext.Provider>
  );
};

LivrosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
