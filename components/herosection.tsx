"use client"

import { ReactNode } from "react";
import { useAppContext } from "@/context/contexts";
import StatsBar, { Stat } from "./status";

type HeroAction = {
  label: string;
  href: string;
  download?: string;
  newTab?: boolean;
  icon?: ReactNode;
};

type SocialLink = {
  href: string;
  icon: string;
  alt: string;
};

type HeroSectionProps = {
  batchtxt?: string;
  title: ReactNode;
  subtext: ReactNode;
  description?: ReactNode;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  tertiaryAction?: HeroAction;
  socialLinks?: SocialLink[];
  image?: string;
  imageAlt?: string;
  availabilityText?: string;
  stats: Stat[];
};

export const HeroSection = ({
  batchtxt,
  title,
  subtext,
  description,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  socialLinks = [],
  image,
  imageAlt = "Profile",
  availabilityText = "Available for work",
  stats,
}: HeroSectionProps) => {
  const { mblview, darkState } = useAppContext();

  const handleAction = (action?: HeroAction) => {
    if (!action) return;

    if (action.download) {
      const link = document.createElement("a");
      link.href = action.href;
      link.download = action.download;
      link.click();
      return;
    }

    if (action.newTab) {
      window.open(action.href, "_blank", "noopener,noreferrer");
      return;
    }

    window.location.href = action.href;
  };

  return (
    <section
      className={`relative overflow-hidden px-7 py-8 ${mblview ? "flex flex-col-reverse" : "flex"}
      ${darkState ? "bg-neutral-950 text-white" : "bg-transparent text-black"}`}
    >
      {!darkState && (
        <>
          <div className="absolute left-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-amber-200/60 blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-red-200/50 blur-3xl animate-float-slow" />
        </>
      )}

      {/* Left / Text Side */}
      <div className={`relative z-10 h-auto ${mblview ? "w-full" : "w-[55%] pt-15 px-10"}`}>
        {batchtxt && (
          <span className="mb-2 text-sm text-gray-400">{batchtxt}</span>
        )}

        <h1
          className={`my-1 ${
            mblview ? "text-2xl w-full text-center" : "w-full text-5xl font-bold"
          }`}
        >
          {title}
        </h1>

        <p
          className={`pt-5 ${
            darkState ? "text-gray-300" : "text-gray-800"
          } ${mblview ? "text-lg w-[90%] m-auto text-center" : "text-3xl"}`}
        >
          {subtext}
        </p>

        {description && (
          <p
            className={`pt-5 ${
              darkState ? "text-gray-400" : "text-gray-600"
            } ${mblview ? "text-sm w-[90%] m-auto text-center" : "text-xl"}`}
          >
            {description}
          </p>
        )}

        {/* Buttons */}
        {(primaryAction || secondaryAction || tertiaryAction) && (
          <div className={`${mblview ? "block" : "flex flex-wrap"} text-center mt-7`}>
            {primaryAction && (
              <button
                className={`m-3 inline-flex items-center justify-center gap-3 p-3 rounded-full hover:cursor-pointer transition-transform duration-300 hover:-translate-y-1
                ${darkState ? "bg-white text-black" : "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white shadow-lg shadow-orange-200"}
                ${mblview ? "text-lg w-[60%]" : "text-xl"}`}
                onClick={() => handleAction(primaryAction)}
              >
                {primaryAction.icon}
                {primaryAction.label}
              </button>
            )}

            {secondaryAction && (
              <button
                className={`m-3 inline-flex items-center justify-center gap-3 p-3 rounded-full border hover:cursor-pointer transition-colors duration-300
                ${
                  darkState
                    ? "border-white text-white bg-neutral-800 hover:bg-neutral-700"
                    : "border-amber-700 text-amber-950 bg-white/80 backdrop-blur hover:bg-amber-50"
                }
                ${mblview ? "text-lg w-[60%]" : "text-xl"}`}
                onClick={() => handleAction(secondaryAction)}
              >
                {secondaryAction.icon}
                {secondaryAction.label}
              </button>
            )}

            {tertiaryAction && (
              <button
                className={`m-3 inline-flex items-center justify-center gap-3 p-3 rounded-full border hover:cursor-pointer transition-colors duration-300
                ${
                  darkState
                    ? "border-emerald-400 text-white bg-emerald-900/30 hover:bg-emerald-800/40"
                    : "border-emerald-600 text-emerald-900 bg-white/80 backdrop-blur hover:bg-emerald-50"
                }
                ${mblview ? "text-lg w-[60%]" : "text-xl"}`}
                onClick={() => handleAction(tertiaryAction)}
              >
                {tertiaryAction.icon}
                {tertiaryAction.label}
              </button>
            )}
          </div>
        )}

        {/* Social Icons */}
        {socialLinks.length > 0 && (
          <div
            className={`flex items-baseline pt-7 ${
              mblview ? "justify-center" : ""
            }`}
          >
            {socialLinks.map((link) => (
              <a href={link.href} key={link.href}>
                <img
                  src={link.icon}
                  className={`inline-block w-16 h-16 m-4 rounded-full object-cover hover:cursor-pointer
                  ${darkState ? "border border-neutral-600" : "border-2"}`}
                  alt={link.alt}
                />
              </a>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="w-full mt-7">
          <StatsBar stats={stats} />
        </div>
      </div>

      {/* Right / Image Side */}
      <div className={`relative z-10 h-auto ${mblview ? "w-full mb-10" : "w-[45%]"}`}>
        {image && (
          <div className="relative mx-auto my-7 w-fit animate-float-slow">
            {!darkState && (
              <div className="absolute inset-[-12px] rounded-[2rem] bg-gradient-to-br from-amber-300 via-orange-400 to-red-400 opacity-80 blur-md" />
            )}
            <img
              src={image}
              height="100px"
              width="300px"
              alt={imageAlt}
              className={`relative rounded-[2rem] my-7 mx-auto object-cover object-top border-4 shadow-2xl
              ${darkState ? "border-neutral-700 shadow-black" : "border-white shadow-orange-200 animate-pulse-glow"}
              ${mblview ? "w-60 h-72" : "w-96 h-[28rem]"}`}
            />
          </div>
        )}

        <div
          className={`rounded-full m-auto px-5 w-fit py-3 text-sm border
            ${
              darkState
                ? "bg-neutral-900 text-white border-neutral-700"
                : "bg-white/80 text-black border-amber-900 shadow-lg shadow-amber-100"
            }`}
        >
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>{" "}
          {availabilityText}
        </div>
      </div>
    </section>
  );
};
