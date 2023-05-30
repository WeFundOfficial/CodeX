"use client"

import { themeState } from "@/state/theme";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import Filter from "./filter";
import Historys from "./history";
import Login from "./login";
import SignUp from "./signup";
import Total from "./total";

/* eslint-disable @next/next/no-img-element */
const Account = () => {
  const dark = useRecoilValue(themeState);
  const [openSignup, toggleSignup] = useState(false);
  const [openLogin, toggleLogin] = useState(true)
  return (
    <div className={`px-4 lg:px-20 mt-8 mb-8 ${dark ? "text-white" : "text-black"}`}>
      <div className="flex justify-between">
        <h1 className="text-3xl lg:text-5xl">
          Account
        </h1>
        <button className="flex px-4 py-2 bg-[#009DFF] items-center rounded-lg gap-2 lg:gap-4">
          <img src="/images/account/qr.svg" alt="qr" />
          <span className="text-sm lg:text-base font-semibold">add acount via qR</span>
        </button>
      </div>
      <Total />
      <Filter />
      <div className="text-[#999999] px-1 lg:px-4 mt-10">
        <div className="flex items-center gap-10">
          <h1 className="text-base lg:text-xl">Accounts</h1>
          <p className="text-xs lg:text-sm">All Locally Stored Accounts</p>
        </div>
        <p className="text-xs lg:text-sm mt-4">
          {"You don't have any accounts. Some features are currently hidden and will only become available once you have accounts."}
        </p>
      </div>
      <Historys />
      <SignUp open={openSignup} toggleOpen={toggleSignup} />
      <Login open={openLogin} toggleOpen={toggleLogin} />
    </div>
  )
};

export default Account;