"use client";
import { useState } from "react";
import Image from "next/image";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

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
        <AnimatePresence>
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="absolute top-0 left-0 w-4/5 h-screen bg-primary text-text z-40"
          >
            <div className="flex flex-col items-center justify-start gap-8 text-xl text-white font-semibold">
              <div className="w-full bg-white z-40 py-5 px-8 drop-shadow-lg">
                <Image src="/logo-light.png" width={120} height={50} />
              </div>
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact</Link>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      {/* Menu items */}
      {/* Responsive Menu */}
    </div>
  );
}

export default Navbar;
