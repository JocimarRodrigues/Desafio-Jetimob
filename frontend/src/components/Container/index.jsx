import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <section>{children}</section>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
