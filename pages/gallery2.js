import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import DynamicSlider from '../components/DynamicSlider';
import ConnectForm from '../components/ConnectForm';

export default function GalleryPage() {
  const sliders = [
    {
      id: 1,
      name: 'Nature Slider',
      images: [
        'img/gal/elevator/optima/1.webp',
        'img/gal/elevator/optima/2.webp',
        'img/gal/elevator/optima/3.webp',
        'img/gal/elevator/optima/4.webp',
        'img/gal/elevator/optima/5.webp',
        'img/gal/elevator/optima/6.webp',
        'img/gal/elevator/optima/7.webp',
        'img/gal/elevator/optima/8.webp',
        'img/gal/elevator/optima/9.webp',
        'img/gal/elevator/optima/10.webp',
        'img/gal/elevator/optima/11.webp',
        'img/gal/elevator/optima/12.webp',
      ],
    },
    {
      id: 2,
      name: 'Wildlife Slider',
      images: [
        'img/gal/elevator/vertix/1.webp',
        'img/gal/elevator/vertix/2.webp',
        'img/gal/elevator/vertix/3.webp',
        'img/gal/elevator/vertix/4.webp',
        'img/gal/elevator/vertix/5.webp',
        'img/gal/elevator/vertix/6.webp',
        'img/gal/elevator/vertix/7.webp',
        'img/gal/elevator/vertix/8.webp',
        'img/gal/elevator/vertix/9.webp',
        'img/gal/elevator/vertix/10.webp',
        'img/gal/elevator/vertix/11.webp',
        'img/gal/elevator/vertix/12.webp',
      ],
    },
    {
      id: 3,
      name: 'City Slider',
      images: [
        'img/gal/elevator/greentek/1.webp',
        'img/gal/elevator/greentek/2.webp',
        'img/gal/elevator/greentek/3.webp',
        'img/gal/elevator/greentek/4.webp',
        'img/gal/elevator/greentek/5.webp',
        'img/gal/elevator/greentek/6.webp',
        'img/gal/elevator/greentek/7.webp',
        'img/gal/elevator/greentek/8.webp',
        'img/gal/elevator/greentek/9.webp',
        'img/gal/elevator/greentek/10.webp',
        'img/gal/elevator/greentek/11.webp',
        'img/gal/elevator/greentek/12.webp',
      ],
    },
  ];

  const sliders2 = [
    {
      id: 1,
      name: 'Nature Slider',
      images: [
        'img/gal/escalators/T20/1.webp',
        'img/gal/escalators/T20/2.webp',
        'img/gal/escalators/T20/3.webp',
        'img/gal/escalators/T20/4.webp',
        'img/gal/escalators/T20/5.webp',
        'img/gal/escalators/T20/6.webp',
        'img/gal/escalators/T20/7.webp',
        'img/gal/escalators/T20/8.webp',
        'img/gal/escalators/T20/9.webp',
        'img/gal/escalators/T20/10.webp',
        'img/gal/escalators/T20/11.webp',
        'img/gal/escalators/T20/12.webp',
      ],
    },
    {
      id: 2,
      name: 'Wildlife Slider',
      images: [
        'img/gal/escalators/T15/1.webp',
        'img/gal/escalators/T15/2.webp',
        'img/gal/escalators/T15/3.webp',
        'img/gal/escalators/T15/4.webp',
        'img/gal/escalators/T15/5.webp',
        'img/gal/escalators/T15/6.webp',
        'img/gal/escalators/T15/7.webp',
        'img/gal/escalators/T15/8.webp',
        'img/gal/escalators/T15/9.webp',
        'img/gal/escalators/T15/10.webp',
        'img/gal/escalators/T15/11.webp',
        'img/gal/escalators/T15/12.webp',
      ],
    },
  ];

  const [selectedSliderId, setSelectedSliderId] = useState(1);
  const [selectedGroup, setSelectedGroup] = useState('group1'); // 'group1' or 'group2'
  const [showSlider, setShowSlider] = useState(true); // State to control slider visibility

  const handleSliderChange = (event) => {
    setSelectedSliderId(Number(event.target.value));
  };

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
    setSelectedSliderId(1); // Reset the slider to the first one of the selected group
    setShowSlider(false); // Hide the slider when group changes
  };

  const handleShowSlider = () => {
    setShowSlider(true); // Show the slider again when the button is clicked
  };

  const selectedSliders = selectedGroup === 'group1' ? sliders : sliders2;
  const selectedSlider = selectedSliders.find((slider) => slider.id === selectedSliderId);

  useEffect(() => {
    // Make sure the Slick slider is initialized after render
    if (selectedSlider && showSlider) {
      const sliderElement = document.querySelector('.dynamic-slider');
      if (sliderElement && window.$) {
        // Destroy previous instance of Slick slider (if any)
        sliderElement.slick('unslick');
        
        // Re-initialize the Slick slider
        $(sliderElement).slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        });
      }
    }

    // Cleanup the slick slider when component is unmounted or slider changes
    return () => {
      const sliderElement = document.querySelector('.dynamic-slider');
      if (sliderElement && window.$) {
        sliderElement.slick('unslick');
      }
    };
  }, [selectedSliderId, selectedGroup, showSlider]);

  return (
    <>
      <Head>
        <title>Teknix Gallery</title>
        <meta name="description" content="Explore our image galleries" />
        <meta name="keywords" content="gallery, nature, wildlife, city" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="#" />
      </Head>

      <section className="section position-relative" data-aos="fade-up" data-aos-duration={2500}>
        <div className="container p-0">
          <div className="row py-md-3 py-0 justify-content-center">
            {/* Group Selection Dropdown */}
            <div className="col-md-12">
              <div style={{ textAlign: 'center', margin: '20px' }}>
                <label htmlFor="group-select" style={{ marginRight: '10px', fontSize: '16px' }}>
                  Select Slider Group:
                </label>
                 <select
                    id="slider-select"
                    value={selectedSliderId}
                    onChange={handleSliderChange}
                    style={{ padding: '8px 12px', fontSize: '16px' }}
                  >
                    {selectedSliders.map((sliders2) => (
                      <option key={sliders2.id} value={sliders2.id}>
                        {sliders2.name}
                      </option>
                    ))}
                  </select>
              </div>
            </div>

            {/* Slider Dropdown */}
            {showSlider && (
              <div className="col-md-12">
                <div style={{ textAlign: 'center', margin: '20px' }}>
                  <label htmlFor="slider-select" style={{ marginRight: '10px', fontSize: '16px' }}>
                    Select Slider:
                  </label>
                  <select
                    id="slider-select"
                    value={selectedSliderId}
                    onChange={handleSliderChange}
                    style={{ padding: '8px 12px', fontSize: '16px' }}
                  >
                    {selectedSliders.map((slider) => (
                      <option key={slider.id} value={slider.id}>
                        {slider.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Show Slider Button */}
            {!showSlider && (
              <div className="col-md-12">
                <div style={{ textAlign: 'center', margin: '20px' }}>
                  <button
                    onClick={handleShowSlider}
                    style={{ padding: '8px 12px', fontSize: '16px' }}
                  >
                    Show Slider
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="row showmyslider">
            {/* Display the selected slider */}
            <div className="col-md-12">
              {showSlider && selectedSlider && <DynamicSlider sliderData={selectedSlider} />}
            </div>
          </div>
        </div>
      </section>

      <ConnectForm />
    </>
  );
}
