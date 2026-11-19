"use client";

import { useEffect, useState } from "react";

const format = () =>
  new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

export default function LiveDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(format());
    const id = setInterval(() => setDate(format()), 60000); // midnight rollover
    return () => clearInterval(id);
  }, []);

  return (
    <span suppressHydrationWarning className="min-h-[1em] min-w-[10ch]">
      {date || "\u00A0"}
    </span>
  );
}
