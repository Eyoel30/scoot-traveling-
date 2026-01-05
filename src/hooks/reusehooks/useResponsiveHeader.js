import { useState, useEffect } from "react"

export default function useResponsiveHeader(query) {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    const handleMediaChange = (e) => {
      setIsMobile(e.matches)
    }
    mediaQuery.addEventListener("change", handleMediaChange)

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange)
    }

  }, [query])

  return isMobile
}


