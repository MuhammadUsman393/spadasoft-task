import { useParams } from "react-router-dom";
import type { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { setWatch, removeWatch } from "../../store/slices/watchSlice";
import PageComponent from "../../components/page";
import { Page } from "../../constants/page";
import { MovieTitle } from "../../constants/movieTitle";
import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { SingleMovieType } from "../../types/singleMovieType";
import { toast } from "react-toastify";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const watch = useSelector((state: RootState) => state.watch.value);
  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState<SingleMovieType | null>(
    null
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?external_source=imdb_id&language=en-US`,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDg2ZDI1MjY3M2E1MTk3OTAzMzg0NTZkOTlmNTc2NSIsInN1YiI6IjY1OTY0ZjY1ZDdhNzBhMTIyZTY5ZDBlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LHOsq1T5vTWcOLMK3UIb-YAs4Ab3LuBEev0WHaYugFM",
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setSelectedMovie(data);
        // console.log(data);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [id]);

  const isInWatch = (id: number) => {
    return watch.includes(id);
  };

  const handleWatch = () => {
    if (selectedMovie?.id) {
      if (isInWatch(selectedMovie.id)) {
        toast.success("Removed from watchlist", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
          progress: undefined,
        });
        dispatch(removeWatch(selectedMovie.id));
      } else {
        toast.success("Added to watchlist", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
          progress: undefined,
        });
        dispatch(setWatch(selectedMovie.id));
      }
    }
  };

  return (
    <div>
      {selectedMovie ? (
        <div className="mx-4 sm:mx-8">
          <div className="flex justify-between">
            <h1 className="text-black text-2xl font-bold sm:w-[50%]">
              {selectedMovie?.title}
            </h1>
            <div
              onClick={handleWatch}
              className="cursor-pointer hidden w-[205px] h-[40px] rounded-full sm:flex items-center justify-center gap-1 bg-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="20"
                viewBox="0 0 19 20"
                fill={isInWatch(selectedMovie?.id || -1) ? "#F04747" : "none"}
              >
                <path
                  d="M1.15665 22.355L1.15358 22.3533C1.1073 22.3272 1.06875 22.2894 1.0419 22.2436C1.01514 22.1979 1.00095 22.146 1.00075 22.0931V3.02821V3.01694L1.0005 3.00568C0.988859 2.48931 1.18117 1.98916 1.53577 1.61361C1.88678 1.24186 2.36881 1.02186 2.87922 1H15.3176C15.828 1.02186 16.31 1.24186 16.661 1.61361C17.0156 1.98916 17.2079 2.48931 17.1963 3.00568L17.196 3.01695V3.02821V22.0903C17.1954 22.1419 17.1814 22.1924 17.1555 22.237C17.1292 22.2823 17.0915 22.3198 17.0462 22.3459L17.0462 22.346C17.0006 22.3723 16.949 22.3861 16.8964 22.3861C16.8438 22.3861 16.7921 22.3723 16.7465 22.346L16.7466 22.3459L16.7392 22.3418L9.37012 18.1698L8.86267 17.8826L8.36272 18.1827L1.43552 22.3416L1.42916 22.3454L1.42286 22.3494C1.3821 22.3747 1.33593 22.3898 1.28825 22.3935C1.24206 22.391 1.197 22.3779 1.15665 22.355Z"
                  stroke={
                    isInWatch(selectedMovie?.id || -1) ? "#F04747" : "black"
                  }
                  stroke-width="2"
                />
              </svg>
              <p className="font-medium">
                {isInWatch(selectedMovie?.id || -1)
                  ? "Remove from watchlist"
                  : "Add to watchlist"}
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-4 flex-col md:flex-row">
            <div className="flex lg:flex-row flex-col md:w-[55%] order-last md:order-none -mt-[0px] sm:-mt-[60px] md:-mt-[0%]">
              <div className="h-[220px] sm:h-[280px] md:h-[300px] lg:h-[350px] ml-4 md:ml-0">
                <img
                  src={`https://image.tmdb.org/t/p/original/${selectedMovie?.poster_path}`}
                  alt=""
                  className="lg:w-full h-full rounded-[20px]"
                />
              </div>
              <div className="flex flex-col justify-between md:ml-4 py-3 md:w-[90%] lg:w-[55%]">
                <div>
                  <div className="flex gap-2 mb-4 overflow-x-scroll">
                    {selectedMovie?.genres.map(
                      (genre: { id: number; name: string }) => (
                        <button
                          key={id}
                          className="text-black font-medium px-2 rounded-full border border-black whitespace-nowrap"
                        >
                          {genre.name}
                        </button>
                      )
                    )}
                  </div>
                  <div>
                    <p className="text-black font-medium">
                      {selectedMovie?.overview}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-black">IMDB Rating</p>
                  <p className="text-black">
                    ⭐ {selectedMovie?.vote_average.toFixed(1)}
                    <span className="text-[#636363] font-sm">/10</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-[45%] lg:w-[40%]">
              <img
                src={`https://image.tmdb.org/t/p/original/${selectedMovie?.backdrop_path}`}
                alt=""
                className="object-cover w-full h-[400px] lg:h-[350px] rounded-[20px]"
              />
              <a
                href={selectedMovie?.homepage}
                target="_blank"
                rel="noreferrer"
                className="-mt-[220px] lg:-mt-[220px] flex items-center justify-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.5 51C39.5833 51 51 39.5833 51 25.5C51 11.4167 39.5833 0 25.5 0C11.4167 0 0 11.4167 0 25.5C0 39.5833 11.4167 51 25.5 51ZM21 32.9282L33 26L21 19.0718V32.9282Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex gap-4 my-6">
            <h1 className="text-black font-bold text-2xl">Seasons</h1>
            <div className="flex gap-2">
              {Page.map((index) => (
                <PageComponent index={index} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MovieTitle.map((movie) => (
              <div className="flex flex-col">
                <img src={movie.image} alt="" />
                <p className="text-black font-bold text-lg p-2 bg-white -mt-[32px] lg:-mt-[18px]">
                  {movie.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-40">
          <Spinner className="h-10 w-10" />
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
