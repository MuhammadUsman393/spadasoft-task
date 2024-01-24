import Card from "../../components/card";
import { cardData } from "../../constants/cardData";
import { recentTransaction } from "../../constants/recentTransaction";

const cards = () => {
  return (
    <div className="py-5 px-5">
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="md:w-[66%]">
          <div className="flex justify-between mb-4 mt-[3px]">
            <h1 className="text-primary font-inter text-lg font-semibold">
              My Cards
            </h1>
            <h3 className="text-primary font-inter text-[15px] font-semibold cursor-pointer">
              See All
            </h3>
          </div>
          <div className="flex gap-4 overflow-x-auto sm:overflow-x-visible w-full">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 sm:flex-shrink w-[270px] sm:w-full h-48"
              >
                <Card check={index === 0 ? true : false} item={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-[33%]">
          <h1 className="text-primary font-inter text-lg font-semibold mb-4">
            Recent Transaction
          </h1>
          <div className="rounded-[20px] bg-white font-inter p-4 h-48 flex flex-col justify-between hover:shadow-[7px_5px_4px_0px_#dcdcdc]">
            {recentTransaction.map((item, index) => (
              <div
                key={index}
                className="w-full flex justify-between items-center gap-2"
              >
                <div className="flex gap-2">
                  <div className="bg-yellow1 p-[10px] rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-black1 text-[13px] xl:text-sm font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray1 text-xs">{item.date}</p>
                  </div>
                </div>
                <p
                  className={`text-[11px] xl:text-sm font-semibold ${
                    item.increase ? "text-green1" : "text-red1"
                  }`}
                >
                  {item.increase ? "+" : "-"}${item.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default cards;
