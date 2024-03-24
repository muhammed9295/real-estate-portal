import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function page() {
  return (
    <div className="bg-white flex flex-col items-center p-10 rounded-lg drop-shadow-md">
      <span className="w-full">
        <h2 className="text-xl font-bold">Create Listing</h2>
      </span>

      <form action="" className="w-full my-8 flex flex-col items-center gap-8">
        <div className="flex gap-5 px-20 w-full">
          <span className="w-2/3 flex flex-col gap-3">
            <Label htmlFor="email" className="font-semibold">
              Property Name
            </Label>
            <Input placehoder="" />
          </span>

          <span className="w-1/3 flex flex-col gap-3">
            <Label htmlFor="email" className="font-semibold">
              Property Type
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Residential</SelectItem>
                <SelectItem value="dark">Commercial</SelectItem>
              </SelectContent>
            </Select>
          </span>

          <span className="w-1/3 flex flex-col gap-3">
            <Label htmlFor="email" className="font-semibold">
              Listing Type
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Listing Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">For Sale</SelectItem>
                <SelectItem value="dark">For Rent</SelectItem>
              </SelectContent>
            </Select>
          </span>
        </div>

        <div className="flex gap-5 px-20 w-full">
          <span className="w-1/2 flex flex-col gap-3">
            <Label htmlFor="email" className="font-semibold">
              Bedrooms
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">1</SelectItem>
                <SelectItem value="light">2</SelectItem>
                <SelectItem value="dark">3</SelectItem>
                <SelectItem value="dark">4</SelectItem>
                <SelectItem value="dark">5</SelectItem>
              </SelectContent>
            </Select>
          </span>

          <span className="w-1/2 flex flex-col gap-3">
            <Label htmlFor="email" className="font-semibold">
              Bathrooms
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">1</SelectItem>
                <SelectItem value="light">2</SelectItem>
                <SelectItem value="dark">3</SelectItem>
              </SelectContent>
            </Select>
          </span>

          <span className="w-1/2 flex flex-col gap-3">
            <Label htmlFor="email" className="font-semibold">
              Amenities
            </Label>
            <Input />
          </span>
        </div>

        <div className="flex gap-5 px-20 w-full">
          <span className="w-1/2 flex flex-col gap-3">
            <Label htmlFor="email" className="font-semibold">
              Photos
            </Label>
            <Input type="file" />
          </span>

          <span className="w-1/2 flex flex-col gap-3">
            <Label htmlFor="email" className="font-semibold">
              Address
            </Label>
            <Input type="text" />
          </span>
        </div>

        <div className="flex gap-5 px-20 w-full">
          <span className="w-1/2 flex flex-col gap-3">
            <Label htmlFor="email" className="font-semibold">
              Neighborhood
            </Label>
            <Input type="text" />
          </span>

          <span className="w-1/2 flex flex-col gap-3">
            <Label htmlFor="email" className="font-semibold">
              City
            </Label>
            <Input type="text" />
          </span>

          <span className="w-1/2 flex flex-col gap-3">
            <Label htmlFor="email" className="font-semibold">
              Price
            </Label>
            <Input type="text" />
          </span>
        </div>

        <div className="flex gap-5 px-20 w-full">
          <span className="w-full flex flex-col gap-3">
            <Label htmlFor="email" className="font-semibold">
              Description
            </Label>
            <Textarea />
          </span>
        </div>

        <Button className="w-36 text-text font-semibold  hover:bg-secondary hover:text-white">Submit</Button>
      </form>
    </div>
  );
}

export default page;
