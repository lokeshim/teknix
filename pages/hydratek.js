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
      mobile: 'img/mobile/Banner Mobile 1 - Hydratek.png',
      desktop: 'img/Elevators/H/1.webp',
    },
    {
      mobile: 'img/mobile/Banner Mobile 2 - Hydratek.png',
      desktop: 'img/Elevators/H/2.webp',
    },
    {
      mobile: 'img/mobile/Banner Mobile 3 - Hydratek.png',
      desktop: 'img/Elevators/H/3.webp',
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


<SimpleCarousel slides={slides} showIndicators={true} showControls={true} />


  <section className="section" data-aos="fade-up" data-aos-duration={1500}>
    <div className="container-fluid  ">
      <div className="row">
        <div className="col-md-11 offset-md-1 d-block mx-auto">
          <p className="text-center text-danger font-28" data-aos="fade-up" data-aos-duration={2000}>HYDRATEK</p>
          <div className="home-about-heading ">
            <h2 className=" text-center" data-aos="fade-up" data-aos-duration={2500}>FLUIDIC AND STYLISH ELEVATOR RIDE.</h2>
            <p className="font-small text-center w-35 d-block mx-auto light-white font-14  " data-aos="fade-up" data-aos-duration={3000}>Teknix Hydratek is a new Generation vertical transportation system based on advanced progressive Fluid dynamics, researched and developed with the finest German Technology and Italian Craftmanship. Hydratek is born with state of the art critical components like new generation Ultra High Precision Submerged Drive for Smooth fluid pressure with advanced Fluid control valves &amp; stylish touch sensitive human interface devices together with technologically advanced components outperform to give you a impeccable elevator ride.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section position-relative" id="brochure" data-aos="fade-up" data-aos-duration={2500}>
    <div className="container p-0">
      <div className="row py-md-3 py-0 justify-content-center">
        <div className="col-md-3 col-12 m-20">
          <div className="row Hydratek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <img src="img/type.png" className="d-block mx-auto img-fluid" alt />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Type</p>
                <p className="font-15 mb-0">Machine roomless/ Pitless</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Hydratek-list">
            <div className="col-6 col-md-6 d-flex align-items-center ">
              <img src="img/cap.png" className="d-block mx-auto img-fluid" alt />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Capacity</p>
                <p className="font-15 mb-0">272kgs – 2500kgs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Hydratek-list">
            <div className="col-6 col-md-6 d-flex align-items-center ">
              <img src="img/icon-stars.png" className="d-block mx-auto img-fluid" alt />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Speed</p>
                <p className="font-15 mb-0">0.30 – 1.00 m/s</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Hydratek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <img src="img/icon-stars(1).png" className="d-block mx-auto img-fluid" alt />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Landings</p>
                <p className="font-15 mb-0">2 - 8</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Hydratek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <img src="img/icon-agent(1).png" className="d-block mx-auto" alt />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Drive</p>
                <p className="font-15 mb-0">Submersible Fluid Hydraulic Drive</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Hydratek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <img src="img/operation.png" className="d-block mx-auto" alt />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Operation</p>
                <p className="font-15 mb-0">Full Collective Selective</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Hydratek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <img src="img/width.png" className="d-block mx-auto" alt />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Door Width</p>
                <p className="font-15 mb-0">700 / 800 / 900 / 1000 / 1200mm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Hydratek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <img src="img/height.png" className="d-block mx-auto" alt />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Door Height</p>
                <p className="font-15 mb-0">2100mm- 2400mm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-md-3">
        <a href="#" className="text-danger  text-decoration-none font-13 fw-normal letter-spacing text-center">DOWNLOAD HYDRATEK BROCHURE</a>
      </div>
    </div>
  </section>


<section className="section position-relative" id="eleveators">
  <div className="container px-2  ">
    <div className="row sub-section">
      <h6 className="other-heading2 text-white opacity-100">Top Features of Hydratek
      </h6>
    </div>
    {/*?php

  ?*/}
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">Hydraulic
          System</h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">Teknix Hydra consumes 20% lower power compared to the traditional hydraulic elevators, and comes with optional electronically controlled valve.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          Smooth
          Ride
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">Teknix hydra provides one of the smoothest rides in the hydraulic elevator units by using the most advanced mechanical oil flow valve system and additionally an option for electronically controlled valve making it a value propostions.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          Headroom
          Height
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">Another outstanding feature of the Teknix Hydra is the Zero headroom height that means no extra machine room or extensions on the terrace, which adds space for you to use, And that’s completely hassle free &amp; space saving.</p>
      </div>
    </div>
  </div>
</section>

 
 <section className="section position-relative" id="table" data-aos="fade-up" data-aos-duration={2500}>
  <div className="container p-0">
    <div className="row">
      <div className="col-md-12 table-responsive">
        <table className="table text-center post-title text-medium text-extra-dark-gray ">
          <thead className="thead-dark text-large">
            <tr className>
              <th scope="col fs-2 font-title">
                <p className="other-heading text-start">
                  Functions of Hydratek
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="text-start mb-0"><strong>Control system</strong> : Multiple microcomputer based close-loop control system with direct landing technology</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-start mb-0"><strong>Drive </strong>: Frequency controlled permanent magnet synchronous motor based gearless traction machine with dual vented disc brakes</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-start mb-0"><strong>Curve Generation</strong> : Microcomputer senses the load in the elevator &amp; generates the S curve based on the torque required automatically</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-start mb-0"><strong>Door Operator</strong> : VVVF door operating system with close loop control</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-start mb-0"><strong>Door Protection</strong> : Full length infrared light curtain provided for safety of passengers</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-start mb-0"><strong>Human Interface Device</strong> : Stylish Integrated Car operating Panel &amp; Surface mounted Landing Operating Panel with auto atiendant key and auto light and fan function</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-start mb-0"><strong>Operation</strong> : Full Collective Selective</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-start mb-0"><strong>Direction Indicators</strong> : Car &amp; Landing Operating Panels will be equipped with direction and floor indication display for easy facilitation of passengers</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-start mb-0" ><strong>Call Cancellation </strong>: Wrong Destination call can be cancelled by double press of destination button</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className=" text-start mb-0"><strong>Auto on/off </strong>: Ventilation &amp; lighting would have automatic on/off function</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-start mb-0"><strong>Overspeed Protection</strong> : When elevator speed is more then the calibrated speed, the device will automatically stop the elevator motor and activate the car safety device in turn activating the unintended car movement device to stop the car from moving further</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-start mb-0"><strong>Automatic Rescue Device</strong> : Wrong Destination call can be cancelled by double press of destination button</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-start mb-0"><strong>Car Illumination</strong> : LED power saving lighting inside the car for illumination</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-start mb-0"><strong>Car Ventilation</strong> : Cross Flow Ventilation system in the car</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-start mb-0"><strong>Power Supply</strong> : AC415V, 3phase &amp; AC220V , 1phase , 50HZ AC</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-start mb-0"><strong>Phase Loss Protection</strong> : Automatic Phase loss protection system stop the elevator when it senses the loss of one of the three phases</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-start mb-0"><strong>Over – run Protection system</strong> : Up/Down overrun protection System with triple layer limit switch for extra safety</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>






<ConnectForm/>
</>




        </>
    );
}
