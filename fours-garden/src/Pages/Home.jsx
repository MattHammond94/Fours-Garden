import Slider from '../components/Slider';

const Home = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <img src="home-page-title.png" />
        <h1>Welcome to <span>Fours</span> Garden of Wonders</h1>
        <p> If you have a query or would like to collaborate then please reach out through the contacts page <a href="/contact">here.</a></p>
      </div>
      <Slider />
    </div>
  )
}

export default Home