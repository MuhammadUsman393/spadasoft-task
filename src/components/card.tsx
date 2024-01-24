import { cardItem } from "../types/cardItem";
import BankCard from "../icons/bankCard";

const card = ({ check, item }: { check: boolean; item: cardItem }) => {
  return (
    <div
      className={`rounded-[20px] font-lato h-full hover:shadow-[7px_5px_4px_0px_#dcdcdc] ${
        check
          ? "bg-third text-white"
          : "bg-white border border-gray2 text-primary"
      }`}
    >
      <div className="p-4 pb-7">
        <div className="flex justify-between">
          <div>
            <h3 className={`text-[11px] ${!check ? "text-gray1" : ""}`}>
              Balance
            </h3>
            <p className="font-semibold">{item.balance}</p>
          </div>
          <div>
            {check ? (
              <img
                src="/assets/card1.svg"
                alt=""
                className="w-[29px] h-[29px]"
              />
            ) : (
              <img
                src="/assets/card2.svg"
                alt=""
                className="w-[29px] h-[29px]"
              />
            )}
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div>
            <h3
              className={`text-[10px] ${check ? "opacity-70" : "text-gray1"}`}
            >
              CARD HOLDER
            </h3>
            <p className="text-[13px] font-semibold">{item.cardHolder}</p>
          </div>
          <div>
            <h3
              className={`text-[10px] ${check ? "opacity-70" : "text-gray1"}`}
            >
              VALID THRU
            </h3>
            <p className="text-[13px] font-semibold">{item.valid}</p>
          </div>
        </div>
      </div>
      <div
        className={`p-4 ${
          check ? "bg-white bg-opacity-10" : "border-t border-gray2"
        }`}
      >
        <div className="flex justify-between items-center">
          <p className="text-[15px]">{item.cardNumber}</p>
          <div className={`${check ? "text-white" : "text-gray3"}`}>
            <BankCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
