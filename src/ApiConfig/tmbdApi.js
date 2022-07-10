import AxiosClient from "./AxiosClient";
export const category = {
  movie: "movie",
  tv: "tv",
};
export const movieType = {
  popular: "popular",
  upcoming: "upcoming",
  top_rated: "top_rated",
};
export const tvType = {
  on_the_air: "on_the_air",
  popular: "popular",
  top_rated: "top_rated",
};
const tmbdApi = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return AxiosClient.get(url, params);
  },
  getTvSeries: (type, params) => {
    const url = "tv/" + tvType[type];
    return AxiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return AxiosClient.get(url, { params: {} });
  },
  Search: (cate, params) => {
    const url = "search/" + category[cate];
    return AxiosClient.get(url, params);
  },
  similar: (cate, id) => {
    const url = category[cate] + id + "/" + "similar";
    return AxiosClient.get(url, { params: {} });
  },
  Detail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return AxiosClient.get(url, params);
  },
  Cardits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return AxiosClient.get(url, { params: {} });
  },
};
export default tmbdApi;
