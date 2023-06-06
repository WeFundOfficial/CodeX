"use client"

import { themeState } from "@/state/theme";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import ValidatorList from "./validator-list";
import Info from "./info";
import Map from "./map";

const Validators = () => {
  const dark = useRecoilValue(themeState);
  return (
    <div className={`px-4 lg:px-20 mt-8 mb-8 ${dark ? "text-white" : "text-black"}`}>
      <h1 className="text-3xl lg:text-5xl">
        Validators
      </h1>
      <Map />
      <Info />
      <ValidatorList />
    </div>
  );
}

export default Validators;