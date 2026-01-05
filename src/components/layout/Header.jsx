import TopNav from '../Homepage-components/top_nav'
import logo from '../../assets/logo.svg'
import "./Header.css"
const values = [
  { label: "About", path: "/About" },
  { label: "Location", path: "/Location" },
  { label: "Careers", path: "/Careers" }
]

const show = true
const buttonconfig = { label: "Get scootin", path: "/", classname: "button" }

function Header() {

  return (
    <header className='header wrapper'>
        <img className='header-logo' src={logo} alt='Scoot Home' width="108" height="29" />
        <div className='header-links topnav'>
          <TopNav links={values} show={show} buttonConfig={buttonconfig} />
        </div>
    </header>
  )
}

export default Header
