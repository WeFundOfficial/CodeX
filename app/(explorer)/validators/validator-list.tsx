/* eslint-disable @next/next/no-img-element */
import Pagination from "@/components/common/pagination";
import { themeState } from "@/state/theme";
import { Fragment, useState } from "react";
import { useRecoilValue } from "recoil";

const shorten = (cnt: string) => {
  return cnt.slice(0, 25) + "..."
}

const VALIDATORS = new Array(1000).fill({
  staking: {
    avatar: "/images/transactions/sender.png",
    address: "0x834dwoeirlskdjfowiea5d7"
  },
  operator: {
    avatar: "/images/transactions/receiver.png",
    address: "0xc3503453453453456cc9"
  },
  voting: "22,8987,989",
  reward: 99,
  lastEpoch: "366/366",
  city: "London"
})

const ValidatorList = () => {
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
      <table
        className="w-full table-auto mt-6"
        style={{ color: dark ? "white" : "black" }}
      >
        <thead>
          <tr className="text-xs lg:text-sm text-left items-end px-3">
            <th>Staking Pool Address</th>
            <th>Operator Address</th>
            <th>
              <div className="flex h-full gap-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00039 15.575C7.86706 15.575 7.74206 15.5543 7.62539 15.513C7.50872 15.4717 7.40039 15.4007 7.30039 15.3L0.70039 8.7C0.50039 8.5 0.400391 8.26267 0.400391 7.988C0.400391 7.71333 0.50039 7.47567 0.70039 7.275C0.90039 7.075 1.13372 6.975 1.40039 6.975C1.66706 6.975 1.90039 7.075 2.10039 7.275L7.00039 12.175V0.975C7.00039 0.691667 7.09639 0.458333 7.28839 0.275C7.48039 0.0916668 7.71772 0 8.00039 0C8.28372 0 8.52139 0.0960001 8.71339 0.288C8.90539 0.48 9.00106 0.717333 9.00039 1V12.175L13.9004 7.275C14.1004 7.075 14.3337 6.975 14.6004 6.975C14.8671 6.975 15.1004 7.075 15.3004 7.275C15.5004 7.475 15.6004 7.71267 15.6004 7.988C15.6004 8.26333 15.5004 8.50067 15.3004 8.7L8.70039 15.3C8.60039 15.4 8.49206 15.471 8.37539 15.513C8.25872 15.555 8.13372 15.5757 8.00039 15.575Z" fill="#009DFF" />
                </svg>
                Voting Power
              </div>
            </th>
            <th>
              <div className="flex h-full gap-1">
                Reward Perf
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15C10.2833 15 10.521 14.904 10.713 14.712C10.905 14.52 11.0007 14.2827 11 14V10C11 9.71667 10.904 9.479 10.712 9.287C10.52 9.095 10.2827 8.99933 10 9C9.71667 9 9.479 9.096 9.287 9.288C9.095 9.48 8.99933 9.71733 9 10V14C9 14.2833 9.096 14.521 9.288 14.713C9.48 14.905 9.71733 15.0007 10 15ZM10 7C10.2833 7 10.521 6.904 10.713 6.712C10.905 6.52 11.0007 6.28267 11 6C11 5.71667 10.904 5.479 10.712 5.287C10.52 5.095 10.2827 4.99933 10 5C9.71667 5 9.479 5.096 9.287 5.288C9.095 5.48 8.99933 5.71733 9 6C9 6.28333 9.096 6.521 9.288 6.713C9.48 6.905 9.71733 7.00067 10 7ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6867 3.825 17.9743 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.263333 12.6833 0.000666667 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31333 4.88333 2.02567 3.825 2.925 2.925C3.825 2.025 4.88333 1.31267 6.1 0.788C7.31667 0.263333 8.61667 0.000666667 10 0C11.3833 0 12.6833 0.262667 13.9 0.788C15.1167 1.31333 16.175 2.02567 17.075 2.925C17.975 3.825 18.6877 4.88333 19.213 6.1C19.7383 7.31667 20.0007 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6867 15.1167 17.9743 16.175 17.075 17.075C16.175 17.975 15.1167 18.6877 13.9 19.213C12.6833 19.7383 11.3833 20.0007 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#999999" />
                </svg>
              </div>
            </th>
            <th>
              <div className="flex h-full gap-1">
                Last Eoch Perf
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15C10.2833 15 10.521 14.904 10.713 14.712C10.905 14.52 11.0007 14.2827 11 14V10C11 9.71667 10.904 9.479 10.712 9.287C10.52 9.095 10.2827 8.99933 10 9C9.71667 9 9.479 9.096 9.287 9.288C9.095 9.48 8.99933 9.71733 9 10V14C9 14.2833 9.096 14.521 9.288 14.713C9.48 14.905 9.71733 15.0007 10 15ZM10 7C10.2833 7 10.521 6.904 10.713 6.712C10.905 6.52 11.0007 6.28267 11 6C11 5.71667 10.904 5.479 10.712 5.287C10.52 5.095 10.2827 4.99933 10 5C9.71667 5 9.479 5.096 9.287 5.288C9.095 5.48 8.99933 5.71733 9 6C9 6.28333 9.096 6.521 9.288 6.713C9.48 6.905 9.71733 7.00067 10 7ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6867 3.825 17.9743 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.263333 12.6833 0.000666667 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31333 4.88333 2.02567 3.825 2.925 2.925C3.825 2.025 4.88333 1.31267 6.1 0.788C7.31667 0.263333 8.61667 0.000666667 10 0C11.3833 0 12.6833 0.262667 13.9 0.788C15.1167 1.31333 16.175 2.02567 17.075 2.925C17.975 3.825 18.6877 4.88333 19.213 6.1C19.7383 7.31667 20.0007 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6867 15.1167 17.9743 16.175 17.075 17.075C16.175 17.975 15.1167 18.6877 13.9 19.213C12.6833 19.7383 11.3833 20.0007 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#999999" />
                </svg>
              </div>
            </th>
            <th>
              City
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-2 px-3" />
          {VALIDATORS.slice(page.start, page.start + page.count / 2).map((v, index, all) => (
            <Validator key={index} v={v} />
          ))}
        </tbody>
      </table>

      <div className="w-full my-10">
        <Pagination total={VALIDATORS?.length} countPerPage={countPerPage} onChangePage={onChangePage} />
      </div>
    </div>
  )
}

