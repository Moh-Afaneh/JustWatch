import { useEffect } from "react";
import "./SeachInput.scss";
function SeachInput(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange ? (e) => props.onChange(e) : null}
    />
  );
}
export default SeachInput;
