import PhotoSlider from "./PhotoSlider";

const Modal = () => {
  const slides = [
    { url: '/public/Landscapes/1.jpg' },
    { url: '/public/Landscapes/2.jpg' },
    { url: '/public/Landscapes/3.jpg' },
    { url: '/public/Landscapes/4.jpg' },
    { url: '/public/Landscapes/5.jpg' },
    { url: '/public/Landscapes/6.jpg' },
    { url: '/public/Landscapes/7.jpg' },
    { url: '/public/Landscapes/8.jpg' },
    { url: '/public/Landscapes/9.jpg' },
    { url: '/public/Landscapes/10.jpg' },
    { url: '/public/Landscapes/11.jpg' }
  ]

  return (
    <div className="modal-container">
      <a href="/the-garden/photographs">&#215;</a>
      <div className="slider-comp-container">
        <PhotoSlider slides={slides} />
      </div>
    </div>
  )
}

export default Modal