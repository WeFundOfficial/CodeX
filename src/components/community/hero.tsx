/* eslint-disable @next/next/no-img-element */

const Hero = () => {
  return (
    <div
      className="flex flex-col lg:flex-row lg:items-center w-full h-auto px-4 pb-10 lg:h-4/5 bg-no-repeat overflow-hidden"
      style={{ backgroundSize: "cover" }}
    >
      <div className="w-full lg:w-1/2 z-0">
        <img src="/images/community/hero1.png" className="w-full lg:min-w-[850px]" alt="log"  />
      </div>
      <div className="w-full lg:w-1/2 pr-4 lg:pr-24 z-10">
        <h1 className="text-3xl lg:text-5xl font-semibold !leading-[150%] relative">
          Building Widely-Used<br />Web3 Applications.
        </h1>
        <p className=" text-sm lg:text-xl !leading-[150%] max-w-5xl mt-8">
          CodeX is a dedicated project for the mass adoption of<br />blockchain users.
        </p>
        <div className="flex gap-4 lg:gap-8 mt-8">
          <button className="w-40 lg:w-56 h-12 lg:h-16 p-1 lg:p-2 rounded-lg  text-sm lg:text-lg"
            style={{
              background: "linear-gradient(277.23deg, #089DF1 14.86%, #082DF1 80.61%, #08ABF1 120.59%)",
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
    </div>
  )
}

export default Hero;