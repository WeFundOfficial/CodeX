import Link from "next/link";
import "./community.css";

/* eslint-disable @next/next/no-img-element */
const Overview = () => {
  return (
    <div
      className="flex flex-col px-4 lg:px-16 py-16 w-full gap-4 lg:gap-8 items-center relative left-markbar"
    >
      <h1 className="text-3xl lg:text-5xl  text-center">
        Codex Tokenomics Overview
      </h1>
      <p className="text-sm lg:text-base  text-center">
        The Codex Foundation presents a summary version of the Codex protocol tokenomics.
      </p>
      <button className="w-40 lg:w-56 h-12 lg:h-16 p-1 lg:p-2 rounded-lg  text-sm lg:text-lg"
        style={{
          background: "linear-gradient(125.84deg, rgba(50, 181, 255, 0.7) 6.42%, rgba(0, 26, 255, 0.7) 49.21%, rgba(50, 181, 255, 0.7) 94.38%)",
        }}
      >
        VIEW TOKENOMICS
      </button>

      
    </div >
  )
}
export default Overview;