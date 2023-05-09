import CoreBG from "../../assets/images/community/core-background.png";

const Core = () => {
  return (
    <div
      className="w-full flex flex-col lg:flex-row py-4 lg:py-16 px-4 lg:px-20 gap-34 relative left-markbar"
      style={{ backgroundImage: `url(${CoreBG.src})`, backgroundSize: "cover" }}
    >
      <div className="flex w-full">
        <span className="text-3xl lg:text-5xl !leading-[150%]">
          The CodeX<br /> Foundation<br /> Is Key Behind The<br /> CodeX Ecosystem
        </span>
      </div>
      <div className="flex flex-col w-full gap-4">
        <h1 className="text-2xl lg:text-3xl">
          Mission
        </h1>
        <p className="text-sm lg:text-base lg:w-[70%]">
          Support CodeX in to ensure the growth of the network, fostering a strong and evolving ecosystem, and attracting builders and developers to continually improve the infrastructure of the CodeX Ecosystem to reach the goal for mass adoption.
        </p>
        <h1 className="text-2xl lg:text-3xl">
          Core Focus
        </h1>
        <p className="text-sm lg:text-base lg:w-[70%]">
          The CodeX Foundation is dedicated to supporting the growth and development of the CodeX protocol, decentralized network, and builder as well developer ecosystem.
        </p>
        <p>
          → Ensure participation and growth<br />
          → Encourage application development<br />
          → Develop a strong developer ecosystem<br />
          → Provide a decent infrastructure for builder
        </p>
      </div>
    </div>
  )
}

export default Core;