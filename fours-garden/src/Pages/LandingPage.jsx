import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate();

  const enterNavigation = () => {
    navigate('/the-garden')
  }

  return (
    <div className="landing-page">
      <h1>Welcome to <span>Four Kid's</span> Garden of Wonders!</h1>
      <h3>Artist <span>|</span> Illustrator <span>|</span> Animator</h3>
      <img src="/landing-page-circle.png" alt="circle" />
      <button className="enter-btn" onClick={enterNavigation}>Enter</button>
    </div>
  )
}

export default LandingPage