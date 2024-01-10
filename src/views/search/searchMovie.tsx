import { useState, useEffect } from "react";
import Card from "../../components/card";
import { useMovieContext } from "../../context/movieContext";
import { Spinner } from "@material-tailwind/react";
import { useSearchContext } from "../../context/searchContext";
import { debounce } from "lodash";

const SearchMovie = () => {
  const { searchInput } = useSearchContext();
  const { movies } = useMovieContext();
  const [loading, setLoading] = useState(true);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const debouncedFilterMovies = debounce((input) => {
    const filtered =
      input.trim() !== ""
        ? movies.filter((movie) =>
            movie.title.toLowerCase().includes(input.toLowerCase())
          )
        : movies;
    setFilteredMovies(filtered);
  }, 1000);

  useEffect(() => {
    debouncedFilterMovies(searchInput);

    const timer = setTimeout(() => {
      if (movies.length !== 0) {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [movies, searchInput, debouncedFilterMovies]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center mt-40">
          <Spinner className="h-10 w-10" />
        </div>
      ) : (
        <div className="mx-4 sm:mx-6">
          {searchInput.length !== 0 && (
            <p className="text-black text-[15px] font-medium">
              Showing search results for:{" "}
              <span className="text-gray1 text-[20px] font-medium ml-2">
                {searchInput}
              </span>
            </p>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {filteredMovies.map((movie, index) => (
              <Card movie={movie} index={index} check={false} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchMovie;
