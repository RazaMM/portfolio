'use client'

import React from "react";
import { useTime } from "@/hooks/useTime";

export default function DigitalClock() {
  const time = useTime('minute');

  return (
    <span className="shadow-w95-inverted-thin p-1">
      {time.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit'
      })}
    </span>
  );
}