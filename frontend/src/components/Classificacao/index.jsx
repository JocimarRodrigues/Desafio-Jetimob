import PropTypes from "prop-types";

import { BsFillStarFill } from "react-icons/bs";
BsFillStarFill;

const Classificacao = ({ classificacao }) => {
  const estrelas = [...Array(classificacao)].map((_, index) => (
    <BsFillStarFill key={index} color="yellow" />
  ));

  return <h3>{estrelas}</h3>;
};

export default Classificacao;

Classificacao.propTypes = {
  classificacao: PropTypes.number,
};
