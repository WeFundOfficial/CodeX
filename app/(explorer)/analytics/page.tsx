"use client"

import { themeState } from "@/state/theme";
import { useRecoilValue } from "recoil";
import Graphs from "./graphs";
import Info from "./info";

const Analytics = () => {
  const dark = useRecoilValue(themeState);
  return (
    <div className={`px-4 lg:px-20 mt-8 mb-8 ${dark ? "text-white" : "text-black"}`}>
      <h1 className="text-3xl lg:text-5xl">
        Analytics
      </h1>
      <Info />
      <Graphs />
    </div>
  )
}

export default Analytics;