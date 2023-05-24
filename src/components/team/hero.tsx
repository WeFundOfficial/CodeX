/* eslint-disable @next/next/no-img-element */

const Hero = () => {
  return (
    <div
      className="flex flex-col lg:flex-row w-full px-4 lg:px-24 pt-4 lg:pt-[10px] pb-8 lg:pb-0 gap-20 justify-center items-center"
    >
      <div className="w-full">
        <span className="text-[#54ABEE] text-sm lg:text-xl font-semibold">
          Our Team
        </span>
        <h1 className=" text-3xl lg:text-5xl font-semibold !leading-[150%] mt-8">
          The Team Behind CodeX
        </h1>
        <p className=" text-sm lg:text-xl !leading-[150%] max-w-5xl mt-8 lg:w-[550px] font-semibold">
          The CodeX team is made up of a highly-accomplished team of engineers, researchers, strategists, designers, and builders—all committed to delivering universal and equitable access to decentralization that is capable of scaling for billions of people
        </p>
      </div>
      <div className="w-full">
        <img src="/images/team/CodeX.png" className="lg:w-[472px]" alt="log" />
      </div>
    </div>
  )
}

export default Hero;