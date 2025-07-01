// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ElevatorCarousel from '../components/ElevatorCarousel';
import BlogSection from '../components/BlogSection';
import Testimonials from '../components/Testimonials';
import ConnectForm from '../components/ConnectForm';
import SimpleCarousel from '../components/SimpleCarousel';
export default function Home() {
   const slides = [
    {
      mobile: '/img/mobile/Banner Mobile 1 - Villa Matek.png',
      desktop: '/img/Banner 1 - Villa Matek.png',
    },
    {
      mobile: '/img/mobile/Banner Mobile 2 - Villa Matek.png',
      desktop: '/img/Banner 2 - Villa Matek.png',
    },
    {
      mobile: '/img/mobile/Banner Mobile 3 - Villa Matek.png',
      desktop: '/img/Banner 3 - Villa Matek (1).png',
    },
  ];
    return (
        <>
            <Head>
                <title>VILLA MATEK | Elevator Manufacturers in India - Teknix</title>
                <meta name="description" content="TEKNIX VILLA MATEK is specially designed for residential use; Elevator Manufacturers in India & Elevator Suppliers in Bangalore mix of German Technology" />
                <meta name="keywords" content="Elevator companies in hyderabad, Elevator manufacturers in bangalore, Elevators company in bangalore, Elevator suppliers in bangalore, Elevators manufacturer in Bangalore, Elevator manufacturers in india" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.teknixelevators.com/villa-matek/" />

            </Head>
      <>


<SimpleCarousel slides={slides} showIndicators={true} showControls={true} />



<div>
<h1 className='d-none'>Elevator Manufacturers in India</h1>
  <section className="section" data-aos="fade-up" data-aos-duration={1500}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-11 offset-md-1 d-block mx-auto">
          <p className="text-center text-danger font-28" data-aos="fade-up" data-aos-duration={2000}>VILLA MATEK</p>
          <div className="home-about-heading ">
            <h2 className=" text-center" data-aos="fade-up" data-aos-duration={2500}>DIVE INTO LUXURY AND COMFORT.</h2>
            <p className="font-small text-center w-35 d-block mx-auto light-white font-14  " data-aos="fade-up" data-aos-duration={3000}>TEKNIX VILLAMATEK are specially designed for residential use; incorporating a mix of technology, aesthetics and craftsmanship to provide an essential service to homes whose residents have impaired mobility. Available only in gearless options, and in a wide range of Cabin options to suite diverse needs and tastes.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section position-relative" id="brochure" data-aos="fade-up" data-aos-duration={2500}>
    <div className="container p-0">
      <div className="row py-md-3 py-0 justify-content-center">
        <div className="col-md-3 col-12  ">
          <div className="row Villa Matek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="/img/type.png" className="d-block mx-auto img-fluid" alt="teknix"  width={80}  height={80}   />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Type</p>
                <p className="font-15 mb-0">MRL - Powered by Gearless Traction Machine</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12  ">
          <div className="row Villa Matek-list">
            <div className="col-6 col-md-6 d-flex align-items-center ">
              <Image src="/img/cap.png" className="d-block mx-auto img-fluid" alt="teknix"  width={80}  height={80}   />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Capacity</p>
                <p className="font-15 mb-0">Upto 400kgs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12  ">
          <div className="row Villa Matek-list">
            <div className="col-6 col-md-6 d-flex align-items-center ">
              <Image src="/img/icon-stars.png" className="d-block mx-auto img-fluid" alt="teknix"  width={80}  height={80}   />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Speed</p>
                <p className="font-15 mb-0">0.30 m/s</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12  ">
          <div className="row Villa Matek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="/img/icon-stars(1).png" className="d-block mx-auto img-fluid" alt="teknix"  width={80}  height={80}   />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Landings</p>
                <p className="font-15 mb-0">2 - 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-md-3 py-0 justify-content-center">
        <div className="col-md-3 col-12  ">
          <div className="row Villa Matek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="/img/icon-agent(1).png" className="d-block mx-auto" alt="teknix"  width={80}  height={80}   />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Drive</p>
                <p className="font-15 mb-0">Gearless PMSM/Frequency Controlled</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12  ">
          <div className="row Villa Matek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="/img/operation.png" className="d-block mx-auto" alt="teknix"  width={80}  height={80}   />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Operation</p>
                <p className="font-15 mb-0">Full Collective Selective</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12  ">
          <div className="row Villa Matek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="/img/width.png" className="d-block mx-auto" alt="teknix"  width={80}  height={80}   />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Door Width</p>
                <p className="font-15 mb-0">600/800mm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12  ">
          <div className="row Villa Matek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="/img/height.png" className="d-block mx-auto" alt="teknix"  width={80}  height={80}   />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Door Height</p>
                <p className="font-15 mb-0">2100mm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-md-3">
        <Link href="#" className="text-danger  text-decoration-none font-13 fw-normal letter-spacing text-center">DOWNLOAD VILLA MATEK BROCHURE</Link>
      </div>
    </div>
  </section>
  <section className="section position-relative" id="eleveators">
  <div className="container px-2  ">
    <div className="row sub-section">
      <p className="other-heading2 text-white opacity-100 text-center"> Top Features of Villa Matek</p>
    </div>
    {/*?php

  ?*/}
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">Power
          Saver</h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">Powered by a gearless PMS MOTOR, saving up to 40% power</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Smooth  &  silent
          Operations
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">Teknix Villa elevator comes with Gearless PMSM machine giving ultra silent ride</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Spacious
          Car
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">Designed to keep space utilization in mind giving the maximum usable space considering a wheelchair for physically impaired.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Wide
          Range
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">Wide range of aesthetic options available in doors and fitings</p>
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
                  <p className="other-heading  text-center">
                    Functions of Villa Matek
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Control system</strong> : Multiple microcomputer based close-loop control system with direct landing technology</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Drive </strong>: Frequency controlled permanent magnet synchronous motor based gearless traction machine with dual vented disc brakes</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Curve Generation</strong> : Microcomputer senses the load in the elevator  &  generates the S curve based on the torque required automatically</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Door Operator</strong> : VVVF door operating system with close loop control</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Door Protection</strong> : Full length infrared light curtain provided for safety of passengers</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Human Interface Device</strong> : Stylish Integrated Car operating Panel  &  Surface mounted Landing Operating Panel with auto atiendant key and auto light and fan function</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Operation</strong> : Full Collective Selective</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Direction Indicators</strong> : Car  &  Landing Operating Panels will be equipped with direction and floor indication display for easy facilitation of passengers</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Call Cancellation </strong> : Wrong Destination call can be cancelled by double press of destination button</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className=" text-md-start text-center mb-0"><strong>Auto on/off </strong>: Ventilation  &  lighting would have automatic on/off function</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Overspeed Protection</strong> : When elevator speed is more then the calibrated speed, the device will automatically stop the elevator motor and activate the car safety device in turn activating the unintended car movement device to stop the car from moving further</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Automatic Rescue Device</strong> : Wrong Destination call can be cancelled by double press of destination button</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Car Illumination</strong> : LED power saving lighting inside the car for illumination</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Car Ventilation</strong> : Cross Flow Ventilation system in the car</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Power Supply</strong> : AC415V, 3phase  &  AC220V , 1phase , 50HZ AC</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Phase Loss Protection</strong> : Automatic Phase loss protection system stop the elevator when it senses the loss of one of the three phases</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-md-start text-center mb-0"><strong>Over – run Protection system</strong> : Up/Down overrun protection System with triple layer limit switch for extra safety</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</div>

 
 





<ConnectForm/>
</>




        </>
    );
}
