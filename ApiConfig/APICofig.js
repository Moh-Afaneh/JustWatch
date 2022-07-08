import { useState } from "react";
const APICofig = {
  Base_Url: "https://api.themoviedb.org/3/",
  apikey: "8656106c43ed8a181f55451d27157b05",
  originalImage: (pathimg) => `https://image.tmdb.org/t/p/original/${pathimg}`,
  w500Image: (pathimg) => `https://image.tmdb.org/t/p/w500/${pathimg}`,
};
export default APICofig;
