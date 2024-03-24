"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "../utils/supabase/client";
import { useRouter } from "next/navigation";

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error(error);
      setLoading(false);
      return;
    } else {
      // Redirecting to Login Page
      router.push("/login");
    }

    console.log(data);
    setLoading(false);
  };

  return (
    <div className="w-full flex bg-white">
      <div className="w-1/2 h-dvh bg-[url(/login-image.jpg)] bg-cover bg-center bg-no-repeat"></div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <form
          className="w-1/2 p-20 border flex flex-col gap-5 items-center rounded-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold">Register</h2>
          <div className="flex gap-3">
            <span className="flex flex-col gap-2">
              <Label className="text-base">Firstname</Label>
              <Input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </span>
            <span className="flex flex-col gap-2">
              <Label className="text-base">Lastname</Label>
              <Input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
            </span>
          </div>
          <span className="w-full flex flex-col gap-2">
            <Label className="text-base">Email</Label>
            <Input type="text" onChange={(e) => setEmail(e.target.value)} />
          </span>

          <span className="w-full flex flex-col gap-2">
            <Label className="text-base">Password</Label>
            <Input type="text" onChange={(e) => setPassword(e.target.value)} />
          </span>

          <Button
            type="submit"
            className="w-32 text-text text-lg font-semibold hover:bg-secondary hover:text-white"
          >
            {loading ? <img src="/spinner.svg" /> : "Register"}
            
          </Button>

          <p className="text-sm">
            If you are not a user? <em>Login</em>
          </p>
        </form>
      </div>
    </div>
  );
}

export default page;
