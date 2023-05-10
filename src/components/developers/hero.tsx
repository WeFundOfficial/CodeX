/* eslint-disable @next/next/no-img-element */
import HeroImage from "../../assets/images/community/hero.png";

const Hero = () => {
  return (
    <div
      className="w-full h-100 lg:h-[664px] bg-no-repeat pl-4 lg:pl-[50%] pt-4 lg:pt-20"
      style={{ backgroundImage: `url(${HeroImage.src})` }}
    >
      <span className="text-[#54ABEE] text-sm lg:text-xl font-semibold">
        Developer Resources
      </span>
      <h1 className=" text-3xl lg:text-5xl font-semibold !leading-[150%] lg:w-[550px] mt-8">
        CodeX Us Designed For Those Who Thrilled To Not Quit
      </h1>
      <p className=" text-sm lg:text-xl !leading-[150%] max-w-5xl mt-8 lg:w-[550px] font-semibold">
        Whether you have questions about the Xpander Compiler or requesting a new library, hit a roadblock with your application, or just want to share bounce ideas off our community, this resource page is all about equipping you to bring your Web3 solutions to life. You can even read about success stories and projects across the Codex community and get some new inspiration.      
      </p>
    </div>
  )
}

export default Hero;