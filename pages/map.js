import Head from 'next/head';
import Carousel from '../components/Carousel';
import dynamic from 'next/dynamic';
import Image from 'next/image';
// Import global styles for Owl Carousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Map() {
  const testimonials = [
    { content: <p>Testimonial 1</p> },
    { content: <p>Testimonial 2</p> },
    { content: <p>Testimonial 3</p> },
  ];

  const logos = [
    { content: <Image src="/img/Belgaum.png" alt="Logo 1" /> },
    { content: <Image src="/img/Chennai.png" alt="Logo 2" /> },
    { content: <Image src="/img/Coimbatore.png" alt="Logo 3" /> },
  ];

  const testimonialOptions = {
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    center: true,
    autoplayTimeout: 2000,
    smartSpeed: 1100,
    stagePadding: 250,
    responsive: {
      0: { items: 1, stagePadding: 0, margin: 100 },
      600: { items: 1, stagePadding: 0, margin: 10 },
      1000: { items: 1, stagePadding: 250, margin: 50 },
    },
  };

  const logosOptions = {
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    responsive: {
      0: { items: 2 },
      600: { items: 3 },
      1000: { items: 5 },
    },
  };

  return (
    <>
      <Head>
        <title>Next.js Carousel Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <section>
          <h2>Testimonials</h2>
          <Carousel id="testimonials" items={testimonials} options={testimonialOptions} />
        </section>
        <section>
          <h2>Logos</h2>
          <Carousel id="logos" items={logos} options={logosOptions} />
        </section>
      </main>
    </>
  );
}
