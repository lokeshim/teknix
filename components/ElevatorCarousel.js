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
      name:'Optima',
      description: 'The all-new OPTIMA redefines simplicity, giving you a vertical mobility solution with a range of technologically advanced features with German craftsmanship at its heart.',
      carouselId: 'carouselExampleOptima',
      images: ['/img/OPTIMA BANNER 1.png', '/img/OPTIMA BANNER 2.png', '/img/OMTIMA BANNER 3.jpg'], // update with actual image paths
    },
    vertix: {
      name:'Vertix',
      description: `The all-new, next-generation VERTIX range of elevators from Teknix, in collaboration with SRH Aufzüge GmbH, brings you the pinnacle of German engineering and craftsmanship. Designed with cutting-edge, eco-friendly technology, the VERTIX elevators offer an unparalleled combination of essential features and unrivaled comfort, ensuring a smooth and luxurious ride every time."
This version enhances the premium feel, emphasizing the innovation, luxury, and eco-friendly aspects of the product. `,
      carouselId: 'carouselExampleVertix',
      images: ['/img/VERTIX BANNER 1.png', '/img/VERTIX BANNER 2.png', '/img/VERTIX BANNER 3.jpg'], // update with actual image paths
    },
    greentek: {
         name:'Greentek',
      description: 'Teknix GREENTEK exemplifies the pinnacle of German engineering, blending precision craftsmanship with years of innovation. With cutting-edge features like the VVVF drive with DTI, Direct Landing Technology, and sleek interface devices, it delivers an unparalleled, ultra-smooth ride—setting a new benchmark in luxury elevators.',
      carouselId: 'carouselExampleGreentek',
      images: ['/img/Greentek banner 1.png', '/img/Greentek banner 2.png', '/img/Greentek banner 3.jpg'], // update with actual image paths
    },
    hydratek: {
            name:'Hydratek',
      description: 'Teknix Hydratek is an advanced vertical transportation system, crafted with precision using cutting-edge German technology and Italian craftsmanship, based on progressive fluid dynamics.',
      images: ['/img/Hydratek banner 1.png', '/img/Hydratek banner 2.png', '/img/Hydratek banner 3.png'], // update with actual image paths
    },
    villa_matek: {
       name:'Villa Matek',
      description: 'TEKNIX VILLAMATEK, designed exclusively for residential use, combines technology, aesthetics, and craftsmanship to enhance accessibility for residents with mobility challenges. Available in gearless models and a variety of cabin styles to suit diverse preferences.',
      carouselId: 'carouselExampleVillaMatek',
      images: ['/img/Elevators/Vm/1.webp', '/img/Elevators/Vm/2.webp','/img/Elevators/Vm/3.webp'], // update with actual image paths
    },
  };

  return (
    <section className="section position-relative ">
      <div className="container-fluid ">
        <div className="row">
          {/* Elevator Links */}
          <div className="col-md-4 offset-md-1 col-12">
           
            <div className="filter ps-md-0 text-md-start text-center  m-30">
              {Object.keys(elevators).map((elevator) => (
                <div
                  
                  className={`text-decoration-none ${activeElevator === elevator ? 'active' : ''}`}
                  key={elevator}
                  onClick={() => handleElevatorChange(elevator)}
                >
                  <h2 className={`other-heading text-secondary ${activeElevator === elevator ? 'active' : ''}`}>
                   
                     {elevators[elevator].name} {/* Display the name of the elevator */}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          {/* Elevator Carousel */}
          <div className="col-md-6 col-12 multi-carousel">
            <div className="elevator-carousel m-center" id="optima">
              

              <div id="carouselContainer">
                <div id={elevators[activeElevator].carouselId} className="carousel slide m-center" data-bs-ride="carousel">
                  <div className="d-inline position-relative ">
                    {/* Carousel Controls */}
                                    <button
                                      className="carousel-control-prev position-relative d-inline-block"
                                      type="button"
                                      data-bs-target={`#${elevators[activeElevator].carouselId}`}
                                      data-bs-slide="prev"
                                      aria-label="Previous"
                                    >
                                      <Image
                                        src="/img/left-carousel.png"
                                        alt="Previous"
                                        width={30}
                                        height={30}
                                        className="img-fluid carousel-arrow"
                                      />
                                    </button>

                                    <button
                                      className="carousel-control-next position-relative d-inline-block"
                                      type="button"
                                      data-bs-target={`#${elevators[activeElevator].carouselId}`}
                                      data-bs-slide="next"
                                      aria-label="Next"
                                    >
                                      <Image
                                        src="/img/right-carousel.png"
                                        alt="Next"
                                        width={30}
                                        height={30}
                                        className="img-fluid carousel-arrow"
                                      />
                                    </button>

                  </div>
                  <div className="carousel-inner">
                    {elevators[activeElevator].images.map((image, index) => (
                      <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                       <p id="elevator-description" class="mb-4"> {elevators[activeElevator].description}</p>
                        <Image
                          src={image}
                          alt={`Slide ${index + 1}`}
                          layout="responsive"
                          width={1920}
                          height={1080}
                          className="d-block w-100 mb-5"
                        />
                      </div>
                    ))}
                  </div>

                
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
