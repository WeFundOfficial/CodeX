"use client"
/* eslint-disable @next/next/no-img-element */
import Pagination from "@/components/common/pagination";
import { themeState } from "@/state/theme";
import { Fragment, useState } from "react";
import { useRecoilValue } from "recoil";

const shorten = (cnt: string, len = 25) => {
  return cnt.slice(0, len) + "..."
}

const BLOCKS = new Array(1000);
for (let i = 0; i < BLOCKS.length; i++) {
  BLOCKS[i] = {
    number: i,
    hash: "0x8tiguf6rr5sdrsrdtvhvhvhvjv8tiguf6rr5sdrsrdtvhvhvhvjv",
    timestamp: "05/07/2023 15:41:50",
    avatar: "/images/transactions/sender.png",
    coin: "/images/transactions/coin.svg",
    amount: 21
  };
}

const EVENTS = new Array(1000);
for (let i = 0; i < BLOCKS.length; i++) {
  EVENTS[i] = {
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
  }
};

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
          <h1 className="text-base lg:text-xl font-semibold ml-4">Recent Blocks</h1>
          <table
            className="w-full table-auto mt-6"
            style={{ color: dark ? "white" : "#999999" }}
          >
            <tbody>
              {BLOCKS.slice(page.start, page.start + page.count).map((b, index, all) => (
                <Block key={index} b={b} />
              ))}
              <tr className="h-2 px-3" />
            </tbody>
          </table>
        </div>
        <div className="flex flex-col text-[#999999] w-full">
          <h1 className=" text-base lg:text-xl font-semibold ml-4">Recent Event</h1>
          <div
            className={`flex flex-col w-full mt-6 gap-2 ${dark ? "" : "bg-[#F7F7F7]"}`}
            style={{ color: dark ? "white" : "#999999" }}
          >
            {EVENTS.slice(page.start, page.start + page.count).map((e, index, all) => (
              <Event key={index} e={e} />
            ))}
          </div>
          <div
            className="self-end cursor-pointer"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <img src="/images/transactions/to-top.png" alt="to-top" />
          </div>
        </div>
      </div>
      <div className="w-full my-10">
        <Pagination total={BLOCKS?.length} countPerPage={countPerPage} onChangePage={onChangePage} />
      </div>
    </>
  )
}

export default BlockList;

const Block = ({ b }: { b: any }) => {
  const dark = useRecoilValue(themeState);
  return (
    <Fragment>
      <tr className={`h-12 px-3 py-2 text-xs lg:text-sm rounded-sm`}
        style={{ background: dark ? "#1B1F1E" : "#FAFAFA" }}
      >
        <td className="pl-4">{b.number}</td>
        <td>{shorten(b.hash)}</td>
        <td>
          <img src={b.avatar} alt="avatar" />
        </td>
        <td>
          <div className="flex items-end">
            <img src={b.coin} alt="avatar" />
            <span className="pl-1 text-xs lg:text-base">POS.DOG</span>
            <p className="text-xs text-[#909099]">/{b.amount}</p>
          </div>
        </td>
      </tr>
      <tr className="h-2" />
    </Fragment>
  )
}

const Event = ({ e }: { e: any }) => {
  const dark = useRecoilValue(themeState);
  const [isOpen, toggleOpen] = useState(false);
  return (
    <>
      <div
        className="flex justify-between items-center h-12 pl-6 pr-4 py-2 cursor-pointer"
        onClick={() => toggleOpen(!isOpen)}
      >
        <div className="flex gap-4 items-center">
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.42418 5.50039C0.974176 5.50039 0.66151 5.29606 0.486176 4.88739C0.310843 4.47872 0.381842 4.11639 0.699176 3.80039L3.29918 1.20039C3.39918 1.10039 3.50751 1.02539 3.62418 0.975391C3.74084 0.925391 3.86584 0.900391 3.99918 0.900391C4.13251 0.900391 4.25751 0.925391 4.37418 0.975391C4.49084 1.02539 4.59918 1.10039 4.69918 1.20039L7.29918 3.80039C7.61584 4.11706 7.68651 4.47972 7.51118 4.88839C7.33584 5.29706 7.02351 5.50106 6.57418 5.50039H1.42418Z" fill="#999999" />
          </svg>
          <div>
            <h1 className="text-sm lg:text-base">{e.name}</h1>
            <p className="text-xs">{e.status}</p>
          </div>
        </div>
        <div>
          <h1 className="text-sm lg:text-base">{e.amount}</h1>
        </div>
      </div>
      {isOpen &&
        <div className="flex flex-col gap-4 ml-6 px-4 my-4 border-l border-dashed">
          <div className="flex items-center">
            <img src={e.sender.avatar} alt="avatar" className="w-8 z-10" />
            <div className="flex w-full pl-8 lg:pl-12 pr-2 lg:pr-12 py-1 items-center justify-between rounded-sm border border-dashed -ml-4">
              <div>
                <h1 className="text-sm font-semibold">From: {e.sender.alias}</h1>
                <p className="text-xs">{shorten(e.sender.address, 10)}</p>
              </div>
              <span className="text-xs">{shorten(e.sender.address, 10)}</span>
            </div>
          </div>
          <div className="flex items-center">
            <img src={e.sender.avatar} alt="avatar" className="w-8 z-10" />
            <div className="flex w-full pl-8 lg:pl-12 pr-2 lg:pr-12 py-1 items-center justify-between rounded-sm border border-dashed -ml-4">
              <div>
                <h1 className="text-sm font-semibold">To:&nbsp;&nbsp;&nbsp;&nbsp; {e.receiver.alias}</h1>
                <p className="text-xs">{shorten(e.receiver.address, 10)}</p>
              </div>
              <span className="text-xs">{shorten(e.receiver.address, 10)}</span>
            </div>
          </div>
          <div className="flex w-full pl-4 lg:pl-8 pr-8 lg:pr-24 py-1 items-center justify-between rounded-sm border border-dashed">
            <div>
              <h1 className="text-sm font-semibold">From: {e.receiver.alias}</h1>
              <p className="text-xs">{shorten(e.receiver.address, 10)}</p>
            </div>
            <span className="text-xs">{e.fee} CDX</span>
          </div>
        </div>
      }
    </>
  )
}
