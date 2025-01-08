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
    mobile: 'img/mobile/Banner Mobile 1 - Tmw 15.png',
    desktop: 'img/Esculators/15/1.webp',
    },
    {
    mobile: 'img/mobile/Banner Mobile 2 - Tmw 15.png',
    desktop: 'img/Esculators/15/2.webp',
    },
    {
    mobile: 'img/mobile/Banner Mobile 3 - Tmw 15.png',
    desktop: 'img/Esculators/15/3.webp',
    },
  ];
    return (
        <>
            <Head>
                <title>TMW 15 | Escalators for offices and commercial - Teknix Elevators</title>
                <meta name="description" content="Escalator manufacturers in Bangalore and elevator manufacturers in Bangalore. Teknix Moving walks Horizontal Span is up to 150 meters and can run for 16 hours" />
                <meta name="keywords" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="#" />

            </Head>
      <>


<SimpleCarousel slides={slides} showIndicators={true} showControls={true} />


<div>
  <section className="section" data-aos="fade-up" data-aos-duration={1500}>
    <div className="container-fluid  ">
      <div className="row">
        <div className="col-md-11 offset-md-1 d-block mx-auto">
          <p className="text-center text-danger font-28" data-aos="fade-up" data-aos-duration={2000}>TMW 15</p>
          <div className="home-about-heading text-center">
            <h2 className=" text-center" data-aos="fade-up" data-aos-duration={2500}>MOVING MADE SIMPLE AND EASY.</h2>
            <p className="fs-5 text-center w-35 d-block mx-auto light-white font-14 text-center" data-aos="fade-up" data-aos-duration={3000}>Teknix Moving walks Horizontal Span is up to 150 meters and can run continuously for 16 hours. </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section position-relative" id="brochure" data-aos="fade-up" data-aos-duration={2500}>
    <div className="container p-0">
      <div className="row">
        <div className="col-md-3   d-flex align-items-center justify-content-center">
          <div className="row optima-list m-30">
            <div className="col-6 d-flex align-items-center ">
              <Image src="img/TESC1.png" className="d-block mx-auto" alt="teknix"  width={80}  height={80}  />
            </div>
            <div className="col-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-13 mb-1">Rectangle tube Truss
                  with precision welding</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3   d-flex align-items-center justify-content-center">
          <div className="row optima-list m-30">
            <div className="col-6 d-flex align-items-center ">
              <Image src="img/TESC2.png" className="d-block mx-auto" alt="teknix"  width={80}  height={80}  />
            </div>
            <div className="col-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-13 mb-1">Stainless Steel Or Alluminuim
                  Steps as per clients choice</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3   d-flex align-items-center justify-content-center">
          <div className="row optima-list m-30">
            <div className="col-6 d-flex align-items-center ">
              <Image src="img/TESC3.png" className="d-block mx-auto" alt="teknix"  width={80}  height={80}  />
            </div>
            <div className="col-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-13 mb-1">Safety Protection standards
                  as laid out by the EN Codes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3   d-flex align-items-center justify-content-center">
          <div className="row optima-list m-30">
            <div className="col-6 d-flex align-items-center ">
              <Image src="img/TESC4.png" className="d-block mx-auto" alt="teknix"  width={80}  height={80}   />
            </div>
            <div className="col-6 d-flex align-items-center">
              <div>
                <p className="fw-bold font-13 mb-1">Automatic Lubrication system
                  Lubricates all kinds of driving components</p>
              </div>
            </div>
          </div>
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
              <tr>
                <th scope="col fs-2 font-title">
                  <p className="fs-2 font-title p-20">Application</p>
                </th>
                <th scope="col fs-2 font-title">
                  <p className="fs-2 font-title p-20 ">Indoor/Outdoor 16HR Daily</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-weight-600">Horizontal Span</td>
                <td>&lt;6m</td>
              </tr>
              <tr>
                <td className="font-weight-600">Angle of Inclination</td>
                <td>35</td>
              </tr>
              <tr>
                <td className="font-weight-600">Pallet Width (step width)</td>
                <td>600/800/1000</td>
              </tr>
              <tr>
                <td className="font-weight-600">Speed</td>
                <td>0.5m</td>
              </tr>
              <tr>
                <td className="font-weight-600">Main Power</td>
                <td>380v/50HZ/3PH</td>
              </tr>
              <tr>
                <td className="font-weight-600">Balustrade</td>
                <td>Tempered Glass/SS Balustrade#</td>
              </tr>
              <tr>
                <td className="font-weight-600">Handrail Bracket</td>
                <td>Stainless Steel</td>
              </tr>
              <tr>
                <td className="font-weight-600">Handrail</td>
                <td>Black</td>
              </tr>
              <tr>
                <td className="font-weight-600">Balustrade Height</td>
                <td>1000mm</td>
              </tr>
              <tr>
                <td className="font-weight-600">Illumination</td>
                <td>Lighting Under Upper  &  Lower Landing Steps</td>
              </tr>
              <tr>
                <td className="font-weight-600 border-bottom-0">Inner  &  Outer Decking</td>
                <td className=" border-bottom-0">Stainless Steel HL</td>
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
