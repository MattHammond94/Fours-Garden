
const ArtworkNavBar = ({ variant }) => {

  if (variant === 'photographs') {
    
    return (
      <div className="artwork-nav-container">
        <div className="content">
          <h1>Photographs</h1>
        </div>
        <a href="/the-garden">Home</a>
      </div>
    )
  }
}

export default ArtworkNavBar