import Slider from '../components/Slider';

const Home = () => {
  return (
    <div className="homepage-container">
      <img src="../../public/home-page-title.png" />
      <h1>Welcome to <span>Fours</span> Garden of Wonders</h1>
      <p>An artist based on the south coast on the UK. If you're looking for to collaborate or need some work done please reach out through the contacts page <a href="/contact">here.</a></p>
      <Slider />
    </div>
  )
}

export default Home