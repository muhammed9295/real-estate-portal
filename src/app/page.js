import Image from "next/image";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Featured from "./components/Featured";
import KeyFeatures from "./components/KeyFeatures";

export default function Home() {
  return (
    <main className="flex flex-col">
     <Hero />
     <Brands />
     <Featured />
     <KeyFeatures />
    </main>
  );
}
