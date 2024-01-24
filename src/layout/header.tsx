import Search from "../components/search";
import MobileNav from "./mobileNav";
import { navIcons } from "../constants/navIcons";
import { Button } from "@material-tailwind/react";

const Header = () => {
  return (
    <div className={`px-4 sm:px-8 py-4 w-full bg-white z-50`}>
      <div className="flex justify-between items-center">
        <MobileNav />
        <h1 className="text-primary font-inter text-[28px] font-semibold">
          Overview
        </h1>
        <div className="flex gap-6">
          <div className="hidden lg:block">
            <Search />
          </div>
          <div className="hidden lg:flex gap-6">
            {navIcons.map((item, index) => (
              <Button
                key={index}
                placeholder={``}
                color="white"
                className="flex items-center py-2 px-3 rounded-full bg-background cursor-pointer"
              >
                {item.icon}
              </Button>
            ))}
          </div>
          <div>
            <img
              src="/assets/profile.svg"
              alt=""
              className="h-[50px] rounded-[50px] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 lg:hidden">
        <Search />
      </div>
    </div>
  );
};

export default Header;
