/* eslint-disable @next/next/no-img-element */
import HeroImage from "../../assets/images/community/hero.png";

const Hero = () => {
  return (
    <div
      className="flex flex-col lg:flex-row lg:items-center w-full h-auto px-4 pb-10 lg:h-4/5 bg-no-repeat overflow-hidden"
      style={{ backgroundSize: "cover" }}
    >
      <div className="w-full lg:w-1/2 z-0">
        <img src="/images/community/hero1.png" className="w-full lg:min-w-[850px]" alt="log" />
      </div>
      <div className="w-full lg:w-1/2 pr-4 lg:pr-24 z-10">
        <span className="text-[#54ABEE] text-sm lg:text-xl font-semibold">
          Developer Resources
        </span>
        <h1 className=" text-3xl lg:text-5xl font-semibold !leading-[150%] lg:w-[550px] mt-8">
          CodeX Is Designed For Those Who Thrilled To Not Quit
        </h1>
        <p className=" text-sm lg:text-xl !leading-[150%] max-w-5xl mt-8 lg:w-[550px] font-semibold">
          Whether you have questions about the Xpander Compiler or requesting a new library, hit a roadblock with your application, or just want to share bounce ideas off our community, this resource page is all about equipping you to bring your Web3 solutions to life. You can even read about success stories and projects across the Codex community and get some new inspiration.
        </p>
      </div>
    </div>
  )
}

export default Hero;