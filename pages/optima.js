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
      mobile: 'img/mobile/Banner Mobile 1 - Optima.png',
      desktop: 'img/optima banner.png',
    },
    {
     mobile: 'img/mobile/Banner Mobile 2 - Optima.png',
      desktop: 'img/Elevators/o/Banner 2.webp',
    },
    {
    mobile: 'img/mobile/Banner Mobile 3 - Optima.png',
      desktop: 'img/Elevators/o/Banner 3.webp',
    },
  ];
    return (
        <>
            <Head>
                <title>OPTIMA | Best Home Elevators in Bangalore | Teknix Elevators</title>
                <meta name="description" content="Teknix Elevators is Best Home Elevators in Bangalore manufacturer and of modern passenger and freight elevators. Elevator and Lift Manufacturers in Hyderabad" />
                <meta name="keywords" content="Best Elevator Companies In India, Best Elevator Company In Bangalore, Best Home Elevators In Bangalore, Elevator Companies In India, Home Elevators In Bangalore" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.teknixelevators.com/optima" />

            </Head>
      <>


  <SimpleCarousel slides={slides} />


      <h1 className='d-none'>Optima</h1>
  <section className="section" data-aos="fade-up" data-aos-duration={1500}>
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-11 offset-md-1 d-block mx-auto">
          <p
            className="text-center text-danger font-28"
            data-aos="fade-up"
            data-aos-duration={2000}
          >
            OPTIMA
          </p>
          <div className="home-about-heading ">
            <h2
              className=" text-center"
              data-aos="fade-up"
              data-aos-duration={2500}
            >
              THE SIMPLE YET EFFECTIVE ONE.
            </h2>
            <p
              className="font-small text-center w-35 d-block mx-auto light-white font-14"
              data-aos="fade-up"
              data-aos-duration={3000}
            >
              The all new OPTIMA redefines simplicity giving you vertical
              mobility solution with a range of technologically advanced
              features with German craftsmanship at its heart. Experience
              elevators crafted for unparalleled comfort and performance to suit
              you.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="section position-relative"
    id="brochure"
    data-aos="fade-up"
    data-aos-duration={2500}
  >
    <div className="container p-0">
      <div className="row py-md-3 py-0 justify-content-center">
        <div className="col-md-3 col-12 m-20">
          <div className="row optima-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image
                src="img/type.png"
                className="d-block mx-auto img-fluid"
                alt="optima features"
                width={80}
                height={80}
              />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div className="d-flex">
                <div>
                  <p className="fw-bold font-15 my-1">Type</p>
                  <p className="font-15 mb-0"> MRL/MMR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row optima-list">
            <div className="col-6 col-md-6 d-flex align-items-center ">
              <Image
                src="img/cap.png"
                className="d-block mx-auto img-fluid"
                alt="optima features"
                width={80}
                height={80}
              />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div className="d-flex">
                <div>
                  <p className="fw-bold font-15 my-1">Capacity</p>
                  <p className="font-15 mb-0">408-884 kg (6-13 Pax) </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row optima-list">
            <div className="col-6 col-md-6 d-flex align-items-center ">
              <Image
                src="img/icon-stars.png"
                className="d-block mx-auto img-fluid"
                alt="optima features"
                width={80}
                height={80}
              />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div className="d-flex">
                <div>
                  <p className="fw-bold font-15 my-1">Speed</p>
                  <p className="font-15 mb-0">1MPS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row optima-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image
                src="img/icon-stars(1).png"
                className="d-block mx-auto img-fluid"
                alt="optima features"
                width={80}
                height={80}
              />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div className="d-flex">
                <div>
                  <p className="fw-bold font-15 my-1">Landings</p>
                  <p className="font-15 mb-0">2 - 10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row optima-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image
                src="img/icon-agent(1).png"
                className="d-block mx-auto"
                alt="optima features"
                width={80}
                height={80}
              />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div className="d-flex">
                <div>
                  <p className="fw-bold font-15 my-1">Drive</p>
                  <p className="font-15 mb-0">
                    Gearless PMSM/Frequency Controlled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row optima-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="img/operation.png" className="d-block mx-auto" alt="optima features"
                width={80}
                height={80} />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div className="d-flex">
                <div>
                  <p className="fw-bold font-15 my-1">Operation</p>
                  <p className="font-15 mb-0">Full Collective Selective</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row optima-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="img/width.png" className="d-block mx-auto" alt="optima features"
                width={80}
                height={80} />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div className="d-flex">
                <div>
                  <p className="fw-bold font-15 my-1">Door Width</p>
                  <p className="font-15 mb-0">700mm / 800mm / 900mm </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 m-20">
          <div className="row optima-list">
            <div className="col-6 col-md-6 d-flex align-items-center">
              <Image src="img/height.png" className="d-block mx-auto" alt="optima features"
                width={80}
                height={80} />
            </div>
            <div className="col-6 col-md-6 d-flex align-items-center">
              <div className="d-flex">
                <div>
                  <p className="fw-bold font-15 my-1">Door Height</p>
                  <p className="font-15 mb-0">2000mm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-md-3">
        <a
          href="#"
          className="text-danger  text-decoration-none font-13 fw-normal letter-spacing text-center"
        >
          DOWNLOAD OPTIMA BROCHURE
        </a>
      </div>
    </div>
  </section>



 
  <section className="section position-relative" id="eleveators">
    <div className="container px-2  ">
      <div className="row">
        <div className="col-md-12 sub-section">
          <h6 className="other-heading2 text-white  text-center">UNCOMPROMISING SAFETY FOR ULTIMATE OCCUPANT PROTECTION</h6>
          <p className=' text-center'>
            In a world where safety is paramount, Teknix stands at the forefront of occupant protection. Each component of our elite suite is meticulously engineered to exceed industry standards, ensuring peace of mind through innovative solutions that proactively mitigate risks. From state-of-the-art braking systems to advanced emergency protocols, every detail reflects our commitment to creating a secure, dependable environment for all.
          </p>
        </div>
      </div>
      {/*?php

  ?*/}
      <div className="row">
        <div className="col-md-7 d-flex align-items-center">
          <h2 className="other-heading2 text-white m-20 active text-md-start text-center">Dynamic Motion Safeguard</h2>
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <p className="p-20 text-md-start text-center font-28">The UCM Device provides advanced protection against unintended car movement due to brake failure or cable snapping.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 d-flex align-items-center">
          <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
            Centrifugal Over-Speed Safety Shield
          </h2>
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <p className="p-20 text-md-start text-center font-28">A solenoid-controlled bi-directional mechanism ensures maximum occupant security in the event of rope failure.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 d-flex align-items-center">
          <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
            Electromechanical Integrity Lock System
          </h2>
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <p className="p-20 text-md-start text-center font-28"> Twin crimper locking technology guarantees unwavering safety for passengers during emergency situations.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 d-flex align-items-center">
          <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
            Anti-Squeeze Protection Protocol
          </h2>
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <p className="p-20 text-md-start text-center font-28">A cutting-edge door system, combined with light curtains, reverses movement upon detecting any obstruction, ensuring safety for passengers.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 d-flex align-items-center">
          <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
            Under Door Safety Barrier
          </h2>
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <p className="p-20 text-md-start text-center font-28"> An innovative fascia design that provides enhanced protection from potential injuries.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 d-flex align-items-center">
          <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
            Teknix Emergency Retrieval System
          </h2>
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <p className="p-20 text-md-start text-center font-28">A fully automated rescue mechanism that efficiently brings the elevator to the nearest floor during power outages.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 d-flex align-items-center">
          <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
            Dual Vented Brake Precision Technology
          </h2>
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <p className="p-20 text-md-start text-center font-28">High-performance dual disc brakes provide smooth, reliable deceleration and superior control.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 d-flex align-items-center">
          <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
            SMARTSENSE Braking Intelligence
          </h2>
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <p className="p-20 text-md-start text-center font-28">An intelligent braking system that engages automatically to prevent unintended descent during motor power loss.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 d-flex align-items-center">
          <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
            Precision Overrun Protection System
          </h2>
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <p className="p-20 text-md-start text-center font-28">A sophisticated three-stage terminal limit cutoff ensures passenger safety during overshoot or undershoot incidents.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 d-flex align-items-center">
          <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
            Quad-Fastening Motor Stabilization Technology
          </h2>
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <p className="p-20 text-md-start text-center font-28">An industry-leading innovation that enhances motor stability, ensuring consistent and safe operation.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 d-flex align-items-center">
          <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
            Invisible Safety Barrier Technology
          </h2>
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <p className="p-20 text-md-start text-center font-28">A dense infrared curtain creates an invisible safety net at the entrance, responding instantaneously to any presence in its detection zone.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 d-flex align-items-center">
          <h2 className="other-heading2 text-white m-20 active text-md-start text-center">
            CAR Guard Door Safety Locking Mechanism
          </h2>
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <p className="p-20 text-md-start text-center font-28">A pioneering system designed to secure children and other occupants within the elevator, enhancing overall safety.
          </p>
        </div>
      </div>
    </div>
  </section>
 <section
  className="section position-relative"
  id="table"
  data-aos="fade-up"
  data-aos-duration={2500}
>
  <div className="container p-0">
    <div className="row">
      <div className="col-md-12">
        {/* Section Title */}
        <div className="">
          <p className="other-heading text-md-start text-center font-title">
            Functions of Optima
          </p>
        </div>

        {/* Functions List */}
        <div className="functions-list">
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Control system:</strong> Multiple microcomputer-based
              close-loop control system with direct landing technology
            </p>
          </div>
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Drive:</strong> Frequency-controlled permanent magnet
              synchronous motor-based gearless traction machine with dual vented
              disc brakes
            </p>
          </div>
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Curve Generation:</strong> Microcomputer senses the load
              in the elevator & generates the S curve based on the torque
              required automatically
            </p>
          </div>
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Door Operator:</strong> VVVF door operating system with
              close-loop control
            </p>
          </div>
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Door Protection:</strong> Full-length infrared light
              curtain provided for the safety of passengers
            </p>
          </div>
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Human Interface Device:</strong> Stylish Integrated Car
              Operating Panel & Surface-mounted Landing Operating Panel with
              auto attendant key and auto light and fan function
            </p>
          </div>
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Operation:</strong> Full Collective Selective
            </p>
          </div>
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Direction Indicators:</strong> Car & Landing Operating
              Panels will be equipped with direction and floor indication
              display for easy facilitation of passengers
            </p>
          </div>
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Call Cancellation:</strong> Wrong Destination call can be
              cancelled by double pressing the destination button
            </p>
          </div>
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Auto on/off:</strong> Ventilation & lighting would have an
              automatic on/off function
            </p>
          </div>
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Overspeed Protection:</strong> When the elevator speed is
              more than the calibrated speed, the device will automatically stop
              the elevator motor and activate the car safety device in turn
              activating the unintended car movement device to stop the car from
              moving further
            </p>
          </div>
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Automatic Rescue Device:</strong> Wrong Destination call
              can be cancelled by double pressing the destination button
            </p>
          </div>
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Car Illumination:</strong> LED power-saving lighting
              inside the car for illumination
            </p>
          </div>
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Car Ventilation:</strong> Cross Flow Ventilation system in
              the car
            </p>
          </div>
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Power Supply:</strong> AC415V, 3phase & AC220V, 1phase,
              50HZ AC
            </p>
          </div>
          <div className="p-10 border-bottom">
            <p className="text-md-start text-center mb-0">
              <strong>Phase Loss Protection:</strong> Automatic Phase loss
              protection system stops the elevator when it senses the loss of
              one of the three phases
            </p>
          </div>
          <div className="p-10 ">
            <p className="text-md-start text-center mb-0">
              <strong>Over – run Protection system:</strong> Up/Down overrun
              protection System with triple-layer limit switch for extra safety
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






<ConnectForm/>
</>




        </>
    );
}
