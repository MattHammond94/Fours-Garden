import PhotoSlider from "./PhotoSlider";

const Modal = ({ variant }) => {
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
  
  const selectedSlides = () => {
    if(variant === 'street') {
      return streetSlides;
    }

    if(variant === 'landscapes') {
      return landscapesSlides;
    }

    if(variant === 'misc') {
      return miscSlides;
    }
  }

  return (
    <div className="modal-container">
      <div className="border-div"></div>
      <div className="slider-comp-container">
        <PhotoSlider slides={selectedSlides()} />
      </div>
    </div>
  )
}

export default Modal