import Link from "next/link";
import "./community.css";

/* eslint-disable @next/next/no-img-element */
const Simple = () => {
  return (
    <div
      className="flex flex-col lg:flex-row ml-4 lg:ml-[40%] pr-4 lg:pr-16 py-16 gap-4 lg:gap-16 rounded-sm relative right-markbar"
      style={{ background: "linear-gradient(280.57deg, rgba(10, 35, 252, 0.5) 0%, rgba(0, 8, 77, 0) 35%)" }}
    >
      <div
        className="w-40 h-40 flex justify-center items-center rounded-lg"
        style={{
          background: "linear-gradient(125.84deg, rgba(50, 181, 255, 0.7) 6.42%, rgba(0, 26, 255, 0.7) 49.21%, rgba(50, 181, 255, 0.7) 94.38%)",
          minWidth: "160px"
        }}
      >
        <img src="/images/community/compatibility.png" alt="compatibility" />
      </div>
      <div className="w-full lg:w-[596px]" style={{ maxWidth: "596px" }}>
        <span className="text-xl text-[#999999]">
          User Experiance
        </span>
        <h1 className="text-2xl lg:text-3xl  mt-4">
          Simple Development, Enjoyable Applications
        </h1>
        <p className="text-sm lg:text-base  mt-4">
          The ecosystem being built by CodeX is poised to improve rapid adoption and development of blockchain technologies by removing the common barriers to entering the industry - the steep learning curve to build on web 3.0 infrastructures and the ambiguous safety and security risks associated blockchain interactions for new web 3.0 users. With Codex’s reliable infrastructure, developers can focus on making great applications and end-users can enjoy a friendly, seamless experience.
        </p>
        <div className="w-full mt-4">
          <Link href=""
            style={{
              background: "linear-gradient(270deg, #00C2FF 0%, #5A72C9 34.38%, #03C3FF 61.98%, #5E89F8 98.44%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
            JOIN THE CODEX MOVEMENT ↗
          </Link>
        </div>
      </div>
    </div >
  )
}
export default Simple;