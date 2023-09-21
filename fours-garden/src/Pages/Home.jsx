import { Outlet } from 'react-router-dom';
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Fours Garden</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Home