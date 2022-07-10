import PropTypes from "prop-types";
import bg from "../../assets/footer-bg.jpg";
import "./PageHeader.scss";
const PageHeader = (props) => {
  return (
    <div className="page__header" style={{ backgroundImage: `url(${bg})` }}>
      <h2>{props.children}</h2>
    </div>
  );
};
PageHeader.propTypes = {};
export default PageHeader;
