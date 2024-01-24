import { useRef } from "react";
import SearchIcon from "../icons/search";

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="relative flex items-center hover:drop-shadow-lg h-[50px]">
      <div
        className="absolute inset-y-0 left-0 pl-4 flex items-center cursor-pointer"
        onClick={handleSearchIconClick}
      >
        <SearchIcon />
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for something"
        className="h-full pl-10 pr-4 rounded-[40px] w-full text-fourth focus:outline-none bg-background placeholder-fourth"
      />
    </div>
  );
};

export default Search;
