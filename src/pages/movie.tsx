import Layout from "../layout/layout";
import MovieDetail from "../views/movie/movieDetail";

const Movie = () => {
  return (
    <div className="py-8 bg-background min-h-[100vh] flex justify-center">
      <div className="w-full max-w-[1440px]">
        <Layout>
          <MovieDetail />
        </Layout>
      </div>
    </div>
  );
};

export default Movie;
