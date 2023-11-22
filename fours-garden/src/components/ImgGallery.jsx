import { useState } from "react";

const ImgGallery = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isFinalSlide = currentIndex === slides.length - 1
    const newIndex = isFinalSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex);
  }

  const goToSelected = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="slider-container">
      <div className="left-arrow" onClick={goToPrevious}>&#10094;</div>
      <div className="right-arrow" onClick={goToNext}>&#10095;</div>
      <div className="gallery-blur-layer" style={{ backgroundImage: `url(${slides[currentIndex].lowResUrl})` }}>
        <img className="slide-container" src={`${slides[currentIndex].url}`} />
      </div>
      <div className="squares-container">
        {slides.map((slide, slideIndex) => (
          <div 
            className={`squares ${currentIndex === slideIndex ? "selected-square" : "" }`} 
            key={slideIndex}
            onClick={() => goToSelected(slideIndex)}
          >
            &#x25A0;
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImgGallery