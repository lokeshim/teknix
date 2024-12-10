// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import ElevatorCarousel from '../components/ElevatorCarousel';
import BlogSection from '../components/BlogSection';
import Testimonials from '../components/Testimonials';
import ConnectForm from '../components/ConnectForm';
import SimpleCarousel from '../components/SimpleCarousel';
import CarouselComponent from '../components/CarouselComponent';
import MapWithCarousel from "../components/MapWithCarousel";
import MapWithSliderIframe from "../components/MapWithSliderIframe";

export default function Home() {
   const slides = [
    {
      mobile: 'img/mobile/Banner Mobile - Contact.png',
      desktop: 'img/contact.webp',
    }
   
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


  <SimpleCarousel slides={slides} showIndicators={false} showControls={false} />


<div>
  <section className="section" data-aos="fade-left" data-aos-duration={1000}>
    <div className="container">
      <div className="row sub-section">
        <div className="col-md-11 offset-md-1 d-block mx-auto">
          <div className="other-heading " data-aos="fade-down" data-aos-duration={1500}>
            <p className="text-center">Reach out to us</p>
          </div>
        </div>
      </div>
      <div className="row align-items-center border-bottom border-secondary pb-4" data-aos="fade-right" data-aos-duration={2000}>
        <div className="col-md-6 ">
          <p className="text-start text-danger font-28 mb-2" data-aos="fade-right" data-aos-duration={2500}>HEAD OFFICE</p>
          <div className=" " data-aos="fade-right" data-aos-duration={3000}>
            <p className="other-heading2">Bengaluru</p>
          </div>
        </div>
        <div className="col-md-4 offset-md-2 " data-aos="fade-left" data-aos-duration={3000}>
          <p className="border-secondary p-10 ">Teknix Elevators Pvt Ltd.<br />3354, KR Road, Tata Silk Farm, Banashankari Stage II,<br /> Bengaluru, Karnataka 560070</p>
          <p className="border-secondary p-10">Email :sales@teknixelevators.com</p>
          <p className="border-secondary p-10">Toll Free :1800-1200-903 | 0091-80-41253500</p>
        </div>
      </div>
      <div className="row mt-5" data-aos="fade-right" data-aos-duration={2000}>
        <div className="col-md-12">
          <p className="text-start text-danger font-28 mb-2">BRANCHES</p>   
        </div>
      </div>
      <div className="row ps-0 ps-md-5 border-bottom border-secondary pb-4" data-aos="fade-up" data-aos-duration={1500}>
        <div className="col-md-6" data-aos="fade-right" data-aos-duration={2500}>                             
          <h2 className="other-heading2">Hyderabad</h2>
          <p className="border-secondary p-10">Teknix Elevators Pvt Ltd.<br />#30, Indus Space Centre, 3rd Floor, 100 Feet Road<br />Kavuri Hills, Madhapur Road, Hyderabad - 500 081</p>
          <p className="border-secondary p-10">Toll Free :<br />040-46012184</p>
        </div>
        <div className="col-md-4 offset-md-2 " data-aos="fade-left" data-aos-duration={2500}>
          <h2 className="other-heading2">Rajkot</h2>
          <p className="border-secondary p-10">Teknix Elevators Pvt. Ltd.<br />Mo. 61, 3rd Floor, Samrudhi Bhavan<br />Gondal Road, Rajkot - 360001 Gujarat</p>
        </div>
      </div>
      <div className="row ps-0 ps-md-5 border-bottom border-secondary pb-4 mt-5" data-aos="fade-up" data-aos-duration={2000}>
        <div className="col-md-6" data-aos="fade-right" data-aos-duration={3000}>            
          <h2 className="other-heading2">Nepal</h2>
          <p className="border-secondary p-10">Elevator Solutions Nepal Pvt Ltd.<br />Nagapokhari, Kathamandu, Nepal.</p>
          <p>Email :<br />info@elevatorsolutionsnepal.com.np</p>
          <p className="border-secondary p-10">Phone : +977 1 4433280</p>
        </div>
        <div className="col-md-4 offset-md-2 " data-aos="fade-left" data-aos-duration={2000}>
          <h2 className="other-heading2">Coimbatore</h2>
          <p className="border-secondary p-10">7,3, Sambandam Road East, R. S. Puram,<br />Coimbatore, Tamil Nadu - 641002</p>
          <p>Landline :<br />0422 471 4472</p>
          <p>Mobile Number : +91 789 972 3060</p>
        </div>
      </div>
      <div className="row ps-0 ps-md-5 border-bottom border-secondary pb-4 mt-5" data-aos="fade-up" data-aos-duration={2000}>
        <div className="col-md-6" data-aos="fade-right" data-aos-duration={2500}>           
          <h2 className="other-heading2">Belgaum</h2>
          <p className="border-secondary p-10">SR Bagewadi<br />Plot No. 71, 3rd Stage, Scheme No. 40<br />Hanuman Nagar, Belgaum - 590019</p>
          <p className="border-secondary p-10">Mobile Number : +91 636 028 7258</p>
        </div>
        <div className="col-md-4 offset-md-2 " data-aos="fade-right" data-aos-duration={2500}>
          <h2 className="other-heading2">Visakhapatnam</h2>
          <p className="border-secondary p-10">#203, Sri Muktha Residency,<br />Baba College Road, PM Palem 3rd Bus Stop<br />Madhurwada, Visakhapatnam,<br />Andhra Pradesh - 530 041</p>
          <p>Mobile Number : +91 636 028 7035</p>
        </div>
      </div>
      <div className="row ps-0 ps-md-5 border-bottom border-secondary pb-4 mt-5" data-aos="fade-up" data-aos-duration={15000}>
        <div className="col-md-6" data-aos="fade-right" data-aos-duration={2500}>           
          <h2 className="other-heading2">Chennai</h2>
          <p className="border-secondary p-10">Old#29, New #62, 3rd Floor,<br />3rd Street, Abhiramapuram,<br />Chennai - 600018</p>
          <p className="border-secondary p-10">Mobile Number : +91 789 972 3060</p>
        </div>
        <div className="col-md-4 offset-md-2 " data-aos="fade-left" data-aos-duration={2500}>
           <h2 className="other-heading2">UAE</h2>
          <p className="border-secondary p-10">Teknix Prime Lifts Trading Co. LLC<br />Office no. F29, Al Khaima Bldg, 2 Al Barsha,<br />Dubai- UAE</p>
          <p className="p-10">Email:<br />sales.dxb@teknixelevators.com</p>
          <p className="border-secondary ">Mobile Number : +971-56 981 8705</p>
        </div>
      </div>
     
    </div>
  </section>

 <MapWithSliderIframe />
  <section className="section position-relative" id="experience" data-aos="fade-up" data-aos-duration={2500}>
    <div className="container-fluid px-md-5 p-0">
      <Image src="img/map.png" alt="teknix" className="w-100"   width={1920}
                      height={850} />
    </div>
  </section>
</div>






<ConnectForm/>
</>




        </>
    );
}
