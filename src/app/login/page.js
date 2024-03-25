"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, Toaster } from "sonner";

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
        
      if (response.data.statusCode === 200){
        toast.success("Login success")
        localStorage.setItem("accessToken", response.data.data.accessToken)
        localStorage.setItem("refreshToken", response.data.data.refreshToken)
        router.push("/")
      }else{
        toast.error("Login failed. Please try again.")
      }
    } catch (error) {
      console.error("Login Error: ", error);
      toast.error("An error occurred while logging in. Please try again.")
    }
  };

  return (
    <div className="w-full flex bg-white">
      <div className="w-1/2 h-dvh bg-[url(/login-image.jpg)] bg-cover bg-center bg-no-repeat"></div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-1/2 p-20 border flex flex-col gap-8 items-center rounded-md"
        >
          <h2 className="text-3xl font-bold">Login</h2>
          <span className="w-full flex flex-col gap-2">
            <Label className="font-bold text-base">Email</Label>
            <Input type="text" onChange={(e) => setEmail(e.target.value)} />
          </span>

          <span className="w-full flex flex-col gap-2">
            <Label className="font-bold text-base">Password</Label>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>

          <Button
            type="submit"
            className="w-32 text-text text-lg font-semibold hover:bg-secondary hover:text-white"
          >
            Login
          </Button>
          <Toaster />
          <p className="text-sm">
            If you are not a user? <em>Register</em>
          </p>
        </form>
      </div>
    </div>
  );
}

export default page;