export default ValidatorList;

const Validator = ({ v }: { v: any }) => {
  const dark = useRecoilValue(themeState);
  return (
    <Fragment>
      <tr className={`h-12 px-3 py-2 text-sm rounded-sm`}
        style={{ background: dark ? "#1B1F1E" : "#FAFAFA" }}
      >
        <td>
          <div className="flex gap-2">
            <img src={v.staking.avatar} alt="avatar" />
            <div
              className="flex rounded-lg gap-6 px-5 py-1 text-xs items-center"
              style={{
                background: dark ? "linear-gradient(261deg, #089DF1 11.69%, #082DF1 59.3%, #08ABF1 104.96%)" : "#0EA5E91A"
              }}
            >
              {shorten(v.staking.address)}
              <img src="/images/transactions/copy.png" className="w-4 h-4" alt="copy" />
            </div>
          </div>
        </td>
        <td>
          <div className="flex gap-2">
            <img src={v.operator.avatar} alt="avatar" />
            <div
              className="flex rounded-lg gap-6 px-5 py-1 text-xs items-center"
              style={{
                background: dark ? "linear-gradient(261deg, #089DF1 11.69%, #082DF1 59.3%, #08ABF1 104.96%)" : "#0EA5E91A"
              }}
            >
              {shorten(v.operator.address)}
              <img src="/images/transactions/copy.png" className="w-4 h-4" alt="copy" />
            </div>
          </div>
        </td>
        <td>{v.voting}</td>
        <td>{v.reward}%</td>
        <td>{v.lastEpoch}</td>
        <td>{v.city}</td>
      </tr>
      <tr className="h-2" />
    </Fragment>
  )
}

