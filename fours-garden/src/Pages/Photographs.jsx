import ArtworkNavBar from "../components/ArtworkNavBar";

const Photographs = () => {
  return (
    <div className="photographs-page-container">
      <ArtworkNavBar variant="photographs"/>
      <div className="photographs-content-container">
        <div className="street">
          <h1>Street</h1>
          <div className="img-container-one">
            <a href="/">
              <img src="/street.jpg" className="img-one" />
            </a>
          </div>
        </div>
        <div className="landscapes">
          <h1>Landscapes</h1>
          <div className="img-container-two">
            <a href="/">
              <img src="/landscapes.jpg" className="img-two" />
            </a>
          </div>
        </div>
        <div className="misc">
          <h1>Misc</h1>
          <div className="img-container-three">
            <a href="/">
              <img src="/misc.jpg" className="img-three" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photographs