import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function page() {
  return (
    <div className="bg-white flex flex-col items-center p-10 rounded-lg drop-shadow-md">
      <h2 className="text-xl font-bold w-full">Profile</h2>

      <form className="flex flex-col items-center gap-8 w-full px-20 py-10">
        
        <div className="flex justify-around items-center w-full">
          <Image
            src="/agent-profile.jpg"
            width={300}
            height={300}
            className="rounded-full"
          />
          <div className="w-1/2 flex flex-col gap-5">
            <h3 className="text-2xl font-semibold mb-5">Firstname Lastname</h3>
            <div className="w-full flex gap-5">
              <span className="w-full">
                <Label htmlFor="email" className="font-semibold">
                  First Name
                </Label>
                <Input placehoder="" />
              </span>
              <span className="w-full">
                <Label htmlFor="email" className="font-semibold">
                  Last Name
                </Label>
                <Input placehoder="" />
              </span>
            </div>

            <div className="w-full flex gap-5 ">
              <span className="w-full">
                <Label htmlFor="email" className="font-semibold">
                  Position
                </Label>
                <Input placehoder="" />
              </span>
              <span className="w-full">
                <Label htmlFor="email" className="font-semibold">
                  Company Name
                </Label>
                <Input placehoder="" />
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-5 justify-between">
            <span className="w-1/2">
            <Label htmlFor="email" className="font-semibold">
                  Email
                </Label>
                <Input placehoder="" />
            </span>

            <span className="w-1/2">
            <Label htmlFor="email" className="font-semibold">
                  Phone Number
                </Label>
                <Input placehoder="" />
            </span>

            <span className="w-1/2">
            <Label htmlFor="email" className="font-semibold">
                  Photo
                </Label>
                <Input type="file" />
            </span>
        </div>
        <Button className="w-40 text-text font-semibold  hover:bg-secondary hover:text-white">Update</Button>
      </form>
    </div>
  );
}

export default page;
