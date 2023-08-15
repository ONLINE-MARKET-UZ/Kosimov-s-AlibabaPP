import { Carousel } from "antd";
import './style.scss'

const IntroCarousel = () => {
  return (
    <div className="w-[664px] h-[373px] bgIntro bg-indigo-400 p-10">
      <Carousel className="h-[300px]">
        <div>
          <h2 className="text-[28px] text-[#1C1C1C]">Latest trending</h2>
          <h1 className="text-[32px] font-bold ">Electronic items</h1>
          <button className="w-[119px] py-3 rounded-md px-[16px] bg-white mt-[17px] ">
            Learn more
          </button>
        </div>
        <div>
          <h2 className="text-[28px] text-[#1C1C1C]">Latest trending</h2>
          <h1 className="text-[32px] font-bold ">Electronic items</h1>
          <button className="w-[119px] py-3 rounded-md px-[16px] bg-white mt-[17px] ">
            Learn more
          </button>
        </div>
        <div>
          <h2 className="text-[28px] text-[#1C1C1C]">Latest trending</h2>
          <h1 className="text-[32px] font-bold ">Electronic items</h1>
          <button className="w-[119px] py-3 rounded-md px-[16px] bg-white mt-[17px] ">
            Learn more
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default IntroCarousel;
