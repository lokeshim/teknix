import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import Image from 'next/image';
// Dynamically import Google Map to prevent SSR issues
const GoogleMap = dynamic(() => import("google-maps-react").then((mod) => mod.Map), { ssr: false });
const Marker = dynamic(() => import("google-maps-react").then((mod) => mod.Marker), { ssr: false });

const CarouselWithMap = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 37.7749, lng: -122.4194 });
  const [currentAddress, setCurrentAddress] = useState("San Francisco, CA");

  const locations = [
    { img: "/image1.jpg", lat: 37.7749, lng: -122.4194, address: "San Francisco, CA" },
    { img: "/image2.jpg", lat: 40.7128, lng: -74.0060, address: "New York, NY" },
    { img: "/image3.jpg", lat: 34.0522, lng: -118.2437, address: "Los Angeles, CA" },
  ];

  const options = {
    items: 1,
    nav: true,
    loop: true,
    autoplay: false,
    dots: true,
  };

  const handleSlideChange = (event) => {
    const index = event.item.index;
    const { lat, lng, address } = locations[index];
    setMapCenter({ lat, lng });
    setCurrentAddress(address);
  };

  return (
    <div>
      {/* Carousel */}
      <div className="carousel-container">
        <OwlCarousel options={options} onTranslated={handleSlideChange}>
          {locations.map((location, idx) => (
            <div className="item" key={idx}>
              <Image src={location.img} alt={`Location ${idx + 1}`} />
            </div>
          ))}
        </OwlCarousel>
        <div className="location-info">
          <i className="placeholder-icon">📍</i>
          <span className="address">{currentAddress}</span>
        </div>
      </div>

      {/* Google Map */}
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMap
          google={window.google}
          zoom={8}
          center={mapCenter}
        >
          <Marker position={mapCenter} />
        </GoogleMap>
      </div>

      <style jsx>{`
        .carousel-container {
          position: relative;
          margin: 20px auto;
          max-width: 90%;
        }
        .location-info {
          text-align: center;
          margin: 10px 0;
        }
        .placeholder-icon {
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
};

export default CarouselWithMap;
