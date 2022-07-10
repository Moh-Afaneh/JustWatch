import bg from "../../assets/footer-bg.jpg";
import Logo from "../../assets/LogoMovies.png";
import { Link } from "react-router-dom";
import "./footer.scss";

function footer() {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer_content">
        <div className="footer__content__logo">
          <div className="logo">
            <Link to="/">
              <img src={Logo} />
            </Link>
          </div>
        </div>
        <div className="footer__content__menus container">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">terms of service</Link>
            <Link to="/">about us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">privacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">terms of service</Link>
            <Link to="/">about us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default footer;
