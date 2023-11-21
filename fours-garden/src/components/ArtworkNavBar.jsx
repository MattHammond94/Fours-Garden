const ArtworkNavBar = ({ variant }) => {

  const variantData = {
    drawings: {
      title: 'Drawings',
      img: "url('/navbarBacks/navbar1.jpg')",
    },
    photographs: {
      title: 'Photographs',
      img: "url('/navbarBacks/navbar3.jpg')",
    },
    prints: {
      title: 'Prints',
      img: "url('/navbarBacks/navbar2.jpg')",
    },
    other: {
      title: 'Other Projects',
      img: "url('/navbarBacks/navbar4.jpg')"
    },
    store: {
      title: 'Store',
      img: "url('/navbarBacks/navbar5.jpg')",
    },
  };

  const { title, img } = variantData[variant] || { title: '', img: '' };

  return (
    <div className="artwork-nav-container" style={{backgroundImage: img }}>
      <div className="content">
        <h1>{ title }</h1>
      </div>
      <a href="/the-garden">Home</a>
    </div>
  )
}

export default ArtworkNavBar