/* eslint-disable @next/next/no-img-element */
import { themeState } from "@/state/theme";
import { Fragment } from "react";
import { useRecoilValue } from "recoil";
import TransactionFunction from "./transaction-function";
import TransactionType from "./transaction-type";

const BlockList = () => {
  const dark = useRecoilValue(themeState);

  const shorten = (cnt: string) => {
    return cnt.slice(0, 25) + "..."
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
            {BLOCKS.map((b, index, all) => (
              <Fragment key={index}>
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
            ))}
          </tbody>
        </table>
        <table
          className="w-full table-auto mt-6"
          style={{ color: dark ? "white" : "black" }}
        >
          <tbody>
            <tr className="h-2 px-3" />
            {BLOCKS.map((b, index, all) => (
              <Fragment key={index}>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BlockList;

const BLOCKS = new Array(8).fill(
  {
    number: 137350771,
    hash: "0x8tiguf6rr5sdrsrdtvhvhvhvjv8tiguf6rr5sdrsrdtvhvhvhvjv",
    timestamp: "05/07/2023 15:41:50",
    avatar: "/images/transactions/sender.png",
    coin: "/images/transactions/coin.svg",
    amount: 21
  })