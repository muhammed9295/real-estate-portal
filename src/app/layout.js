
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MDSHK - Properties",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-background">
        <Navbar />
        {children}
        </div>
        </body>
    </html>
  );
}
