import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const MapCarousel = ({ locations }) => {
  const [currentLocation, setCurrentLocation] = useState(locations[0]);

  const handleCarouselChange = (index) => {
    setCurrentLocation(locations[index]);
  };

  return (
    <div>
      <div id="map-carousel">
        <OwlCarousel
          items={1}
          loop
          onChanged={(event) => handleCarouselChange(event.item.index)}
        >
          {locations.map((location, index) => (
            <div key={index} className="item">
              <Image src={location.image} alt={location.name} />
            </div>
          ))}
        </OwlCarousel>
      </div>
      <iframe
        id="map-iframe"
        src={`https://www.google.com/maps?q=${currentLocation.lat},${currentLocation.lng}&z=8&output=embed`}
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
      />
      <p>{currentLocation.address}</p>
    </div>
  );
};

export default MapCarousel;
