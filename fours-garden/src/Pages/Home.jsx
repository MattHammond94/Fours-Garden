import Slider from '../components/Slider';

const Home = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <img src="home-page-title.png" />
        <h1>Welcome to <span>Fours</span> Garden of Wonders</h1>
        <p>An artist based on the south coast on the UK. If youre looking for to collaborate or need some work done please reach out through the contacts page <a href="/contact">here.</a></p>
      </div>
      <Slider />
    </div>
  )
}

export default Home