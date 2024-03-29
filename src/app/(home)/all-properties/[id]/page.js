"use client";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CommunityAttraction from "../../components/CommunityAttraction";
import Alert from "../../components/Alert";
import RecommendedSearches from "../../components/RecommendedSearches";
import TopSearches from "../../components/TopSearches";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MdKingBed } from "react-icons/md";
import { FaShower } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

function page({ params }) {
  const [property, setProperty] = useState("");
  const [agentDetails, setAgentDetails] = useState("");
  const [propertyImg , setPropertyImg] = useState("");

  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/properties/get-singleProperty/${id}`
        );
        setProperty(response.data.data[0]);
        setAgentDetails(response.data.data[0].agent_details);
        setPropertyImg(response.data.data[0].propertyImages)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  
  return (
    <div className="grid gap-5 w-4/5 p-10 mx-auto ">
        
      <div className="grid gap-4 grid-cols-12">
        <div className="col-span-8 p-2">
          <AspectRatio ratio={4 / 3}>
            <Image src={propertyImg[0]} fill alt="property-2" />
          </AspectRatio>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col gap-4 p-2">
            <AspectRatio ratio={4 / 3}>
              <Image src={propertyImg[1]} fill alt="property-2" />
            </AspectRatio>
            <AspectRatio ratio={4 / 3}>
              <Image src={propertyImg[2]} fill alt="property-3" />
            </AspectRatio>
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-12">
        <div className="sm:col-span-8">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <h2 className="text-4xl font-bold">
                <span className="text-xl">AED</span> {property.price}
              </h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="hover:bg-secondary hover:text-white">
                      Add to wishlist
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Login to add wishlist</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <h2 className="text-lg font-semibold">{property.title}</h2>

            <div className="flex gap-4">
              <span className="flex gap-2 items-center">
                <MdKingBed className="text-lg" />
                <p> {property.bedrooms} Bed</p>
              </span>
              <span className="flex gap-2 items-center">
                <FaShower className="text-lg" />
                <p> {property.bathrooms} Bath</p>
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold">
                Prime Location | 5 Years Payment Plan
              </h2>

              <p>{property.description}</p>

              <ul>
                <p className="font-semibold">APARTMENT DETAILS:</p>
                <li>- Master Bedroom</li>
                <li>- Master Bathroom</li>
                <li>- Built-in Wardrobes</li>
                <li>- Closed Kitchen</li>
                <li>- Living Area</li>
                <li>- Dining Area</li>
                <li>- Guest Toilet</li>
              </ul>

              <h2 className="text-xl font-semibold mt-5">
                Property Information
              </h2>
              <div className="flex gap-8">
                <div className="w-1/2 px-2">
                  <div className="flex justify-between">
                    <p className="text-lg">Type</p>
                    <span className="w-1/2">
                      <p className="text-lg font-semibold">
                        {property.propertyType}
                      </p>
                    </span>
                  </div>
                  <Separator className="my-2" />

                  <div className="flex justify-between">
                    <p className="text-lg">Purpose</p>
                    <span className="w-1/2">
                      <p className="text-lg font-semibold">
                        {property.listingType}
                      </p>
                    </span>
                  </div>
                  <Separator className="my-2" />

                  <div className="flex justify-between">
                    <p className="text-lg">Completion</p>
                    <span className="w-1/2">
                      <p className="text-lg font-semibold">Ready</p>
                    </span>
                  </div>
                  <Separator className="my-2" />

                  <div className="flex justify-between">
                    <p className="text-lg">Agent</p>
                    <span className="w-1/2">
                      <p className="text-lg font-semibold">{agentDetails.firstName} {agentDetails.lastName}</p>
                    </span>
                  </div>
                  <Separator className="my-2" />
                </div>

                <div className="w-1/2 px-2">
                  <div className="flex justify-between">
                    <p className="text-lg">Furnishing</p>
                    <span className="w-1/2">
                      <p className="text-lg font-semibold">Unfurnished</p>
                    </span>
                  </div>
                  <Separator className="my-2" />

                  <div className="flex justify-between">
                    <p className="text-lg">Average Rent</p>
                    <span className="w-1/2">
                      <p className="text-lg font-semibold">AED 60,375 Yearly</p>
                    </span>
                  </div>
                  <Separator className="my-2" />

                  <div className="flex justify-between">
                    <p className="text-lg">Added</p>
                    <span className="w-1/2">
                      <p className="text-lg font-semibold">8 December 2023</p>
                    </span>
                  </div>
                  <Separator className="my-2" />
                </div>
              </div>

              <h2 className="text-xl font-semibold">More info:</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                fugit corrupti rerum ducimus voluptatibus eveniet, in
                doloremque, expedita maxime eaque ad distinctio ut quia fuga qui
                molestias, et saepe pariatur. corrupti rerum ducimus
                voluptatibus eveniet, in doloremque, expedita maxime eaque ad
                distinctio ut quia fuga qui molestias, et saepe pariatur.
                corrupti rerum ducimus voluptatibus eveniet, in doloremque,
                expedita maxime eaque ad distinctio ut quia fuga qui molestias,
                et saepe pariatur.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:col-span-4 px-8">
          <div className="flex flex-col gap-4">
            <div className="rounded-lg border p-5">
              <div className="flex gap-3 items-center">
                <Image
                  src={agentDetails ? agentDetails.avatar : "/noavatar.png"}
                  className="rounded-full drop-shadow-sm"
                  width={100}
                  height={100}
                  alt="agent-profile"
                />
                <span>
                  <h3 className="text-lg font-semibold">
                    {agentDetails.firstName} {agentDetails.lastName}{" "}
                  </h3>
                  <p>{agentDetails.companyName}</p>

                  <span className="flex justify-between gap-5 my-2">
                    <Button className="w-28 hover:bg-secondary">Call</Button>
                    <Button className="w-28 hover:bg-secondary">Email</Button>
                  </span>
                </span>
              </div>

              <Separator className="my-3" />
              <p>By: {agentDetails.companyName}</p>
            </div>
            <CommunityAttraction />
            <Alert />
            <RecommendedSearches />
            <TopSearches />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
