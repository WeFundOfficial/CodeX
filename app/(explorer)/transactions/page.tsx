"use client"

import { themeState } from "@/state/theme";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import Search from "../../../src/components/developers/transactions/search";
import ChainInfo from "@/components/developers/transactions/chain-info";
import Tabs from "@/components/developers/transactions/tab";
import BlockDetails from "@/components/developers/transactions/block-details";
import Latency from "@/components/developers/transactions/latency";
import Forks from "@/components/developers/transactions/forks";
import NodeInfo from "@/components/developers/transactions/node-info";
import ApiStats from "@/components/developers/transactions/api-stats";

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
      
      {tab == 0 && <ChainInfo />}
      {tab == 1 && <BlockDetails />}
      {tab == 2 && <Latency />}
      {tab == 3 && <Forks />}
      {tab == 4 && <NodeInfo />}
      {tab == 5 && <ApiStats />}
    </div>
  );
}

export default Transactions;