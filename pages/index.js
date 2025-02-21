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
      mobile: '/img/mobile/Banner Mobile 1 - Optima.png',
      desktop: '/img/Elevators/o/Banner 1.webp',
    },
    {
     mobile: '/img/mobile/Banner Mobile 2 - Optima.png',
      desktop: '/img/Elevators/o/Banner 2.webp',
    },
    {
    mobile: '/img/mobile/Banner Mobile 3 - Optima.png',
      desktop: '/img/Elevators/o/Banner 3.webp',
    },
  ];
    return (
        <>
            <Head>
                <title>Best Elevator Company in Bangalore India - Teknix Elevators</title>
                <meta name="description" content="Teknix Elevators is one of the leading elevator suppliers in Bangalore. we know the market and can provide you with the best-quality elevator at a competitive price." />
                <meta name="keywords" content="Best elevator companies in india, Best elevator company in bangalore, Best home elevators in bangalore,Elevator suppliers in bangalore" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.teknixelevators.com/" />

            </Head>
      <>

      <h1 class="d-none">Best Elevator Company In Bangalore</h1>
    
<div
  id="carouselExampleCaptions"
  className="carousel slide top-bg"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={3}
      aria-label="Slide 4"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={4}
      aria-label="Slide 5"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image
        src="/img/Banner Mobile- Homepage.png"
        alt="Slide 1 Mobile"
        layout="responsive"
        width={1080}
        height={1920}
        className="d-md-none d-block img-fluid carousel-image"
      />
      <Image
        src="/img/Home/3.webp"
        alt="Slide 1 Desktop"
        layout="responsive"
        width={1920}
        height={1080}
        className="d-none d-md-block w-100 carousel-image"
      />
      <div className="carousel-caption d-none d-md-block">
        <p className="slider-txt">
          INNOVATION <br />
          IN MOTION
        </p>
      </div>
    </div>
    <div className="carousel-item">
      <Image
        src="/img/mobile/Banner Mobile 1 - Greentek.png"
        alt="Slide 1 Mobile"
        layout="responsive"
        width={1080}
        height={1920}
        className="d-md-none d-block img-fluid carousel-image"
      />
      <Image
        src="/img/Home/greentek.webp"
        alt="Slide 1 Desktop"
        layout="responsive"
        width={1920}
        height={1080}
        className="d-none d-md-block w-100 carousel-image"
      />
      <div className="carousel-caption d-none d-md-block">
        <p className="slider-txt">GREENTEK</p>
      </div>
    </div>
    <div className="carousel-item">
     <Image
        src="/img/mobile/Banner Mobile 2 - Hydratek.png"
        alt="Slide 1 Mobile"
        layout="responsive"
        width={1080}
        height={1920}
        className="d-md-none d-block img-fluid carousel-image"
      />
      <Image
        src="/img/Home/2.webp"
        alt="Slide 1 Desktop"
        layout="responsive"
        width={1920}
        height={1080}
        className="d-none d-md-block w-100 carousel-image"
      />
      <div className="carousel-caption d-none d-md-block">
        <p className="slider-txt">HYDRATEK</p>
      </div>
    </div>
    <div className="carousel-item">
    <Image
        src="/img/mobile/Banner Mobile 1 - Villa Matek.png"
        alt="Slide 1 Mobile"
        layout="responsive"
        width={1080}
        height={1920}
        className="d-md-none d-block img-fluid carousel-image"
      />
      <Image
        src="/img/Banner 3 - Villa Matek (1).png"
        alt="Slide 1 Desktop"
        layout="responsive"
        width={1920}
        height={1080}
        className="d-none d-md-block w-100 carousel-image"
      />
      <div className="carousel-caption d-none d-md-block">
        <p className="slider-txt">VILLA MATEK</p>
      </div>
    </div>
    <div className="carousel-item">
      <video
        className="d-block w-100 object-fit-cover"
        autoPlay=""
        loop=""
        muted=""
      >
        <source src="/img/Teknix Elevator.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<section className="section">
  <div className="container-fluid ">
    <div className="row">
      <div className="col-md-11 offset-md-1 d-block mx-auto">
        <p className="text-center text-danger font-28   ">WELCOME TO TEKNIX ELEVATORS</p>
        <div className="home-about-heading ">
          <h2 className=" text-center   ">UNPARALLELED LUXURY THROUGH A SEAMLESS BLEND OF INNOVATION AND&nbsp;ENGINEERING</h2>
          <p className="font-small text-center w-100 w-md-50 d-block mx-auto light-white font-14  d-none">In an era of constant evolution and urban sophistication, Teknix stands as a beacon for those who aspire to excellence and remarkable achievements in vertical transportation.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section position-relative" id="experience">
  <div className="container text-center p-0">
    <div className="row">
      <div className="col-md-12 d-block mx-auto">
        <div className="row sub-section">
          <p className=" other-heading">
            Quality Excellence
          </p>
          <p className="  text-light ">Quality is the foundation of our business and we
            strive to achieve market leadership
            through superior
            products and exceptional service.</p>
        </div>
        <div className="row sub-section">
          <p className=" other-heading">
            Safety  &  Reliability
          </p>
          <p className="  text-light ">Using the latest technology, each product undergoes
            vigorous testing in order to reach
            all the safety norms
            which has been our prime goal.</p>
        </div>
        <div className="row  sub-section">
          <p className=" other-heading">
            Innovative Thinking
          </p>
          <p className="  text-light ">Our handpicked team of qualified, technically
            competent and talented engineers
            with vast
            knowledge bring out latest innovations.</p>
        </div>
      </div>
    </div>
    <div className="row d-none">
      <div className="col-md-12">
        <p className="text-center text-danger font-28   ">Teknix</p>
        <div className="home-about-heading ">
          <h2 className=" text-center   ">Elevating the Future of Vertical Transportation
          </h2>
          <p className=" text-center w-100 w-md-50 d-block mx-auto light-white   ">At Teknix, we are redefining the standards of vertical transportation with a visionary approach that seamlessly blends cutting-edge innovation and enduring values. In partnership with SRH Aufzüge GmbH, we design and deliver luxury elevators that go beyond mere utility. Each Teknix elevator enhances spaces and enriches lifestyles, embodying our unwavering commitment to excellence, sophistication, and unmatched quality.
          </p>
          <p className="text-center  text-danger fs-3  py-0">Where Craftsmanship Meets Innovation</p>
          <p className="text-center "><span>Every Teknix elevator exemplifies meticulous engineering and innovation, whether it&apos;s a bespoke design or a part of our vertical transportation portfolio. Our dedicated in-house R & D team ensures reliability, elegance, and advanced performance through rigorous testing. Key features of our state-of-the-art manufacturing facilities include:</span></p>
          <p className="text-center fw-bold "><strong>A 65,000 sq. ft. facility in Bangalore, complemented by over 2,025,000 sq. ft. across Suzhou, China, and Bremen, Germany.</strong></p>
          <p className="text-center "><strong>Advanced production lines from Salvagnini, Bodor, Dener, and Amada.</strong></p>
          <p className="text-center "><strong>A fully equipped elevator testing tower to uphold the highest safety and performance standards.</strong>
          </p><p className="text-center "><strong>Global Expertise, Local Excellence</strong><br />
            <span>Partnering with</span><strong> SRH Aufzüge GmbH</strong><span> and backed by global expertise, Teknix is a leader in luxury elevators tailored to the discerning Indian market. Our elevators, capable of speeds up to 8 m/s, set new standards in sophistication and German-engineered precision. As a distinguished member of VFA-Interlift, SRH Axufzüge helps us shape industry standards and redefine experiences. At Teknix, each elevator is an invitation to ascend in style, combining opulence, reliability, and an exceptional commitment to quality. Join us in elevating not just buildings but lifestyles.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



<ElevatorCarousel></ElevatorCarousel>
<section className="section position-relative" id="experience-sec" >
  <div className="container-fluid  p-0">
    <div className="row ">
      <div className="col-md-11 offset-md-1 d-flex align-items-center p-0 ">
        <div className="experience-text mt-md-5">
          <p className="other-heading">
            Experience
            <br />
            our curated
            <br />
            Elevators
            <br />
          </p>
          <p className=" ">
            <a
              href="gallery"
              className="text-danger  text-decoration-none font-15 fw-normal letter-spacing"
            >
              EXPLORE OUR GALLERY
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


<BlogSection/>

<ConnectForm/>
</>




        </>
    );
}
