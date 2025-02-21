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
      mobile: '/img/mobile/Banner Mobile - Quality Policy.png',
      desktop: '/img/About us/Quality.webp',
    },
   
  ];
    return (
        <>
            <Head>
                <title>Quality Policy | Elevator Companies In India| Teknix Elevators</title>
                <meta name="description" content="Teknix Elevators is committed to providing high-quality, safe, and innovative elevator solutions across India, ensuring customer satisfaction and excellence." />
                <meta name="keywords" content="Best elevator companies in india, Best elevator company in bangalore, Best home elevators in bangalore, Residential elevators in hyderabad, Residential lifts in bangalore" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical/" href="https://www.teknixelevators.com/quality-policy/" />

            </Head>
      <>


<SimpleCarousel slides={slides} showIndicators={false} showControls={false} />


<h1 className='d-none'>Bangalore Elevator Companies </h1>

<section className="section position-relative" id="experience" data-aos="fade-up" data-aos-duration={1500}>
  <div className="container text-center p-0">
    <div className="row">
      <div className="col-md-5 d-flex">
        <Image src="img/quality-policy.webp" className="img-fluid px-md-3 py-md-3d-block mx-auto object-fit" alt="qualtiy policy" width={536} height={512} />
      </div>
      <div className="col-md-7 d-flex align-items-center">
        <div>
          <p className="p-10 text-justify">At Teknix, we hold the unwavering belief that quality is the collective responsibility of all who are involved. This principle not only defines our quality policy but also shapes the enduring partnerships we cultivate with our stakeholders. Our vendor selection process is meticulous, ensuring that we choose not only those who supply the finest materials but also those who share our unwavering commitment to excellence in quality.</p>
          <p className="p-10 text-justify">
            Every stage of our production is carefully scrutinized to uphold the highest standards. Raw materials and components undergo rigorous inspection upon arrival, followed by random sample testing of intermediate products. Only once a product has passed a series of stringent tests is it deemed worthy of reaching our esteemed customers.
          </p>
          <p className="p-10 text-justify">
            We view certifications not just as accolades, but as integral pillars in our unwavering pursuit of perfection. As Confirmative European certified company, we adhere to the most demanding international standards. Beyond this, we continuously strive for further distinction, ensuring compliance with specialized benchmarks such as EN 81-71.
          </p>
          <p className="p-10 text-justify">
            Safety and quality are not merely goals but are embedded in the very essence of our products. Every elevator bearing the Teknix name is the result of an unrelenting focus on safety, performance, and elegance. However, we recognize that excellence is a journey without end. As such, our pursuit of continuous improvement in both safety and quality remains a cornerstone of our ethos, ensuring that we consistently exceed expectations and set new benchmarks in&nbsp;the&nbsp;industry.
          </p>
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
