import { themeState } from "@/state/theme";
import { useRecoilValue } from "recoil";

const Info = () => {
  const dark = useRecoilValue(themeState);
  const circumference = 2 * 22 / 7 * 35;
  const percent = 70;
  const offset = circumference - percent / 100 * circumference
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-16 mt-8 text-[#999999]">
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Blocks</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">5</p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Forks</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">3</p>
      </div>
    </div>
  )
};

export default Info;