"use client"

import { themeState } from "@/state/theme";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Search from "./search";
import TransactionList from "./transaction-list";

const Transactions = () => {
  const dark = useRecoilValue(themeState);
  return (
    <div className="w-full px-2 lg:px-52 py-16">
      <div className="flex cursor-pointer gap-2">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_441_16360)">
            <path d="M16.4631 9.41659H7.15479L11.2215 5.34992C11.5465 5.02492 11.5465 4.49159 11.2215 4.16659C11.1444 4.08933 11.0528 4.02803 10.952 3.9862C10.8512 3.94438 10.7431 3.92285 10.634 3.92285C10.5248 3.92285 10.4167 3.94438 10.3159 3.9862C10.2151 4.02803 10.1235 4.08933 10.0465 4.16659L4.55479 9.65826C4.22979 9.98326 4.22979 10.5083 4.55479 10.8333L10.0465 16.3249C10.3715 16.6499 10.8965 16.6499 11.2215 16.3249C11.5465 15.9999 11.5465 15.4749 11.2215 15.1499L7.15479 11.0833H16.4631C16.9215 11.0833 17.2965 10.7083 17.2965 10.2499C17.2965 9.79159 16.9215 9.41659 16.4631 9.41659Z" fill="#009DFF" />
          </g>
          <defs>
            <clipPath id="clip0_441_16360">
              <rect width="20" height="20" fill="white" transform="translate(0.629883 0.25)" />
            </clipPath>
          </defs>
        </svg>
        <span className={`${dark? "text-white" : "text-[#009DFF]"}`}>Back</span>
      </div>
      <Search />
      <div className="flex w-full justify-between mt-10 items-end">
        <h1 className="text-2xl lg:text-4xl font-semibold">User Transactions</h1>
        <p className="text-xs lg:text-sm text-[#009DFF]">VIEW ALL TRANSACTIONS</p>
      </div>
      <TransactionList />
    </div>
  );
}

export default Transactions;