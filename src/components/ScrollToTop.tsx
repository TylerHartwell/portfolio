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
      <button className="fixed right-3 bottom-3 border-2 border-black border-opacity-50 rounded-full bg-white z-50" onPointerDown={scrollToTop}>
        <FaAngleUp size="1.5em" />
      </button>
    )
  )
}
