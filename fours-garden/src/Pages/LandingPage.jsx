import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1 className="title">_Four Kid_</h1>
      <h3 className="statement">Artist <span>|</span> Illustrator <span>|</span> Animator</h3>
      <div className='brown-layer'>
        <img 
          src="/landing-page-circle.png" 
          alt="A circle of grunge texture" 
          onClick={ () => navigate('/the-garden') }
        />
      </div>
    </div>
  )
}

export default LandingPage