import Image from "next/image";

function Brands() {
  return <div className="py-10 px-20 flex flex-col gap-10 items-center">
    <h3 className="text-xl font-bold">Trusted by over 150+ major companies</h3>
    <div className="flex gap-2 justify-around items-center w-2/3">
        <Image src="/brand-1.png" width={150} height={150} className="opacity-50 hover:opacity-100 cursor-pointer" />
        <Image src="/brand-2.png" width={150} height={150} className="opacity-50 hover:opacity-100 cursor-pointer"/>
        <Image src="/brand-3.png" width={150} height={150} className="opacity-50 hover:opacity-100 cursor-pointer"/>
        <Image src="/brand-4.png" width={150} height={150} className="opacity-50 hover:opacity-100 cursor-pointer"/>
        <Image src="/brand-5.png" width={150} height={150} className="opacity-50 hover:opacity-100 cursor-pointer"/>
    </div>
  </div>;
}

export default Brands;
