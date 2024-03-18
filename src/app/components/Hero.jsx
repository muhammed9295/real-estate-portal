import { VscSettings } from "react-icons/vsc";
import { BiSearchAlt2 } from "react-icons/bi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Hero() {
  return (
    <div className="w-full h-[calc(100vh-80px)] py-20 px-20 flex">
      <div className="w-full bg-[url(/background-image.png)] bg-cover bg-center bg-no-repeat rounded-3xl drop-shadow-xl p-20 flex flex-col gap-20">
        {/* Text Container */}
        <div className="flex flex-col gap-5 w-1/2">
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
        <div className="w-[63%] flex flex-col gap-4">
          <span className="flex gap-3">
            <Button className="bg-primary w-28 text-text text-base py-5 hover:bg-secondary hover:text-white">Buy</Button>
            <Button className="bg-primary w-28 text-text text-base py-5 hover:bg-secondary hover:text-white">Sale</Button>
          </span>
        <div className="bg-white w-full p-10 rounded-xl drop-shadow-sm flex gap-3">
          <Input
            type="text"
            className="p-2 rounded-lg"
            placeholder="Enter keyword"
          />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="text"
            className="p-2 rounded-lg"
            placeholder="Enter keyword"
          />

          <Button className="p-3 bg-primary rounded-md text-base text-text hover:bg-secondary hover:text-white">
            <VscSettings />
          </Button>

          <Button className="p-3 w-32 bg-primary text-text rounded-md text-base flex gap-3 items-center hover:bg-secondary hover:text-white">
            Search <BiSearchAlt2 />
          </Button>
        </div>
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
