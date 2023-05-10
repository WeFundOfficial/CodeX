import Link from "next/link";
import { Menus } from "./navbar";

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full pt-12 px-4 lg:px-20 pb-24 bg-[#000426]">
      <div className="flex">
        <img src="/images/community/logo.png" className="w-24 lg:w-48 h-14 lg:h-28" alt="logo" />
        <div className="flex flex-col gap-8 ml-8 lg:ml-40">
          {Menus.map((menu, index) => (
            <Link href={menu.route} key={index} className="text-base font-semibold">
              {menu.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-8 ml-12">
          {Links.map((menu, index) => (
            <Link href={menu.route} key={index} className="text-base  font-semibold">
              {menu.label}
            </Link>
          ))}
        </div>
      </div>
      <div >
        <span className="font-semibold">Find Us</span>
        <div className="flex gap-12 mt-5">
          {Socials.map((social, index)=> (
            <Link href={social.route} key={index}>
              <img src={social.icon} alt="social-icon" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Footer;

const Links = [
  {
    label: "Whitepaper",
    route: "",
  },
  {
    label: "Brand",
    route: "",
  },
  {
    label: "Privacy",
    route: "",
  },
  {
    label: "Terms",
    route: "",
  },
]

const Socials = [
  {
    icon: "/images/footer/twitter.png",
    route: "",
  },
  {
    icon: "/images/footer/discord.png",
    route: "",
  },
  {
    icon: "/images/footer/telegram.png",
    route: "",
  },
  {
    icon: "/images/footer/github.png",
    route: "",
  },
]