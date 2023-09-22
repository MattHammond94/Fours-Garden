import { NavLink } from "react-router-dom";
import { useState } from 'react';

const NavBar = () => {
  const[isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    const currentState = isOpen
    return currentState ? setIsOpen(false) : setIsOpen(true)
  }

  const togglerStyle = {
    left: isOpen ? '260px' : '5px'
  }

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <button className="navbar-toggler" style={togglerStyle} onClick={ toggleNav }>&#9776;</button>
      <nav className="navbar-child">
        <img src="/title-icon.png" alt="logo" />
        <NavLink to="/artwork/drawings">Drawings</NavLink>
        <NavLink to="/artwork/paintings">Paintings</NavLink>
        <NavLink to="/artwork/prints">Prints</NavLink>
        <NavLink to="/artwork/photographs">Photographs</NavLink>
        <NavLink to="/artwork/misc">Misc</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  )
}

export default NavBar