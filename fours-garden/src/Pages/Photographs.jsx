import { useState } from "react";
import ArtworkNavBar from "../components/ArtworkNavBar";
import Modal from "../components/Modal";
import ImgGallery from "../components/ImgGallery";

const Photographs = () => {
  const [modalOpenStatus, setModalOpenStatus] = useState(false);
  const [selectedSlides, setSelectedSlides] = useState([]);

  const streetSlides = [
    { url: '/Street/1.jpg' },
    { url: '/Street/2.jpg' },
    { url: '/Street/3.jpg' },
    { url: '/Street/4.jpg' },
    { url: '/Street/5.jpg' },
    { url: '/Street/6.jpg' },
    { url: '/Street/7.jpg' },
    { url: '/Street/8.jpg' },
    { url: '/Street/9.jpg' },
    { url: '/Street/10.jpg' },
    { url: '/Street/11.jpg' }
  ]

  const landscapesSlides = [
    { url: '/Landscapes/1.jpg' },
    { url: '/Landscapes/2.jpg' },
    { url: '/Landscapes/3.jpg' },
    { url: '/Landscapes/4.jpg' },
    { url: '/Landscapes/5.jpg' },
    { url: '/Landscapes/6.jpg' },
    { url: '/Landscapes/7.jpg' },
    { url: '/Landscapes/8.jpg' },
    { url: '/Landscapes/9.jpg' },
    { url: '/Landscapes/10.jpg' },
    { url: '/Landscapes/11.jpg' }
  ]

  const miscSlides = [
    { url: '/Misc/1.jpg' },
    { url: '/Misc/2.jpg' },
    { url: '/Misc/3.jpg' },
    { url: '/Misc/4.jpg' },
    { url: '/Misc/5.jpg' },
    { url: '/Misc/6.jpg' },
    { url: '/Misc/7.jpg' },
    { url: '/Misc/8.jpg' },
    { url: '/Misc/9.jpg' },
    { url: '/Misc/10.jpg' },
    { url: '/Misc/11.jpg' }
  ]

  const streetFunction = () => {
    setSelectedSlides(streetSlides);
    setModalOpenStatus(true);
  }

  const landscapeFunction = () => {
    setSelectedSlides(landscapesSlides);
    setModalOpenStatus(true);
  }

  const miscFunction = () => {
    setSelectedSlides(miscSlides);
    setModalOpenStatus(true);
  }

  return (
    <>
      <div className="photographs-page-container">
        <ArtworkNavBar variant="photographs"/>
        <div className="photographs-content-container">
          <div className="street">
            <h1>Street</h1>
            <div className="img-container-one" onClick={ streetFunction }>
              <img src="/street.jpg" className="img-one" />
            </div>
          </div>
          <div className="landscapes">
            <h1>Landscapes</h1>
            <div className="img-container-two" onClick={ landscapeFunction }>
              <img src="/landscapes.jpg" className="img-two" />
            </div>
          </div>
          <div className="misc">
            <h1>Misc</h1>
            <div className="img-container-three" onClick={ miscFunction }>
              <img src="/misc.jpg" className="img-three" />
            </div>
          </div>
        </div>
      </div>
      <Modal status={modalOpenStatus} setStatus={setModalOpenStatus}>
        <div className="slider-page-container">
          <div className="border-div"></div>
          <div className="slider-comp-container">
            <ImgGallery slides={selectedSlides} />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Photographs