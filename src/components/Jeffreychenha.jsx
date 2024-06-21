import PropTypes from "prop-types";

const Jeffreychenha = ({ className = "" }) => {
  return (
    <h1
      className={`m-0 relative tracking-[-0.01em] leading-[100%] font-medium font-inherit whitespace-nowrap cursor-pointer ${className}`}
    >
      jeffreychen.ha
    </h1>
  );
};

Jeffreychenha.propTypes = {
  className: PropTypes.string,
};

export default Jeffreychenha;
