import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image'; // Adjust if using a different Image component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MultipleCarousels = ({ allCarouselsData, showIndicators = true, showControls = true, selectedCategory1 = '', selectedCategory2 = '' }) => {
    const [visibleCarousels, setVisibleCarousels] = useState(
        allCarouselsData.map(() => false) // Initially hide all carousels
    );

    // Reset visibility when categories change
    useEffect(() => {
        setVisibleCarousels(allCarouselsData.map(() => false));
    }, [selectedCategory1, selectedCategory2]);

    // Toggle visibility of the carousel slider
    const toggleVisibility = (index) => {
        setVisibleCarousels((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index]; // Toggle visibility
            return newState;
        });
    };

    // Filter carousels based on selected categories
    const filteredCarousels = allCarouselsData.filter((carousel) => {
        const matchCategory1 = selectedCategory1 === '' || carousel.category1 === selectedCategory1;
        const matchCategory2 = selectedCategory2 === '' || carousel.category2 === selectedCategory2;
        return matchCategory1 && matchCategory2;
    });

    return (
        <div>
            {/* Render filtered carousels */}
            {filteredCarousels.map((carousel, index) => {
                const settings = {
                    dots: showIndicators,
                    arrows: showControls,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    customPaging: (i) => (
                        <div>
                            <Image
                                src={carousel.slides[i].thumbnail}
                                alt={`Thumbnail ${i + 1}`}
                                width={100}
                                height={100}
                                className="d-block w-100 h-100 rounded"
                            />
                        </div>
                    ),
                    appendDots: (dots) => (
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '-50px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <ul style={{ margin: '0px', padding: '0px', display: 'flex' }}>{dots}</ul>
                        </div>
                    ),
                };

                return (
                    <div key={index} className="carousel-container py-5">
                        {/* Show "Show Carousel" button only if the carousel is not visible */}
                        {!visibleCarousels[index] && (
                            <div className="text-center mb-3">
                                <button className="btn btn-primary" onClick={() => toggleVisibility(index)}>
                                    Show Carousel
                                </button>
                            </div>
                        )}

                        {/* Render carousel if visible */}
                        {visibleCarousels[index] && (
                            <div className="Optima-section gallery-slider position-relative pb-5 text-center">
                                <p className="other-heading2">{carousel.title}</p>
                                <div className="row section-carousel">
                                    <Slider {...settings}>
                                        {carousel.slides.map((slide, i) => (
                                            <div key={i} className="carousel-item">
                                                <Image
                                                    src={slide.image}
                                                    alt={`Slide ${i + 1}`}
                                                    layout="intrinsic"
                                                    width={450}
                                                    height={550}
                                                    className="d-block img-fluid"
                                                    style={{
                                                        maxWidth: '480px',
                                                        margin: '0 auto',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        )}

                        {/* Show "Hide Carousel" button only when the carousel is visible */}
                        {visibleCarousels[index] && (
                            <div className="text-center my-5 pb-3">
                                <button className="btn btn-primary" onClick={() => toggleVisibility(index)}>
                                    Hide Carousel
                                </button>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default MultipleCarousels;
