"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Explorer = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/explorer/transactions");
  }, [])
  return null;
};

export default Explorer;