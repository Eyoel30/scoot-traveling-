import {useEffect } from "react"
import * as bodyScrollLook from "body-scroll-lock-upgrade"


export default function useBodyLock(lock){
  useEffect(()=>{
    const mainElement = document.querySelector('main') 
    const bodyElement = document.body
    
    if(lock){// if True
      bodyScrollLook.disableBodyScroll(bodyElement)
      mainElement?.setAttribute('inert', '')
    }else{
      bodyScrollLook.enableBodyScroll(bodyElement)
      mainElement?.removeAttribute('inert')
    }
    return () => { //when unmount 
      bodyScrollLook.enableBodyScroll(bodyElement)
      mainElement?.removeAttribute('inert')
    }
  }, [lock])  
}





// export default function useBodyLock(isMobile, isMenuOpen) {
//   useEffect(() => { 
//     const mainElement = document.querySelector("main")
//     const bodyElement = document.body
//     if(isMobile && isMenuOpen){
//       bodyScrolLook.disableBodyScroll(bodyElement)
//       mainElement?.current.focuse()
//     } else{
//       bodyScrolLook.enadbleBodyScroll(bodyElement)
//       mainElement?.removeAttribute('inert')

//     }
//     return () => {
//       bodyScrolLook.enadbleBodyScroll(bodyElement)
//       mainElement?.removeAttribute('inert')
//     }
//   },[isMenuOpen, isMobile, openButtonRef, closeButtonRef] )
// }

