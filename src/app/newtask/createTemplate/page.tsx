"use client";
import { useSearchParams } from "next/navigation";

export default function CreateTemplate() {
  const searchParams = useSearchParams();
  const arrayData = JSON.parse(searchParams.get("members") || "[]");
  const stringData = searchParams.get("processName") || "";
  return (
    <main className="flex min-h-screen flex-col p-5 pt-5">
      {...arrayData}
      <div className="flex min-h-screen flex-col p-5 pt-5">{stringData}</div>
    </main>
  );
}
