
const ArtworkNavBar = ({ variant }) => {

  const homeButton = (
    <a href="/the-garden">Home</a>
  )

  // const headerContent = {
  //   drawings: 'Drawings',
  //   photographs: 'Photographs',
  //   prints: 'Prints',
  //   store: 'Store',
  // }

  // const backgroundImages = {
  //   drawings: "url(" + '/navbar1.jpg' + ")",
  //   photographs: "url(" + '/navbar3.jpg' + ")",
  //   prints: "url(" + '/navbar2.jpg' + ")",
  //   store: "url(" + '/navbar4-store.jpg' + ")",
  // }

  if (variant === 'drawings') {
    return (
      <div className="artwork-nav-container" style={{backgroundImage: "url(" + '/navbar1.jpg' + ")"}}>
        <div className="content">
          <h1>Drawings</h1>
        </div>
        {homeButton}
      </div>
    )
  }

  if (variant === 'photographs') {
    
    return (
      <div className="artwork-nav-container" style={{backgroundImage: "url(" + '/navbar3.jpg' + ")"}}>
        <div className="content">
          <h1>Photographs</h1>
        </div>
        {homeButton}
      </div>
    )
  }

  if (variant === 'prints') {
    return (
      <div className="artwork-nav-container" style={{backgroundImage: "url(" + '/navbar2.jpg' + ")"}}>
        <div className="content">
          <h1>Prints</h1>
        </div>
        {homeButton}
      </div>
    )
  }

  if (variant === 'store') {
    return (
      <div className="artwork-nav-container" style={{backgroundImage: "url(" + '/navbar4-store.jpg' + ")"}}>
        <div className="content">
          <h1>Drawings</h1>
        </div>
        {homeButton}
      </div>
    )
  }
}

export default ArtworkNavBar