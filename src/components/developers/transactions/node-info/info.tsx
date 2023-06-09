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
        <p className="text-sm lg:text-base font-semibold">Refresh In</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">2.7s</p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Total Peers</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">25</p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Syncing</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">No</p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Max</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">6.004s</p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Our Best</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">15,602,717</p>
      </div>
    </div>
  )
};

export default Info;