import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'; // Correct way to import modules

const DynamicSlider2 = ({ sliderData }) => {
  const { images } = sliderData;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    if (thumbsSwiper) {
      // Link the thumbs swiper with the main swiper when thumbsSwiper changes
    }
  }, [thumbsSwiper]);

  return (
    <>
    <div style={{ margin: '20px 0' }}>
    <div className='row'>
    <div className='col-md-4 d-block mx-auto'>
     <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={10} // Reduce space between slides
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        className="img-fluid mySwiper2"
        modules={[FreeMode, Navigation, Thumbs]} // Correctly specify modules here
     
        style={{ marginBottom: '20px' }} // Add spacing between main and thumbnail sliders
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', borderRadius: '10px' }} // Optional: Add some styling to images
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
     

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={12}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]} // Correctly specify modules here
        className="mySwiper"
        style={{ marginTop: '20px' }} // Add spacing for thumbnails
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              style={{ width: '100%', cursor: 'pointer', borderRadius: '5px' }} // Add thumbnail styling
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default DynamicSlider2;
