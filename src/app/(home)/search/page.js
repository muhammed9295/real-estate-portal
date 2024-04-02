"use client";
import { useEffect, useState } from "react";
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
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function page() {
  const [properties, setProperties] = useState([]);
  const searchParams = useSearchParams();
  const neighbourhood = searchParams.get("neighbourhood");
  const listingType = searchParams.get("listingType");
  const city = searchParams.get("city");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  useEffect(() => {   
    
    const fetchProperties = async () => {
      const response = await axios.get(`http://localhost:8000/api/properties/get-search-properties?listingType=${listingType}&city=${city}&neighbourhood=${neighbourhood}&minPrice=${minPrice}&maxPrice=${maxPrice}`);

      setProperties(response.data.data);
    };
    fetchProperties();
  }, []);
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
            <p className="text-sm lg:text-base">
              Total: {properties.length} Properties
            </p>
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
            {properties.map((property) => {
              return (
                <Card key={property._id}>
                  <CardHeader>
                    <Link href={`/all-properties/${property._id}`}>
                      <div className="group relative overflow-hidden rounded-lg mb-2 cursor-pointer">
                        <Image
                          src={property.propertyImages[0]}
                          width={400}
                          height={300}
                          className="transition-transform duration-500 group-hover:scale-110"
                          alt={property.title}
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>
                    </Link>
                    <Link href={`/all-properties/${property._id}`}>
                      <CardTitle className="md:text-lg lg:text-xl">
                        {property.title}
                      </CardTitle>
                    </Link>
                    <CardDescription className="flex items-center gap-1 md:text-[12px] lg:text-sm">
                      <MdLocationPin /> {property.address}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-between">
                    <p className="flex gap-2 items-center md:text-[12px] lg:text-sm">
                      <MdKingBed /> Beds {property.bedrooms}
                    </p>
                    <p className="flex gap-2 items-center md:text-[12px] lg:text-sm">
                      <FaShower /> Bath {property.bathrooms}
                    </p>
                    <p className="flex gap-2 items-center md:text-[12px] lg:text-sm">
                      <FaExpandArrowsAlt /> SqFt 1000
                    </p>
                  </CardContent>
                  <div className="flex items-center justify-between px-4 mb-5">
                    <Link
                      className="w-2/5"
                      href={`/all-properties/${property._id}`}
                    >
                      <Button className="w-full text-text hover:bg-secondary hover:text-white">
                        Check
                      </Button>
                    </Link>
                    <p className="font-bold text-secondary">
                      $ {property.price}
                    </p>
                  </div>
                  
                </Card>
              );
            })}
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

export default page;
