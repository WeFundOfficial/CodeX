import CoreBG from "../../assets/images/community/core-background.png";

const Core = () => {
  return (
    <div
      className="w-full flex flex-col lg:flex-row py-4 lg:py-16 px-4 lg:px-20 lg:gap-40 relative left-markbar"
      style={{ backgroundImage: `url(${CoreBG.src})` }}
    >
      <div className="flex w-full lg:min-w-2/5">
        <span className="text-3xl lg:text-5xl !leading-[150%] font-semibold">
          The CodeX Foundation Is Key Behind The CodeX Ecosystem
        </span>
      </div>
      <div className="flex flex-col w-full gap-4">
        <h1 className="text-2xl lg:text-3xl font-semibold">
          Mission
        </h1>
        <p className="text-sm lg:text-base lg:w-[70%] mt-6">
          Support CodeX in to ensure the growth of the network, fostering a strong and evolving ecosystem, and attracting builders and developers to continually improve the infrastructure of the CodeX Ecosystem to reach the goal for mass adoption.
        </p>
        <h1 className="text-2xl lg:text-3xl font-semibold mt-6">
          Core Focus
        </h1>
        <p className="text-sm lg:text-base lg:w-[70%]  mt-6">
          The CodeX Foundation is dedicated to supporting the growth and development of the CodeX protocol, decentralized network, and builder as well developer ecosystem.
        </p>
        <p className="text-sm lg:text-base lg:w-[70%] mt-6">
          <span className="text-blue-700">→</span> Ensure participation and growth<br />
          <span className="text-blue-700">→</span> Encourage application development<br />
          <span className="text-blue-700">→</span> Develop a strong developer ecosystem<br />
          <span className="text-blue-700">→</span> Provide a decent infrastructure for builder
        </p>
      </div>
    </div>
  )
}

export default Core;