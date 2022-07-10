import "./button.scss";
const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? props.onClick : null}
    >
      {props.children}
    </button>
  );
};
export const ButtonOuline = (props) => {
  return (
    <Button
      className={`btn__outline ${props.className}`}
      onClick={props.onClick ? props.onClick : "no"}
    >
      {props.children}
    </Button>
  );
};
export default Button;
