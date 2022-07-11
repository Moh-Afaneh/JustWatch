import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import tmbdApi from "../../ApiConfig/tmbdApi";
function GetVideosListings(props) {
  console.log(props);
  const { category } = useParams();
  const [videos, setVideo] = useState([]);
  useEffect(() => {
    const GetTrailer = async () => {
      const Response = await tmbdApi.getVideos(category, props.id);
      // Testing the casting
      console.log(Response.results.slice(0, 5));
      setVideo(Response.results.slice(0, 5));
    };
    GetTrailer();
  }, [category, props.id]);
  return (
    <>
      {videos.map((video, i) => (
        <Video video={video} key={i} />
      ))}
    </>
  );
}
const Video = (props) => {
  const video = props.video;
  const iFrameModal = useRef(null);
  useEffect(() => {
    const height = iFrameModal.current.offsetWidth * (9 / 16) + "px";
    iFrameModal.current.setAttribute("height", height);
    console.log(iFrameModal.current);
  }, []);
  return (
    <div className="video">
      <div className="video__title">
        <h2>{video.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${video.key}`}
        frameborder="0"
        width="100%"
        ref={iFrameModal}
        title="Video"
      ></iframe>
    </div>
  );
};
export default GetVideosListings;
