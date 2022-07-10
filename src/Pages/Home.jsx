import HeroSlider from "../Components/HeroSlider/HeroSlider";
import Button, { ButtonOuline } from "../Components/buttons/button";
import { Link } from "react-router-dom";
import MovieList from "../Components/MovieList/MovieList";
import { category, movieType, tvType } from "../ApiConfig/tmbdApi";
function Home() {
  return (
    <>
      <HeroSlider />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <p className="Header__section"> Tranding Movies</p>
            <Link to="/movie">
              <ButtonOuline className="small">View More</ButtonOuline>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <p className="Header__section"> GOAT Movies</p>
            <Link to="/movie">
              <ButtonOuline className="small">View More</ButtonOuline>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <p className="Header__section"> Tranding Tv Shows</p>
            <Link to="/tv">
              <ButtonOuline className="small">View More</ButtonOuline>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
      </div>
    </>
  );
}
export default Home;
