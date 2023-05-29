"use client"

import { useRouter } from "next/navigation";
import Jobs from "../jobs";

const CareerDetail = ({ params }: { params: any }) => {
  const router = useRouter();
  const job = (Jobs.filter(job => job.id == params.id))[0];
  const jobs = Jobs.filter(one => one.type == job.type && one != job);

  return (
    <div className="px-4 lg:px-16 pt-10 pb-10">
      <div className="text-xl lg:text-3xl p-2 border-b border-b-[#009DFF]">
        <h3>{job.type}</h3>
      </div>
      <h1 className="text-base lg:text-2xl mt-6">{job.title}</h1>
      <div className="flex flex-col lg:flex-row px-2 mt-6 gap-10">
        <div style={{ minWidth: "40%" }}>
          <h1 className="text-base lg:text-xl text-[#009DFF]">Description</h1>
          <p className="text-base lg:text-xl">
            {job.description}
          </p>
          <h1 className="text-base lg:text-xl text-[#009DFF] mt-4">Responsibilities</h1>
          <ul className="text-base lg:text-xl" style={{ listStyle: "disc", paddingLeft: "15px" }} >
            {job.responsibilities.map((resp, index) => (
              <li key={index}>
                {resp}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ minWidth: "40%" }}>
          <h1 className="text-base lg:text-xl text-[#009DFF]">Requirements</h1>
          <ul className="text-base lg:text-xl" style={{ listStyle: "disc", paddingLeft: "15px" }} >
            {job.requirements.map((req, index) => (
              <li key={index}>
                {req}
              </li>
            ))}
          </ul>
          <h1 className="text-base lg:text-xl text-[#009DFF] mt-4">Desirable Experience</h1>
          <ul className="text-base lg:text-xl" style={{ listStyle: "disc", paddingLeft: "15px" }} >
            {job.experiences.map((exp, index) => (
              <li key={index}>
                {exp}
              </li>
            ))}
          </ul>
          <h1 className="text-base lg:text-xl text-[#009DFF] mt-4">Benefits</h1>
          <ul className="text-base lg:text-xl" style={{ listStyle: "disc", paddingLeft: "15px" }} >
            {job.benefits.map((ben, index) => (
              <li key={index}>
                {ben}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            className="text-sm lg:text-base px-3 py-2 rounded-sm"
            style={{
              background: "linear-gradient(125.84deg, rgba(50, 181, 255, 0.7) 6.42%, rgba(0, 26, 255, 0.7) 49.21%, rgba(50, 181, 255, 0.7) 94.38%)",
            }}
          >
            Apply
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-xl lg:text-2xl text-[#009DFF]">other vacancy</h1>
        {
          jobs.map((job, index) => (
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
    </div>
  )
};

export default CareerDetail;
