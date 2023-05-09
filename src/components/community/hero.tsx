/* eslint-disable @next/next/no-img-element */
import HeroImage from "../../assets/images/community/hero.png";

const Hero = () => {
  return (
    <div
      className="w-full h-80 lg:h-[664px] bg-no-repeat pl-4 lg:pl-[50%] pt-4 lg:pt-[160px]"
      style={{ backgroundImage: `url(${HeroImage.src})` }}
    >
      <h1 className=" text-3xl lg:text-5xl font-bold leading-[150%]">
        Building Widely-Used<br />Web3 Applications.
      </h1>
      <p className=" text-sm lg:text-xl max-w-5xl mt-8">
        CodeX is a dedicated project for the mass adoption of<br />blockchain users.
      </p>
      <div className="flex gap-4 lg:gap-8 mt-8">
        <button className="w-40 lg:w-56 h-12 lg:h-16 p-1 lg:p-2 rounded-lg  text-sm lg:text-lg"
          style={{
            background: "linear-gradient(277.23deg, #089DF1 14.86%, #082DF1 80.61%, #08ABF1 120.59%)",
            boxShadow: "0px 5px 35px #0159DD"
          }}
        >
          Build on Codex
        </button>
        <button className="w-40 lg:w-72 h-12 lg:h-16 p-1 rounded-lg  text-sm lg:text-lg"
          style={{
            border: "1px solid #08ABF1",
            filter: "drop-shadow(0px 5px 35px #0159DD"
          }}
        >
          Explorer Whitepaper
        </button>
      </div>
    </div>
  )
}

export default Hero;