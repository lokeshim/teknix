import React from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Carousel = ({ id, items, options }) => {
  return (
    <div id={id}>
      <OwlCarousel {...options}>
        {items.map((item, index) => (
          <div key={index} className="item">
            {item.content}
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
