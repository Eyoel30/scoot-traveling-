import { useState, useEffect, useRef } from "react"
import useBodyLock from "../reusehooks/useBodyLock"
import useResponsiveHeader from "../reusehooks/useResponsiveHeader"

export default function useHeaderMenu() {

  useEffect(() => {
    console.log("useHeadeMenu component has been mounted")
    return () => {
      console.log("useHeadMenu component has been unmouted ")
    }
  }, [])

  const isMobile = useResponsiveHeader('(width < 43.75rem)')  //setting the enitial render return T/F 
  const [isMenuOpen, setIsMeuOpen] = useState(false)
  const [transitionStyle, setTransitionStyle] = useState('none')

  const closeButtonRef = useRef(null)
  const openButtonRef = useRef(null)
  const mainRef = useRef(null)

  const openMenu = () => {
    setTransitionStyle('')
    setIsMeuOpen(true)
    closeButtonRef.current?.focus()
  }

  const closeMenu = () => {
    setIsMeuOpen(false)
    openButtonRef.current?.focus()

    setTimeout(() => {
      setTransitionStyle('none')
    }, 500);
  }

  useEffect(() => {
    if (!isMobile && !isMenuOpen) {
      setIsMeuOpen(false)
      setTransitionStyle('none')
    }
  }, [isMobile, isMenuOpen])

  useBodyLock(isMobile && isMenuOpen)

  return { isMobile, isMenuOpen, transitionStyle, openButtonRef, closeButtonRef, mainRef, openMenu, closeMenu }
}