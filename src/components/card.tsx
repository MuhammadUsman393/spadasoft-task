import { movieType } from "../types/movieType";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { setLike, removeLike } from "../store/slices/likeSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchContext } from "../context/searchContext";

const Card = ({
  movie,
  index,
  check,
}: {
  movie: movieType;
  index: number;
  check: boolean;
}) => {
  const { setSearchInput } = useSearchContext();
  const dispatch = useDispatch();
  const like = useSelector((state: RootState) => state.like.value);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const isInLike = (id: number) => {
    return like.includes(id);
  };

  const handleLike = (id: number) => {
    if (isInLike(id)) {
      toast.success("Removed from Like", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
        progress: undefined,
      });
      dispatch(removeLike(id));
    } else {
      toast.success("Added to Like", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
        progress: undefined,
      });
      dispatch(setLike(id));
    }
  };

  return (
    <div
      key={movie.id}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      className={`focus:outline-none focus:border-none relative max-w-[180px] ${
        check ? "pl-4" : "h-[245px] sm:h-[280px]"
      }`}
    >
      {hoveredIndex === index && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-[#3A3A3A] bg-opacity-40 rounded-[20px] h-[245px] sm:h-[280px] ${
            check ? "ml-4" : ""
          }`}
        >
          <div
            onClick={() => handleLike(movie.id)}
            className="flex items-center cursor-pointer gap-1 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill={isInLike(movie.id) ? "red" : "none"}
            >
              <path
                d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
                stroke="white"
                stroke-width="1.8"
              />
            </svg>
            <p className="text-white font-semibold">
              {isInLike(movie.id) ? "Unlike" : "Like"}
            </p>
          </div>
          <Link
            onClick={() => {
              setSearchInput("");
            }}
            to={`/movie/${movie.id}`}
            className="text-secondary bg-white hover:text-white hover:bg-secondary font-semibold w-full max-w-[120px] h-[40px] cursor-pointer flex items-center justify-center rounded-lg"
          >
            <p>View</p>
          </Link>
        </div>
      )}
      <img
        className={`object-cover w-full ${
          hoveredIndex === index
            ? "h-[245px] sm:h-[280px]"
            : "h-[230px] sm:h-[263px]"
        } rounded-[20px]`}
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt="movie poster"
      />
    </div>
  );
};

export default Card;
