import { Outlet, useLocation } from 'react-router-dom';
import NavBar from "../components/NavBar";

const MainLayout = () => {
  const location = useLocation();

  const nestedInTheGarden = location.pathname.startsWith('/the-garden/');

  return (
    <div>
      { nestedInTheGarden ? <NavBar variant="light" /> : <NavBar /> }
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout;