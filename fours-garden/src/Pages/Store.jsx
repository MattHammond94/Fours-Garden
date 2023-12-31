import ArtworkNavBar from "../components/ArtworkNavBar";

const Store = () => {
  return (
    <div>
      <ArtworkNavBar variant="store" />
      <div className="store-content-container">
        <div className="grey-layer">
          <img 
            src="/store-circ.png" 
            className="store-img"
            alt="A circle of grunge texture" 
            loading="lazy"
          />
        </div>
        <h2>The store is currently undergoing some maintenance.</h2>
        <h2>Watch this space!</h2>
      </div>
    </div>
  )
}

export default Store