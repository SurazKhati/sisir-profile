"use client"
import { useAppContext } from "@/context/contexts"

export const Footer = () => {
  const { darkState } = useAppContext()

  const bgClass = darkState ? "bg-neutral-900" : "bg-transparent"
  const mainText = darkState ? "text-white" : "text-stone-950"
  const subText = darkState ? "text-gray-300" : "text-stone-600"

  return (
    <div className={`${bgClass} px-6 pb-10 pt-4`}>
      <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-white/80 bg-white/75 px-6 py-8 text-center shadow-[0_18px_60px_rgba(28,25,23,0.06)] backdrop-blur">
      <p className={`text-2xl font-black tracking-[-0.04em] ${mainText}`}>Sisir Kafle</p>
      <p className={`mt-3 text-lg ${subText}`}>
        Advocate | Legal Associate | Litigation and Compliance Professional
      </p>
      <div className="mx-auto mt-5 h-px w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      <p className={`mt-5 text-sm ${subText}`}>
        © 2026 Sisir Kafle. All rights reserved.
      </p>
      </div>
    </div>
  )
}
