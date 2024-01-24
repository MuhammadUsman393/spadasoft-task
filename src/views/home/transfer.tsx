import { createRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SidebarToggle from "../../icons/sidebarToggle";
import Send from "../../icons/send";
import { quickTransfer } from "../../constants/quickTransfer";
import { quickTransferItem } from "../../types/quickTransferItem";
import { Button } from "@material-tailwind/react";

const Transfer = () => {
  const SliderRef = createRef<Slider>();
  const [amount, setAmount] = useState("");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
  };

  return (
    <div>
      <h1 className="text-primary font-inter text-lg font-semibold mb-4">
        Quick Transfer
      </h1>
      <div className="px-4 py-8 bg-white rounded-[20px] hover:shadow-[7px_5px_4px_0px_#dcdcdc]">
        <div className="flex gap-3 items-center">
          <div className="w-[70vw] sm:w-[40vw] md:w-[32vw] lg:w-[25vw] xl:w-[450px]">
            <Slider ref={SliderRef} {...settings}>
              {quickTransfer.map((data: quickTransferItem, index: number) => (
                <div key={index} className="">
                  <div className="flex justify-center">
                    <img
                      src={data.image}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full cursor-pointer"
                    />
                  </div>
                  <p className="text-xs text-black1 whitespace-nowrap text-center cursor-pointer">
                    {data.name}
                  </p>
                  <p className="text-xs text-gray1 text-center cursor-pointer">
                    {data.position}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
          <div
            className="text-gray1 cursor-pointer p-1 rounded-full border"
            onClick={() => SliderRef.current?.slickNext()}
          >
            <SidebarToggle />
          </div>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row items-center ml-4 mt-8">
          <p className="text-gray1 text-sm font-inter">Write Amount</p>
          <div className="relative flex items-center">
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-gray4 text-gray1 placeholder-gray1 text-sm font-inter py-3 rounded-full pl-4 focus:outline-none"
            />
            <Button
              placeholder=""
              className="inset-y-0 -ml-[80px] flex items-center gap-2 bg-blue2 py-[14px] h-full rounded-full px-4"
            >
              <p className="text-white text-[13px] font-inter font-normal">
                Send
              </p>
              <Send />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
