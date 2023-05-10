/* eslint-disable @next/next/no-img-element */
import HeroImage from "../../assets/images/community/hero.png";

const Hero = () => {
  return (
    <div
      className="w-full h-100 lg:h-[664px] bg-no-repeat pl-4 lg:pl-[50%] pt-4 lg:pt-20"
      style={{ backgroundImage: `url(${HeroImage.src})` }}
    >
      <span className="text-sm lg:text-xl font-semibold">
        CodeX Community
      </span>
      <h1 className=" text-3xl lg:text-5xl font-semibold !leading-[150%] lg:w-[550px] mt-8">
        CodeX Us Designed For Those Who Thrilled To Not Quit
      </h1>
      <p className=" text-sm lg:text-xl !leading-[150%] max-w-5xl mt-8 lg:w-[550px]">
        The CodeX community is a worldwide movement of developers, node operators, educators, and other contributors building a safer, user-ready, and widely accessible blockchain ecosystem.
      </p>
      <button className="w-40 lg:w-56 h-12 lg:h-16 p-1 lg:p-2 rounded-lg text-sm lg:text-lg mt-8"
        style={{
          background: "linear-gradient(125.84deg, rgba(50, 181, 255, 0.7) 6.42%, rgba(0, 26, 255, 0.7) 49.21%, rgba(50, 181, 255, 0.7) 94.38%)",
          boxShadow: "0px 5px 35px #0159DD"
        }}
      >
        Join The Community
      </button>
    </div>
  )
}

export default Hero;