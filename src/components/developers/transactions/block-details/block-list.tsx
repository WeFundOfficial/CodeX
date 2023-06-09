"use client"
/* eslint-disable @next/next/no-img-element */
import Pagination from "@/components/common/pagination";
import { themeState } from "@/state/theme";
import { Fragment, useState } from "react";
import { useRecoilValue } from "recoil";

const shorten = (cnt: string, len = 25) => {
  return cnt.slice(0, len) + "..."
}

const EXTRINSICS = new Array(1000).fill({

});

const EVENTS = new Array(1000).fill({
  name: "Balances.Transfer",
  status: "Transfer Succesed",
  amount: "15,766,765-17",
  timestamp: "05/07/2023 15:41:50",
  sender: {
    alias: "AccountId65",
    address: "T5566FFYFYCT5566FFYFYCT5566FFYFYCT5566FFYFYC",
    avatar: "/images/transactions/sender.png",
  },
  receiver: {
    alias: "AccountId65",
    address: "T5566FFYFYCT5566FFYFYCT5566FFYFYCT5566FFYFYC",
    avatar: "/images/transactions/sender.png",
  },
  fee: "",
});

const BlockList = () => {
  const dark = useRecoilValue(themeState);
  const countPerPage = 20;

  const [page, setPage] = useState({
    start: 0,
    count: countPerPage
  })
  const onChangePage = (start: number, count: number) => {
    setPage({ start, count })
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8  mt-8 text-[#999999]">
        <div className="w-full">
          <h1 className="text-base lg:text-xl font-semibold ml-4">Extrinsics</h1>
          <div
            className={`flex flex-col w-full mt-6 gap-2`}
            style={{ color: "#999999" }}
          >
            {EXTRINSICS.slice(page.start, page.start + page.count).map((e, index, all) => (
              <Extrinsic key={index} e={e} />
            ))}
          </div>
        </div>
        <div className="w-full">
          <h1 className=" text-base lg:text-xl font-semibold ml-4">Events</h1>
          <div
            className={`flex flex-col w-full mt-6 gap-2`}
            style={{ color: "#999999" }}
          >
            {EVENTS.slice(page.start, page.start + page.count).map((e, index, all) => (
              <Event key={index} e={e} />
            ))}
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-base lg:text-xl font-semibold">Time</h1>
          <p className="text-sm lg:text-base text-[#009DFF] mt-2">5/19/2023, 10:09:54 AM</p>
        </div>
      </div>
    </>
  )
}

export default BlockList;

const Extrinsic = ({ e }: { e: any }) => {
  const dark = useRecoilValue(themeState);
  const [isOpen, toggleOpen] = useState(false);
  return (
    <>
      <div
        className="flex items-center h-12 py-2 gap-4 cursor-pointer"
        onClick={() => toggleOpen(!isOpen)}
      >
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.42418 5.50039C0.974176 5.50039 0.66151 5.29606 0.486176 4.88739C0.310843 4.47872 0.381842 4.11639 0.699176 3.80039L3.29918 1.20039C3.39918 1.10039 3.50751 1.02539 3.62418 0.975391C3.74084 0.925391 3.86584 0.900391 3.99918 0.900391C4.13251 0.900391 4.25751 0.925391 4.37418 0.975391C4.49084 1.02539 4.59918 1.10039 4.69918 1.20039L7.29918 3.80039C7.61584 4.11706 7.68651 4.47972 7.51118 4.88839C7.33584 5.29706 7.02351 5.50106 6.57418 5.50039H1.42418Z" fill="#999999" />
        </svg>
        <div>
          <h1 className="text-sm lg:text-base">Timestampa.Set</h1>
          <p className="text-xs">Set the current time.</p>
        </div>
      </div>
      {isOpen &&
        <div className="flex flex-col gap-4 px-4 my-4 border-l border-dashed">
          <div className="px-2 lg:px-8 py-1 items-center justify-between rounded-sm border border-dashed">
            <h1 className="text-sm font-semibold">{`Now: Compact<u64>`}</h1>
            <p className="text-xs">1,684,462,950,001</p>
          </div>
          <div className="px-2 lg:px-8 py-1 items-center justify-between rounded-sm border border-dashed">
            <h1 className="text-sm font-semibold">Extrinsic Hash</h1>
            <div className="flex items-center gap-4">
              <p className="text-xs">0xb23139fe5144d48df674a8cfa3f1501d36bbb13d532c1eb</p>
              <div className="p-px rounded-sm bg-[#009DFF] cursor-pointer">
                <img src="/images/transactions/copy.png" alt="copy" />
              </div>
            </div>
          </div>
        </div>
      }
      <div
        className="pl-2 pr-4 gap-4  cursor-pointer"
        onClick={() => toggleOpen(!isOpen)}
      >
        <p className="text-xs text-[#009DFF]">
          #/Extrinsics/Decode/0x280403000b71d6d0318801
        </p>
      </div>
    </>
  )
}

const Event = ({ e }: { e: any }) => {
  const dark = useRecoilValue(themeState);
  const [isOpen, toggleOpen] = useState(false);
  return (
    <>
      <div
        className="flex items-center h-12 py-2 gap-4 cursor-pointer"
        onClick={() => toggleOpen(!isOpen)}
      >
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.42418 5.50039C0.974176 5.50039 0.66151 5.29606 0.486176 4.88739C0.310843 4.47872 0.381842 4.11639 0.699176 3.80039L3.29918 1.20039C3.39918 1.10039 3.50751 1.02539 3.62418 0.975391C3.74084 0.925391 3.86584 0.900391 3.99918 0.900391C4.13251 0.900391 4.25751 0.925391 4.37418 0.975391C4.49084 1.02539 4.59918 1.10039 4.69918 1.20039L7.29918 3.80039C7.61584 4.11706 7.68651 4.47972 7.51118 4.88839C7.33584 5.29706 7.02351 5.50106 6.57418 5.50039H1.42418Z" fill="#999999" />
        </svg>
        <div>
          <h1 className="text-sm lg:text-base">ParaInclusion.CandidateIncluded</h1>
          <p className="text-xs">ParaInclusion.CandidateIncluded</p>
        </div>
      </div>
      {isOpen &&
        <div className="px-4 border-l border-dashed">
          <p className="py-2 text-xs">DispatchInfo: FrameSupportDispatchDispatchInfo</p>
          <div className="px-4 border-l border-dashed">
            <p className="py-2 text-xs">Weight: SpWeightsWeightV2Weight</p>
            <div className="flex flex-col gap-4 px-4 border-l border-dashed">
              <div className="px-2 lg:px-8 py-1 items-center justify-between rounded-sm border border-dashed">
                <h1 className="text-sm font-semibold">{`refTime: COMPACT <U64>`}</h1>
                <p className="text-xs">229,721,000</p>
              </div>
              <div className="px-2 lg:px-8 py-1 items-center justify-between rounded-sm border border-dashed">
                <h1 className="text-sm font-semibold">{`proofSize: COMPACT <U64>`}</h1>
                <p className="text-xs">0</p>
              </div>
            </div>
            <div className="mt-2 px-2 lg:px-8 py-1 items-center justify-between rounded-sm border border-dashed">
              <h1 className="text-sm font-semibold">class: FrameSupportDispatchDispatchClass</h1>
              <p className="text-xs">Mandatory</p>
            </div>
            <div className="mt-2 px-2 lg:px-8 py-1 items-center justify-between rounded-sm border border-dashed">
              <h1 className="text-sm font-semibold">paysFee: FrameSupportDispatchPays</h1>
              <p className="text-xs">yes</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}
