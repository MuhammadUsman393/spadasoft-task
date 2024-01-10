import Layout from "../layout/layout";
import CurrentlyWatch from "../views/home/currentlyWatch";
import PrevWatch from "../views/home/prevWatch";
import { useMovieContext } from "../context/movieContext";
import { Spinner } from "@material-tailwind/react";
import { useState, useEffect } from "react";

const Home = () => {
  const { movies } = useMovieContext();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (movies.length !== 0) {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [movies]);

  return (
    <div className="py-8 bg-background min-h-[100vh] flex justify-center">
      <div className="w-full max-w-[1440px]">
        <Layout>
          {!loading ? (
            <div>
              <CurrentlyWatch />
              <PrevWatch />
            </div>
          ) : (
            <div className="flex justify-center mt-40">
              <Spinner className="h-10 w-10" />
            </div>
          )}
        </Layout>
      </div>
    </div>
  );
};

export default Home;
