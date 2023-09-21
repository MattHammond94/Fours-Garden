import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Fours Garden</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Home