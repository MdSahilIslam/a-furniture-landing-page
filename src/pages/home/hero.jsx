import heroImg from "../../assets/banner.png";
import { FiSearch } from "react-icons/fi";
import ToolTip from "./ToolTip";

function Hero() {
  return (
    <>
      <section
        className="h-screen relative bg-center bg-cover text-white"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="md:pt-[100px] pt-24  px-2 text-center w-2/3 mx-auto space-y-6">
          <h1 className=" text-4xl font-medium lg:text-5xl lg:leading-tight leading-snug">
            Make your interior more minimalistic & modern
          </h1>

          <p className=" font-normal lg:w-1/2 mx-auto">
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>

          <div className="a relative inline-block z-30 md:top-4">
            <input
              type="text"
              placeholder="Search Furniture"
              className="w-full md:w-80 px-6 py-2 bg-white/30 rounded-full border border-gray-300 focus:outline-none text-black"
            />

            <div className="absolute bottom-[5px] right-1 md:relative md:-top-[37.5px] md:left-[282px] bg-primary rounded-full  transf w-[34px] md:w-8 h-8  flex items-center justify-center cursor-pointer">
              <FiSearch />
            </div>
          </div>
        </div>

        <div className="absolute -bottom-2 h-3/4 inset-x-0 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm" />

        {/*hover button for displaying tooltipbox*/}
        <div className="hidden md:block absolute bottom-24 left-16 group ">
          <ToolTip position="bottom" />
        </div>

        <div className="hidden md:block absolute bottom-36 left-64 group">
          <ToolTip
            position="bottom"
            color={["bg-primary", "bg-yellow-800", "bg-gray-500"]}
          />
        </div>

        <div className="hidden md:block absolute bottom-20 left-[715px] group">
          <ToolTip position="bottom" />
        </div>

        <div className="hidden md:block absolute bottom-8 right-[36px] group">
          <ToolTip position="bottom" />
        </div>
      </section>
    </>
  );
}

export default Hero;
