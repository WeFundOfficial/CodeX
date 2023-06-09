/* eslint-disable @next/next/no-img-element */
import { themeState } from "@/state/theme";
import { useRecoilValue } from "recoil";

const Info = () => {
  const dark = useRecoilValue(themeState);
  const circumference = 2 * 22 / 7 * 35;
  const percent = 95;
  const offset = circumference - percent / 100 * circumference
  return (
    <div className="text-[#999999]">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 lg:gap-8 mt-8 ">
        <div className={`w-full flex flex-col items-center ${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
          <div className="flex gap-2 items-center">
            <p className="text-sm lg:text-base font-semibold">Total Supply</p>
            <img src="/images/transactions/tip.svg" alt="tip" />
          </div>
          <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">108</p>
        </div>
        <div className={`w-full flex flex-col items-center ${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
          <div className="flex gap-2 items-center">
            <p className="text-sm lg:text-base font-semibold">Actively Staked</p>
            <img src="/images/transactions/tip.svg" alt="tip" />
          </div>
          <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">68</p>
        </div>
        <div className={`w-full flex justify-center ${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
          <table className="table-auto text-[#999999]">
            <tbody>
              <tr>
                <td>
                  <div className="flex gap-2 items-center">
                    <p className="text-sm lg:text-base font-semibold">TPS</p>
                    <img src="/images/transactions/tip.svg" alt="tip" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter] text-center">7</p>
                  <p className="text-xs font-semibold text-center">Real Time</p>
                </td>
                <td className="px-4">
                  <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter] text-center">2070</p>
                  <p className="text-xs font-semibold text-center">Peak Last 30 Days</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`w-full flex flex-col items-center ${dark ? "bg-black" : "bg-white"} p-4 drop-shadow-xl`}>
          <div className="flex gap-2 items-center">
            <p className="text-sm lg:text-base font-semibold">Active Validators</p>
            <img src="/images/transactions/tip.svg" alt="tip" />
          </div>
          <p className="text-xl lg:text-3xl font-semibold text-[#009DFF] font-[Inter]">68</p>
        </div>
      </div>
    </div>
  )
};

export default Info;