import { useCallback, useEffect, useState } from "react";
import { Switch, useHistory, useLocation, useParams } from "react-router-dom";
import tmbdApi, { category } from "../../ApiConfig/tmbdApi";
import { movieType, tvType } from "../../ApiConfig/tmbdApi";
import MovieCard from "../MovieCard/MovieCard";
import SeachInput from "../../Components/SeachInput/SeachInput";
import Button, { ButtonOuline } from "../buttons/button";
import "./MovieGrid.scss";

const MovieGrid = (props) => {
  const [List, setList] = useState([]);
  const [Pages, setPages] = useState(1);
  const [TotalPages, setTotalPages] = useState(null);
  const { keyword } = useParams();

  useEffect(() => {
    const GetListing = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmbdApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmbdApi.getTvSeries(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmbdApi.Search(props.category, { params });
      }
      setList(response.results);
      setTotalPages(response.total_pages);
    };
    GetListing();
  }, [props.category, keyword]);
  const LoadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: Pages + 1,
      };
      switch (props.category) {
        case category.movie:
          response = await tmbdApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmbdApi.getTvSeries(tvType.popular, { params });
      }
    } else {
      const params = {
        query: keyword,
        page: Pages + 1,
      };
      response = await tmbdApi.Search(props.category, { params });
    }
    setList([...List, ...response.results]);
    setPages(Pages + 1);
  };
  return (
    <>
      <div className="section mb-3">
        <SearchMoviesListing keyword={keyword} category={props.category} />
      </div>
      <div className="Grid__Layout">
        {List.map((item, i) => (
          <MovieCard category={props.category} item={item} key={i} />
        ))}
      </div>
      {Pages < TotalPages ? (
        <div className="Grid__Layout__loadMore">
          <ButtonOuline me="small" onClick={LoadMore}>
            Explore More
          </ButtonOuline>
        </div>
      ) : null}
    </>
  );
};
const SearchMoviesListing = (props) => {
  const [keyword, setKeyWord] = useState(props.keyword ? props.keyword : null);
  const history = useHistory();
  const location = useLocation();
  const setClear = (e) => {
    if (e.target.value !== keyword) {
      setKeyWord(e.target.value);
    }
  };
  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      history.push(`/${category[props.category]}/search/${keyword}`);
    }
  }, [props.category, history, keyword]);
  useEffect(() => {
    const EventListen = (e) => {
      e.preventDefault();

      if (e.keyCode === 13) {
        goToSearch();
        setKeyWord("");
      }
    };
    document.addEventListener("keyup", EventListen);
    return () => {
      document.removeEventListener("keyup", EventListen);
    };
  }, [keyword, goToSearch]);

  return (
    <div className="Movie__Search">
      <SeachInput
        value={keyword}
        onChange={(e) => setClear(e)}
        type="text"
        placeholder="Search Movie"
      ></SeachInput>
      <Button className="small" onClick={goToSearch}>
        Search
      </Button>
    </div>
  );
};
export default MovieGrid;
