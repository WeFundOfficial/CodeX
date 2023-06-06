"use client"

import { themeState } from "@/state/theme";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import BlockList from "./block-list";
import Info from "./info";
import Search from "./search";
import Tabs from "./tab";
import TransactionList from "./transaction-list";

const Transactions = () => {
  const [tab, setTab] = useState(0);
  const dark = useRecoilValue(themeState);
  return (
    <div className={`px-4 lg:px-20 mt-8 mb-8 ${dark ? "text-white" : "text-black"}`}>
      <h1 className="text-3xl lg:text-5xl">
        Transaction
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <Tabs iTab={tab} setITab={setTab} />
        <Search />
      </div>
      <Info />

      
      {/* <TransactionList /> */}
      <BlockList />
    </div>
  );
}

export default Transactions;