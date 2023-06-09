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
        <p className="text-sm lg:text-base font-semibold">Avg</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">6.000s</p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Std Dev</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">0.001s</p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Min</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">5.996s</p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Max</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">6.004s</p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Last</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">6.000s</p>
      </div>
    </div>
  )
};

export default Info;