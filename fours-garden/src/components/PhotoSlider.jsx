import { useState } from "react";

const PhotoSlider = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const imgStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isFinalSlide = currentIndex === 10
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
      <div className="slide-container" style={imgStyles}></div>
      <div className="squares-container">
        {slides.map((slide, slideIndex) => (
          <div className="squares" key={slideIndex} onClick={() => goToSelected(slideIndex)}>
            &#x25A0;
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoSlider