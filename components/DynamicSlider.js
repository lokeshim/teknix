import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const DynamicSlider = ({ sliderData }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // Toggle visibility for the slider
  const swiperRef = useRef(null); // Reference to Swiper instance

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev); // Toggle visibility state
  };

  useEffect(() => {
    // Ensure swiperRef and swiper instance exist before calling destroy or update
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isVisible) {
        swiperRef.current.swiper.update(); // Update the swiper if it's visible
      } else {
        // Safely destroy the swiper when it's hidden
        swiperRef.current.swiper.destroy(true, true);
        swiperRef.current = null; // Clear the reference
      }
    }
  }, [isVisible]);

  return (
    <>
      <div style={{ margin: '20px 0' }}>
        <div className="row my-4">
          <div className="col-md-4 d-block mx-auto text-center">
            {/* Toggle Button */}
            <button
              className="btn btn-primary mb-3"
              onClick={toggleVisibility}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                border: 'none',
                background: 'transparent',
              }}
            >
              <Image
                src={sliderData.images[0]} // Button shows the first image
                alt={`Button Image for ${sliderData.name}`}
                style={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#000' }}>
                {isVisible ? 'Hide Slider' : 'Show Slider'}
              </span>
            </button>

            {/* Toggleable Slider */}
            {isVisible && (
              <>
                <Swiper
                  loop={true}
                  slidesPerView={1}
                  spaceBetween={30}
                  navigation={false}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                  ref={swiperRef} // Attach the swiper ref here
                >
                  {sliderData.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={image}
                        alt={`Slide ${sliderData.id}-${index + 1}`}
                        style={{ width: '100%', borderRadius: '10px' }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            )}
          </div>

          {/* Thumbnail Slider */}
          {isVisible && (
            <div className="col-md-12 d-block mx-auto py-5">
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={35}
                slidesPerView={5}
                breakpoints={{
                  320: { slidesPerView: 4 },
                  640: { slidesPerView: 8 },
                  1024: { slidesPerView: 12 },
                }}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {sliderData.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image}
                      alt={`Thumbnail ${sliderData.id}-${index + 1}`}
                      style={{
                        width: '100%',
                        cursor: 'pointer',
                        borderRadius: '5px',
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DynamicSlider;
