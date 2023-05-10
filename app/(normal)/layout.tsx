"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";

interface Props {
  children: React.ReactNode;
}

// window.Buffer = window.Buffer || require("buffer").Buffer; 

const RootLayout: React.FC<Props> = ({ children }) => {
  const path = usePathname();

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default RootLayout;
