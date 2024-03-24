"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useState } from "react";
import { supabase } from "@/app/utils/supabase/client";

function page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState(null);

  function getCurrentUserId() {
    const user = supabase.auth.getUser();
    if (user) {
       return user.id;
    } else {
       console.log('No user is currently logged in.');
       return null;
    }
   }

   const userId = getCurrentUserId();
console.log('Current user ID:', userId);
   

  const handleFileChange = async (event) => {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const filePath = `avatar_${Date.now()}.png`;

      const { error: uploadError } = await supabase.storage
        .from("avatar")
        .upload(filePath, file);

        console.log(uploadError);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert("Error uploading avatar!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // upload avatar file first

    // Insert user data into the table
    const { errors } = await supabase.from("user").upsert({
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      avatar: fileData.Key,
    });
    if (errors) throw error;
    console.log(errors);
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
            onChange={handleFileChange}
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
