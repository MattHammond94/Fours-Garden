import { NavLink } from "react-router-dom";
import { useState } from 'react';

const NavBar = () => {
  const[isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    const currentState = isOpen
    console.log(currentState);
    return currentState ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <button className="navbar-toggler" onClick={ toggleNav }>Open Nav</button>
      <nav className="navbar">
        <img src="../../public/4-circle.png" alt="logo" />
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