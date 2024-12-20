"use client"

import { useEffect, useState } from "react"
import { FaAngleUp } from "react-icons/fa"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    isVisible && (
      <button
        className="fixed right-6 bottom-6 flex justify-center items-center z-50 rounded-full bg-white translate-x-1/2 translate-y-1/2"
        onPointerDown={scrollToTop}
        title="scroll to top"
      >
        <FaAngleUp
          size="2em"
          className="rounded-full hover:size-[2.5em] transition-w transition-h ease-linear border-2 border-black border-opacity-50"
        />
      </button>
    )
  )
}
