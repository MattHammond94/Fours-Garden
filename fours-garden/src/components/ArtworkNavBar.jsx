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
      lowResImg: "url('/navbarBacks/navbar3-blur.jpg')"
    },
    prints: {
      title: 'Prints',
      img: '/navbarBacks/navbar3.jpg',
      lowResImg: "url('/navbarBacks/navbar2-blur.jpg')"
    },
    other: {
      title: 'Projects',
      img: '/navbarBacks/navbar4.jpg',
      lowResImg: "url('/navbarBacks/navbar4-blur.jpg')"
    },
    store: {
      title: 'Store',
      img: '/navbarBacks/navbar5.jpg',
      lowResImg: "url('/navbarBacks/navbar5-blur.jpg')"
    },
  };

  const { title, img, lowResImg } = variantData[variant] || { title: '', img: '', lowResImg: '' };

  return (
    <div className="artwork-nav-container">
      <div className='navbar-blur-layer' style={{ backgroundImage: lowResImg, display: imageLoaded ? 'none' : 'block' }} />
      <img 
        src={ img } 
        alt="Ink textured backdrop" 
        loading="lazy" 
        onLoad={ revealImage }
      />
      <h1 className='navbar-title'>{ title }</h1>
      <a href="/the-garden">Home</a>
    </div>
  )
}

export default ArtworkNavBar