"use client";
import { useState } from "react";
import { useAppContext } from "@/context/contexts";

export const Navbar = ({ title, options }: { title: string; options?: string[] }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { mblview, darkState, toggleDark } = useAppContext();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setToggle(false);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 mx-auto mt-4 flex w-[calc(100%-1.5rem)] max-w-7xl items-center justify-between rounded-[1.75rem] border px-5 py-4 shadow-[0_18px_60px_rgba(28,25,23,0.08)] backdrop-blur-xl transition-colors duration-300 md:px-7
          ${darkState ? "bg-neutral-900/90 border-neutral-700" : "bg-white/70 border-white/80"}
        `}
      >
        <button
          className={`w-[70%] text-left transition-transform duration-300 hover:scale-[1.01]
            ${darkState ? "text-white" : "text-black"}`}
          onClick={() => scrollToSection("Home")}
        >
          <span
            className={`block text-3xl font-black tracking-[-0.04em] md:text-4xl
              ${
                darkState
                  ? "text-white"
                  : "bg-gradient-to-r from-stone-950 via-amber-700 to-red-700 bg-clip-text text-transparent"
              }`}
          >
            {title}
          </span>
          {!mblview && (
            <span
              className={`mt-1 block text-[0.72rem] font-semibold uppercase tracking-[0.35em]
                ${darkState ? "text-neutral-400" : "text-amber-800/80"}`}
            >
              Advocate Portfolio
            </span>
          )}
        </button>

        <div className="flex items-baseline justify-end">
          {/* Desktop Menu */}
          {!mblview && (
            <ul
              className={`mr-7 flex items-center rounded-full border px-3 py-2 md:gap-3 sm:gap-2
                ${darkState ? "border-neutral-700 bg-neutral-950/80" : "border-amber-100 bg-white/80 shadow-sm"}
              `}
            >
              {options?.map((opt, idx) => (
                <li
                  key={idx}
                  className={`rounded-full px-5 py-2 font-sans text-lg font-semibold cursor-pointer transition-all duration-300
                    ${
                      darkState
                        ? "text-gray-300 hover:bg-neutral-800 hover:text-white"
                        : "text-stone-600 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-amber-100 hover:to-red-100 hover:text-stone-950"
                    }
                  `}
                  onClick={() =>
                    scrollToSection(
                      opt.charAt(0).toUpperCase() + opt.slice(1).toLowerCase()
                    )
                  }
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}

          <div className="flex gap-3">
            <button
              className={`rounded-full border px-3 py-2 text-xl hover:cursor-pointer transition-transform duration-300 hover:-translate-y-0.5
                ${darkState ? "border-neutral-700 text-yellow-400 bg-neutral-900" : "border-amber-100 text-amber-950 bg-white/90 shadow-sm"}
              `}
              onClick={toggleDark}
            >
              ☼
            </button>

            {/* Mobile Toggle Button */}
            {mblview && (
              <button
                className={`rounded-full border px-3 py-1 text-3xl font-bold focus:outline-none
                  ${darkState ? "border-neutral-700 text-white bg-neutral-900" : "border-amber-100 text-amber-950 bg-white/90"}
                `}
                onClick={() => setToggle(!toggle)}
              >
                ☰
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mblview && toggle && (
        <ul
          className={`mx-auto mt-3 flex w-[calc(100%-1.5rem)] max-w-7xl flex-col gap-3 rounded-[1.5rem] border px-4 py-4 shadow-[0_18px_50px_rgba(28,25,23,0.08)]
            ${darkState ? "bg-neutral-900 border-neutral-700" : "bg-white/90 border-white/80 backdrop-blur"}
          `}
        >
          {options?.map((opt, idx) => (
            <li
              key={idx}
              className={`rounded-2xl px-4 py-3 font-sans text-xl font-semibold cursor-pointer
                ${
                  darkState
                    ? "text-gray-300 hover:bg-neutral-800"
                    : "text-amber-950 hover:bg-gradient-to-r hover:from-amber-50 hover:to-red-50"
                }
              `}
              onClick={() =>
                scrollToSection(
                  opt.charAt(0).toUpperCase() + opt.slice(1).toLowerCase()
                )
              }
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
