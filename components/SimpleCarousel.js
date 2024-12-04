import Image from 'next/image';

const SimpleCarousel = ({ slides, showIndicators = true, showControls = true }) => {
  return (
    <div id="simpleCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      {showIndicators && (
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#simpleCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Carousel Items */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            {/* Mobile Image */}
            <Image
              src={slide.mobile}
              alt={`Slide ${index + 1} Mobile`}
              layout="responsive"
              width={1080}
              height={1920}
              className="d-block d-md-none w-100"
            />
            {/* Desktop Image */}
            <Image
              src={slide.desktop}
              alt={`Slide ${index + 1} Desktop`}
              layout="responsive"
              width={1920}
              height={1080}
              className="d-none d-md-block w-100"
            />
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      {showControls && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#simpleCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#simpleCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
};

export default SimpleCarousel;
