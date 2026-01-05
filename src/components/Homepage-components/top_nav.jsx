import Navigation from "../layout/Navbar"
import useHeaderMenu from "../../hooks/headerHooks/useheaderMenu"
import './top_nav.css'

export default function TopNav({ links, show, buttonConfig }){
  const topNavOnly = useHeaderMenu()    
  return (
    <>
      <Navigation topNavOnly={topNavOnly} links={links} show={show} buttonConfig={buttonConfig} />
    </>
  )
}