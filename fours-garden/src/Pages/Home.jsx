import Slider from '../components/Slider';

const Home = () => {
  return (
    <div className="homepage-container">
      <div className='homepage-title-wrapper'>
        <img className="home-page-title-img" src="home-page-title.png" />
      </div>
      <Slider />
    </div>
  )
}

export default Home