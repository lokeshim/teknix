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
        <img src="img/escalators.png" className="d-block w-100" alt="Slide 1" />
        <div className="carousel-caption d-none d-md-block">
          <p className="slider-txt">TESC 20</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="img/escalators.png" className="d-block w-100" alt="Slide 2" />
        <div className="carousel-caption d-none d-md-block">
          <p className="slider-txt">TESC 20</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="img/escalators.png" className="d-block w-100" alt="Slide 3" />
        <div className="carousel-caption d-none d-md-block">
          <p className="slider-txt">TESC 20</p>
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
        <p className="text-center text-danger font-21 mb-5">TESC 20</p>
        <div className="home-about-heading ">
          <h2 className=" text-center mb-5">Moving made simple and easy</h2>
          <p className="font-small text-center w-35 d-block mx-auto light-white font-14 my-5 ">
            These escalators are designed for medium usage like offices and
            commercial buildings where the daily usage is maximum of 16 hours
            &amp; Max Rise height of 10 Metres.{" "}
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
              <img src="img/type.png" className="d-block mx-auto" alt="" />
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
              <img src="img/type.png" className="d-block mx-auto" alt="" />
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
              <img src="img/type.png" className="d-block mx-auto" alt="" />
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
              <img src="img/type.png" className="d-block mx-auto" alt="" />
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
              <img src="img/type.png" className="d-block mx-auto" alt="" />
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
              <img src="img/type.png" className="d-block mx-auto" alt="" />
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
              <img src="img/type.png" className="d-block mx-auto" alt="" />
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
              <img src="img/type.png" className="d-block mx-auto" alt="" />
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
  <section className="section position-relative" id="table">
    <div className="container p-0">
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="fs-3">
                  Indoor/Outdoor 16HR Daily
                </th>
                <th scope="col" className="fs-3">
                  Application
                </th>
                <th scope="col" className="fs-3">
                  Indoor/Outdoor 16HR Daily
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&lt;6m </td>
                <td>Rise</td>
                <td>&lt;6m </td>
              </tr>
              <tr>
                <td>35 </td>
                <td>Angle of Inclination</td>
                <td>30</td>
              </tr>
              <tr>
                <td>35 </td>
                <td>Angle of Inclination</td>
                <td>30</td>
              </tr>
              <tr>
                <td>35 </td>
                <td>Angle of Inclination</td>
                <td>30</td>
              </tr>
              <tr>
                <td>35 </td>
                <td>Angle of Inclination</td>
                <td>30</td>
              </tr>
              <tr>
                <td>35 </td>
                <td>Angle of Inclination</td>
                <td>30</td>
              </tr>
              <tr>
                <td>35 </td>
                <td>Angle of Inclination</td>
                <td>30</td>
              </tr>
              <tr>
                <td>35 </td>
                <td>Angle of Inclination</td>
                <td>30</td>
              </tr>
              <tr>
                <td>35 </td>
                <td>Angle of Inclination</td>
                <td>30</td>
              </tr>
              <tr>
                <td>35 </td>
                <td>Angle of Inclination</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
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
