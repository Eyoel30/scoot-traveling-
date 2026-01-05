import { Link } from "react-router-dom"
import Navegation, { Social } from "./Navbar"
import logo from "../../assets/logo.svg"

import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"
import twitter from "../../assets/icons/twitter.svg"

const values = [
  { label: "About", path: "/About" },
  { label: "Location", path: "/Location" },
  { label: "Careers", path: "/Careers" }
]

const socialmedia = [
  { webadd: "www.facebook.com", img: facebook },
  { webadd: "www.twitter.com", img: twitter },
  { webadd: "www.instagram.com", img: instagram }
]

export default function Footer() {

  return (
    <footer className="wrapper ">
      <Link to='/'>
        <img src={logo} />
      </Link>

      <Navegation links={values} >
        <Social socials={socialmedia} />
      </Navegation>

    </footer>
  )
}