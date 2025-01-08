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
      mobile: 'img/mobile/Banner Mobile - Corporate Profile.png',
      desktop: 'img/About us/CORPORATE.webp',
    },
  
  ];
    return (
        <>
            <Head>
                <title>Corporate Profile | Elevators Dealer & Supplier Bangalore</title>
                <meta name="description" content="Teknix Elevators Pvt. Ltd. Management team brings deep expertise in the field of Vertical Transport Technology. 4-passenger Lift Sizes with Excellent Quality" />
                <meta name="keywords" content="4 passenger lift size, Elevator suppliers in bangalore" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="#" />

            </Head>
      <>


<SimpleCarousel slides={slides} showIndicators={false} showControls={false} />



  <section className="section" data-aos="fade-up" data-aos-duration={2000}>
    <div className="container-fluid px-md-5 ">
      <div className="row">
        <div className="col-md-11 d-block mx-auto">
          <div
            className="home-about-heading "
            data-aos="fade-up"
            data-aos-duration={2500}
          >
            <h2 className=" text-center"> We TEKNIX</h2>
            <p
              className=" text-center col-12 col-md-12 mx-auto d-block mx-auto text-white font-14  "
              data-aos="fade-up"
              data-aos-duration={2700}
            >
              In a world of ceaseless evolution and urban sophistication, the
              human spirit remains resolute, striving for extraordinary
              aspirations and remarkable achievements.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  
  <section className="section position-relative" id="experience" data-aos="fade-up" data-aos-duration={1500}>
    <div className="container text-center p-0">
      <div className="row">
        <div className="col-md-12 d-block mx-auto px-3">
          <div className="row sub-section">
            <p className=" other-heading">
              Our Vision
            </p>
            <p className="  text-light  font-14">At Teknix, we envision a future where vertical transportation transcends mere functionality,
              becoming a hallmark of elegance and innovation. Our dedication lies in crafting an experience that embodies safety, reliability, and unparalleled luxury. Each of our products is meticulously engineered to ensure energy efficiency while exuding an aura of sophistication.
              We are committed to redefining urban mobility, minimizing our carbon footprint through avant-garde technology and exquisite design. Together, we will create a refined and sustainable urban landscape, elevating life to unparalleled heights for discerning individuals who demand nothing less than excellence.</p>
          </div>
          <div className="row sub-section">
            <p className=" other-heading">
              Our Mission
            </p>
            <p className="  text-light  font-14">Teknix, at all times maintain and embody the principles of integrity, honesty and quality. These efforts bring prosperity to our business associates and our customers, and robust growth in us.</p>
          </div>
          <div className="row sub-section">
            <p className=" other-heading">
              Our Commitment to Excellence
            </p>
            <p className="  text-light  font-14">At Teknix Elevators, we pride ourselves on delivering exceptional quality, safety, and reliability, consistently meeting the high benchmarks of our ISO 9001:2008 certification</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section position-relative " id="experience" data-aos="fade-up" data-aos-duration={1500}>
    <div className="container-fluid px-md-5  text-center p-0">
      <div className="row">
        <div className="col-md-12">
          <Image src="img/research-center.webp" alt="teknix" className="d-block mx-auto img-fluid" />
        </div>
      </div>
    </div>
  </section>
  <section className="section position-relative" id="experience" data-aos="fade-up" data-aos-duration={1500}>
    <div className="container  p-0">
      <div className="row my-md-3">
        <div className="col-md-12 d-block mx-auto">
          <p className=" other-heading2 text-md-start text-center">
            Teknix: Elevating the Future of Vertical Transportation
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-block mx-auto" data-aos="fade-right" data-aos-duration={2000}>
          <div className="row " data-aos="fade-left" data-aos-duration={2500}>
            <p className="text-white text-center p-10">At Teknix, we redefine the essence of vertical transportation through a vision that marries</p>
            <p className="text-white text-center p-10">innovation with uncompromising values. In esteemed collaboration with SRH Aufzüge  GmbH, we are dedicated to crafting luxurious elevators that not only elevate spaces but also enhance lifestyles, embodying a commitment to excellence and sophistication.</p>
            <p className="text-white font-20 p-10 text-center"><strong className="text-white">Craftsmanship Meets Cutting-Edge Technology</strong></p>
            <p className="text-white text-center p-10">Every Teknix elevator is a testament to meticulous engineering, whether it is a bespoke creation tailored to our clients&apos; unique specifications or an integral part of our illustrious vertical transportation portfolio. Our in-house R & D team rigorously tests each product, ensuring it exemplifies reliability, elegance, and state-of-the-art performance.</p>
            <p className="text-white font-20 p-10 text-center"><strong className="text-white">State-of-the-Art Manufacturing Facilities</strong></p>
            <p className="text-white text-center p-10">Our manufacturing facility in Bangalore, India, spans an impressive 65,000 sq. ft., while our international units in Suzhou, China, and Bremen, Germany, collectively boast over 2,025,000 sq. ft. These state-of-the-art facilities feature:</p>
            <p className="text-white ps-5 text-center m-10 text-center"> <strong className="text-white ">Advanced Manufacturing Lines</strong> from renowned brands such as Salvagnini (Italy), Bodor (Switzerland), Dener (Turkey), and Amada (Japan).</p>
            <p className="text-white text-center  ps-5  m-10"> A fully equipped elevator testing tower, ensuring that every elevator meets the highest safety and performance standards.</p>
            <p className="text-white text-center  ps-5 m-10"> Comprehensive R & D capabilities that drive continuous innovation.</p>
            <p className="text-white font-20 p-10 text-center"><strong className="text-white">Global Expertise, Local Excellence</strong></p>
            <p className="text-white text-center p-10">As a distinguished member of VFA-Interlift in Germany, SRH Aufzüge  has been instrumental in shaping EU standards for elevators. With a global presence that includes manufacturing units in Germany and P.R. China under the prestigious brand Sicher Elevator, our partnership with SRH Aufzüge  GmbH empowers us to offer cutting-edge technology tailored for the discerning Indian market. Our elevators, capable of speeds up to 8 m/s, are a hallmark of German engineering and design prowess, setting new benchmarks in luxury vertical transport.</p>
            <p className="text-white font-20 p-10 text-center"><strong className="text-white">Elevating Experiences</strong></p>
            <p className="text-white text-center p-10">At Teknix, we do more than provide elevators; we create an experience of opulence and sophistication that transforms the way people interact with their environments. Our commitment to superior quality and unparalleled service ensures that every ascent is a journey marked by elegance and reliability.</p>
            <p className="text-white text-center p-10">Join us in elevating not just buildings, but lifestyles-where every Teknix elevator is an invitation to experience the extraordinary.</p>
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
