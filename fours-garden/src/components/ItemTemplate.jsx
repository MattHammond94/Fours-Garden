import { useState } from "react";
import Modal from "./Modal";
import ImgGallery from "./ImgGallery";

const ItemTemplate = ({ variant, itemData }) => {
  const [modalOpenStatus, setModalOpenStatus] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  let gallery;

  if (variant === "other") {
    gallery = selectedItem && selectedItem.slides ? <ImgGallery slides={selectedItem.slides} /> : null;
  }

  return (
    <>
      { itemData.map((image, index) => (
        <div key={index} className="template-container" >
          <div className="item-img-container" style={{ backgroundImage: `url(${image.lowResUrl})` }} >
            <img 
              className="item-img" 
              src={`${image.url}`}
              loading="lazy"
              onClick={ () => {
                setSelectedItem(image)
                setModalOpenStatus(true)
              }} />
          </div>
          <h1>{ image.title }</h1>
          <p>{ image.description }</p>
        </div>
      ))}
      <Modal status={modalOpenStatus} setStatus={setModalOpenStatus} >
        {selectedItem && !gallery ? (
        <div className='selected-item-wrapper'>
          <div className='selected-item-img' style={{ backgroundImage: `url(${selectedItem.url})` }}></div>
        </div> ) 
        :
        ( <div className="slider-page-container">
          <div className="border-div"></div>
          <div className="slider-comp-container">
            { gallery }
          </div>
        </div> )
        }
      </Modal>
    </>
  )
}

export default ItemTemplate;