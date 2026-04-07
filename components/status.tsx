"use client";
import { useAppContext } from "@/context/contexts";

export type Stat = {
  value: string;
  label: string;
};

type StatsBarProps = {
  stats: Stat[];
};

export default function StatsBar({ stats }: StatsBarProps) {
  const { mblview, darkState } = useAppContext();

  return (
    <div
      className={`w-full relative
        ${darkState ? "bg-neutral-950" : "bg-transparent"}
      `}
    >
      <div
        className={`max-w-6xl mx-auto px-6 relative rounded-[1.75rem] border py-7
          ${darkState ? "border-neutral-800 bg-neutral-900" : "border-white/80 bg-white/88 shadow-[0_24px_60px_rgba(111,29,27,0.08)] backdrop-blur"}
        `}
      >

        {/* Stats */}
        <div
          className={`
            flex gap-5
            ${mblview
              ? "justify-center flex-row items-center"
              : "items-center justify-between"}
          `}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center ${mblview ? "w-[30%]" : "flex-1"} ${
                !mblview && idx !== stats.length - 1 ? "border-r border-stone-200/70" : ""
              }`}
            >
              <h2
                className={`font-display text-5xl
                  ${darkState ? "text-white" : "text-stone-950"}
                `}
              >
                {stat.value}
              </h2>
              <p
                className={`mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em]
                  ${darkState ? "text-gray-400" : "text-stone-500"}
                `}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
