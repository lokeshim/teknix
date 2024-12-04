import Image from 'next/image';

const GalleryCarousel = ({ slides, showIndicators = true, showControls = true, carouselId }) => {
  // Set a fallback if carouselId is not passed in props
  const targetId = carouselId || 'defaultCarousel';

  return (
    <>
            <div class="Optima-section gallery-slider position-relative my-5" id="d-gallery">
            <div class="row  section-image " id="{targetId}">
                   <div class="row section-carousel ">
    <div id={targetId} className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <div class="col-md-4 d-block mx-auto">
      {/* Carousel Items */}
      <div className="carousel-inner">
        {slides.slice(0, 12).map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            {/* Image for all screen sizes */}
            <Image
              src={slide.image} // Only one image per slide
              alt={`Slide ${index + 1}`}
              layout="responsive"
              width={480}
              height={550}
              className="d-block img-fluid"
            />
          </div>
        ))}
            </div>
        </div>
 <div class="col-md-12 d-block mx-auto ">
      {showIndicators && (
        <div className="carousel-indicators p-30">
          {slides.slice(0, 12).map((slide, index) => (
            <button
              key={index}
              type="button"
              data-bs-target={`#${targetId}`} // Dynamically set the target based on carouselId
              data-bs-slide-to={index}
              className={ index === 0 ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
            >
              {/* Display thumbnail for each indicator */}
              <Image
                src={slide.thumbnail} // Assuming each slide has a 'thumbnail' property for the indicator image
                alt={`Slide ${index + 1} Thumbnail`}
                width={50} // Adjust the thumbnail size
                height={50}
                className="d-block w-100 h-100 rounded"
              />
            </button>
          ))}
        </div>
      )}
  </div>
      {/* Carousel Controls */}
      {showControls && (
        <>
          <button
            className="carousel-control-prev d-none"
            type="button"
            data-bs-target={`#${targetId}`} // Dynamically set the target for previous control
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next d-none"
            type="button"
            data-bs-target={`#${targetId}`} // Dynamically set the target for next control
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

// Component to render 8 different carousels on a page
const MultipleCarousels = ({ allCarouselsData }) => {
  return (
    <div>
      {allCarouselsData.map((carouselData, index) => (
        <div key={index} className="carousel-container ">
          
          <GalleryCarousel
            slides={carouselData.slides}
            carouselId={`carouselExamples${index + 1}`} // Unique ID for each carousel
          />
        </div>
      ))}
    </div>
  );
};

export default MultipleCarousels;
