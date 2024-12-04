import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Script from 'next/script';

// Dynamically import react-owl-carousel to prevent SSR issues
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false, // Disable SSR for this component since it uses jQuery
});

const MapWithCarousel = () => {
  const [locations] = useState([
    {
      lat: '12.9485149',
      lng: '77.5772404',
      address: '#125 Gala Square, 4th floor, R V Road, V V Puram Near Lalbagh West Gate, Bangalore - 560 004',
      image: '/img/India.webp',
      alt: 'Bangalore',
    },
    {
      lat: '17.4544976',
      lng: '78.3839499',
      address: '#30, Indus Space Centre, 3rd Floor, 100 Feet Road Kavuri Hills, Madhapur Road, Hyderabad - 500 081',
      image: '/img/Hyderabad.png',
      alt: 'Hyderabad',
    },
    {
      lat: '22.2833079',
      lng: '70.7966771',
      address: 'Mo. 61, 3rd Floor, Samrudhi Bhavan Gondal Road, Rajkot - 360001 Gujarat',
      image: '/img/Rajkot.png',
      alt: 'Rajkot',
    },
    {
      lat: '27.713036',
      lng: '85.2894509',
      address: 'Nagapokhari, Kathamandu, Nepal.',
      image: '/img/Nepal.webp',
      alt: 'Nepal',
    },
    {
      lat: '11.0089242',
      lng: '76.9519628',
      address: '7,3, Sambandam Road East, R. S. Puram, Coimbatore, Tamil Nadu - 641002',
      image: '/img/Coimbatore.png',
      alt: 'Coimbatore',
    },
  ]);

  const [iframeSrc, setIframeSrc] = useState(
    `https://www.google.com/maps?q=${locations[0].lat},${locations[0].lng}&z=18&output=embed`
  );

  // Function to handle carousel change
  const handleCarouselChange = (event) => {
    const currentIndex = event.item.index; // Get current index of the active slide
    const currentLocation = locations[currentIndex]; // Get current location object using the active index
    if (currentLocation) {
      // Update iframe source based on active location
      setIframeSrc(
        `https://www.google.com/maps?q=${currentLocation.lat},${currentLocation.lng}&z=18&output=embed`
      );
    }
  };

  // To ensure that the script for OwlCarousel is loaded once the component is mounted
  useEffect(() => {
    if (typeof window !== 'undefined' && window.$) {
      // Initialize Owl Carousel on component mount
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 1,
        center: true,
        stagePadding: 250,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 1, stagePadding: 0, margin: 100 },
          600: { items: 1, stagePadding: 0, margin: 10 },
          1000: { items: 1, stagePadding: 250, margin: 50 },
        },
      });
    }
  }, []); // This effect runs once when the component is mounted

  return (
    <section  className="section">
      {/* Load jQuery and Owl Carousel JS only on client-side */}
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        strategy="beforeInteractive"
      />

      <div className="container-fluid p-0">
        <div className="row" id="contactmap">
          <iframe
            id="map-iframe"
            style={{
              filter: 'invert(100%) saturate(5.9%)',
              width: '100%',
              height: '400px',
              border: 'none',
            }}
            src={iframeSrc}
            title="Google Map"
          ></iframe>

          <div id="custom-marker"></div>
          <div className="location-info d-none">
            <i className="placeholder-icon">📍</i>
            <span className="address">Hover to see address</span>
          </div>

          <div className="col-md-10 d-block mx-auto">
            <div className="carousel-container">
              <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav={true}
                autoplay={true}
                autoplayTimeout={5000}
                dots={false}
                autoplayHoverPause={true}
                center={true}
                stagePadding={250}
                responsive={{
                  0: { items: 1, stagePadding: 0, margin: 100 },
                  600: { items: 1, stagePadding: 0, margin: 10 },
                  1000: { items: 1, stagePadding: 550, margin: 50 },
                }}
                onChanged={handleCarouselChange} // Listen for carousel change
              >
                {locations.map((location, index) => (
                  <div
                    className="item"
                    key={index}
                    data-lat={location.lat}
                    data-lng={location.lng}
                    data-address={location.address}
                  >
                    <div className="">
                      <div className="row my-4">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-12">
                              <Image
                                src={location.image}
                                alt={`Testimonial from ${location.alt}`}
                                layout="responsive"
                                width={764}
                                height={332}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapWithCarousel;
