import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdLocationPin, MdKingBed } from "react-icons/md";
import { FaShower, FaExpandArrowsAlt } from "react-icons/fa";
import Image from "next/image";
import CommunityAttraction from "../components/CommunityAttraction";
import Alert from "../components/Alert";
import RecommendedSearches from "../components/RecommendedSearches";
import TopSearches from "../components/TopSearches";

const properties = [
  {
    id: 1,
    title: "Journeys Coral Gables",
    address: "3119 Twin Lakes Road, Montgomer",
    bed: 5,
    bath: 3,
    area: 752,
    img: "/property/property-1.png",
  },
  {
    id: 2,
    title: "Journeys Coral Gables",
    address: "3119 Twin Lakes Road, Montgomer",
    bed: 5,
    bath: 3,
    area: 752,
    img: "/property/property-2.png",
  },
  {
    id: 3,
    title: "Journeys Coral Gables",
    address: "3119 Twin Lakes Road, Montgomer",
    bed: 5,
    bath: 3,
    area: 752,
    img: "/property/property-3.png",
  },
  {
    id: 4,
    title: "Journeys Coral Gables",
    address: "3119 Twin Lakes Road, Montgomer",
    bed: 5,
    bath: 3,
    area: 752,
    img: "/property/property-1.png",
  },
  {
    id: 5,
    title: "Journeys Coral Gables",
    address: "3119 Twin Lakes Road, Montgomer",
    bed: 5,
    bath: 3,
    area: 752,
    img: "/property/property-3.png",
  },
  {
    id: 6,
    title: "Journeys Coral Gables",
    address: "3119 Twin Lakes Road, Montgomer",
    bed: 5,
    bath: 3,
    area: 752,
    img: "/property/property-1.png",
  },
  {
    id: 7,
    title: "Journeys Coral Gables",
    address: "3119 Twin Lakes Road, Montgomer",
    bed: 5,
    bath: 3,
    area: 752,
    img: "/property/property-2.png",
  },
  {
    id: 8,
    title: "Journeys Coral Gables",
    address: "3119 Twin Lakes Road, Montgomer",
    bed: 5,
    bath: 3,
    area: 752,
    img: "/property/property-3.png",
  },
];

function AllProperties() {
  return (
    <div className="py-10 flex flex-col gap-5">
      <form className="px-10 flex flex-col gap-4 lg:flex-row lg:justify-center lg:px-72">
        <div className="flex gap-5 lg:w-2/5">
          <Input className="bg-white" placeholder="Location" />
          <Button className="text-text hover:bg-secondary hover:text-white lg:hidden">
            Find
          </Button>
        </div>
        <div className="flex gap-2 lg:w-3/5 lg:gap-5">
          {/* Property Types */}
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          {/* Property Types */}

          {/* Beds Type */}
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Beds" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          {/* Beds Type */}

          {/* Price Range */}
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          {/* Price Range */}

          <Button className="hidden lg:flex w-[500px] text-text font-bold text-base hover:bg-secondary hover:text-white">
            Find
          </Button>
        </div>
      </form>
      <Separator />

      <div className="flex  w-full lg:px-20 lg:py-5">
        {/* Property listing section */}
        <div className=" w-full flex flex-col gap-5 px-10 lg:w-4/5">
          <h2 className="text-2xl font-bold md:text-4xl">All Properties</h2>

          <span className="flex justify-between items-center">
            <p className="text-sm lg:text-base">Total: 7 Properties</p>
            <span>
              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Featured</SelectItem>
                  <SelectItem value="dark">Buy</SelectItem>
                  <SelectItem value="system">Rent</SelectItem>
                </SelectContent>
              </Select>
            </span>
          </span>

          {/* Cards sections */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {properties.map((property) => (
              <Card key={property.id}>
                <CardHeader>
                  <div className="group relative overflow-hidden rounded-lg mb-2 cursor-pointer">
                    <Image
                      src={property.img}
                      width={300}
                      height={300}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                  <CardTitle className="md:text-lg lg:text-xl">
                    {property.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1 md:text-[12px] lg:text-sm">
                    <MdLocationPin /> {property.address}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between">
                  <p className="flex gap-2 items-center md:text-[12px] lg:text-sm">
                    <MdKingBed /> Beds {property.bed}
                  </p>
                  <p className="flex gap-2 items-center md:text-[12px] lg:text-sm">
                    <FaShower /> Bath {property.bath}
                  </p>
                  <p className="flex gap-2 items-center md:text-[12px] lg:text-sm">
                    <FaExpandArrowsAlt /> SqFt {property.area}
                  </p>
                </CardContent>
                <div className="flex items-center justify-between px-4 mb-5">
                  <Button className="w-2/5 text-text hover:bg-secondary hover:text-white">Check</Button>
                  <p className="font-bold text-secondary">$ 49,000</p>
                </div>
                <div className="flex items-center justify-center mb-2">
                  <Separator />
                </div>
                <CardFooter className="flex justify-between">
                  <span className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>Mdshk</p>
                  </span>
                  <p>1 years ago</p>
                </CardFooter>
              </Card>
            ))}
          </div>
          {/* Cards sections */}
        </div>
        {/* Property listing section */}
        
        {/* Side bar */}
        <div className="hidden lg:flex lg:w-1/5 flex-col gap-5 items-center p-8 border-l-2 border-gray-100 h-[90%]">
            <CommunityAttraction />
            <Alert />
            <RecommendedSearches />
            <TopSearches />
            <div className="mt-5">
            <Image src="/ad-poster.jpg" width={500} height={500} />
            </div>
        </div>
        {/* Side bar */}
      </div>
    </div>
  );
}

export default AllProperties;
