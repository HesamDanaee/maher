"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => router.push("panel/customers"), [router]);
  return <main className="w-full h-full"></main>;
}
