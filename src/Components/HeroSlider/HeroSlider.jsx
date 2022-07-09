import "./HeroSlider.scss";
import tmbdApi, { category, movieType } from "../../ApiConfig/tmbdApi";
import APICofig from "../../ApiConfig/APICofig";
import Button, { ButtonOuline } from "../buttons/button";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
function HeroSlider() {
  const [Movies, SetMovies] = useState([]);
  useEffect(() => {
    const FetchMovies = async () => {
      const params = { page: 3 };
      try {
        const Res = await tmbdApi.getMoviesList(movieType.popular, { params });
        SetMovies(Res.results.slice(0, 10));
        console.log(Res);
      } catch (error) {
        console.log(error);
      }
    };
    FetchMovies();
  }, []);
  return (
    <div className="Hero__Slider">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {Movies.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSliderItem
                item={item}
                className={`${isActive} ? "active" : ""`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
const HeroSliderItem = (props) => {
  const history = useHistory();
  const item = props.item;
  const background = APICofig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="hero-slide__item__content__info__title">
            {item.title}
          </h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => history.push(`/movies/` + item.id)}>
              Watch now
            </Button>
            <ButtonOuline onClick={() => console.log("Trailer")}>
              Watch Trailer
            </ButtonOuline>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={APICofig.w500Image(item.poster_path)} />
        </div>
      </div>
    </div>
  );
};
export default HeroSlider;
