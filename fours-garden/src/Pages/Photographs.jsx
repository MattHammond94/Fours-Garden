import ArtworkNavBar from "../components/ArtworkNavBar";

const Photographs = () => {
  return (
    <div className="photographs-page-container">
      <ArtworkNavBar variant="photographs"/>
      <div className="photographs-content-container">
        <div className="street">
          <h1>Street</h1>
          <div className="img-container-one">
            <img src="../../public/street.jpg" className="img-one" />
          </div>
        </div>
        <div className="landscapes">
          <h1>Landscapes</h1>
          <div className="img-container-two">
            <img src="../../public/landscapes.jpg" className="img-two" />
          </div>
        </div>
        <div className="misc">
          <h1>Misc</h1>
          <div className="img-container-three">
            <img src="../../public/misc.jpg" className="img-three" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photographs