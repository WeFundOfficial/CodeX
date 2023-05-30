import { themeState } from "@/state/theme";
import { useRecoilValue } from "recoil";

const Total = () => {
  const dark = useRecoilValue(themeState);
  return (
    <div className="text-[#999999] px-1 lg:px-4">
    <div className="flex justify-between mt-8 ">
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Total Balance</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">1200$</p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Total Transferrable</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">7200$</p>
      </div>
      <div className={`${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
        <p className="text-sm lg:text-base font-semibold">Total Locked</p>
        <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">12000$</p>
      </div>
    </div>
  </div>
  )
};

export default Total;