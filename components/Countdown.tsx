"use client";

import { useEffect, useMemo, useState } from "react";

function getRemaining(target: number) {
  const diff = Math.max(target - Date.now(), 0);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown({ target }: { target: string }) {
  const timestamp = useMemo(() => new Date(target).getTime(), [target]);
  const [time, setTime] = useState(() => getRemaining(timestamp));

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getRemaining(timestamp)), 1000);
    return () => window.clearInterval(timer);
  }, [timestamp]);

  const entries = [
    [time.days, "días"],
    [time.hours, "horas"],
    [time.minutes, "minutos"],
    [time.seconds, "segundos"],
  ];

  return (
    <div className="countdown" aria-label="Cuenta regresiva para la fiesta">
      {entries.map(([value, label]) => (
        <div className="countdownItem" key={String(label)}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
