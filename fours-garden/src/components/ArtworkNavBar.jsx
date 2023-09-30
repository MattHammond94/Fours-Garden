
const ArtworkNavBar = ({ variant }) => {

  const variantData = {
    drawings: {
      title: 'Drawings',
      img: "url('/navbar1.jpg')",
    },
    photographs: {
      title: 'Photographs',
      img: "url('/navbar3.jpg')",
    },
    prints: {
      title: 'Prints',
      img: "url('/navbar2.jpg')",
    },
    store: {
      title: 'Store',
      img: "url('/navbar4-store.jpg')",
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