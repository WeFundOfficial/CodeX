/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from "react";
import "../community/community.css";

const CoreTeam = () => {
  const [iCore, setIcore] = useState(0);

  return (
    <>
      <div className="flex flex-col px-2 lg:px-48 lg:flex-row w-full gap-24 justify-center items-center my-16">
        <div className="w-full">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            {Core[iCore].name}
          </h1>
          <p className="text-xl lg:text-2xl text-[#009DFF] font-semibold">
            {Core[iCore].role}
          </p>
          <p className="text-base lg:text-xl font-semibold mt-6">
            {Core[iCore].content}
          </p>
        </div>
        <div className="w-full flex justify-end items-end relative">
          <div className="w-full lg:w-[460px] h-[300px] lg:h-[490px] flex justify-end ">
            <img src="/images/team/core-back.png" className="h-full object-cover" alt="avatar" />
          </div>
          <div className="w-full lg:w-[430px] h-[270px] lg:h-[460px] flex justify-end absolute">
            <img src={Core[iCore].avatar} className="h-full object-cover" alt="avatar" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap pt-10 lg:pt-20 justify-evenly relative left-markbar">
        <span className="absolute top-0 left-1/2 lg:left-[300px] text-2xl font-semibold -translate-x-2/4 lg:translate-x-0 lg:-translate-y-2/4">
          Core Team
        </span>
        {Core.map((member, index) => (
          <div
            onClick={() => setIcore(index)}
            className="w-40 lg:w-52 h-70 lg:h-80 p-2 lg:p-4"
            key={index}
          >
            <div className="flex w-full h-40 lg:h-52 items-end">
              <img src={member.avatar} className="h-full object-cover" alt="avatar" />
            </div>
            <p className="text-base lg:text-xl font-semibold text-center mt-6">{member.name}</p>
            <p className="text-sm lg:text-base font-semibold text-center">{member.role}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-wrap mt-20 pb-20 pt-10 lg:pt-20 justify-evenly relative left-markbar">
        <span className="absolute top-0 left-1/2 lg:left-[300px] text-2xl font-semibold -translate-x-2/4 lg:translate-x-0 lg:-translate-y-2/4">
          Team
        </span>
        {Team.map((member, index) => (
          <div
            className="w-40 lg:w-52 h-70 lg:h-80 p-2 lg:p-4 "
            key={index}
          >
            <div className="flex w-full h-40 lg:h-52 items-end bg-[#909099] rounded-sm">
              <img src={member.avatar} className="h-full object-cover" alt="avatar" />
            </div>
            <p className="text-base lg:text-xl font-semibold text-center mt-6">{member.name}</p>
            <p className="text-sm lg:text-base font-semibold text-center">{member.role}</p>
          </div>
        ))}
      </div>
    </>
  )
};

export default CoreTeam;

const Core = [
  {
    name: "Andrea Bello",
    role: "Co-Founders and CEO",
    content: "Andrea has more than 15+ years experience in technical industries. He worked for multi- billions companies such as ABB, AXA, Zurich, GE in tech and finance managerial position. Prior to CodeX, he built several business and start-up in diverse industries such as green impact, tech, and hospitality.",
    avatar: "/images/team/andrea.png"
  },
  {
    name: "Ika Afifah",
    role: "Co-Founders and CMO",
    content: "Prior to CodeX, she worked at Tencent as an operation specialist, in a partnership division. Before Tencent, she was senior partnership manager at Bigo. She previously held a senior account executive position at one of the digital marketing agencies under Jet Group and was a manager at Waves who successfully helped founders to raise $1.2M in pre-seed funding.",
    avatar: "/images/team/ika.png"
  },
  {
    name: "Achuth Chandran",
    role: "CFO",
    content: "Experienced financial professional and consultant. HEC Paris alumnus. ACCA Affiliate. With experience at KPMG, Sancta Capital and Trilogy Enterprises, Achuth has vast experience in the different avenues of corporate and investment finance. He currently leads Octave Advisory, a blockchain consulting firm based out of Dubai with the goal to help promote and expand the technology.",
    avatar: "/images/team/achuth.png"
  },
  {
    name: "John McLean",
    role: "Co-Founders and CMO",
    content: "Currently working at Binance as Tax Director- M&A and Planning. John has more than 10+ years experience in legal specialist in tax and more than 10+ years of experiences in business proven by the track record of being a Senior Vice President of Mubadala (An Abu Dhabi sovereign investor managing a global portfolio of assets valued at $284 billion).",
    avatar: "/images/team/john.png"
  }
]

const Team = [
  {
    name: "Marko Vitez",
    role: "Full-stack and Smart contract Dev",
    avatar: "/images/team/marko.png"
  },
  {
    name: "Eric Lee",
    role: "Full-stack and Smart contract Dev",
    avatar: "/images/team/eric.png"
  },
  {
    name: "Yogi Ari Saputro",
    role: "Graphic Design",
    avatar: "/images/team/yogi.png"
  },
]