import Image from "next/image";
import { VscSettings } from "react-icons/vsc";
import { BiSearchAlt2 } from "react-icons/bi";

function Hero() {
  return (
    <div className="w-full h-[calc(100vh-80px)] py-10 px-20 flex">
      <div className="w-full bg-[url(/background-image.png)] bg-cover bg-center bg-no-repeat rounded-3xl drop-shadow-xl p-20 flex flex-col gap-20">
        {/* Text Container */}
        <div className="flex flex-col gap-3 w-1/2">
          <h1 className="text-5xl font-extrabold leading-tight">
            We'll help you find a place you'll love
          </h1>
          <p className="text-lg">
            With the most complete source of homes for sale & properties near
            you.
          </p>
        </div>
        {/* Text Container */}

        {/* Inputs area */}
        <div className="bg-white w-[62%] p-10 rounded-xl drop-shadow-sm flex gap-3">
          <input
            type="text"
            className="border p-2 rounded-lg"
            placeholder="Enter keyword"
          />
            <input
            type="text"
            className="border p-2 rounded-lg"
            placeholder="Enter keyword"
          />
          <input
            type="text"
            className="border p-2 rounded-lg"
            placeholder="Enter keyword"
          />

          <button className="p-3 bg-primary rounded-md text-base">
            <VscSettings />
          </button>

          <button className="p-3 bg-primary rounded-md text-base flex gap-3 items-center">
            Search <BiSearchAlt2 />
          </button>
          
        </div>
        {/* Inputs area */}

        {/* Testimonial area */}
        <div className="flex gap-10">
          <span>
            <h2 className="text-3xl font-bold text-center">1500+</h2>
            <p className="text-base">Property Ready</p>
          </span>
          <span>
            <h2 className="text-3xl font-bold text-center">700+</h2>
            <p className="text-base">Happy Customers</p>
          </span>
        </div>
        {/* Testimonial area */}
      </div>
    </div>
  );
}

export default Hero;
