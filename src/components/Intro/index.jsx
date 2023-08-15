import Aside from "./Aside";
import IntroCarousel from "./IntroCarousel";
import Person from '../../assets/icons/Avatar.svg'

const index = () => {
  return (
    <section className="mt-5 pb-[60px]">
      <div className="container mx-auto">
        <div
          id="intro"
          className="intro_wrapper flex justify-between items-start pt-[17px] pr-[20px] pb-[10px] px-[14px] bg-[#fff] border-[1px] border-[#DEE2E7] rounded-md"
        >
          <Aside />
          <IntroCarousel />
          <ul>
            <li>
              <div className="card w-[200px] h-[170px] bg-[#E3F0FF] py-3 px-3 rounded-md">
                <div className="flex gap-[9px]">
                  <img src={Person} alt="img" />
                  <h1>Hi, user let’s get stated</h1>
                </div>
                <button className="block w-full mb-[7px] mt-[7px] py-2 px-6 text-white rounded-[6px] bg-[#127FFF]">
                  Join now
                </button>
                <button className="w-full py-2 px-6 text-[#000] rounded-[6px] border border-[#DEE2E7]">
                  Log in
                </button>
              </div>
            </li>
            <li>
              <div className="card w-[200px] h-[95px] mt-[10px] bg-[#F38332] pt-[16px] px-[20px] pb-[22px] rounded-md">
                <h1 className="text-[16px] text-[#FFF]">
                  Get US $10 off with a new supplier
                </h1>
              </div>
            </li>
            <li>
              <div className="card w-[200px] h-[95px] mt-[10px] bg-[#55BDC3] pt-[16px] pr-[44px] pl-[16px] pb-[22px] rounded-md">
                <h1 className="text-[16px] text-[#FFF]">
                  Send quotes with supplier preferences
                </h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default index;
