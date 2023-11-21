import Slider from '../components/Slider';

const Home = () => {
  return (
    <div className="homepage-container">
      <div className='homepage-title-wrapper'>
        <div>
          <img className="home-page-title-img" src="home-page-title.png" alt="The artists signature written in ink" loading="lazy"/>
        </div>
      </div>
      <Slider />
    </div>
  )
}

export default Home