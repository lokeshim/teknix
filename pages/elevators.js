// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
//import Bank from '../components/Bank';
import ElevatorCarousel from '../components/ElevatorCarousel';
import BlogSection from '../components/BlogSection';
import Testimonials from '../components/Testimonials';
import ConnectForm from '../components/ConnectForm';
export default function Home() {
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

  <div
    id="carouselExampleCaptions"
    className="carousel slide top-bg"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators ">
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
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <Image src="img/elevator.png" className="d-block w-100" alt="Slide 1" />
        <div className="carousel-caption d-none d-md-block">
          <p className="slider-txt">OPTIMA</p>
        </div>
      </div>
      <div className="carousel-item">
        <Image src="img/elevator.png" className="d-block w-100" alt="Slide 2" />
        <div className="carousel-caption d-none d-md-block">
          <p className="slider-txt">OPTIMA</p>
        </div>
      </div>
      <div className="carousel-item">
        <Image src="img/elevator.png" className="d-block w-100" alt="Slide 3" />
        <div className="carousel-caption d-none d-md-block">
          <p className="slider-txt">OPTIMA</p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev "
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next  "
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
        <p className="text-center text-danger font-21 mb-5">OPTIMA</p>
        <div className="home-about-heading ">
          <h2 className=" text-center mb-5">The simple yet effective one.</h2>
          <p className="font-small text-center w-35 d-block mx-auto light-white font-14 my-5 ">
            The all new OPTIMA redefines simplicity giving you vertical
            <br />
            mobility solution with a range of technologically advanced features
            with German
            <br />
            craftsmanship at its heart. Experience elevators crafted for
            unparalleled comfort and performance to suit you.{" "}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="section position-relative" id="brochure">
    <div className="container p-0">
      <div className="row py-4">
        <div className="col-md-3  d-block mx-auto">
          <div className="row optima-list">
            <div className="col-3">
              <Image src="img/type.png" className="d-block mx-auto" alt="" />
            </div>
            <div className="col-9 d-flex align-items-center">
              <div>
                <p className="fw-bold font-13 mb-0">Type</p>
                <p className="font-13">Type MRL/MMR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3  d-block mx-auto">
          <div className="row optima-list">
            <div className="col-3">
              <Image src="img/type.png" className="d-block mx-auto" alt="" />
            </div>
            <div className="col-9 d-flex align-items-center">
              <div>
                <p className="fw-bold font-13 mb-0">Type</p>
                <p className="font-13">Type MRL/MMR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3  d-block mx-auto">
          <div className="row optima-list">
            <div className="col-3">
              <Image src="img/type.png" className="d-block mx-auto" alt="" />
            </div>
            <div className="col-9 d-flex align-items-center">
              <div>
                <p className="fw-bold font-13 mb-0">Type</p>
                <p className="font-13">Type MRL/MMR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3  d-block mx-auto">
          <div className="row optima-list">
            <div className="col-3">
              <Image src="img/type.png" className="d-block mx-auto" alt="" />
            </div>
            <div className="col-9 d-flex align-items-center">
              <div>
                <p className="fw-bold font-13 mb-0">Type</p>
                <p className="font-13">Type MRL/MMR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-4">
        <div className="col-md-2 offset-md-1  d-block mx-auto">
          <div className="row optima-list">
            <div className="col-3">
              <Image src="img/type.png" className="d-block mx-auto" alt="" />
            </div>
            <div className="col-9 d-flex align-items-center">
              <div>
                <p className="fw-bold font-13 mb-0">Type</p>
                <p className="font-13">Type MRL/MMR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2  d-block mx-auto">
          <div className="row optima-list">
            <div className="col-3">
              <Image src="img/type.png" className="d-block mx-auto" alt="" />
            </div>
            <div className="col-9 d-flex align-items-center">
              <div>
                <p className="fw-bold font-13 mb-0">Type</p>
                <p className="font-13">Type MRL/MMR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2  d-block mx-auto">
          <div className="row optima-list">
            <div className="col-3">
              <Image src="img/type.png" className="d-block mx-auto" alt="" />
            </div>
            <div className="col-9 d-flex align-items-center">
              <div>
                <p className="fw-bold font-13 mb-0">Type</p>
                <p className="font-13">Type MRL/MMR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2  d-block mx-auto">
          <div className="row optima-list">
            <div className="col-3">
              <Image src="img/type.png" className="d-block mx-auto" alt="" />
            </div>
            <div className="col-9 d-flex align-items-center">
              <div>
                <p className="fw-bold font-13 mb-0">Type</p>
                <p className="font-13">Type MRL/MMR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-4">
        <a
          href="#"
          className="text-danger  text-decoration-none font-13 fw-normal letter-spacing text-center"
        >
          DOWNLOAD OPTIMA BROCHURE
        </a>
      </div>
    </div>
  </section>


<ConnectForm/>
</>




        </>
    );
}
