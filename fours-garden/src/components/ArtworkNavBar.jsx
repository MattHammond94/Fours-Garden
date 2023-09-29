
const ArtworkNavBar = ({ variant }) => {

  const headerContent = {
    drawings: 'Drawings',
    photographs: 'Photographs',
    prints: 'Prints',
    store: 'Store',
  }

  const backgroundImages = {
    drawings: "url(" + '/navbar1.jpg' + ")",
    photographs: "url(" + '/navbar3.jpg' + ")",
    prints: "url(" + '/navbar2.jpg' + ")",
    store: "url(" + '/navbar4-store.jpg' + ")",
  }

  let heading = ''
  let img = ''
  
  if (variant === 'drawings') {
    img = backgroundImages.drawings
    heading = headerContent.drawings
  }

  if (variant === 'photographs') {
    img = backgroundImages.photographs
    heading = headerContent.photographs
  }

  if (variant === 'prints') {
    img = backgroundImages.prints
    heading = headerContent.prints
  }

  if (variant === 'store') {
    img = backgroundImages.store
    heading = headerContent.store
  }

  return (
    <div className="artwork-nav-container" style={{backgroundImage: img }}>
      <div className="content">
        <h1>{ heading }</h1>
      </div>
      <a href="/the-garden">Home</a>
    </div>
  )
}

export default ArtworkNavBar