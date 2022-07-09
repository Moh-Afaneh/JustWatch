import PropTypes from "prop-types";
import { useRef } from "react";
import { useEffect } from "react";
import "./Modal.scss";
import { useState } from "react";
const Modal = (props) => {
  const [active, setactive] = useState(false);
  useEffect(() => {
    setactive(props.active);
  }, [props.active]);
  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};
export const ModelContent = (props) => {
  const ContentRef = useRef(null);
  const CloseModal = () => {
    ContentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };
  return (
    <div ref={ContentRef} className="modal__Content">
      {props.children}
      <div className="modal__Content__Close" onClick={CloseModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};
Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};
ModelContent.propTypes = {
  onClose: PropTypes.func,
};
export default Modal;
