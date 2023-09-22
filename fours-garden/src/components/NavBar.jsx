import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
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