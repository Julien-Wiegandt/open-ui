"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Documentations = dynamic(() => import("./Documentation"), {
  ssr: false,
});

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Documentations />
    </Suspense>
  );
}
