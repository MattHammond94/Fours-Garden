import { useState } from "react";
import ArtworkNavBar from "../components/ArtworkNavBar";
import Modal from "../components/Modal";

const Photographs = () => {
  const [modalOpenStatus, setModalOpenStatus] = useState(false);

  return (
    <>
      <div className="photographs-page-container">
        <ArtworkNavBar variant="photographs"/>
        <div className="photographs-content-container">
          <div className="street">
            <h1>Street</h1>
            <div className="img-container-one" onClick={ () => {setModalOpenStatus(true)} }>
              <img src="/street.jpg" className="img-one" />
            </div>
          </div>
          <div className="landscapes">
            <h1>Landscapes</h1>
            <div className="img-container-two" onClick={  () => {setModalOpenStatus(true)}}>
              <img src="/landscapes.jpg" className="img-two" />
            </div>
          </div>
          <div className="misc">
            <h1>Misc</h1>
            <div className="img-container-three" onClick={ () => {setModalOpenStatus(true)} }>
              <img src="/misc.jpg" className="img-three" />
            </div>
          </div>
        </div>
      </div>
      <Modal status={modalOpenStatus} setStatus={setModalOpenStatus}>
        {/* {modalContent} */}
        This is the Modal
      </Modal>
    </>
  )
}

export default Photographs