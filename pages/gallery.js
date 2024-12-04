import Head from 'next/head';
import SimpleCarousel from '../components/SimpleCarousel';
import MultipleCarousels from '../components/MultipleCarousels';
import ConnectForm from '../components/ConnectForm';

export default function Home() {
  const slides = [
    {
      mobile: '/img/gallery.webp',
      desktop: '/img/gallery.webp',
    },
  ];

  const carouselsData = [
    {
      title: 'Optima',
      category1: "Optima",
      slides: [
        { image: '/img/gal/elevator/optima/1.webp', thumbnail: '/img/gal/elevator/optima/1.webp' },
        { image: '/img/gal/elevator/optima/2.webp', thumbnail: '/img/gal/elevator/optima/2.webp' },
        { image: '/img/gal/elevator/optima/3.webp', thumbnail: '/img/gal/elevator/optima/3.webp' },
        // Add more slides here
      ],
    },
    {
      title: 'Test',
      category1: "Test",
      slides: [
        { image: '/img/gal/elevator/optima/1.webp', thumbnail: '/img/gal/elevator/optima/1.webp' },
        { image: '/img/gal/elevator/optima/2.webp', thumbnail: '/img/gal/elevator/optima/2.webp' },
        { image: '/img/gal/elevator/optima/3.webp', thumbnail: '/img/gal/elevator/optima/3.webp' },
        // Add more slides here
      ],
    },
  ];

  const carouselsData1 = [
    {
      title: 'Optima2',
      category1: "Optima2",
      slides: [
        { image: '/img/gal/elevator/optima/1.webp', thumbnail: '/img/gal/elevator/optima/1.webp' },
        { image: '/img/gal/elevator/optima/2.webp', thumbnail: '/img/gal/elevator/optima/2.webp' },
        { image: '/img/gal/elevator/optima/3.webp', thumbnail: '/img/gal/elevator/optima/3.webp' },
        { image: '/img/gal/elevator/optima/4.webp', thumbnail: '/img/gal/elevator/optima/4.webp' },
        { image: '/img/gal/elevator/optima/5.webp', thumbnail: '/img/gal/elevator/optima/5.webp' },
        { image: '/img/gal/elevator/optima/3.webp', thumbnail: '/img/gal/elevator/optima/3.webp' },
        { image: '/img/gal/elevator/optima/3.webp', thumbnail: '/img/gal/elevator/optima/3.webp' },
        { image: '/img/gal/elevator/optima/3.webp', thumbnail: '/img/gal/elevator/optima/3.webp' },
        { image: '/img/gal/elevator/optima/3.webp', thumbnail: '/img/gal/elevator/optima/3.webp' },
        { image: '/img/gal/elevator/optima/3.webp', thumbnail: '/img/gal/elevator/optima/3.webp' },
        { image: '/img/gal/elevator/optima/3.webp', thumbnail: '/img/gal/elevator/optima/3.webp' },
        { image: '/img/gal/elevator/optima/3.webp', thumbnail: '/img/gal/elevator/optima/3.webp' },
        // Add more slides here
      ],
    },
    {
      title: 'Test2',
      category1: "Test2",
      slides: [
        { image: '/img/gal/elevator/optima/1.webp', thumbnail: '/img/gal/elevator/optima/1.webp' },
        { image: '/img/gal/elevator/optima/2.webp', thumbnail: '/img/gal/elevator/optima/2.webp' },
        { image: '/img/gal/elevator/optima/3.webp', thumbnail: '/img/gal/elevator/optima/3.webp' },
        // Add more slides here
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Teknix</title>
        <meta name="description" content="teknix" />
        <meta name="keywords" content="teknix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="#" />
      </Head>
      <SimpleCarousel slides={slides} showIndicators={false} showControls={false} />
      <section className="section" data-aos-duration="1500">
        <div className="container">
          <MultipleCarousels allCarouselsData={carouselsData} showIndicators={true} showControls={false} />
          <MultipleCarousels allCarouselsData={carouselsData1} showIndicators={true} showControls={false} />
        </div>
      </section>

      
      <ConnectForm />
    </>
  );
}
