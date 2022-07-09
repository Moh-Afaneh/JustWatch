import PropTypes from "prop-types";
import "./button.scss";
const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onclick={props.onclick ? () => props.onclick : null}
    >
      {props.children}
    </button>
  );
};
export const ButtonOuline = (props) => {
  return (
    <button
      className={`btn__outline ${props.className}`}
      onclick={props.onclick ? () => props.onclick : null}
    >
      {props.children}
    </button>
  );
};
Button.propTypes = {
  onclick: PropTypes.func,
};
export default Button;
