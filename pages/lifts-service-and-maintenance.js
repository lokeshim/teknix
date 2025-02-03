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
      mobile: 'img/mobile/Banner Mobile - Service.png',
      desktop: 'img/service_.png',
    },
   
  ];
    return (
        <>
            <Head>
                <title>Elevators & Escalators Service & Maintenance in Bangalore</title>
                <meta name="description" content="Teknix Elevators is a leading provider of elevators and escalators in Bangalore. We offer service and maintenance for all types of elevators." />
                <meta name="keywords" content="Elevator Companies In India, Lift For Home Price In Bangalore, Elevator Manufacturers In India, Residential Elevators In Hyderabad, Top Elevators Company In India" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.teknixelevators.com/lifts-service-and-maintenance" />

            </Head>
      <>


<SimpleCarousel slides={slides} showIndicators={false} showControls={false} />

<h1 className='d-none'>Service </h1>
  <section className="section" data-aos="fade-up" data-aos-duration={1500}>
    <div className="container ">
      <div className="row">
        <div className="col-md-11 offset-md-1 d-block mx-auto">
          <p className="text-center text-danger font-28   " data-aos="fade-up" data-aos-duration={2000}>&nbsp;</p>
          <div className="home-about-heading " data-aos="fade-up" data-aos-duration={2500}>
            <h2 className=" text-center   ">Reliability You Can Count&nbsp;On,&nbsp;Every&nbsp;Time</h2>
            <p className="font-small text-center w-50 d-block mx-auto light-white font-14  ">At TEKNIX ELEVATORS, we view the completion of a sales contract as just the beginning of our commitment to our clients. Our mission is to unlock the full potential of our products, consistently delivering exceptional service and creating lasting value.
            </p>
            <p className="font-small text-center  d-block mx-auto light-white font-14 mt-md-5 ">
              We are driven by the principle of excellence—always striving to complete tasks ahead of schedule while ensuring perfection in every aspect of our service. Our dedication to providing high-quality, reliable service guarantees the utmost satisfaction for our clients. </p>
            <p className="font-small text-center  d-block mx-auto light-white font-14   ">
              What truly sets TEKNIX ELEVATORS apart is our focus on offering competitively priced spare parts, alongside comprehensive, proactive follow-up visits. This unwavering commitment to superior service and customer care is what distinguishes us from the&nbsp;competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
<section className="section" data-aos="fade-up" data-aos-duration={1500}>
  <div className="container text-center">
    <div className="row">
      <div className="col-md-4">
        <div className="px-md-3">
          <Image src="img/silver-package.webp" alt="Non Comprehensive Maintenance" className="img-fluid d-block mx-auto p-3 img-275"  width={275} height={237} />
          <div className="text-center post-title text-medium text-extra-dark-gray">
            <p className="p-10 border-bottom">Non Comprehensive Maintenance Package</p>
            <p className="p-10 border-bottom">24x7 Emergency service</p>
            <p className="p-10 border-bottom">180 minutes guaranteed Response time</p>
            <p className="p-10 border-bottom">Lubrication & bi-monthly Preventive maintenance</p>
            <p className="p-10 ">Replacement parts would be charged at actuals</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="px-md-3">
          <Image src="img/gold-package.webp" alt=">Semi-Comprehensive Maintenance " className="img-fluid d-block mx-auto p-3 img-275" width={275} height={237} />
          <div className="text-center post-title text-medium text-extra-dark-gray">
            <p className="p-10 border-bottom">Semi-Comprehensive Maintenance Package</p>
            <p className="p-10 border-bottom">24x7 Emergency service</p>
            <p className="p-10 border-bottom">180 minutes guaranteed Response time</p>
            <p className="p-10 border-bottom">Lubrication & bi-monthly Preventive maintenance</p>
            <p className="p-10 ">All parts would be covered under the gold care except – machine, rope, VVVF drive, Controller & Controller parts.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="px-md-3">
          <Image src="img/platinum-package.webp" alt="Comprehensive maintenance " className="img-fluid d-block mx-auto p-3 img-275"  width={275} height={237}/>
          <div className="text-center post-title text-medium text-extra-dark-gray">
            <p className="p-10 border-bottom">Full – Comprehensive maintenance package</p>
            <p className="p-10 border-bottom">24x7 Emergency service</p>
            <p className="p-10 border-bottom">180 minutes guaranteed Response time</p>
            <p className="p-10 border-bottom">Lubrication & bi-monthly Preventive maintenance</p>
            <p className="p-10 ">All parts would be covered under the platinum care</p>
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
