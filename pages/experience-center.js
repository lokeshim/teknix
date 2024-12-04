// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import ElevatorCarousel from '../components/ElevatorCarousel';
import BlogSection from '../components/BlogSection';
import Testimonials from '../components/Testimonials';
import ConnectForm from '../components/ConnectForm';
import SimpleCarousel from '../components/SimpleCarousel';
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
                <title>teknix</title>
                <meta name="description" content="teknix" />
                <meta name="keywords" content="teknix" />
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
              Our Centres
            </h2>
            <img
              src="img/out-center-image.png"
              className="d-block mx-auto p-10"
              alt=""
              data-aos="fade-up"
              data-aos-duration={2500}
            />
            <p
              className="p-10 text-light"
              data-aos="fade-up"
              data-aos-duration={3000}
            >
              Teknix comes up with first of its kind Elevator Experience center,
              with 12 unique cutting edge elevators on display, with a touch and
              feel of every single component that goes into the making of a
              technologically advanced German engineered elevator.
            </p>
            <p
              className="p-10 text-light"
              data-aos="fade-up"
              data-aos-duration={3000}
            >
              Teknix with its unique design language for its range of Greentek
              elevators has carved a niche in the market for premium and super
              premium elevators. Come, Experience the complete unique range of
              elevators and the technologically advanced state-of-the-art
              materials that go into making of a True German engineered product
            </p>
          </div>
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
    <div className="container-fluid px-md-5 p-0">
      <img src="img/map.png" alt="" className="w-100" />
    </div>
  </section>


 
 




<ConnectForm/>
</>




        </>
    );
}
