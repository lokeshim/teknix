import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
const MapWithSliderIframe = () => {
  const locations = [
    {
      id: 1,
      name: "#125 Gala Square, 4th floor, R V Road, V V Puram Near Lalbagh West Gate, Bangalore - 560 004",
      lat: 12.9485149,
      lng: 77.5772404,
      image: "/img/India.webp",
    },
    {
      id: 2,
      name: "#30, Indus Space Centre, 3rd Floor, 100 Feet Road Kavuri Hills, Madhapur Road, Hyderabad - 500 081 2",
      lat: 17.4544976,
      lng: 78.3839499,
      image: "/img/Hyderabad.png",
    },
    {
      id: 4,
      name: "Nagapokhari, Kathamandu, Nepal",
      lat: 27.713036,
      lng: 85.2894509,
      image: "/img/Nepal.webp",
    },
    {
      id: 5,
      name: "7,3, Sambandam Road East, R. S. Puram, Coimbatore, Tamil Nadu - 641002",
      lat: 11.0089242,
      lng: 76.9519628,
      image: "/img/Coimbatore.png",
    },
    {
      id: 6,
      name: "Mo. 61, 3rd Floor, Samrudhi Bhavan Gondal Road, Rajkot - 360001 Gujarat",
      lat: 22.2833079,
      lng: 70.7966771,
      image: "/img/Rajkot.png",
    },
    {
      id: 7,
      name: "SR Bagewadi  Plot No. 71, 3rd Stage, Scheme No. 40 Hanuman Nagar, Belgaum - 590019",
      lat: 15.8717941,
      lng: 74.4870048,
      image: "/img/Belgaum.png",
    },
    {
      id: 8,
      name: "#203, Sri Muktha Residency,Baba College Road, PM Palem 3rd Bus Stop Madhurwada, Visakhapatnam, Andhra Pradesh - 530 041",
      lat: 17.8050781,
      lng: 83.3334801,
      image: "/img/Visakhapatnam.png",
    },
    {
      id: 9,
      name: "Old#29, New #62, 3rd Floor, 3rd Street, Abhiramapuram,Chennai - 600018",
      lat: 13.0315129,
      lng: 80.2552382,
      image: "/img/Chennai.png",
    },
    {
      id: 3,
      name: "Office no. F29, Al Khaima Bldg, 2 Al Barsha,Dubai- UAE",
      lat: 25.1009702,
      lng: 55.1954584,
      image: "/img/UAE.webp",
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const getIframeSrc = (lat, lng) => {
    return `https://www.google.com/maps?q=${lat},${lng}&z=18&output=embed`;
  };

  const handleSlideChange = (swiper) => {
    const index = swiper.activeIndex;
    setSelectedLocation(locations[index]);
  };

  return (
    <section className="section position-relative">
      <div className="container-fluid p-0">
        <div className="row" id="contactmap">
          <div
            style={{ width: "100%", height: "100vh", border: "1px solid #ccc" }}
          >
            <iframe
              title="Google Map"
              src={getIframeSrc(selectedLocation.lat, selectedLocation.lng)}
              style={{
                width: "100%",
                height: "100%",
                border: 0,
                filter: "grayscale(100%) invert(90%)",
              }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="col-md-12 d-block mx-auto" id="gmap">
              <div style={{ marginBottom: "0px" }} id="simpleCarousel">
                <Swiper
                  onSlideChange={handleSlideChange}
                  grabCursor={true}
                  spaceBetween={120}
                  centeredSlides={true}
                  slidesPerView="2"
                  effect="coverflow"
                  pagination={true}
                  modules={[EffectCoverflow]} // Include Autoplay module
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 350,
                    modifier: 0,
                    slideShadows: false,
                  }}
                >
                  {locations.map((location) => (
                    <SwiperSlide key={location.id}>
                      <Image
                        src={location.image}
                        alt={location.name}
                        className="rounded-4 img-fluid"
                        width={300} // Set appropriate width
                        height={200} // Set appropriate height
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px" // For responsive images
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                        layout="intrinsic"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapWithSliderIframe;
