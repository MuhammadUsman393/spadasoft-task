import { useLocation, useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import Heading from "../components/heading";
import Drawer from "../components/drawer";
import Input from "../components/input";
import { useSearchContext } from "../context/searchContext";

const Header = () => {
  const { searchInput, setSearchInput } = useSearchContext();
  const navigate = useNavigate();
  const location = useLocation();

  const debouncedSetSearchInput = debounce(() => {
    if (location.pathname !== "/search") {
      navigate("/search");
    }
  }, 1000);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    debouncedSetSearchInput();
  };

  const handleNavigateHome = () => {
    setSearchInput("");
    navigate("/home");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8 mx-4 sm:mx-8">
        <div
          className="w-[130px] text-[28px] cursor-pointer"
          onClick={handleNavigateHome}
        >
          <Heading size={28} />
        </div>
        <div className="hidden sm:block">
          <Input value={searchInput} onChange={handleInputChange} />
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-2">
            <Drawer />
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:hidden mb-6">
        <Input value={searchInput} onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default Header;
