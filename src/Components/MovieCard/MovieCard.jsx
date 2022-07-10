import Button, { ButtonOuline } from "../buttons/button";
import { Link } from "react-router-dom";
import tmbdApi, { category, movieType } from "../../ApiConfig/tmbdApi";
import APICofig from "../../ApiConfig/APICofig";
import "./MovieCard.scss";
function MovieCard(props) {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;
  const bg = APICofig.w500Image(item.poster_path || item.backdrop_item);
  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button className="movie-card__button">
          <i className="bx bx-play"></i>
        </Button>
        <h3 className="movie-card__title">{item.title || item.name}</h3>
      </div>
    </Link>
  );
}
export default MovieCard;
