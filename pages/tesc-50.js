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
      mobile: '/img/mobile/Banner Mobile 1 - Tesc 50.png',
      desktop: '/img/Esculators/50/1.webp',
    },
    {
    mobile: '/img/mobile/Banner Mobile 2 - Tesc 50.png',
      desktop: '/img/Esculators/50/2.webp',
    },
    {
     mobile: '/img/mobile/Banner Mobile 3 - Tesc 50.png',
      desktop: '/img/Esculators/50/3.webp',
    },
  ];
    return (
        <>
            <Head>
                <title>TESC 50 | Escalators for Offices and Commercial - Teknix</title>
                <meta name="description" content="These Escalators are designed for Heavy usage like Malls, Airports, Subway stations & Railway stations where public flow is very high & maximum 20 hours daily" />
                <meta name="keywords" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.teknixelevators.com/tesc-50/" />

            </Head>
      <>


<SimpleCarousel slides={slides} showIndicators={true} showControls={true} />


<h1 className='d-none'>TESC 50 </h1>
  <section className="section" data-aos="fade-up" data-aos-duration={1500}>
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-11 offset-md-1 d-block mx-auto">
          <p className="text-center text-danger font-28" data-aos="fade-up" data-aos-duration={2000}>TESC 50</p>
          <div className="home-about-heading text-center">
            <h2 className=" text-center" data-aos="fade-up" data-aos-duration={2500}>MOVING MADE SIMPLE AND EASY.</h2>
            <p className="fs-5 text-center w-35 d-block mx-auto light-white font-14 text-center" data-aos="fade-up" data-aos-duration={3000}>These escalators are designed for Heavy usage like Malls, Airports, Subway stations  &  Railyway stations where public flow is very high and has maximum operation capability of 20 hours daily and can go upto 27 metres rise height. </p>
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
              <Image src="/img/TESC1.png" className="d-block mx-auto" alt="teknix"  width={80}  height={80}   />
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
              <Image src="/img/TESC2.png" className="d-block mx-auto" alt="teknix"  width={80}  height={80}  />
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
              <Image src="/img/TESC3.png" className="d-block mx-auto" alt="teknix"  width={80}  height={80}  />
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
              <Image src="/img/TESC4.png" className="d-block mx-auto" alt="teknix"  width={80}  height={80}  />
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
                  <p className="fs-2 font-title p-20">Application</p></th>
                <th scope="col fs-2 font-title"> <p className="fs-2 font-title  p-20">Indoor/Outdoor 20HRS Daily</p></th>
                <th scope="col fs-2 font-title"> <p className="fs-2 font-title  p-20">Indoor/Outdoor 20HRS Daily</p></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-weight-600">Rise</td>
                <td>&lt;6m</td>
                <td>&lt;27</td>
              </tr>
              <tr>
                <td className="font-weight-600">Angle of Inclination</td>
                <td>35</td>
                <td>30</td>
              </tr>
              <tr>
                <td className="font-weight-600">Step Width</td>
                <td>600/800/1000</td>
                <td>600/800/1000</td>
              </tr>
              <tr>
                <td className="font-weight-600">Horizontal Steps</td>
                <td>2/2</td>
                <td>2/2 or 3/3*</td>
              </tr>
              <tr>
                <td className="font-weight-600">Speed</td>
                <td>0.5ms</td>
                <td>0.5ms</td>
              </tr>
              <tr>
                <td className="font-weight-600">Main Power</td>
                <td>380v/50HZ/3PH</td>
                <td>380v/50HZ/3PH</td>
              </tr>
              <tr>
                <td className="font-weight-600">Balustrade</td>
                <td>Tempered Glass/SS Balustrade#</td>
                <td>Tempered Glass/SS Balustrade#</td>
              </tr>
              <tr>
                <td className="font-weight-600">Handrail Bracket</td>
                <td>Stainless Steel</td>
                <td>Stainless Steel</td>
              </tr>
              <tr>
                <td className="font-weight-600">Handrail</td>
                <td>Black</td>
                <td>Black</td>
              </tr>
              <tr>
                <td className="font-weight-600">Balustrade Height</td>
                <td>1000mm</td>
                <td>1000mm</td>
              </tr>
              <tr>
                <td className="font-weight-600">Illumination</td>
                <td>Lighting Under Upper  &  Lower Landing Steps</td>
                <td>Lighting Under Upper  &  Lower Landing Steps</td>
              </tr>
              <tr>
                <td className="font-weight-600">Inner  &  Outer Decking</td>
                <td>Stainless Steel HL/Alluminuim#</td>
                <td>Stainless Steel HL/Alluminuim#* only above</td>
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
