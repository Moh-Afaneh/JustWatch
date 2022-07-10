import { useEffect, useState } from "react";
import "./MovieGrid.scss";
const MovieGrid = (props) => {
  const [List, setList] = useState([]);
  const [Pages, setPages] = useState(1);
  const [TotalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const GetListing = async () => {};
  }, []);
  return <div>MovieGrid</div>;
};
export default MovieGrid;
