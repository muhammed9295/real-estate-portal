"use client";
import { useState } from "react";
import Image from "next/image";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { FaHouse, FaPhoneVolume } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import Seperator from "../ui/seperator";

function Navbar() {
  const [open, setOpen] = useState(false);

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
    <div className="sticky top-0 bg-white py-5 px-8 lg:px-20 flex justify-between items-center">
      <Image src="/logo-light.png" width={120} height={50} />

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
          className="absolute top-0 left-0 w-4/5 h-screen bg-primary text-text z-40"
        >
          <div className="flex flex-col items-center justify-start gap-8 text-xl text-black font-semibold">
            <div className="w-full bg-white z-40 py-5 px-8 drop-shadow-lg mb-5">
              <Image src="/logo-light.png" width={120} height={50} />
            </div>
            <Link className="hover:text-accent" href="/">Home</Link>
            <Link className="hover:text-accent" href="/">About</Link>
            <Link className="hover:text-accent" href="/">Blog</Link>
            <Link className="hover:text-accent" href="/">Contact</Link>

            <div className="w-full px-9 mt-5">
              <Seperator color="border-[#54e8ed]" margin="mb-9" />
              <button className="bg-accent px-10 py-3 text-base text-white font-bold rounded-lg w-full flex gap-3 justify-center items-center hover:bg-white hover:text-accent">
                <FaHouse className="text-base text-white" /> Sell Property
              </button>
            </div>

            <div className="w-full px-5 mt-5">
              <Seperator color="border-[#54e8ed]" margin="mb-9" />
              <h2>Contact Us</h2>
              <div className="flex gap-4 py-3 items-center">
                <FaPhoneVolume className="text-3xl text-accent" />
                <span className="font-normal text-base">
                  <p>Call Us</p>
                  <p>(201) 555-0124</p>
                </span>
              </div>
            </div>

            <div className="w-full px-5 text-base font-normal">
              <Seperator color="border-[#54e8ed]" margin="mb-3" />
              <p className="text-accent">Email:</p>
              <p>info@mdshk.com</p>
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
