"use client";

import Script from "next/script";
import "./global.css";
import "@near-wallet-selector/modal-ui/styles.css";
import Head from "./head";

import { RecoilRoot } from "recoil";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


interface Props {
  children: React.ReactNode;
}

// window.Buffer = window.Buffer || require("buffer").Buffer; 

const RootLayout: React.FC<Props> = ({ children }) => {
  const path = usePathname();

  return (
    <html id="HTML" lang="en">
      <Head />
      <body id="Body">
        <RecoilRoot>
        </RecoilRoot>
      </body>
    </html>
  );
};
export default RootLayout;
