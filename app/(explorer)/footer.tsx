import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full pt-12 px-4 lg:px-20 pb-24 bg-[#000426] gap-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <img src="/images/community/logo.png" className="w-24 lg:w-48 h-14 lg:h-28" alt="logo" />
        <div className="flex gap-4">
          <Link href={"menu.route"} className="text-base font-semibold text-white">
            Privacy
          </Link>
          <Link href={"menu.route"} className="text-base font-semibold text-white">
            Term
          </Link>
        </div>
      </div>
      <div>
        <span className="font-semibold text-white">Find Us</span>
        <div className="flex gap-12 mt-5">
          {Socials.map((social, index) => (
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