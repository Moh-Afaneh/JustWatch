import "./HeroSlider.scss";
import tmbdApi, { category, movieType } from "../../ApiConfig/tmbdApi";
import APICofig from "../../ApiConfig/APICofig";
import Button, { ButtonOuline } from "../buttons/button";
import Modal, { ModelContent } from "../../Components/Model/Modal";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
function HeroSlider() {
  const [Movies, SetMovies] = useState([]);
  useEffect(() => {
    const FetchMovies = async () => {
      const params = { page: 1 };
      try {
        const Res = await tmbdApi.getMoviesList(movieType.popular, {
          params,
        });
        SetMovies(Res.results.slice(0, 20));
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
        pagination={true}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
      >
        {Movies.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSliderItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {Movies.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}
    </div>
  );
}
const HeroSliderItem = (props) => {
  const history = useHistory();
  const item = props.item;
  const background = APICofig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const ModalActive = async () => {
    const Modal = document.getElementById(`Modal_${item.id}}`);
    console.log(Modal);
    const videos = await tmbdApi.getVideos(category.movie, item.id);
    if (videos.results.length > 0) {
      console.log(videos.results[0]);
      const VideoSrc = `https://www.youtube.com/embed/` + videos.results[0].key;
      console.log(VideoSrc);
      Modal.querySelector(".modal__Content > iframe").setAttribute(
        "src",
        VideoSrc
      );
    } else {
      document.querySelector(".modal__Content").innerHTML = "No Trailer";
    }
    Modal.classList.toggle("active");
  };
  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => history.push(`/movies/` + item.id)}>
              Watch now
            </Button>
            <ButtonOuline onClick={ModalActive}>Watch Trailers</ButtonOuline>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={APICofig.w500Image(item.poster_path)} />
        </div>
      </div>
    </div>
  );
};
const TrailerModal = (props) => {
  const item = props.item;
  const iFrameModal = useRef(null);
  const onClose = () => iFrameModal.current.setAttribute("src", "");
  return (
    <Modal active={false} id={`Modal_${item.id}}`}>
      <ModelContent onClose={onClose}>
        <iframe
          ref={iFrameModal}
          width="100%"
          height="500px"
          title="Trailer"
        ></iframe>
      </ModelContent>
    </Modal>
  );
};

export default HeroSlider;
