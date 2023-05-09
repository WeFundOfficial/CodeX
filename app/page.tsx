"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const App = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/community");
  }, [router]);

  return (
    null
  );
};

export default App;
