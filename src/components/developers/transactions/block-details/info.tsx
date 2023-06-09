import { themeState } from "@/state/theme";
import { useRecoilValue } from "recoil";

const Info = () => {
  const dark = useRecoilValue(themeState);
  const circumference = 2 * 22 / 7 * 35;
  const percent = 70;
  const offset = circumference - percent / 100 * circumference
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 lg:gap-0 mt-8 text-[#999999]">
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Event Count</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">75</p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Extrinsic Count</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">7</p>
      </div>
      <div className={`flex items-center gap-2 ${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <div className="flex items-center justify-center" x-data="{  }">
          <svg className="transform -rotate-90 w-20 h-20">
            <circle cx="40" cy="40" r="35" stroke="#009DFF" strokeOpacity="0.5" strokeWidth="6" fill="transparent"
              className="text-gray-700" />
            <circle cx="40" cy="40" r="35" stroke="#009DFF" strokeWidth="6" fill="transparent"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: offset
              }}
              className="text-blue-500 " />
          </svg>
          <span className="absolute text-sm lg:text-base">{percent}%</span>
        </div>
        <div>
          <p className="text-sm lg:text-base font-semibold">Block Weight</p>
          <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">
            482,472,187,623
          </p>
        </div>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Deposits</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">
          0.0003
          <span className="text-base">CDX</span>
        </p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Transfers</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">
          0.0000
          <span className="text-base">CDX</span>
        </p>
      </div>
    </div>
  )
};

export default Info;