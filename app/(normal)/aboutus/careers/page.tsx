"use client"

import { useRouter } from "next/navigation";
import Jobs from "./jobs";

const Careers = () => {
  const router = useRouter();
  const Bussiness = Jobs.filter((job) => job.type.toLowerCase() == "bussiness");
  const Engineering = Jobs.filter((job) => job.type.toLowerCase() == "engineering");
  
  return (
    <div className="px-4 lg:px-16 pt-10 pb-10">
      <h2 className="text-base lg:text-xl text-center text-[#009DFF]">Careers</h2>
      <h1 className="text-3xl lg:text-5xl text-center mt-4 !leading-[150%]">
        Interested In Joining Us<br /> In Building Web 3?
      </h1>
      <div className="text-xl lg:text-3xl p-2 border-b border-b-[#009DFF]">
        <h3>Bussiness</h3>
      </div>
      {
        Bussiness.map((job, index) => (
          <div className="flex py-4 justify-between items-center" key={index}>
            <h1 className="text-base lg:text-2xl">{job.title}</h1>
            <button
              className="text-sm lg:text-base px-3 py-2 rounded-sm"
              style={{
                background: "linear-gradient(125.84deg, rgba(50, 181, 255, 0.7) 6.42%, rgba(0, 26, 255, 0.7) 49.21%, rgba(50, 181, 255, 0.7) 94.38%)",
              }}
              onClick={() => router.push(`/aboutus/careers/${job.id}`)}
            >
              Check Out
            </button>
          </div>
        ))
      }
      <div className="text-xl lg:text-3xl p-2 border-b border-b-[#009DFF] mt-4">
        <h3>Engineering</h3>
      </div>
      {
        Engineering.map((job, index) => (
          <div className="flex py-4 justify-between items-center" key={index}>
            <h1 className="text-base lg:text-2xl">{job.title}</h1>
            <button
              className="text-sm lg:text-base px-3 py-2 rounded-sm whitespace-nowrap"
              style={{
                background: "linear-gradient(125.84deg, rgba(50, 181, 255, 0.7) 6.42%, rgba(0, 26, 255, 0.7) 49.21%, rgba(50, 181, 255, 0.7) 94.38%)",
              }}
              onClick={() => router.push(`/aboutus/careers/${job.id}`)}
            >
              Check Out
            </button>
          </div>
        ))
      }
    </div>
  )
};

export default Careers;
