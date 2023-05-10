"use client";

import "./global.css";
import Head from "./head";
import { RecoilRoot } from "recoil";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  const path = usePathname();

  return (
    <html id="HTML" lang="en">
      <Head />
      <body id="Body">
        <RecoilRoot>
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
};
export default RootLayout;
