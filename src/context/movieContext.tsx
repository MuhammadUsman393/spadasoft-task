import {
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import { movieType } from "../types/movieType";
import {
  MovieContextProps,
  ExampleComponentProps,
} from "../types/movieContextType";

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};

export const MovieProvider: React.FC<ExampleComponentProps> = ({
  children,
}) => {
  const [movies, setMovies] = useState<movieType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
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

        setMovies(data.results);
        // console.log(data.results);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>
  );
};
