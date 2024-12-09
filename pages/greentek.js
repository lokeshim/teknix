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
      mobile: 'img/mobile/Banner Mobile 1 - Greentek.png',
      desktop: 'img/Elevators/G/Banner 1.webp',
    },
    {
      mobile: 'img/mobile/Banner Mobile 2 - Greentek.png',
      desktop: 'img/Elevators/G/Banner 2.webp',
    },
    {
      mobile: 'img/mobile/Banner Mobile 3 - Greentek.png',
      desktop: 'img/Elevators/G/Banner 3.webp',
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
    <div className="container-fluid px-md-5 ">
      <div className="row">
        <div className="col-md-11 offset-md-1 d-block mx-auto">
          <p className="text-center text-danger font-28" data-aos="fade-up" data-aos-duration={2000}>Greentek X2</p>
          <div className="home-about-heading ">
            <h2 className=" text-center" data-aos="fade-up" data-aos-duration={2500}>TIME TO SEE THE WORLD FROM A NEW PERSPECTIVE.</h2>
            <p className="font-small text-center d-block mx-auto light-white font-14  " data-aos="fade-up" data-aos-duration={3000}>Teknix Greentek X2 is a new generation elevators made with finest german craftship and years of research and development that has gone into the minutest detail to make it technological marvel. Teknix Greentek X2 is born with state of the art critical components like new generation ultra high precision integrated close loop VVVF drive with DTI and Direct Landing Technology and stylish human interface devices together outperform to give a impeccable elevator ride.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section position-relative" id="brochure" data-aos="fade-up" data-aos-duration={2500}>
    <div className="container p-0">
      <div className="row py-md-3 py-0 justify-content-center">
        <div className="col-md-3 col-12 m-20">
          <div className="row Greentek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="img/type.png" className="d-block mx-auto img-fluid" alt="teknix"  width={80}
                height={80} />
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
          <div className="row Greentek-list">
            <div className="col-6 col-md-6 d-flex align-items-center ">
              <Image src="img/cap.png" className="d-block mx-auto img-fluid" alt="teknix"  width={80}
                height={80} />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Capacity</p>
                <p className="font-15 mb-0">408kgs- 1632kgs( 6-24 Pax )</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Greentek-list">
            <div className="col-6 col-md-6 d-flex align-items-center ">
              <Image src="img/icon-stars.png" className="d-block mx-auto img-fluid" alt="teknix"  width={80}
                height={80} />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Speed</p>
                <p className="font-15 mb-0">1.00m/s - 3.0m/s</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Greentek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="img/icon-stars(1).png" className="d-block mx-auto img-fluid" alt="teknix"  width={80}
                height={80} />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Landings</p>
                <p className="font-15 mb-0">2 - 30</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Greentek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="img/icon-agent(1).png" className="d-block mx-auto" alt="teknix"  width={80}
                height={80} />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Drive</p>
                <p className="font-15 mb-0">Gearless PMSM/Frequency Controlled</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row Greentek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="img/operation.png" className="d-block mx-auto" alt="teknix"  width={80}
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
          <div className="row Greentek-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="img/width.png" className="d-block mx-auto" alt="teknix"  width={80}
                height={80} />
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
          <div className="row Greentek-list">
            <div className="col-4 col-md-6 d-flex align-items-center">
              <Image src="img/height.png" className="d-block mx-auto" alt="teknix" width={80}
                height={80} />
            </div>
            <div className="col-8 col-md-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-15 my-1">Door Height</p>
                <p className="font-15 mb-0">2100mm- 2400mm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-md-3">
        <a href="#" className="text-danger  text-decoration-none font-13 fw-normal letter-spacing text-center">DOWNLOAD Greentek X2 BROCHURE</a>
      </div>
    </div>
  </section>
  <section className="section position-relative" id="eleveators">
  <div className="container   ">
    <div className="row sub-section">
      <h6 className="other-heading2 text-white">INTRODUCING THE GREENTEK X2: LUXURY REDEFINED IN GEARLESS, MACHINE-ROOM-LESS ELEVATION</h6>
      <p>
        The GREENTEK X2 represents the pinnacle of luxury and precision in vertical transportation. This advanced, gearless, machine-room-less elevator is meticulously designed to enhance both spatial efficiency and performance, setting new industry benchmarks.
      </p>
    </div>
    {/*?php

  ?*/}
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">Spatial Efficiency Technology</h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28"> Innovative machine-room-less design optimizes usable space and reduces construction costs.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          Performance Maximization System
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">Equipped with cutting-edge PM-Servo motor technology for superior speed and reliability.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          Intelligent Control Mechanism
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">Advanced controllers with direct landing technology and self-diagnostic capabilities maximize operational uptime.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          IoT-Enhanced Microcontroller:
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">Proactively reduces breakdowns through an intelligent, seamless operating system.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          Precision Leveling Engine
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">Real-time RPM feedback via rotary encoder ensures smooth starts/stops and precise leveling.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          Reliability Enhancement Technology
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">Surface Mount Technology (SMT) for top-tier performance and scalability.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          Aerospace-Grade Safety Circuit
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">Actel Class FPGA chip-based design ensures fail-safe, aerospace-grade safety standards.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          Whisper-Quiet Operation System
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">PWM Dead Time Compensation minimizes noise and energy loss.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          Rapid Processing Engine
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">Cortex M4 MCU-driven control system for quick, dependable response times.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          Ultra-Smooth Ride Technology
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">Rotary SINCOS encoder delivers precise leveling and a flawless ride.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          Direct Adaptive Landing Interface
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">Eliminates creeping speed for a refined S-curve ride experience.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          Closed-Loop Drive Integration
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">
          Multi-computer integration for the smoothest starts and stops.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          Vibration Isolation System
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">
          Sorbothane guide shoes (endorsed by NASA) ensure silent, vibration-free movement.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          Continuous Lubrication Technology 
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">
          Automatic lubrication system maintains optimal, smooth performance.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex align-items-center">
        <h2 className="other-heading2 text-white m-20 active text-start">
          Fluidic Door Operation System
        </h2>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <p className="p-20 text-start font-28">
          Roll control and PMS motor technology guarantee reliable, effortless door operation with Active Motion Variable Frequency Drive.
        </p>
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
                    UNMATCHED SAFETY FEATURES OF THE GREENTEK X2
                  </p>
                  <p className="text-start">The GREENTEK X2 is equipped with a comprehensive suite of safety features, ensuring the highest standards of passenger security and reliability in every journey.</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="text-start mb-0"><strong>Dynamic Motion Safeguard:</strong><span> UCM Device provides rigorous protection against unintended car movement caused by brake failure or cable snapping. </span></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-start mb-0"><strong>Centrifugal Over-Speed Safety Shield:</strong><span> A solenoid-controlled, bi-directional mechanism to secure occupants in the event of rope failure. </span></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-start mb-0"><strong>Electromechanical Integrity Lock System:</strong><span> Twin crimper locking technology ensures absolute passenger safety in emergencies. </span></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-start mb-0"><strong>Anti-Squeeze Protection Protocol:</strong><span> Advanced door system paired with light curtains, reversing movement upon any obstruction detection. </span></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-start mb-0"><strong>Under Door Safety Barrier:</strong><span> Specially designed fascia provides added protection against potential injuries. </span></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-start mb-0"><strong>Teknix Emergency Retrieval System:</strong><span> Automatic rescue mechanism that swiftly returns the elevator to the nearest floor during power outages. </span></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-start mb-0"><strong>Dual Vented Brake Precision Technology:</strong><span> High-performance dual disc brakes ensure smooth, reliable deceleration and enhanced control. </span></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-start mb-0"><strong>SMARTSENSE Braking Intelligence:</strong><span> Smart braking system that engages automatically to prevent unintended descent during motor power loss. </span></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-start mb-0"><strong>Precision Overrun Protection System:</strong><span> Three-stage terminal limit cutoff for safe response to overshoot or undershoot incidents. </span></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-start mb-0"><strong>Quad-Fastening Motor Stabilization Technology:</strong><span> An industry-first innovation enhancing motor stability and overall safety. </span></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-start mb-0"><strong>Invisible Safety Barrier Technology:</strong><span> Dense infrared curtain creates an invisible safety net at the entrance, responding instantly to presence. </span></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-start mb-0"><strong>CARGuard Door Safety Locking Mechanism:</strong><span> Specifically designed to secure children and passengers, ensuring enhanced occupant safety. </span></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  <section className="section position-relative bg-dark" id="experience" data-aos="fade-up" data-aos-duration={2500}>
    <div className="container px-md-3 px-3">
      <div className="row">
        <div className="col-md-12">
          <p className="other-heading text-center">
            ECO-CONSCIOUS DRIVEN SOLUTIONS FOR A SUSTAINABLE FUTURE
          </p>
        </div>
        <div className="col-md-12">
          <p className="text-center  p-10"><span>The GREENTEK X2 goes beyond traditional safety standards, setting a new benchmark in elevator security and reliability. Experience a refined sense of safety with Teknix, where cutting-edge technology meets peace of mind.</span></p>
          <p className="text-center p-10"><span>At Teknix, our commitment to sustainability drives every aspect of our design and engineering. Understanding the importance of energy conservation for a healthier planet, we create products that minimise&nbsp; energy consumption while advancing toward a carbon-negative future. As an IGBC-certified company on the Green Building Product list, Teknix proudly leads the way in environmental stewardship with advanced, eco-friendly solutions.</span></p>
        </div>
        <p className="text-center"><strong>Key Eco-Friendly Features:</strong></p>
        <ul className="list-unstyled">
          <li className="text-center">
            <p className="text-center p-10"><strong>Ultra-Efficient Motors:</strong><span> Our motors are engineered for minimal power usage, reducing environmental impact while ensuring top-tier performance.</span></p>
          </li>
          <li className="text-center">
            <p className="text-center p-10"><strong>Hibernation Mode:</strong><span> Teknix elevators include a Hibernation Mode that conserves energy during inactivity, directly supporting carbon neutrality.</span></p>
          </li>
          <li className="text-center">
            <p className="text-center p-10"><strong>Automatic Fan and Light Controls:</strong><span> Smart technology deactivates fans and lights when idle, significantly cutting energy use and emissions.</span></p>
          </li>
          <li className="text-center">
            <p className="text-center p-10"><strong>Auto Car Display Cut-Off:</strong><span> The display system powers down in Hibernation Mode, maximizing energy savings without compromising functionality.</span></p>
          </li>
          <li className="text-center">
            <p className="text-center p-10"><strong>Eco-Friendly LED Lighting:</strong><span> State-of-the-art green LED lights provide optimal illumination with low power consumption, reducing carbon footprints.</span></p>
          </li>
        </ul>
        <p className="text-center p-10"><span>Choosing Teknix means selecting both high performance and a sustainable future. Together, we can create energy-efficient spaces that make a positive impact on the planet. Embrace the future of eco-conscious innovation with Teknix and join us in shaping a carbon-negative tomorrow.</span></p>
      </div>
    </div>
  </section>

 





<ConnectForm/>
</>




        </>
    );
}
