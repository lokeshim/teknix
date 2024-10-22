import dynamic from 'next/dynamic';
import Image from 'next/image';
import Script from 'next/script';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Dynamically import react-owl-carousel to work with SSR (Next.js)
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const testimonials = [
  {
    content: "“Our decision to work with Luxury Presence is one of the best marketing moves we’ve ever made. The website design is gorgeous and user-friendly, and the Luxury Presence team … responsive, fantastic to work with, and”",
    name: "K. Ann Brizolis",
    img: "/img/testi.png",
  },
  {
    content: "“Our decision to work with Luxury Presence is one of the best marketing moves we’ve ever made. The website design is gorgeous and user-friendly, and the Luxury Presence team … responsive, fantastic to work with, and”",
    name: "K. Ann Brizolis",
    img: "/img/testi.png",
  },
  {
    content: "“Our decision to work with Luxury Presence is one of the best marketing moves we’ve ever made. The website design is gorgeous and user-friendly, and the Luxury Presence team … responsive, fantastic to work with, and”",
    name: "K. Ann Brizolis",
    img: "/img/testi.png",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <div className="container-fluid">
        {/* Carousel Section */}
        <div className="row py-5 border-bottom border-light border-opacity-25">
          <div className="col-md-11 d-block mx-auto offset-md-1">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav={false}
              autoplay={true}
              autoplayTimeout={5000}
              autoplayHoverPause={true}
              responsive={{
                0: {
                  items: 1,
                  stagePadding: 0,
                  margin: 100,
                },
                600: {
                  items: 1,
                  stagePadding: 0,
                  margin: 10,
                },
                1000: {
                  items: 1,
                  stagePadding: 250,
                  margin: 50,
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div className="item" key={index}>
                  <div className="testi-info">
                    <p className="test-font">{testimonial.content}</p>
                    <div className="row my-4">
                      <div className="col-md-5">
                        <div className="row">
                          <div className="col-3">
                            <Image
                              src={testimonial.img}
                              alt={`Testimonial from ${testimonial.name}`}
                              width={100}
                              height={100}
                              className="img-fluid p-0"
                            />
                          </div>
                          <div className="col-6 d-flex align-items-center justify-content-end">
                            <p className="font-15 mb-0 text-end">{testimonial.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>

        {/* View All Testimonials */}
        <div className="row py-5 border-bottom border-light border-opacity-25 my-5">
          <div className="col-md-9 d-block mx-auto offset-md-1 my-5">
            <p>
              <a href="#" className="text-danger text-decoration-none font-12 fw-normal letter-spacing">
                View All Testimonials{' '}
                <Image src="/img/right-carousel.png" alt="Right Arrow" width={20} height={20} className="w-12" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;