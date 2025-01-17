import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';
import { Autoplay,Navigation, Thumbs } from 'swiper/modules';
import SimpleCarousel from '../components/SimpleCarousel';
export default function GalleryPage() {
    const myslides = [
        {
            mobile: 'img/mobile/Banner Mobile - Contact.png',
            desktop: 'img/gallery.webp',
        }

    ];
    const slidersGroup1 = [
        {
            id: 1,
            name: 'Optima',
            images: [
                '/img/gal/elevator/optima/1.webp',
                '/img/gal/elevator/optima/2.webp',
                '/img/gal/elevator/optima/3.webp',
                '/img/gal/elevator/optima/4.webp',
                '/img/gal/elevator/optima/5.webp',
                '/img/gal/elevator/optima/6.webp',
                '/img/gal/elevator/optima/7.webp',
                '/img/gal/elevator/optima/8.webp',
                '/img/gal/elevator/optima/9.webp',
                '/img/gal/elevator/optima/10.webp',
                '/img/gal/elevator/optima/11.webp',
                '/img/gal/elevator/optima/12.webp',
            ],
        },
        {
            id: 2,
            name: 'Vertix',
            images: [
                '/img/gal/elevator/vertix/1.webp',
                '/img/gal/elevator/vertix/2.webp',
                '/img/gal/elevator/vertix/3.webp',
                '/img/gal/elevator/vertix/4.webp',
                '/img/gal/elevator/vertix/5.webp',
                '/img/gal/elevator/vertix/6.webp',
                '/img/gal/elevator/vertix/7.webp',
                '/img/gal/elevator/vertix/8.webp',
                '/img/gal/elevator/vertix/9.webp',
                '/img/gal/elevator/vertix/10.webp',
                '/img/gal/elevator/vertix/11.webp',
                '/img/gal/elevator/vertix/12.webp',
            ],
        },
        {
            id: 3,
            name: 'Greentek',
            images: [
                '/img/gal/elevator/greentek/1.webp',
                '/img/gal/elevator/greentek/2.webp',
                '/img/gal/elevator/greentek/3.webp',
                '/img/gal/elevator/greentek/4.webp',
                '/img/gal/elevator/greentek/5.webp',
                '/img/gal/elevator/greentek/6.webp',
                '/img/gal/elevator/greentek/7.webp',
                '/img/gal/elevator/greentek/8.webp',
                '/img/gal/elevator/greentek/9.webp',
                '/img/gal/elevator/greentek/10.webp',
                '/img/gal/elevator/greentek/11.webp',
                '/img/gal/elevator/greentek/12.webp',
            ],
        },
        {
            id: 4,
            name: 'Hytex',
            images: [
                '/img/gal/elevator/HYTEX/1.webp',
                '/img/gal/elevator/HYTEX/2.webp',
                '/img/gal/elevator/HYTEX/3.webp',
                '/img/gal/elevator/HYTEX/4.webp',
                '/img/gal/elevator/HYTEX/5.webp',
                '/img/gal/elevator/HYTEX/6.webp',
                '/img/gal/elevator/HYTEX/7.webp',
                '/img/gal/elevator/HYTEX/8.webp',
                '/img/gal/elevator/HYTEX/9.webp',
                '/img/gal/elevator/HYTEX/10.webp',
                '/img/gal/elevator/HYTEX/11.webp',
                '/img/gal/elevator/HYTEX/12.webp',
            ],
        },
        {
            id: 5,
            name: 'Villa Matek',
            images: [
                '/img/gal/elevator/VMT/1.webp',
                '/img/gal/elevator/VMT/2.webp',
                '/img/gal/elevator/VMT/3.webp',
                '/img/gal/elevator/VMT/4.webp',
                '/img/gal/elevator/VMT/5.webp',
                '/img/gal/elevator/VMT/6.webp',
                '/img/gal/elevator/VMT/7.webp',
                '/img/gal/elevator/VMT/8.webp',
                '/img/gal/elevator/VMT/9.webp',
                '/img/gal/elevator/VMT/10.webp',
                '/img/gal/elevator/VMT/11.webp',
                '/img/gal/elevator/VMT/12.webp',
            ],
        },
        
    ];

    const slidersGroup2 = [
        {
            id: 1,
            name: 'T20',
            images: [
                   '/img/gal/escalators/T20/1.webp',
        '/img/gal/escalators/T20/2.webp',
        '/img/gal/escalators/T20/3.webp',
        '/img/gal/escalators/T20/4.webp',
         '/img/gal/escalators/T20/5.webp',
        '/img/gal/escalators/T20/6.webp',
        '/img/gal/escalators/T20/7.webp',
        '/img/gal/escalators/T20/8.webp',
         '/img/gal/escalators/T20/9.webp',
        '/img/gal/escalators/T20/10.webp',
        '/img/gal/escalators/T20/11.webp',
        '/img/gal/escalators/T20/12.webp',
            ],
        },
        {
            id: 2,
            name: 'T15',
            images: [
                '/img/gal/escalators/T15/1.webp',
        '/img/gal/escalators/T15/2.webp',
        '/img/gal/escalators/T15/3.webp',
        '/img/gal/escalators/T15/4.webp',
         '/img/gal/escalators/T15/5.webp',
        '/img/gal/escalators/T15/6.webp',
        '/img/gal/escalators/T15/7.webp',
        '/img/gal/escalators/T15/8.webp',
         '/img/gal/escalators/T15/9.webp',
        '/img/gal/escalators/T15/10.webp',
        '/img/gal/escalators/T15/11.webp',
        '/img/gal/escalators/T15/12.webp',
            ],
        },
        {
            id: 3,
            name: 'T50',
            images: [
                 '/img/gal/escalators/T50/1.webp',
        '/img/gal/escalators/T50/2.webp',
        '/img/gal/escalators/T50/3.webp',
        '/img/gal/escalators/T50/4.webp',
         '/img/gal/escalators/T50/5.webp',
        '/img/gal/escalators/T50/6.webp',
        '/img/gal/escalators/T50/7.webp',
        '/img/gal/escalators/T50/8.webp',
         '/img/gal/escalators/T50/9.webp',
        '/img/gal/escalators/T50/10.webp',
        '/img/gal/escalators/T50/11.webp',
        '/img/gal/escalators/T50/12.webp',
            ],
        },
       
    ];

    const [selectedGroup, setSelectedGroup] = useState('group1'); // Tracks group selection
    const [selectedSliderId, setSelectedSliderId] = useState(1); // Tracks slider ID within group
    const [isSliderVisible, setIsSliderVisible] = useState(false); // Controls visibility of the slider
    const [thumbsSwiper, setThumbsSwiper] = useState(null); // Swiper instance for thumbnails
const [selectedGroupText, setSelectedGroupText] = useState('');

  const handleSliderChange1 = (event) => {
    setSelectedGroup('group1');  // Ensure it's 'group1' instead of 'Elevator'
    setSelectedSliderId(Number(event.target.value));
    setIsSliderVisible(false); 
    setSelectedGroupText('Elevator');  // Set text for group 1
};

const handleSliderChange2 = (event) => {
    setSelectedGroup('group2');  // Ensure it's 'group2' instead of 'Escalator'
    setSelectedSliderId(Number(event.target.value));
    setIsSliderVisible(false); 
    setSelectedGroupText('Escalator');  // Set text for group 2
};


    const toggleSliderVisibility = () => {
        setIsSliderVisible(!isSliderVisible);
    };

    const selectedSliders = selectedGroup === 'group1' ? slidersGroup1 : slidersGroup2;
    const selectedSlider = selectedSliders.find((slider) => slider.id === selectedSliderId);

    useEffect(() => {
        // Reset Swiper state when the visibility is toggled
        if (!isSliderVisible) {
            setThumbsSwiper(null); // Reset thumbs swiper instance
        }
    }, [isSliderVisible]); // Only run when visibility state changes

    return (
        <>
            <Head>
                <title>Gallery |Top Elevators Company In India | Teknix Elevators</title>
                <meta name="description" content="Explore the gallery of Teknix Elevators, a top elevator company in India, showcasing our innovative, high-quality, and safe elevator solutions for various projects." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://teknixelevators.com/gallery" />
                
            </Head>
            <SimpleCarousel slides={myslides} showIndicators={false} showControls={false} />
            <>
            <h1 className='d-none'>Top Elevators Company In India</h1>
                <section className="section position-relative mygallery">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4 offset-md-2 col-12'>
                                {/* Dropdown for Group 1 */}
                                <div style={{ textAlign: 'center', marginBottom: '20px' }} className=' '>
                                    <label htmlFor="slider1-select" style={{ marginRight: '10px', fontSize: '16px' }}>
                                        Select Slider 1:
                                    </label>
                                    <select
                                        id="slider1-select"
                                        onChange={handleSliderChange1}
                                        style={{ padding: '8px 12px', fontSize: '16px' }}
                                    >
                                     <optgroup label="Elevator"></optgroup>
                                   
                                        {slidersGroup1.map((slider) => (
                                            <option key={slider.id} value={slider.id}>
                                                {slider.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            </div>
                            <div className='col-md-4  col-12'>
                                {/* Dropdown for Group 2 */}
                                <div style={{ marginBottom: '20px', textAlign: 'center', }}>
                                    <label htmlFor="slider2-select" style={{ marginRight: '10px', fontSize: '16px' }}>
                                        Select Slider 2:
                                    </label>
                                    <select
                                        id="slider2-select"
                                        onChange={handleSliderChange2}
                                        style={{ padding: '8px 12px', fontSize: '16px' }}
                                    > 
                                    <optgroup label="Escalator">
                                     
                                        {slidersGroup2.map((slider) => (
                                            <option key={slider.id} value={slider.id}>
                                                {slider.name}
                                            </option>
                                        ))}
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Render slider */}
                    {selectedSlider && (
                        <div className=''>
                            {/* Image toggle for visibility */}
                            {/* Image toggle for visibility */}
                            {!isSliderVisible && (
                                <div className='container position-relative' onClick={toggleSliderVisibility} style={{ cursor: 'pointer',  gap: '10px' }}>
                                    {/* Show first 3 images with their respective classes */}
                                    <div className='row '>
                                    <p className='text-center other-heading'>{selectedSlider.name}</p>
                                       <div className='col-md-3 d-block mx-auto img-box my-4'> 
                                       
                                   {selectedSlider.images.slice(0, 3).map((image, index) => {
                                        let className = '';
                                        if (index === 0) className = 'img-fluid img-main rounded-4 d-block mx-auto';
                                        if (index === 1) className = 'img-fluid img-second rounded-4  ';
                                        if (index === 2) className = 'img-fluid img-third rounded-4  ';

                                        return (
                                            <Image
                                                key={index}
                                                src={image}
                                                alt={`${selectedSlider.name} - ${index + 1}`}
                                                className={className}
                                                style={{
                                                   
                                                    height: 'auto',
                                                    objectFit: 'cover',
                                                    borderRadius: '5px',
                                                    transition: 'transform 0.3s ease',
                                                }}
                                                width={262}
                                                height={420}
                                            />
                                        );
                                    })}
                                        </div>
                                    </div>

                                </div>
                            )}


                            {/* Render slider */}
                            {isSliderVisible && (
                                <div className='container'>
                                    <p className='text-center other-heading'>{selectedSlider.name}</p>
                                    <div className="row">
                                        <div className="col-md-4 d-block mx-auto">
                                            <Swiper
                                                modules={[Autoplay,Navigation, Thumbs]}
                                                navigation={false}
                                                thumbs={{ swiper: thumbsSwiper }}
                                                slidesPerView={1}
                                                spaceBetween={30}
                                                 autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                    }}
                                                loop
                                                breakpoints={{
                                                    640: {
                                                        slidesPerView: 1,
                                                    },
                                                    768: {
                                                        slidesPerView: 1,
                                                    },
                                                    1024: {
                                                        slidesPerView: 1,
                                                    },
                                                }}
                                                style={{ borderRadius: '10px', marginBottom: '20px' }}
                                            >
                                                {selectedSlider.images.map((image, index) => (
                                                    <SwiperSlide key={index}>
                                                        <Image
                                                            src={image}
                                                            alt={`Slide ${index + 1}`}
                                                            style={{ width: '100%', maxHeight: '480px',objectFit:'cover',borderRadius: '10px' }}
                                                             width={416}
                                                height={450}
                                                        />
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            {/* Thumbnail Swiper */}
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col-md-12 d-block mx-auto" id="thumbnail-img">
                                            <Swiper
                                                onSwiper={setThumbsSwiper}
                                               slidesPerView={4}
                                                spaceBetween={10}
                                                freeMode
                                                watchSlidesProgress
                                                loop
                                               breakpoints={{
                                            640: {
                                                slidesPerView: 4,
                                                spaceBetween: 15,
                                            },
                                            768: {
                                                slidesPerView: 6,
                                                spaceBetween: 20,
                                            },
                                            1024: {
                                                slidesPerView: 12,
                                                spaceBetween: 30,
                                            },
                                            }}
                                                style={{ marginTop: '20px' }}
                                            >
                                                {selectedSlider.images.map((image, index) => (
                                                    <SwiperSlide key={index}>
                                                        <Image
                                                            src={image}
                                                            alt={`Thumbnail ${index + 1}`}
                                                            style={{
                                                                width: '100%',
                                                               
                                                                objectFit: 'cover',
                                                                borderRadius: '5px',
                                                            }}
                                                            className='d-block mx-auto'
                                                             width={80}
                                                height={150}
                                                        />
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    </div>


                                    <button
                                        onClick={toggleSliderVisibility}
                                        style={{
                                            marginTop: '10px',
                                            padding: '10px 20px',
                                            fontSize: '16px',
                                            cursor: 'pointer',
                                            border: 'none',
                                            background: '#007bff',
                                            color: '#fff',
                                            borderRadius: '5px',
                                        }}
                                        className='d-none'
                                    >
                                        Hide Slider
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </section>
            </>
        </>
    );
}
