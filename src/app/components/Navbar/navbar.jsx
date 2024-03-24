"use client";
import { useState } from "react";
import Image from "next/image";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { FaHouse, FaPhoneVolume } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiLogOutCircle } from "react-icons/bi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(false);

  const pathname = usePathname();

  const listVariants = {
    closed: {
      x: "-100vw",
    },
    opened: {
      x: 0,
      //   transition: {
      //     when: "beforeChildren",
      //     staggerChildren: 0.2,
      //   },
      transition: {
        delay: 0.1,
        type: "tween",
      },
    },
  };

  return (
    <div className="sticky top-0 bg-white py-5 px-8 lg:px-20 flex justify-between items-center z-40 drop-shadow-lg">
      <Link href="/">
        <Image src="/logo-light.png" width={120} height={50} alt="logo" />
      </Link>

      {/* Normal Menu */}
      <div className="hidden md:flex md:w-5/6 lg:w-1/2">
        <ul className="flex w-full md:gap-5 md:justify-end">
          <Link href="/all-properties">
            <li
              className={
                pathname === "/all-properties"
                  ? "lg:text-[18px] md:text-sm font-semibold p-1 lg:p-2 rounded-md bg-secondary text-white"
                  : "lg:text-[18px] md:text-sm font-semibold p-1 lg:p-2 rounded-md hover:bg-secondary hover:text-white"
              }
            >
              All Properties
            </li>
          </Link>

          <Link href="/rent">
            <li
              className={
                pathname === "/rent"
                  ? "lg:text-[18px] md:text-sm font-semibold p-1 lg:p-2 rounded-md bg-secondary text-white"
                  : "lg:text-[18px] md:text-sm font-semibold p-1 lg:p-2 rounded-md hover:bg-secondary hover:text-white"
              }
            >
              Rent
            </li>
          </Link>

          <Link href="/buy">
            <li
              className={
                pathname === "/buy"
                  ? "lg:text-[18px] md:text-sm font-semibold p-1 lg:p-2 rounded-md bg-secondary text-white"
                  : "lg:text-[18px] md:text-sm font-semibold p-1 lg:p-2 rounded-md hover:bg-secondary hover:text-white"
              }
            >
              Buy
            </li>
          </Link>

          <Link href="/agent-dashboard">
            <li
              className={
                pathname === "/agent-dashboard"
                  ? "lg:text-[18px] md:text-sm font-semibold p-1 lg:p-2 rounded-md bg-secondary text-white"
                  : "lg:text-[18px] md:text-sm font-semibold p-1 lg:p-2 rounded-md hover:bg-secondary hover:text-white"
              }
            >
              Agent Portal
            </li>
          </Link>

          <Link href="/about-us">
            <li
              className={
                pathname === "/about-us"
                  ? "lg:text-[18px] md:text-sm font-semibold p-1 lg:p-2 rounded-md bg-secondary text-white"
                  : "lg:text-[18px] md:text-sm font-semibold p-1 lg:p-2 rounded-md hover:bg-secondary hover:text-white"
              }
            >
              About us
            </li>
          </Link>

          <Link href="/career">
            <li
              className={
                pathname === "/career"
                  ? "lg:text-[18px] md:text-sm font-semibold p-1 lg:p-2 rounded-md bg-secondary text-white"
                  : "lg:text-[18px] md:text-sm font-semibold p-1 lg:p-2 rounded-md hover:bg-secondary hover:text-white"
              }
            >
              Career
            </li>
          </Link>

          {userData ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-full">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="profile-pic"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-5">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/profile/:id">
                  <DropdownMenuItem className="text-base cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                </Link>
                <Link href="/wishlist">
                  <DropdownMenuItem className="text-base cursor-pointer">
                    My Wishlists
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="text-base cursor-pointer">
                  Team
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base cursor-pointer">
                  Subscription
                </DropdownMenuItem>
                <Button
                  className="my-3 w-full font-normal text-lg hover:bg-secondary hover:text-white"
                >
                  <BiLogOutCircle className=" mr-2" /> Logout
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button className="text-text text-lg font-normal hover:bg-secondary hover:text-white">
                Login
              </Button>
            </Link>
          )}
        </ul>
      </div>
      {/* Normal Menu */}

      {/* Responsive Menu */}
      <div className="md:hidden">
        {!open ? (
          <MdOutlineMenu
            onClick={() => setOpen((prev) => !prev)}
            className="text-3xl cursor-pointer text-primary relative z-50"
          />
        ) : (
          <MdOutlineClose
            onClick={() => setOpen((prev) => !prev)}
            className="text-3xl cursor-pointer text-primary relative z-50"
          />
        )}
      </div>

      {/* Menu items */}
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 left-0 w-4/5 h-screen bg-secondary text-text z-40"
        >
          <div className="flex flex-col items-center justify-start gap-5 text-xl text-black font-semibold">
            <div className="w-full bg-white z-40 py-5 px-8 drop-shadow-lg mb-5">
              <Image src="/logo-light.png" width={120} height={50} alt="logo" />
            </div>
            <Link className="hover:text-primary text-white" href="/">
              Home
            </Link>
            <Link className="hover:text-primary text-white" href="/about-us">
              About
            </Link>
            <Link
              className="hover:text-primary text-white"
              href="/all-properties"
            >
              Properties
            </Link>
            <Link className="hover:text-primary text-white" href="/buy">
              Buy
            </Link>
            <Link className="hover:text-primary text-white" href="/rent">
              Rent
            </Link>

            <Separator className="bg-[#ac9dfa]" />

            <div className="w-full px-9">
              <button className="bg-primary px-10 py-3 text-base text-white font-bold rounded-lg w-full flex gap-3 justify-center items-center hover:bg-white hover:text-secondary">
                <FaHouse className="text-base " /> Sell Property
              </button>
            </div>

            <Separator className="bg-[#ac9dfa]" />

            <div className="w-full px-5">
              <h2>Contact Us</h2>
              <div className="flex gap-4 py-3 items-center">
                <FaPhoneVolume className="text-3xl text-primary" />
                <span className="font-normal text-base">
                  <p className="font-bold">Call Us</p>
                  <p>(201) 555-0124</p>
                </span>
              </div>
            </div>

            <Separator className="bg-[#ac9dfa]" />

            <div className="w-full px-5 text-base font-normal">
              <p className="text-text font-bold">Email:</p>
              <p className="italic">info@mdshk.com</p>
            </div>
          </div>
        </motion.div>
      )}
      {/* Menu items */}
      {/* Responsive Menu */}
    </div>
  );
}

export default Navbar;
