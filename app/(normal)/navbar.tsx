/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const path = usePathname();
  const [show, setShow] = useState(false);
  const router = useRouter();

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
    <div className="flex w-full h-20 bg-[#0E0F2DE5] px-2 lg:px-20 items-center justify-between">
      <img src="/images/community/logo.png" className="h-12" alt="logo"
        onClick={() => router.push("/community")}
      />
      <div className="hidden lg:flex gap-8 items-center">
        {Menus.map((menu, index) => (
          <div
            key={index}
            className="text-base relative group cursor-pointer"
            style={{ opacity: path?.includes(menu.route) ? 1 : 0.5 }}
          >
            <div onClick={() => router.push(menu.route)}>
              {menu.label}
            </div>
            {menu.submenu && <SubMenu menus={menu.submenu} />}
          </div>
        ))}
        <button className="w-40 h-10 p-2 rounded-lg "
          style={{ background: "linear-gradient(125.84deg, rgba(50, 181, 255, 0.7) 6.42%, rgba(0, 26, 255, 0.7) 49.21%, rgba(50, 181, 255, 0.7) 94.38%)" }}
        >
          Build on Codex
        </button>
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
const SubMenu = ({ menus }: { menus: any[] }) => {
  return (
    <div
      className="hidden group-hover:flex flex-col w-50 p-1 bg-[#00084D80] rounded-sm absolute"
      style={{ minWidth: "100px" }}
    >
      {menus.map((menu, index) => (
        <Link href={menu.route} className="h-10 p-1 whitespace-nowrap border-b border-b-[#08ABF1] hover:bg-[#2B35C3]" key={index}>
          <div>{menu.label}</div>
        </Link>
      ))}
    </div>
  )
}
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
    label: "Community",
    route: "/community",
    submenu: [
      {
        label: "Codex Community",
        route: "/community/codex-community"
      },
      {
        label: "Discussion Forum",
        route: "/community/codex-community"
      },
      {
        label: "Ecosystem Projects",
        route: "/community/codex-community"
      },
    ]
  },
  {
    label: "Developers",
    route: "/developers"
  },
  {
    label: "Explorer",
    route: "/explorer"
  },
  {
    label: "About us",
    route: "/aboutus",
    submenu: [
      {
        label: "Team",
        route: "/aboutus/team"
      },
      {
        label: "Blog",
        route: "/aboutus/blog"
      },
      {
        label: "Career",
        route: "/aboutus/career"
      },
    ]
  },
]