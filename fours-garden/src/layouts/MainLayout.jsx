import { Outlet } from 'react-router-dom';
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Home