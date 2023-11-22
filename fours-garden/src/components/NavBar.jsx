import { NavLink } from "react-router-dom";
import { useState } from 'react';

const NavBar = ({ variant }) => {
  const[isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    const currentState = isOpen
    return currentState ? setIsOpen(false) : setIsOpen(true)
  }

  let togglerStyle;

  if (variant === "light") {
    togglerStyle = {
      left: isOpen ? '240px' : '12px',
      top: '67px',
      color: 'white'
    }
  }

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <button className="navbar-toggler" style={togglerStyle} onClick={ toggleNav }>&#9776;</button>
      <nav className="navbar-child">
        <img src="/icon-resized.png" alt="The artists logo" loading="lazy" />
        <NavLink to="/the-garden/drawings">Drawings</NavLink>
        <NavLink to="/the-garden/photographs">Photographs</NavLink>
        <NavLink to="/the-garden/prints">Prints</NavLink>
        <NavLink to="/the-garden/projects">Projects</NavLink>
        <NavLink to="/the-garden/store">Store</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  )
}

export default NavBar