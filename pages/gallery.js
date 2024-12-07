import Head from 'next/head';
import React, { useState } from 'react';
import DynamicSlider from '../components/DynamicSlider';
import ConnectForm from '../components/ConnectForm';

export default function Gallery() {
  

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
     {
      id: 4,
      name: 'City Slider',
      images: [
         'img/gal/elevator/HYTEX/1.webp',
        'img/gal/elevator/HYTEX/2.webp',
        'img/gal/elevator/HYTEX/3.webp',
        'img/gal/elevator/HYTEX/4.webp',
         'img/gal/elevator/HYTEX/5.webp',
        'img/gal/elevator/HYTEX/6.webp',
        'img/gal/elevator/HYTEX/7.webp',
        'img/gal/elevator/HYTEX/8.webp',
         'img/gal/elevator/HYTEX/9.webp',
        'img/gal/elevator/HYTEX/10.webp',
        'img/gal/elevator/HYTEX/11.webp',
        'img/gal/elevator/HYTEX/12.webp',
      ],
    },
     {
      id: 5,
      name: 'City Slider',
      images: [
         'img/gal/elevator/VMT/1.webp',
        'img/gal/elevator/VMT/2.webp',
        'img/gal/elevator/VMT/3.webp',
        'img/gal/elevator/VMT/4.webp',
         'img/gal/elevator/VMT/5.webp',
        'img/gal/elevator/VMT/6.webp',
        'img/gal/elevator/VMT/7.webp',
        'img/gal/elevator/VMT/8.webp',
         'img/gal/elevator/VMT/9.webp',
        'img/gal/elevator/VMT/10.webp',
        'img/gal/elevator/VMT/11.webp',
        'img/gal/elevator/VMT/12.webp',
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
     {
      id: 3,
      name: 'Wildlife Slider',
      images: [
        'img/gal/escalators/T50/1.webp',
        'img/gal/escalators/T50/2.webp',
        'img/gal/escalators/T50/3.webp',
        'img/gal/escalators/T50/4.webp',
         'img/gal/escalators/T50/5.webp',
        'img/gal/escalators/T50/6.webp',
        'img/gal/escalators/T50/7.webp',
        'img/gal/escalators/T50/8.webp',
         'img/gal/escalators/T50/9.webp',
        'img/gal/escalators/T50/10.webp',
        'img/gal/escalators/T50/11.webp',
        'img/gal/escalators/T50/12.webp',
      ],
    },
   
   
  ];
  const [selectedSliderId, setSelectedSliderId] = useState(1);
  const combinedSliders = [...sliders, ...sliders2];

  const handleDropdownChange = (event) => {
    setSelectedSliderId(Number(event.target.value));
  };

  const selectedSlider = combinedSliders.find((slider) => slider.id === selectedSliderId);


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
            {/* First Slider Dropdown */}
            <div className="col-md-6">
              <div style={{ textAlign: 'center', margin: '20px' }}>
                <label htmlFor="slider-select-1" style={{ marginRight: '10px', fontSize: '16px' }}>
                  Select Slider 1:
                </label>
                  <select
                  id="slider-select-1"
                  value={selectedSliderId}
                  onChange={handleDropdownChange}
                  style={{ padding: '8px 12px', fontSize: '16px' }}
                >
                  {sliders.map((slider) => (
                    <option key={slider.id} value={slider.id}>
                      {slider.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Second Dropdown */}
            <div className="col-md-6">
              <div style={{ textAlign: 'center', margin: '20px' }}>
                <label htmlFor="slider-select-2" style={{ marginRight: '10px', fontSize: '16px' }}>
                  Select Slider from Group 2:
                </label>
                <select
                  id="slider-select-2"
                  value={selectedSliderId}
                  onChange={handleDropdownChange}
                  style={{ padding: '8px 12px', fontSize: '16px' }}
                >
                  {sliders2.map((slider) => (
                    <option key={slider.id} value={slider.id}>
                      {slider.name}
                    </option>
                  ))}
                </select>
              </div>
             
            </div>
            <div className='col-md-12 showone'>
              
               {selectedSlider && <DynamicSlider sliderData={selectedSlider} />}

              {/*selectedSlider2 && <DynamicSlider sliderData={selectedSlider2} /> */}
            </div>
          </div>
        </div>
      </section>

      <ConnectForm />
    </>
  );
}
