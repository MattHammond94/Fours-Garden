import { useState } from 'react';

const ArtworkNavBar = ({ variant }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const revealImage = () => {
    setImageLoaded(true);
  }

  const variantData = {
    drawings: {
      title: 'Drawings',
      img: '/navbarBacks/navbar1.jpg',
      lowResImg: "url('/navbarBacks/navbar1-blur.jpg')"
    },
    photographs: {
      title: 'Photographs',
      img: '/navbarBacks/navbar3.jpg',
    },
    prints: {
      title: 'Prints',
      img: '/navbarBacks/navbar2.jpg',
    },
    other: {
      title: 'Other Projects',
      img: '/navbarBacks/navbar4.jpg',
    },
    store: {
      title: 'Store',
      img: '/navbarBacks/navbar5.jpg',
    },
  };

  const { title, img, lowResImg } = variantData[variant] || { title: '', img: '', lowResImg: '' };

  return (
    <div className="artwork-nav-container">
      <div className='navbar-blur-layer' style={{ backgroundImage: lowResImg, display: 'block' }} />
      <img src={ img } alt="Ink textured backdrop" loading="lazy" />
      <div className="nav-content">
        <h1>{ title }</h1>
      </div>
      <a href="/the-garden">Home</a>
    </div>
  )
}

export default ArtworkNavBar