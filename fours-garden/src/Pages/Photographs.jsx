import ArtworkNavBar from "../components/ArtworkNavBar";
import { Link } from "react-router-dom";

const Photographs = () => {
  return (
    <div className="photographs-page-container">
      <ArtworkNavBar variant="photographs"/>
      <div className="photographs-content-container">
        <div className="street">
          <h1>Street</h1>
          <div className="img-container-one">
            <Link to="/the-garden/photographs/street">
            {/* <a onClick={ () => { setModalStatus(true) }}> */}
              <img src="/street.jpg" className="img-one" />
            {/* </a> */}
            </Link>
          </div>
        </div>
        <div className="landscapes">
          <h1>Landscapes</h1>
          <div className="img-container-two">
            <Link to="/the-garden/photographs/landscapes">
              <img src="/landscapes.jpg" className="img-two" />
            </Link>
          </div>
        </div>
        <div className="misc">
          <h1>Misc</h1>
          <div className="img-container-three">
            <Link to="/the-garden/photographs/misc">
              <img src="/misc.jpg" className="img-three" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photographs