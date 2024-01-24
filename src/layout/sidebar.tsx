import { pageLinks } from "../constants/pageLinks";
import { Button } from "@material-tailwind/react";
import { useActiveLink } from "../context/activeLink";
import { useState } from "react";
import { sidebarProps } from "../types/sidebarProps";

const Sidebar = ({ check = false }: sidebarProps) => {
  const { open } = useActiveLink();
  const [active, setActive] = useState(0);

  const handleActive = (index: number) => {
    setActive(index);
  };

  // const toggleSidebar = () => {
  //   if (setOpen) {
  //     setOpen((prevOpen) => !prevOpen);
  //   }
  // };

  return (
    <div
      className={`w-[258px] lg:transition-all border-r relative ${
        open ? "lg:w-[250px] ease-in-out" : "lg:w-[80px] ease-in-out"
      } p-4 bg-white shrink-0 fixed overflow-y-scroll h-[100vh]`}
    >
      <div>
        {/* <div
          onClick={toggleSidebar}
          className={`${
            open ? "" : "rotate-180"
          } items-center p-2 px-3 w-fit rounded-[8px] hidden lg:flex bg-gray-200 cursor-pointer absolute ml-[210px] z-20`}
        >
          <SidebarToggle />
        </div> */}
        <div className="flex items-center mb-3">
          <div className="flex gap-2 items-center px-3">
            <img src="/assets/logo.svg" alt="" className="w-9 h-9" />
            <h1 className="text-primary font-mont text-[25px] font-extrabold">
              {check ? "BankDash." : open && "BankDash."}
            </h1>
          </div>
        </div>

        {pageLinks.map((item, index) => {
          return (
            <div key={index}>
              <Button
                placeholder={""}
                color="white"
                className={`flex items-center gap-5 py-[10px] px-3 cursor-pointer font-inter text-[14px] rounded-none shadow-none capitalize font-semibold w-full ${
                  index === active ? "text-third" : "text-secondary"
                } transition-all`}
                onClick={() => handleActive(index)}
              >
                <p>{item.icon}</p>
                {check ? <p>{item.title}</p> : open && <p>{item.title}</p>}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
