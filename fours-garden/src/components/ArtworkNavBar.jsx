
const ArtworkNavBar = ({ variant }) => {

  const homeButton = (
    <a href="/the-garden">Home</a>
  )

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
}

export default ArtworkNavBar