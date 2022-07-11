import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import APICofig from "../../ApiConfig/APICofig";
import tmbdApi from "../../ApiConfig/tmbdApi";
function Casts(props) {
  const { id, category } = useParams();
  const [Casts, setCast] = useState([]);
  useEffect(() => {
    const GetCasting = async () => {
      const Response = await tmbdApi.Cardits(category, props.id);
      // Testing the cast

      console.log(Response.cast.slice(0, 5));
      setCast(Response.cast.slice(0, 5));
    };
    GetCasting();
  }, [category, props.id]);
  return (
    <div className="casts">
      {Casts.map((cast, i) => (
        <div key={i} className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${APICofig.w500Image(cast.profile_path)})`,
            }}
          ></div>
          <p className="cast__item__name">{cast.name}</p>
        </div>
      ))}
    </div>
  );
}
export default Casts;
