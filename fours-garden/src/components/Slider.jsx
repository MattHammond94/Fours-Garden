const Slider = () => {
  return (
    <section className="slide-section">
    <div className="slider">
      <div className="blur-layer" style={{ backgroundImage: `url(/sliderImages/1-blur.jpg)` }}>
        <img src="/sliderImages/1.jpg" loading="lazy" alt="A swatch of different brush strokes in ink"/>
      </div>
      <div className="blur-layer" style={{ backgroundImage: `url(/sliderImages/2-blur.jpg)` }}>
        <img src="/sliderImages/2.jpg" loading="lazy" alt="An art piece in ink on a tabletop covered in art supplies"/>
      </div>
      <div className="blur-layer" style={{ backgroundImage: `url(/sliderImages/3-blur.jpg)` }}>
        <img src="/sliderImages/3.jpg" loading="lazy" alt="A page ripped from a book with 4 ink slashes on it"/>
      </div>
      <div className="blur-layer" style={{ backgroundImage: `url(/sliderImages/4-blur.jpg)` }}>
        <img src="/sliderImages/4.JPG" loading="lazy" alt="The artists desktop with an open sketchbook on it"/>
      </div>
      <div className="blur-layer" style={{ backgroundImage: `url(/sliderImages/5-blur.png)` }}>
        <img src="/sliderImages/5.png" loading="lazy" alt="A sketch of a wounded male character with a kick me note stuck to his back"/>
      </div>
      <div className="blur-layer" style={{ backgroundImage: `url(/sliderImages/6-blur.jpg)` }}>
        <img src="/sliderImages/6.JPG" loading="lazy" alt="A VCR tape vandalised with 4 ink scratches"/>
      </div>
      <div className="blur-layer" style={{ backgroundImage: `url(/sliderImages/7-blur.jpg)` }}>
        <img src="/sliderImages/7.JPG" loading="lazy" alt="An abstract piece of art in ink on a tabletop"/>
      </div>
      <div className="blur-layer" style={{ backgroundImage: `url(/sliderImages/8-blur.jpg)` }}>
        <img src="/sliderImages/8.jpg" loading="lazy" alt="A sketch of a hooded androgynous character"/>
      </div>
      <div className="blur-layer" style={{ backgroundImage: `url(/sliderImages/9-blur.jpg)` }}>
        <img src="/sliderImages/9.jpg" loading="lazy" alt="The artists sketchbook"/>
      </div>
    </div>
  </section>
  )
}

export default Slider