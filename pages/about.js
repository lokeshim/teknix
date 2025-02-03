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
      desktop: 'img/Elevators/o/Banner 1.webp',
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
                <title>teknix</title>
                <meta name="description" content="teknix" />
                <meta name="keywords" content="teknix" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.teknixelevators.com/about" />

            </Head>
      <>


<SimpleCarousel slides={slides} showIndicators={false} showControls={false} />





 
 






<ConnectForm/>
</>




        </>
    );
}
