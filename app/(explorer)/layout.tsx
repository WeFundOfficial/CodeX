"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { themeState } from "@/state/theme";

interface Props {
  children: React.ReactNode;
}

// window.Buffer = window.Buffer || require("buffer").Buffer; 

const RootLayout: React.FC<Props> = ({ children }) => {
  const path = usePathname();
  const dark = useRecoilValue(themeState);

  return (
    <div className="w-full"
      style={{ 
        color: dark ? "white" : "black",
        background: dark ? "black" : "white",
     }}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default RootLayout;
