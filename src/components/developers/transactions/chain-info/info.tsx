import { themeState } from "@/state/theme";
import { useRecoilValue } from "recoil";

const Info = () => {
  const dark = useRecoilValue(themeState);
  const circumference = 2 * 22 / 7 * 35;
  const percent = 95;
  const offset = circumference - percent / 100 * circumference
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 lg:gap-0 mt-8 text-[#999999]">
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Last Block</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">5.1s</p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Target</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">6s</p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Total Issuance</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">
          1.7564
          <span className="text-base">CDX</span>
        </p>
      </div>
      <div className={`flex gap-2 ${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <div>
          <p className="text-sm lg:text-base font-semibold">Epoch</p>
          <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">
            6
            <span className="text-sm lg:text-base">Hrs</span>
          </p>
          <p className="text-sm lg:text-base">1Hr 2Mins</p>
        </div>
        <div className="flex items-center justify-center" x-data="{  }">
          <svg className="transform -rotate-90 w-20 h-20">
            <circle cx="40" cy="40" r="35" stroke="#009DFF" strokeOpacity="0.5" strokeWidth="4" fill="transparent"
              className="text-gray-700" />

            <circle cx="40" cy="40" r="35" stroke="#009DFF" strokeWidth="4" fill="transparent"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: offset
              }}
              className="text-blue-500 " />
          </svg>
          <span className="absolute text-sm lg:text-base">{percent}%</span>
        </div>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Finalized</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">15,968,686</p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Best</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">15,968,986</p>
      </div>
    </div>
  )
};

export default Info;