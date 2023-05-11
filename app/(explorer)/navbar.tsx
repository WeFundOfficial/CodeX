/* eslint-disable @next/next/no-img-element */
"use client"

import { themeState } from "@/state/theme";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const Navbar = () => {
  const path = usePathname();
  const [network, setNetwork] = useState("Mainnet");

  const [show, setShow] = useState(false);
  const router = useRouter();

  const [dark, setDark] = useRecoilState(themeState);

  useEffect(() => {
    const handleClick = (e: any) => {
      const menu = document.getElementById("menu");
      if (!menu?.contains(e.target))
        setShow(false)
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  })

  return (
    <div className="flex w-full h-20 px-2 lg:px-6 items-center justify-between">
      <img src="/images/explorer/logo.png" className="h-12 cursor-pointer" alt="logo" 
        onClick = {() => router.push("/community")}
      />
      <div className="hidden lg:flex gap-24 items-center">
        {Menus.map((menu, index) => (
          <div
            key={index}
            className="text-base relative group cursor-pointer"
            style={{ fontWeight: path?.includes(menu.route) ? 700 : 400 }}
          >
            <div onClick={() => router.push(menu.route)}>
              {menu.label}
            </div>
          </div>
        ))}
        <div className="flex gap-4">
          <div
            className="flex h-full relative group cursor-pointer justify-center px-4 py-2 border border-[#272B2A] rounded-lg"
          >
            <span
              className=" text-base"
              style={{ minWidth: "70px" }}
            >
              {network}
            </span>
            <svg width="25" height="24" viewBox="0 0 25 24"
              fill={`${dark ? "#D4D4D8" : "black"}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.71 9.69995L13.81 12.7C12.81 13.7 11.01 13.7 10.01 12.7L7.40999 9.69995L6.60999 10.4L9.20999 13.4C9.90999 14.1 10.81 14.5 11.81 14.5C12.81 14.5 13.81 14.1 14.41 13.4L17.31 10.4L16.71 9.69995Z"/>
            </svg>

            <div
              className="hidden group-hover:flex flex-col w-50 p-1 rounded-sm absolute"
              style={{ minWidth: "170px", transform: "translate(0, 30px)" }}
            >
              {Networks.map((network, index) => (
                <div
                  className="h-10 p-1 whitespace-nowrap border-b border-b-[#08ABF1] rounded-md hover:bg-[#2B35C3]"
                  onClick={() => setNetwork(network)}
                  key={index}
                >
                  <div>{network}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex w-10 justify-center items-center cursor-pointer"
            onClick={() => setDark(!dark)}
          >
            <img src={dark ? "/images/explorer/dark.png" : "/images/explorer/sun.png"} alt="theme" />
          </div>

          <button className="flex px-4 py-2 rounded-lg whitespace-nowrap gap-2"
            style={{ background: "linear-gradient(277.23deg, #089DF1 14.86%, #082DF1 80.61%, #08ABF1 120.59%)" }}
          >
            <svg width="25" height="24" viewBox="0 0 25 24" 
              fill={`${dark ? "white" : "black"}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.11 7.28V5C21.11 3.9 20.21 3 19.11 3H5.10999C3.99999 3 3.10999 3.9 3.10999 5V19C3.10999 20.1 3.99999 21 5.10999 21H19.11C20.21 21 21.11 20.1 21.11 19V16.72C21.7 16.37 22.11 15.74 22.11 15V9C22.11 8.26 21.7 7.63 21.11 7.28ZM20.11 9V15H13.11V9H20.11ZM5.10999 19V5H19.11V7H13.11C12.01 7 11.11 7.9 11.11 9V15C11.11 16.1 12.01 17 13.11 17H19.11V19H5.10999Z" fill-opacity="0.87" />
              <path d="M16.11 13.5C16.9384 13.5 17.61 12.8284 17.61 12C17.61 11.1716 16.9384 10.5 16.11 10.5C15.2816 10.5 14.61 11.1716 14.61 12C14.61 12.8284 15.2816 13.5 16.11 13.5Z" fill-opacity="0.87" />
            </svg>
            Connect Wallet
          </button>

        </div>
      </div>
      <div className="block lg:hidden" id="menu">
        <img
          src="/images/mobile-menu-icon.svg" className="w-8" alt="menu"
          onClick={() => setShow(true)}
        />
        <SideMenu show={show} />
      </div>
    </div>
  )
};

const SideMenu = ({ show }: { show: boolean }) => {
  return (
    <div
      className={`fixed right-0 top-0 w-40 h-screen bg-white transition-all z-50`}
      style={{ maxWidth: show ? "160px" : "0px" }}
    >
      Sidebar
    </div>
  )
}

export default Navbar;

export const Menus = [
  {
    label: "Transactions",
    route: "/explorer/transactions",
  },
  {
    label: "Analytics",
    route: "/explorer/analytics"
  },
  {
    label: "Validators",
    route: "/explorer/validators"
  },
  {
    label: "Blocks",
    route: "/explorer/blocks",
  }
]

export const Networks = [
  "Mainnet", "Testnet", "Devnet"
]