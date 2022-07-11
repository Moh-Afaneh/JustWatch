import tmbdApi from "../../ApiConfig/tmbdApi";
import APICofig from "../../ApiConfig/APICofig";
import { useParams } from "react-router-dom";
import MovieList from "../../Components/MovieList/MovieList";
import "./Detail.scss";
import { useEffect, useState } from "react";
import GetVideosListings from "./GetVideosListings";
import Casts from "./Casts";
function Detail(props) {
  const { id, category } = useParams();
  const [Movie, setMovie] = useState(null);
  useEffect(() => {
    const GetMovie = async () => {
      const res = await tmbdApi.Detail(category, id, { params: {} });
      setMovie(res);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    GetMovie();
  }, [category, id]);

  console.log(Movie);

  return (
    <>
      {Movie && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${APICofig.originalImage(
                Movie.backdrop_path || Movie.poster__path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie__content container">
            <div className="movie__content__poster">
              <div
                className="movie__content__poster__img"
                style={{
                  backgroundImage: `url(${APICofig.originalImage(
                    Movie.poster_path || Movie.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie__content__info">
              <h1 className="title">{Movie.title || Movie.name}</h1>

              <div className="genres">
                {Movie.genres &&
                  Movie.genres.slice(0.5).map((genre, i) => (
                    <span className="genres__item" key={i}>
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{Movie.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                {/* Cast List here */}
                <Casts id={Movie.id} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              {/* Get Trailer */}
              <GetVideosListings id={Movie.id} />
            </div>
          </div>
          <div className="section mb-3 Similer">
            <div className="section__header mb-3">
              <h1 className="Explore">Explore More </h1>
            </div>
            <MovieList type="similar" category={category} id={Movie.id} />
          </div>
        </>
      )}
    </>
  );
}
export default Detail;
