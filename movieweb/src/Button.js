import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
