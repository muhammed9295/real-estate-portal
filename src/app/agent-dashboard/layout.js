import { Inter } from "next/font/google";
import Navbar from "../(home)/components/Navbar/navbar";
import "../globals.css";
import Sidebar from "./components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Navbar />
          <div className="w-full flex">
            <div className="w-1/6 border">
              <Sidebar />
            </div>
            <div className="w-5/6 p-10">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
