import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdLocationPin, MdKingBed } from "react-icons/md";
import { FaShower, FaExpandArrowsAlt } from "react-icons/fa";
import Image from "next/image";

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

function Featured() {
  return (
    <div className="py-20 px-20 flex flex-col gap-4">
      {/* Title - text */}
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-5xl font-black">Featured Properties</h2>
        <p className="text-base">
          Explore all the different types of properties so you can choose the
          best option for you.
        </p>
      </div>
      {/* Title - text */}
      <div className="flex flex-col items-center mt-5">
        {/* Filter buttons */}
        <div className="w-2/5 flex justify-between">
          <Button className="px-5 drop-shadow-xl hover:bg-secondary hover:text-text">
            All
          </Button>
          <Button className="px-5 drop-shadow-xl hover:bg-secondary hover:text-text">
            Bungalow
          </Button>
          <Button className="px-5 drop-shadow-xl hover:bg-secondary hover:text-text">
            Apartments
          </Button>
          <Button className="px-5 drop-shadow-xl hover:bg-secondary hover:text-text">
            House
          </Button>
          <Button className="px-5 drop-shadow-xl hover:bg-secondary hover:text-text">
            Office
          </Button>
          <Button className="px-5 drop-shadow-xl hover:bg-secondary hover:text-text">
            Villa
          </Button>
        </div>
        {/* Filter buttons */}

        {/* Cards sections */}
        <div className="mt-14 grid grid-cols-4 gap-7">
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
                <CardTitle>{property.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MdLocationPin /> {property.address}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between">
                <p className="flex gap-2 items-center">
                  <MdKingBed /> Beds {property.bed}
                </p>
                <p className="flex gap-2 items-center">
                  <FaShower /> Bath {property.bath}
                </p>
                <p className="flex gap-2 items-center">
                  <FaExpandArrowsAlt /> SqFt {property.area}
                </p>
              </CardContent>
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
    </div>
  );
}

export default Featured;
