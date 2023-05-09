/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="flex w-full h-20 bg-[#0E0F2DE5] px-2 lg:px-20 items-center justify-between">
      <img src="/images/logo.png" className="h-12" alt="logo" />
      <div className="hidden lg:flex gap-8 items-center">
        {Menus.map((menu, index) => (
          <Link href={menu.route} key={index} 
            className={`text-white text-base opacity-${path?.includes(menu.route)? 100 : 50}`}
          >
            {menu.label}
          </Link>
        ))}
        <button className="w-40 h-10 p-2 rounded-lg text-white"
          style={{ background: "linear-gradient(125.84deg, rgba(50, 181, 255, 0.7) 6.42%, rgba(0, 26, 255, 0.7) 49.21%, rgba(50, 181, 255, 0.7) 94.38%)" }}
        >
          Build on Codex
        </button>
      </div>
    </div>
  )
};

export default Navbar;

const Menus = [
  {
    label: "Community",
    route: "/community"
  },
  {
    label: "Developers",
    route: "/developers"
  },
  {
    label: "Grants",
    route: "/grants"
  },
  {
    label: "About us",
    route: "/aboutus"
  },
]