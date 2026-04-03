"use client"
import { useAppContext } from "@/context/contexts"

export const Footer = () => {
  const { darkState } = useAppContext()

  const bgClass = darkState ? "bg-neutral-900" : "bg-gray-100"
  const mainText = darkState ? "text-white" : "text-black"
  const subText = darkState ? "text-gray-300" : "text-gray-700"

  return (
    <div className={`${bgClass} text-center p-4`}>
      <p className={`text-l m-3 ${mainText}`}>Sisir Kafle</p>
      <p className={`text-l m-3 ${subText}`}>
        Advocate | Legal Associate | Litigation and Compliance Professional
      </p>
      <p className={`text-sm m-3 ${subText}`}>
        © 2026 Sisir Kafle. All rights reserved.
      </p>
    </div>
  )
}
