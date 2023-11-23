import { useState } from "react";
import ArtworkNavBar from "../components/ArtworkNavBar";
import Modal from "../components/Modal";
import ImgGallery from "../components/ImgGallery";

const Photographs = () => {
  const [modalOpenStatus, setModalOpenStatus] = useState(false);
  const [selectedSlides, setSelectedSlides] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const streetSlides = [
    { url: '/Street/1.jpg', lowResUrl: '/Street/1-blur.jpg' },
    { url: '/Street/2.jpg', lowResUrl: '/Street/2-blur.jpg' },
    { url: '/Street/3.jpg', lowResUrl: '/Street/3-blur.jpg' },
    { url: '/Street/4.jpg', lowResUrl: '/Street/4-blur.jpg' },
    { url: '/Street/5.jpg', lowResUrl: '/Street/5-blur.jpg' },
    { url: '/Street/6.jpg', lowResUrl: '/Street/6-blur.jpg' },
    { url: '/Street/7.jpg', lowResUrl: '/Street/7-blur.jpg' },
    { url: '/Street/8.jpg', lowResUrl: '/Street/8-blur.jpg' },
    { url: '/Street/9.jpg', lowResUrl: '/Street/9-blur.jpg' },
    { url: '/Street/10.jpg', lowResUrl: '/Street/10-blur.jpg' },
    { url: '/Street/11.jpg', lowResUrl: '/Street/11-blur.jpg' },
    { url: '/Street/12.jpg', lowResUrl: '/Street/12-blur.jpg' },
    { url: '/Street/13.jpg', lowResUrl: '/Street/13-blur.jpg' },
    { url: '/Street/14.jpg', lowResUrl: '/Street/14-blur.jpg' },
    { url: '/Street/15.jpg', lowResUrl: '/Street/15-blur.jpg' },
    { url: '/Street/16.jpg', lowResUrl: '/Street/16-blur.jpg' },
    { url: '/Street/17.jpg', lowResUrl: '/Street/16-blur.jpg' },
    { url: '/Street/18.jpg', lowResUrl: '/Street/16-blur.jpg' },
    { url: '/Street/19.jpg', lowResUrl: '/Street/16-blur.jpg' },
    { url: '/Street/20.jpg', lowResUrl: '/Street/16-blur.jpg' }
  ]

  const landscapesSlides = [
    { url: '/Landscapes/1.jpg', lowResUrl: '/Landscapes/1-blur.jpg' },
    { url: '/Landscapes/2.jpg', lowResUrl: '/Landscapes/2-blur.jpg' },
    { url: '/Landscapes/3.jpg', lowResUrl: '/Landscapes/3-blur.jpg' },
    { url: '/Landscapes/4.jpg', lowResUrl: '/Landscapes/4-blur.jpg' },
    { url: '/Landscapes/5.jpg', lowResUrl: '/Landscapes/5-blur.jpg' },
    { url: '/Landscapes/6.jpg', lowResUrl: '/Landscapes/6-blur.jpg' },
    { url: '/Landscapes/7.jpg', lowResUrl: '/Landscapes/7-blur.jpg' },
    { url: '/Landscapes/8.jpg', lowResUrl: '/Landscapes/8-blur.jpg' },
    { url: '/Landscapes/9.jpg', lowResUrl: '/Landscapes/9-blur.jpg' },
    { url: '/Landscapes/10.jpg', lowResUrl: '/Landscapes/10-blur.jpg' },
    { url: '/Landscapes/11.jpg', lowResUrl: '/Landscapes/11-blur.jpg' },
    { url: '/Landscapes/12.jpg', lowResUrl: '/Landscapes/12-blur.jpg' },
    { url: '/Landscapes/13.jpg', lowResUrl: '/Landscapes/13-blur.jpg' },
    { url: '/Landscapes/14.jpg', lowResUrl: '/Landscapes/14-blur.jpg' },
    { url: '/Landscapes/15.jpg', lowResUrl: '/Landscapes/15-blur.jpg' },
    { url: '/Landscapes/16.jpg', lowResUrl: '/Landscapes/16-blur.jpg' }
  ]

  const miscSlides = [
    { url: '/Misc/1-resized.jpg', lowResUrl: '/Misc/1-blur.jpg' },
    { url: '/Misc/2-resized.jpg', lowResUrl: '/Misc/2-blur.jpg' },
    { url: '/Misc/3-resized.jpg', lowResUrl: '/Misc/3-blur.jpg' },
    { url: '/Misc/4-resized.jpg', lowResUrl: '/Misc/4-blur.jpg' },
    { url: '/Misc/5-resized.jpg', lowResUrl: '/Misc/5-blur.jpg' },
    { url: '/Misc/6-resized.jpg', lowResUrl: '/Misc/6-blur.jpg' },
    { url: '/Misc/7-resized.jpg', lowResUrl: '/Misc/7-blur.jpg' },
    { url: '/Misc/8-resized.jpg', lowResUrl: '/Misc/8-blur.jpg' },
    { url: '/Misc/9-resized.jpg', lowResUrl: '/Misc/9-blur.jpg' },
    { url: '/Misc/10-resized.jpg', lowResUrl: '/Misc/10-blur.jpg' },
    { url: '/Misc/11-resized.jpg', lowResUrl: '/Misc/11-blur.jpg' },
    { url: '/Misc/12-resized.jpg', lowResUrl: '/Misc/12-blur.jpg' },
    { url: '/Misc/13-resized.jpg', lowResUrl: '/Misc/13-blur.jpg' },
    { url: '/Misc/14-resized.jpg', lowResUrl: '/Misc/14-blur.jpg' }
  ]

  const openModalWithSlides = (slides) => {
    setSelectedSlides(slides);
    setModalOpenStatus(true);
  }

  const completeLoadStatus = () => {
    setImageLoaded(true);
  }

  return (
    <>
      <div className="photographs-page-container">
        <ArtworkNavBar variant="photographs"/>
        <div className="photographs-content-container">
          <div className="street">
            <h1>Street</h1>
            <div className="photo-img-container" onClick={() => openModalWithSlides(streetSlides)} style={{ backgroundImage: imageLoaded ? 'none' : `url(/street-blur.jpg)` }}>
              <img 
                src="/street.jpg" 
                className="img-one" 
                alt="A monochrome photograph of a small shack in India at nightime" 
                loading="lazy"
                onLoad={ completeLoadStatus }
              />
            </div>
          </div>
          <div className="landscapes">
            <h1>Landscapes</h1>
            <div className="photo-img-container" onClick={() => openModalWithSlides(landscapesSlides)} style={{ backgroundImage: imageLoaded ? 'none' : 'url(/landscapes-blur.jpg)' }}>
              <img 
                src="/landscapes.jpg" 
                className="img-two" 
                alt="A monochrome photograph of a foggy forest" 
                loading="lazy"
                onLoad={ completeLoadStatus  }
              />
            </div>
          </div>
          <div className="misc">
            <h1>Misc</h1>
            <div className="photo-img-container" onClick={() => openModalWithSlides(miscSlides)} style={{ backgroundImage: imageLoaded ? 'none' : 'url(/misc-blur.jpg)' }}>
              <img 
                src="/misc.jpg" 
                className="img-three" 
                alt="A monochrome photograph of a man on a train" 
                loading="lazy"
                onLoad={ completeLoadStatus  }
              />
            </div>
          </div>
        </div>
      </div>
      <Modal status={modalOpenStatus} setStatus={setModalOpenStatus}>
        <div className="gallery-outer-container">
          <div className="border-div"></div>
          <div className="photog-gallery-container">
            <ImgGallery slides={selectedSlides} />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Photographs