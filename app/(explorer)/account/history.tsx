/* eslint-disable @next/next/no-img-element */

import { themeState } from "@/state/theme";
import { useRecoilValue } from "recoil";

const Historys = () => {
  const dark = useRecoilValue(themeState);

  return (
    <div className="text-[#999999] px-1 lg:px-4 mt-10 w-full">
      <div className={`flex gap-8 items-center px-2 lg:px-8 py-2 ${dark ? "bg-black" : "bg-white"} drop-shadow-xl`}>
        <h1 className="text-xl">
          Development
        </h1>
        <p className="text-xs">
          account derived via developer
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 mt-2">
        <div className={`flex flex-col mt-2 w-full p-2 lg:p-4 ${dark ? "bg-black" : "bg-white"} drop-shadow-xl gap-10`}>
          {new Array(5).fill(null).map((_, index) => (
            <History key={index} />
          ))}
        </div>
        <div className={`flex flex-col mt-2 w-full p-2 lg:p-4 ${dark ? "bg-black" : "bg-white"} drop-shadow-xl gap-10`}>
          {new Array(5).fill(null).map((_, index) => (
            <History key={index} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default Historys;

const History = () => {
  return (
    <div className="grid gap-y-3 w-full items-center justify-between" style={{ gridTemplateColumns: "auto auto auto auto", gridRowGap: "10px" }}>
      <div className="flex gap-4">
        <div>
          <img src="/images/account/unnamed.png" alt="unnamed" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">
            Alice
          </h1>
          <p className="text-xs">
            9vuguhugug...
          </p>
        </div>
      </div>
      <div className="bg-[#F0F0F0] p-1 rounded-sm">
        <img src="/images/account/setting.svg" alt="setting" />
      </div>
      <div>
        <div className="flex gap-2">
          <div className="bg-[#F0F0F0] p-1 rounded-sm">
            <img src="/images/account/sent.svg" alt="setting" />
          </div>
          <span className="text-base">Sent</span>
          <img src="/images/account/dots.svg" alt="dots" />
        </div>
      </div>
      <div>
        <img src="/images/account/drop-up.svg" alt="arrow" />
      </div>
      <div />
      <div />
      <div><p className="text-base text-[009DFF]">1156 Munit</p></div>
    </div>
  )
}