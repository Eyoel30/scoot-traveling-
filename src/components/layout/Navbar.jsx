import { NavLink } from 'react-router-dom'
import ButtonLink from '../common/buttonlink'
import hamburger from "../../assets/icons/hamburger.svg"
import close from "../../assets/icons/close.svg"

function Navegation({ links, topNavOnly, show, buttonConfig, children }) {

  const { isMenuOpen, isMobile, closeMenu, openMenu, openButtonRef, closeButtonRef, menuRef, transitionStyle } = topNavOnly || {}

  // update className for footer in the place of '' is !topNavOnly 

  const content = (
    <>
      <ul className={topNavOnly ? "topnav__links" : ''}>
        {links.map((link) => (
          <li className={topNavOnly ? "topnav__item" : ''} >
            <NavLink className={topNavOnly ? "topnav__link" : ''} to={link.path}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      {show && buttonConfig && (
        <ButtonLink button={buttonConfig} />
      )}
      {children}
    </>
  )


  return (
    <nav>
      {topNavOnly ? (<span id="nav-label" hidden>Navigation</span>) : null}

      {/*conditional render for button is optional only affect the performance because of the resion css hundle the display, it functions and gives expected outcome with out the ismobile condition by just using topNavOnly*/}

      {isMobile ? (
        <button
          id="btnOpen"
          className="topnav__open"
          aria-expanded={isMenuOpen}
          aria-labelledby='nav-label'
          onClick={openMenu}
          ref={openButtonRef}>
          <img src={hamburger} alt="" width="20" height="16" />
        </button>) : null
      }

      {topNavOnly ? <div
        className='topnav__menu'
        role={isMobile ? 'dialog' : undefined}
        aria-labelledby='nav-label'
        ref={menuRef}
        {...(isMobile && !isMenuOpen ? { inert: "" } : {})}
        style={isMobile ? { transition: transitionStyle } : {}} >

        {isMobile && (<button
          id='btnClose'
          className='topnav__close'
          aria-label='Close'
          onClick={closeMenu}
          ref={closeButtonRef} >
          <img src={close} alt="" width="18" height="18" />
        </button>)}
        <div className='topnav__menu-content'>
          {content}
        </div>
      </div> : content}

    </nav>
  )
}

export function Social({ socials }) {
  return (
    <ul className='social'>
      {socials.map((social) => (
        <li>
          <NavLink to={social.webadd}>
            <img src={social.img} width="24" height="24" />
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Navegation






//  <NavLink to='/'>
//         Home
//       </NavLink>
//       <NavLink to='/about'>
//         about
//       </NavLink>
//       <NavLink to='/contact'>
//         contact
//       </NavLink>
//       <NavLink to='/productes'>
//         Productes
//       </NavLink>


