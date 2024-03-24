"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useState } from "react";

function page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Success");
  };

  return (
    <div className="p-10 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 items-center"
      >
        <Image
          src="/agent-profile.jpg"
          alt="profile-pic"
          width={500}
          height={500}
          className="rounded-full"
        />
        <div className="bg-primary relative px-2 py-3 w-32 rounded-md hover:bg-secondary hover:text-white cursor-pointer">
          <p className="text-sm text-center font-bold">Change Avatar</p>
          <input
            type="file"
            className="appearance-none opacity-0 absolute px-2 py-3 top-0 left-0 w-32 cursor-pointer"
            accept="image/*"
          />
        </div>
        <span className="flex flex-col items-center gap-1">
          <h3 className="text-2xl font-bold">Muhammed Sheikh</h3>
          <p className="text-sm">mdsheikh9295@gmail.com</p>
        </span>

        <div className="flex flex-col items-center gap-5 w-full md:px-28 lg:px-80">
          <span className="md:w-full lg:w-3/4">
            <Label className="text-base">Firstname</Label>
            <Input
              className="lg:h-12 bg-white my-2"
              type="text"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </span>
          <span className="md:w-full lg:w-3/4">
            <Label className="text-base">Lastname</Label>
            <Input
              className="lg:h-12 bg-white my-2"
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </span>
        </div>

        <div className="flex flex-col items-center gap-5 w-full md:px-28 lg:px-80">
          <span className="md:w-full lg:w-3/4">
            <Label className="text-base">Email</Label>
            <Input
              className="lg:h-12 bg-white my-2"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </span>
          <span className="md:w-full lg:w-3/4">
            <Label className="text-base">Phone</Label>
            <Input
              className="lg:h-12 bg-white my-2"
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </span>
        </div>

        <Button
          type="submit"
          className="w-28 text-text font-bold hover:bg-secondary hover:text-white my-3"
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default page;
