// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import ElevatorCarousel from '../components/ElevatorCarousel';
import BlogSection from '../components/BlogSection';
import Testimonials from '../components/Testimonials';
import ConnectForm from '../components/ConnectForm';
import SimpleCarousel from '../components/SimpleCarousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCoverflow, Pagination } from 'swiper/modules';
export default function Home() {
  const slides = [
    {
      mobile: 'img/mobile/Banner Mobile - Experience Centre.png',
      desktop: 'img/center.webp',
    },

  ];
  return (
    <>
      <Head>
        <title>Experience Center | Elevators Dealer & Supplier In Bangalore</title>
        <meta name="description" content="Welcome to Teknix Experience Center, Bangalore Experience our latest world class products. Elevators Dealer & Supplier, Bangalore Lift Companies" />
        <meta name="keywords" content="Elevator suppliers in bangalore, Bangalore elevator companies, Bangalore lift companies, Elevator in bangalore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="#" />

      </Head>
      <>


        <SimpleCarousel slides={slides} showIndicators={false} showControls={false} />


        <section
          className="section position-relative"
          id="experience"
          data-aos="fade-up"
          data-aos-duration={1500}
        >
          <div className="container text-center p-0">
            <div className="row">
              <div className="col-md-9 d-block mx-auto">
                <div className="row home-about-heading">
                  <h2
                    className=" other-heading"
                    data-aos="fade-up"
                    data-aos-duration={2000}
                  >
                    State of the Art Facility 
                  </h2>
                  
                  <p
                    className="p-10 text-light"
                    data-aos="fade-up"
                    data-aos-duration={3000}
                  >
                   Teknix comes up with first of its kind Elevator Experience center, with 12 unique cutting edge elevators on display, with a touch and feel of every single component that goes into the making of a technologically advanced German engineered elevator.
                  </p>
                  <p
                    className="p-10 text-light"
                    data-aos="fade-up"
                    data-aos-duration={3000}
                  >
                   Teknix with its unique design language for its range of Greentek elevators has carved a niche in the market for premium and super premium elevators. Come, Experience the complete unique range of elevators and the technologically advanced state-of-the-art materials that go into making of a True German engineered product
                  </p>
                </div>

             

              </div>
            </div>
            <div className="row"  data-aos="fade-up"
                    data-aos-duration={2000}>
            <div className='col-md-12  py-5'  data-aos="fade-up"
                    data-aos-duration={2000}>
               <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'3'}
                    spaceBetween={-30}
                    loop={true}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 350,
                      modifier: 1,
                      slideShadows: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Image src="img/Center/s1.jpg" alt="gallery" className='img-fluid' width={460} height={613} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src="img/Center/s7.jpg" alt="gallery"className='img-fluid' width={460} height={613} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src="img/Center/s3.jpg" alt="gallery"className='img-fluid' width={460} height={613} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src="img/Center/s9.jpg" alt="gallery"className='img-fluid' width={460} height={613} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src="img/Center/s5.jpg" alt="gallery"className='img-fluid' width={460} height={613} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src="img/Center/s11.jpg" alt="gallery"className='img-fluid' width={460} height={613} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src="img/Center/s14.jpg" alt="gallery"className='img-fluid' width={460} height={613} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src="img/Center/s2.jpg" alt="gallery"className='img-fluid' width={460} height={613} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src="img/Center/s4.jpg" alt="gallery"className='img-fluid' width={460} height={613} /> 
                    </SwiperSlide>
                  <SwiperSlide>
                    <Image src="img/Center/s6.jpg" alt="gallery"className='img-fluid' width={460} height={613} />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src="img/Center/s8.jpg" alt="gallery"className='img-fluid' width={460} height={613} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src="img/Center/s10.jpg" alt="gallery"className='img-fluid' width={460} height={613} />
                  </SwiperSlide>
                </Swiper>
            </div>
            </div>
          </div>
        </section>
        <section
          className="section position-relative"
          id="experience"
          data-aos="fade-right"
          data-aos-duration={2500}
        >
          <div className="container-fluid px-md-5 p-0 d-none">
            <Image src="/img/map.png" alt="" className="w-100"  width={1920} height={850} />
          </div>
        </section>








        <ConnectForm />
      </>




    </>
  );
}
