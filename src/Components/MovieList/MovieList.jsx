import PropTypes from "prop-types";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import tmbdApi, { category, movieType } from "../../ApiConfig/tmbdApi";
import APICofig from "../../ApiConfig/APICofig";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieList.scss";
import { useState } from "react";
import { useEffect } from "react";
function MovieList(props) {
  const [MoviesList, setMoviesList] = useState([]);
  useEffect(() => {
    const GetListing = async () => {
      let res = null;
      const params = {};
      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            res = await tmbdApi.getMoviesList(props.type, { params });
            break;
          default:
            res = await tmbdApi.getTvSeries(props.type, { params });
        }
      } else {
        res = await tmbdApi.similar(props.type, props.id);
      }
      setMoviesList(res.results);
    };
    GetListing();
  }, []);
  return (
    <div className="MovieListSlider">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={10}
        pagination={true}
        slidesPerView={"auto"}
      >
        {MoviesList.map((item, index) => (
          <SwiperSlide key={index}>
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default MovieList;
