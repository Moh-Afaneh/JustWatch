import { useParams } from "react-router";
import PageHeader from "../Components/pageHeader/PageHeader";
import { category as cate } from "../ApiConfig/tmbdApi";
import MovieGrid from "../Components/MovieGrid/MovieGrid";
function Catalog() {
  const { category } = useParams();

  return (
    <>
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
}
export default Catalog;
