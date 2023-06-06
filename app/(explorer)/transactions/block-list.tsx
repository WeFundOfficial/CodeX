/* eslint-disable @next/next/no-img-element */
import Pagination from "@/components/common/pagination";
import { themeState } from "@/state/theme";
import { Fragment, useState } from "react";
import { useRecoilValue } from "recoil";
import TransactionFunction from "./transaction-function";
import TransactionType from "./transaction-type";

const shorten = (cnt: string) => {
  return cnt.slice(0, 25) + "..."
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
    <div className="text-[#999999] mt-8">
      <h1 className=" text-base lg:text-xl font-semibold ml-4">Recent Blocks</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <table
          className="w-full table-auto mt-6"
          style={{ color: dark ? "white" : "black" }}
        >
          <tbody>
            <tr className="h-2 px-3" />
            {BLOCKS.slice(page.start, page.start + page.count / 2).map((b, index, all) => (
              <Block key={index} b={b} />
            ))}
          </tbody>
        </table>
        <table
          className="w-full table-auto mt-6"
          style={{ color: dark ? "white" : "black" }}
        >
          <tbody>
            <tr className="h-2 px-3" />
            {BLOCKS.slice(page.start + page.count / 2, page.start + page.count).map((b, index, all) => (
              <Block key={index} b={b} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full my-10">
        <Pagination total={BLOCKS?.length} countPerPage={countPerPage} onChangePage={onChangePage} />
      </div>
    </div>
  )
}

export default BlockList;

const Block = ({ b }: { b: any }) => {
  const dark = useRecoilValue(themeState);
  return (
    <Fragment>
      <tr className={`h-12 px-3 py-2 text-sm rounded-sm`}
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
            <span className="pl-1 text-base">POS.DOG</span>
            <p className="text-xs text-[#909099]">/{b.amount}</p>
          </div>
        </td>
      </tr>
      <tr className="h-2" />
    </Fragment>
  )
}

