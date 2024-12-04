import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the OwlCarousel component with no SSR
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Define the coordinates for each slide
  const mapLocations = [
    { lat: 40.7128, lon: -74.0060 }, // New York
    { lat: 34.0522, lon: -118.2437 }, // Los Angeles
    { lat: 41.8781, lon: -87.6298 }, // Chicago
  ];

  // Generate the iframe URL dynamically based on latitude and longitude
  const generateMapUrl = (lat, lon) => {
    return `https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAP_API_KEY&center=${lat},${lon}&zoom=12`;
  };

  const handleCarouselChange = (event) => {
    setActiveIndex(event.item.index); // Update active slide index on change
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically load jQuery and initialize Owl Carousel
      const loadJQuery = () => {
        return new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      };

      loadJQuery().then(() => {
        const $ = window.jQuery; // Use the global jQuery object
        import('owl.carousel').then(() => {
          $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            nav: true,
            onChanged: handleCarouselChange, // Listen for slide change
          });
        });
      }).catch((error) => {
        console.error("Error loading jQuery: ", error);
      });
    }
  }, []);

  return (
    <div>
      <OwlCarousel className="owl-theme">
        <div className="item">
          <img src="/img/India.webp" alt="Image 1" />
        </div>
        <div className="item">
          <img src="/img/India.webp" alt="Image 2" />
        </div>
        <div className="item">
          <img src="/img/India.webp" alt="Image 3" />
        </div>
      </OwlCarousel>

      {/* Display Google Map iframe based on active slide */}
      <div className="map-container">
        <iframe
          src={generateMapUrl(mapLocations[activeIndex].lat, mapLocations[activeIndex].lon)}
          width="600" 
          height="450" 
          frameBorder="0" 
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false" 
          tabIndex="0"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default CarouselComponent;
