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
        <img src="img/about-main.png" className="d-block w-100" alt="Slide 1" />
        <div className="carousel-caption d-none d-md-block">
          <p className="slider-txt mb-0">
            ABOUT US <br />
          </p>
          <p className="text-white fs-5 slider-txt2">
            Innovation at Every Level – Elevating Beyond Expectations
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="img/about-main.png" className="d-block w-100" alt="Slide 2" />
        <div className="carousel-caption d-none d-md-block">
          <p className="slider-txt">
            Innovation <br />
            in Motion
          </p>
          <p className="text-white fs-5 slider-txt2">
            Innovation at Every Level – Elevating Beyond Expectations
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="img/about-main.png" className="d-block w-100" alt="Slide 3" />
        <div className="carousel-caption d-none d-md-block">
          <p className="slider-txt">
            Innovation <br />
            in Motion
          </p>
          <p className="text-white fs-5 slider-txt2">
            Innovation at Every Level – Elevating Beyond Expectations
          </p>
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
        <p className="text-center text-danger font-21 mb-5">
          WELCOME TO TEKNIX ELEVATORS
        </p>
        <div className="home-about-heading ">
          <h2 className=" text-center mb-5">
            INNOVATION &amp; TECHNOLOGY COMBINED TOGETHER
          </h2>
          <p className="font-small text-center w-35 d-block mx-auto light-white font-14 my-5 ">
            Teknix began with a simple concept:
            <br />
            to achieve excellence in vertical transportation industry.
            <br />
            Since four decades in the field of installation, modernization and
            <br />
            maintenance of elevators in collaboration with&nbsp;SRH Aufzuge
            GmbH, Germany.{" "}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="section position-relative" id="experience">
    <div className="container text-center p-0">
      <div className="row">
        <div className="col-md-9 d-block mx-auto">
          <div className="row my-5">
            <p className=" other-heading">Our Vision</p>
            <p className="my-3 text-light">
              Create a culture of innovation that gives our people the freedom
              to think out of the box; the commitment to deadlines and budgets,
              even if it means going out of the way to accommodate both.
            </p>
          </div>
          <div className="row my-5">
            <p className=" other-heading">Our Mission</p>
            <p className="my-3 text-light">
              Teknix, at all times maintain and embody the principles of
              integrity, honesty and quality. These efforts bring prosperity to
              our business associates and our customers, and robust growth in
              us.
            </p>
          </div>
          <div className="row my-5">
            <p className=" other-heading">Our Standards</p>
            <p className="my-3 text-light">
              Teknix Elevators builds upon a reputation for quality, safety and
              reliability and upholding the demanding standards of being an
              ISO-9001-2008 certified company.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section position-relative" id="experience">
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-12">
          <img src="img/experience.png" alt="" className="img-fluid" />
          <div className="experience-text">
            <p className="my-5">
              Experience
              <br />
              our curated
              <br />
              Elevators
              <br />
            </p>
            <p className="my-3">
              <a
                href=""
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
<Testimonials/>
<ConnectForm/>
</>




        </>
    );
}
