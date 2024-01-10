import { SearchInput } from "../types/searchInputType";

const Input: React.FC<SearchInput> = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={`bg-primary rounded-[20px] w-[280px] md:w-[400px] p-3 placeholder-black focus:outline-none text-center cursor-pointer hover:drop-shadow-lg`}
      placeholder="🔍 Search a movie or a series"
    />
  );
};

export default Input;
