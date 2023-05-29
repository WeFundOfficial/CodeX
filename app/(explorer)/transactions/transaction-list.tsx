/* eslint-disable @next/next/no-img-element */
import { themeState } from "@/state/theme";
import { useRecoilValue } from "recoil";
import TransactionFunction from "./transaction-function";
import TransactionType from "./transaction-type";

const TransactionList = () => {
  const dark = useRecoilValue(themeState);

  const shorten = (cnt: string) => {
    return cnt.slice(0, 5) + "..." + cnt.slice(-5)
  }
  return (
    <table
      className="w-full table-auto mt-6"
      style={{ color: dark ? "white" : "black" }}
    >
      <thead>
        <tr className="text-xs lg:text-sm text-left items-end px-3">
          <th>VERSION</th>
          <th className="flex h-full gap-1">
            TYPE
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.31494 4.56494H8.56494V5.81494H7.31494V4.56494ZM7.31494 7.06494H8.56494V10.8149H7.31494V7.06494ZM7.93994 1.43994C4.48994 1.43994 1.68994 4.23994 1.68994 7.68994C1.68994 11.1399 4.48994 13.9399 7.93994 13.9399C11.3899 13.9399 14.1899 11.1399 14.1899 7.68994C14.1899 4.23994 11.3899 1.43994 7.93994 1.43994ZM7.93994 12.6899C5.18369 12.6899 2.93994 10.4462 2.93994 7.68994C2.93994 4.93369 5.18369 2.68994 7.93994 2.68994C10.6962 2.68994 12.9399 4.93369 12.9399 7.68994C12.9399 10.4462 10.6962 12.6899 7.93994 12.6899Z" fill="white" />
            </svg>
          </th>
          <th>
            TIMESTAMP
          </th>
          <th>
            SENDER
          </th>
          <th>
            SENT TO
          </th>
          <th>
            FUNCTION
          </th>
          <th className="text-xs">
            AMOUNT
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="h-2 px-3" />
        {Transactions.map((t, index, all) => (
          <>
            <tr className={`h-12 px-3 py-2 text-sm rounded-sm`}
              style={{ background: dark ? "#1B1F1E" : "#FAFAFA" }}
            >
              <td>{t.version}</td>
              <td><TransactionType type={t.type} /></td>
              <td>{t.timestamp}</td>
              <td>
                <div className="flex gap-2">
                  <img src={t.sender.avatar} alt="avatar" />
                  <div
                    className="flex rounded-lg gap-6 px-5 py-1 text-xs items-center"
                    style={{
                      background: dark ? "linear-gradient(261deg, #089DF1 11.69%, #082DF1 59.3%, #08ABF1 104.96%)" : "#0EA5E91A"
                    }}
                  >
                    {shorten(t.sender.address)}
                    <img src="/images/transactions/copy.png" className="w-4 h-4" alt="copy" />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2">
                  <img src={t.receiver.avatar} alt="avatar" />
                  <div
                    className="flex rounded-lg gap-6 px-5 py-1 text-xs items-center"
                    style={{
                      background: dark ? "linear-gradient(261deg, #089DF1 11.69%, #082DF1 59.3%, #08ABF1 104.96%)" : "#0EA5E91A"
                    }}
                  >
                    {shorten(t.receiver.address)}
                    <img src="/images/transactions/copy.png" className="w-4 h-4" alt="copy" />
                  </div>
                </div>
              </td>
              <td>
                <TransactionFunction type={t.function} />
              </td>
              <td>
                <div className="flex flex-col items-end">
                  <span className="text-base">{t.amount} CDX</span>
                  <p className="text-xs text-[#909099]">Gas {t.gas} CDX</p>
                </div>
              </td>
            </tr>
            <tr className="h-2" />
          </>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionList;

const Transactions = new Array(8).fill(
  {
    version: 137350771,
    type: 0,
    timestamp: "05/07/2023 15:41:50",
    sender: {
      avatar: "/images/transactions/sender.png",
      address: "0x834dwoeirlskdjfowiea5d7"
    },
    receiver: {
      avatar: "/images/transactions/receiver.png",
      address: "0xc3503453453453456cc9"
    },
    function: 0,
    amount: 0.0193,
    gas: 0.0010224,
  })