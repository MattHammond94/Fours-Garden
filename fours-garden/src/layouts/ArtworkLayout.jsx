import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const ArtworkLayout = () => {
  return (
    <div>
      <NavBar variant="artwork" />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default ArtworkLayout