// components/Gallery.js
import React, { useState } from 'react';
import DynamicSlider from '../components/DynamicSlider';

const sliders = [
  {
    id: 1,
    name: 'Nature Slider',
    images: [
      'https://swiperjs.com/demos/images/nature-1.jpg',
      'https://swiperjs.com/demos/images/nature-2.jpg',
      'https://swiperjs.com/demos/images/nature-3.jpg',
      'https://swiperjs.com/demos/images/nature-4.jpg',
    ],
  },
  {
    id: 2,
    name: 'Wildlife Slider',
    images: [
      'https://swiperjs.com/demos/images/nature-5.jpg',
      'https://swiperjs.com/demos/images/nature-6.jpg',
      'https://swiperjs.com/demos/images/nature-7.jpg',
      'https://swiperjs.com/demos/images/nature-8.jpg',
    ],
  },
  {
    id: 3,
    name: 'City Slider',
    images: [
      'https://swiperjs.com/demos/images/nature-9.jpg',
      'https://swiperjs.com/demos/images/nature-10.jpg',
      'https://swiperjs.com/demos/images/nature-1.jpg',
      'https://swiperjs.com/demos/images/nature-2.jpg',
    ],
  },
];

const Gallery = () => {
  const [selectedSliderId, setSelectedSliderId] = useState(1);

  const handleDropdownChange = (event) => {
    setSelectedSliderId(Number(event.target.value));
  };

  const selectedSlider = sliders.find((slider) => slider.id === selectedSliderId);

  return (
    <div className='container'>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <label htmlFor="slider-select" style={{ marginRight: '10px', fontSize: '16px' }}>
          Select Slider:
        </label>
        <select
          id="slider-select"
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

      {selectedSlider ? <DynamicSlider sliderData={selectedSlider} /> : <p>No slider selected.</p>}
    </div>
  );
};

export default Gallery;
