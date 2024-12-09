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
      mobile: 'img/mobile/Banner Mobile - Safety.png',
      desktop: 'img/safe.png',
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


<SimpleCarousel slides={slides} showIndicators={false} showControls={false} />



<section className="section position-relative" id="experience" data-aos="fade-up" data-aos-duration={1500}>
  <div className="container text-center p-0">
    <div className="row">
      <div className="col-md-4 ">
        <Image src="img/safety-site.webp" className="img-fluid px-md-3 py-md-3d-block mx-auto" alt="teknix" width={424} height={560} />
      </div>
      <div className="col-md-8 home-about-heading  d-flex align-items-center">
        <div>
          <p className=" other-heading text-start " data-aos="fade-up" data-aos-duration={2000}>
            BUILDING A CULTURE OF SAFETY
          </p>
          <p className="font-16 text-justify">At TEKNIX, safety is our foremost commitment. Since our inception, the principle of &apos;People First&apos; has been the cornerstone of our philosophy, guiding us to lead the industry in safety standards. This unwavering dedication remains unchanged. What will continue to evolve is the sophistication of the technologies we harness, constantly enhancing both your safety and the luxurious experience&nbsp;of&nbsp;every&nbsp;ride.
          </p>
          <blockquote className="blockquote text-start">
            <p className="text-start text-danger fs-3 border-start border-warning px-3 m-30">Our focus on protecting and caring for people has made Teknix a leader in safety.</p>
          </blockquote>
          <p className="font-16 text-justify">We want to provide freedom to move in a personal, sustainable and safe way. We do this by putting your needs first — using the best available technology to serve you, inventing new technology where none already exists and combining technologies to deliver new
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
