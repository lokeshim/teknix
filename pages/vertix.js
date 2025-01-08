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
      mobile: 'img/mobile/Banner Mobile 1 - Vertix.png',
      desktop: 'img/Elevators/v/Banner 1.webp',
    },
    {
      mobile: 'img/mobile/Banner Mobile 2 - Vertix.png',
      desktop: 'img/Elevators/v/Banner 2.webp',
    },
    {
      mobile: 'img/mobile/Banner Mobile 3 - Vertix.png',
      desktop: 'img/Elevators/v/Banner 3.webp',
    },
  ];
    return (
        <>
            <Head>
                <title>VERTIX | Residential Elevators in Hyderabad - Teknix Elevators</title>
                <meta name="description" content="TEKNIX VERTIX ELEVATORS is specially designed for residential use, Elevator Manufacturers in Hyderabad & Suppliers in Bangalore. Mix of German Technology" />
                <meta name="keywords" content="Residential Elevators In Hyderabad, Residential Lifts In Bangalore, Elevator Manufacturers In Hyderabad, Elevator Suppliers In Bangalore" />
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
          <p className="text-center text-danger font-28" data-aos="fade-up" data-aos-duration={2000}>VERTIX</p>
          <div className="home-about-heading ">
            <h2 className=" text-center" data-aos="fade-up" data-aos-duration={2500}>WHERE TECHNOLOGY MEETS COMFORT.</h2>
            <p className="font-small text-center w-35 d-block mx-auto light-white font-14  " data-aos="fade-up" data-aos-duration={3000}>Introducing the all-new Next Generation Enviro-Friendly Vertix range of elevators from Teknix, in prestigious collaboration with SRH Aufzüge GmbH. Indulge in the quintessence of German engineering and craftsmanship, where every nuance is thoughtfully curated to deliver an unparalleled experience of opulence and comfort. </p>
            <p className="font-small text-center w-35 d-block mx-auto light-white font-14  " data-aos="fade-up" data-aos-duration={3000}>Experience the next level of modern living with Vertix, our meticulously crafted elevator range, designed for mass housing projects yet embodying an unmatched sense of refined luxury. Every journey with Vertix is seamless, blending essential functionality with advanced technology for efficiency and eco-conscious performance.</p>
            <p className="font-small text-center w-35 d-block mx-auto light-white font-14  " data-aos="fade-up" data-aos-duration={3000}>Discover how Vertix redefines sophistication, combining cutting-edge design with sustainable elegance. With Teknix, transform your space into a sanctuary that radiates style, functionality, and the distinguished quality that only we can deliver.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section position-relative" id="brochure" data-aos="fade-up" data-aos-duration={2500}>
    <div className="container p-0">
      <div className="row py-md-2 py-0 justify-content-center">
        <div className="col-md-3 col-12 m-20">
          <div className="row Vertix-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="img/type.png" className="d-block mx-auto img-fluid" alt="teknix"  width={80}
                height={80}  />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Type</p>
                <p className="font-15 mb-0"> MRL/MMR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Vertix-list">
            <div className="col-6 col-md-6 d-flex align-items-center ">
              <Image src="img/cap.png" className="d-block mx-auto img-fluid" alt="teknix"  width={80}
                height={80} />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Capacity</p>
                <p className="font-15 mb-0">408-1020 kgs ( 6-15 Pax)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Vertix-list">
            <div className="col-6 col-md-6 d-flex align-items-center ">
              <Image src="img/icon-stars.png" className="d-block mx-auto img-fluid" alt="teknix"  width={80}
                height={80} />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Speed</p>
                <p className="font-15 mb-0">1 -1.5 m/s</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Vertix-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="img/icon-stars(1).png" className="d-block mx-auto img-fluid" alt="teknix"  width={80}
                height={80} />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Landings</p>
                <p className="font-15 mb-0">2 - 15</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Vertix-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="img/icon-agent(1).png" className="d-block mx-auto" alt="teknix" width={80}
                height={80} />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Drive</p>
                <p className="font-15 mb-0">Gearless PMSM/ Frequency Controlled</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Vertix-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="img/operation.png" className="d-block mx-auto" alt="teknix"
                width={80}
                height={80} />
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
          <div className="row Vertix-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="img/width.png" className="d-block mx-auto" alt="teknix"  width={80}
                height={80} />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Door Width</p>
                <p className="font-15 mb-0">700/800/900mm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Vertix-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="img/height.png" className="d-block mx-auto" alt="teknix"  width={80}
                height={80} />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Door Height</p>
                <p className="font-15 mb-0">2000mm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-md-3">
        <a href="#" className="text-danger  text-decoration-none font-13 fw-normal letter-spacing text-center">DOWNLOAD VERTIX BROCHURE</a>
      </div>
    </div>
  </section>


<section className="section position-relative" id="eleveators">
  <div className="container px-2  ">
    <div className="row sub-section">
      <div className="col-md-12">
        <h6 className="other-heading2 text-white opacity-100 text-center">VERTIX 2200 GEARLESS ELEVATOR
        </h6>
        <p className="text-white text-center opacity-100">Introducing the Vertix 2200: a distinguished gearless, machine-room-less elevator that embodies luxury and precision in vertical transportation.</p>
        <p className="fw-bold" />
      </div>
    </div>
    {/*?php

  ?*/}
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">Spatial Efficiency Technology</h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">Innovative machine-room-less design optimizes usable space and reduces construction costs.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Performance Maximization System
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">Equipped with cutting-edge PM-Servo motor technology for superior speed and reliability.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Intelligent Control Mechanism
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">Advanced controllers with direct landing technology and self-diagnostic capabilities maximize operational uptime.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          IoT-Enhanced Microcontroller
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">Proactively reduces breakdowns through an intelligent, seamless operating system.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Precision Leveling Engine
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">Real-time RPM feedback via rotary encoder ensures smooth starts/stops and precise leveling.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Reliability Enhancement Technology
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28"> Surface Mount Technology (SMT) for top-tier performance and scalability.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Aerospace-Grade Safety Circuit
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">Actel Class FPGA chip-based design ensures fail-safe, aerospace-grade safety standards.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Whisper-Quiet Operation System
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">PWM Dead Time Compensation minimizes noise and energy loss.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Rapid Processing Engine 
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">Cortex M4 MCU-driven control system for quick, dependable response times.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Ultra-Smooth Ride Technology
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">
          Rotary SINCOS encoder delivers precise leveling and a flawless ride.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Direct Adaptive Landing Interface 
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">
          Eliminates creeping speed for a refined S-curve ride experience.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Closed-Loop Drive Integration
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">Multi-computer integration for the smoothest starts and stops.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Vibration Isolation System
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28"> Sorbothane guide shoes (endorsed by NASA) ensure silent, vibration-free movement.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Continuous Lubrication Technology
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">Automatic lubrication system maintains optimal, smooth performance.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
          Fluidic Door Operation System
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-md-start text-center font-28">Roll control and PMS motor technology guarantee reliable, effortless door operation with Active Motion Variable Frequency Drive.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 d-flex align-items-center">
        <p className="py-md-3 py-2 font-32 text-center  ">Elevate your project with the Vertix 2200, where cutting-edge innovation harmonizes with unparalleled luxury and reliability.
        </p>
      </div>
    </div>
  </div>
</section>


 
 <div>
  <section className="section position-relative" id="table" data-aos="fade-up" data-aos-duration={2500}>
    <div className="container p-0">
      <div className="row">
        <div className="col-md-12">
          <p className="other-heading2 text-white active text-center">EXQUISITE INGENUITY. AVANT-GARDE DESIGN.</p>
          <p className="text-white text-center">Delve into a distinguished array of cutting-edge safety technologies, meticulously crafted and seamlessly integrated to forge an extraordinary symbiosis of vertical mobility and unparalleled user protection. Each component has been thoughtfully designed with the utmost care and precision, prioritizing the safety and well-being of passengers in every ascent and descent.
          </p>
          <p className="text-white text-center">In an age where safety is paramount, our commitment to safeguarding occupants is unwavering. Every feature within this elite suite has been engineered not only to meet but to exceed industry standards, providing peace of mind through innovative solutions that anticipate and mitigate risks. From advanced braking systems to intelligent emergency protocols, each element reflects a profound dedication to creating a secure environment for users.
          </p>
          <p className="text-white text-center">This holistic approach to safety ensures that every ride is not just a journey, but a reassuring experience, underscoring our relentless pursuit of excellence in vertical mobility. Elevate your safety expectations with these exceptional solutions, where luxurious innovation converges with the highest standards of protection, making every elevator ride a testament to our commitment to user safety.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="section position-relative" data-aos="fade-up" data-aos-duration={2500}>
    <div className="container p-0">
      <div className="row">
        <div className="col-md-12 table-responsive">
          <p /><p /><p /><p /><p /><p /><p /><p /><p /><p /><p /><p /><table className="table text-md-start text-center post-title text-medium text-extra-dark-gray ">
            <thead className="thead-dark text-large">
              <tr className>
                <th scope="col fs-2 font-title">
                  <p className="other-heading text-white   text-center">KEY SAFETY FEATURES</p>
                </th>
              </tr>
            </thead>
            <tbody>
          
              <tr>
                
                <td>
                  <p className="mb-0"><strong>Dynamic Motion Safeguard:</strong><span> UCM Device provides rigorous protection against unintended car movement caused by brake failure or cable snapping.</span>
                  </p></td>
              </tr>
              <tr>
                <td>
                  <p className="mb-0"><strong>Centrifugal Over-Speed Safety Shield:</strong><span> A solenoid-controlled, bi-directional mechanism to secure occupants in the event of rope failure.</span>
                  </p></td>
              </tr>
              <tr>
                <td>
                  <p className="mb-0"><strong>Electromechanical Integrity Lock System:</strong><span> Twin crimper locking technology ensures absolute passenger safety in emergencies.</span>
                  </p></td>
              </tr>
              <tr>
                <td>
                  <p className="mb-0"><strong>Anti-Squeeze Protection Protocol:</strong><span> Advanced door system paired with light curtains, reversing movement upon any obstruction detection.</span>
                  </p></td>
              </tr>
              <tr>
                <td>
                  <p className="mb-0"><strong>Under Door Safety Barrier:</strong><span> Specially designed fascia provides added protection against potential injuries.</span>
                  </p></td>
              </tr>
              <tr>
                <td>
                  <p className="mb-0"><strong>Teknix Emergency Retrieval System:</strong><span> Automatic rescue mechanism that swiftly returns the elevator to the nearest floor during power outages.</span>
                  </p></td>
              </tr>
              <tr>
                <td>
                  <p className="mb-0"><strong>Dual Vented Brake Precision Technology:</strong><span> High-performance dual disc brakes ensure smooth, reliable deceleration and enhanced control.</span>
                  </p></td>
              </tr>
              <tr>
                <td>
                  <p className="mb-0"><strong>SMARTSENSE Braking Intelligence:</strong><span> Smart braking system that engages automatically to prevent unintended descent during motor power loss.</span>
                  </p></td>
              </tr>
              <tr>
                <td>
                  <p className="mb-0"><strong>Precision Overrun Protection System:</strong><span> Three-stage terminal limit cutoff for safe response to overshoot or undershoot incidents.</span>
                  </p></td>
              </tr>
              <tr>
                <td>
                  <p className="mb-0"><strong>Quad-Fastening Motor Stabilization Technology:</strong><span> An industry-first innovation enhancing motor stability and overall safety.</span>
                  </p></td>
              </tr>
              <tr>
                <td>
                  <p className="mb-0"><strong>Invisible Safety Barrier Technology:</strong><span> Dense infrared curtain creates an invisible safety net at the entrance, responding instantly to presence.</span>
                  </p></td>
              </tr>
              <tr>
                <td className="border-0">
                  <p className="mb-0"><strong>CARGuard Door Safety Locking Mechanism:</strong><span> Specifically designed to secure children and passengers, ensuring enhanced occupant safety.</span>
                  </p></td>
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
