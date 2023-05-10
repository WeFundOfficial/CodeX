"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AboutUs = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/aboutus/team")

  }, [router])
  return null;
}

export default AboutUs;