// components/ElevatorSection.js
import React, { useState } from 'react';
import Image from 'next/image';

const ElevatorSection = () => {
  // State to track the current active elevator
  const [activeElevator, setActiveElevator] = useState('optima');

  // Function to change the active elevator
  const handleElevatorChange = (elevator) => {
    setActiveElevator(elevator);
  };

  // Content for each elevator
  const elevators = {
    optima: {
      description: 'The all-new OPTIMA redefines simplicity, giving you a vertical mobility solution with a range of technologically advanced features with German craftsmanship at its heart.',
      carouselId: 'carouselExampleOptima',
      images: ['/img/elevator.png', '/img/elevator.png', '/img/elevator.png'], // update with actual image paths
    },
    vertix: {
      description: 'The all-new VERTIX redefines simplicity, giving you a vertical mobility solution with a range of technologically advanced features with German craftsmanship at its heart.',
      carouselId: 'carouselExampleVertix',
      images: ['/img/elevator.png', '/img/elevator.png', '/img/elevator.png'], // update with actual image paths
    },
    greentek: {
      description: 'Greentek is designed for sustainability, with eco-friendly technology that ensures smooth, energy-efficient operation.',
      carouselId: 'carouselExampleGreentek',
      images: ['/img/elevator.png', '/img/elevator.png', '/img/elevator.png'], // update with actual image paths
    },
    hydratek: {
      description: 'Hydratek brings you advanced hydraulic solutions, perfect for low and medium-rise buildings.',
      carouselId: 'carouselExampleHydratek',
      images: ['/img/elevator.png', '/img/elevator.png', '/img/elevator.png'], // update with actual image paths
    },
    villa_matek: {
      description: 'Villa Matek is a luxury elevator solution designed for premium residential spaces, combining elegance with superior functionality.',
      carouselId: 'carouselExampleVillaMatek',
      images: ['/img/elevator.png', '/img/elevator.png', '/img/elevator.png'], // update with actual image paths
    },
  };

  return (
    <section className="section position-relative">
      <div className="container px-2 px-md-5">
        <div className="row">
          {/* Elevator Links */}
          <div className="col-md-6 col-12">
            <h6 className="fs-6 text-danger">OUR BEST ELEVATORS</h6>
            <div className="filter mt-5">
              {Object.keys(elevators).map((elevator) => (
                <a
                  href="#"
                  className={`text-decoration-none ${activeElevator === elevator ? 'active' : ''}`}
                  key={elevator}
                  onClick={() => handleElevatorChange(elevator)}
                >
                  <h2 className={`other-heading2 text-secondary ${activeElevator === elevator ? 'active' : ''}`}>
                    {elevator.charAt(0).toUpperCase() + elevator.slice(1)}
                  </h2>
                </a>
              ))}
            </div>
          </div>

          {/* Elevator Carousel */}
          <div className="col-md-6 col-12">
            <div className="elevator-carousel">
              <div className="row">
                <div className="col-md-8">
                  <p id="elevator-description">{elevators[activeElevator].description}</p>
                </div>
              </div>

              <div id="carouselContainer">
                <div id={elevators[activeElevator].carouselId} className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {elevators[activeElevator].images.map((image, index) => (
                      <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <Image
                          src={image}
                          alt={`Slide ${index + 1}`}
                          layout="responsive"
                          width={1920}
                          height={1080}
                          className="d-block w-100"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Carousel Controls */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#${elevators[activeElevator].carouselId}`}
                    data-bs-slide="prev"
                  >
                    <Image
                      src="/img/left-carousel.png"
                      alt="Previous"
                      width={30}
                      height={30}
                      className="img-fluid carousel-arrow"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#${elevators[activeElevator].carouselId}`}
                    data-bs-slide="next"
                  >
                    <Image
                      src="/img/right-carousel.png"
                      alt="Next"
                      width={30}
                      height={30}
                      className="img-fluid carousel-arrow"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevatorSection;
