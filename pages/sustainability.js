// pages/index.js
import Head from "next/head";
import Image from "next/image";
import ElevatorCarousel from "../components/ElevatorCarousel";
import BlogSection from "../components/BlogSection";
import Testimonials from "../components/Testimonials";
import ConnectForm from "../components/ConnectForm";
import SimpleCarousel from "../components/SimpleCarousel";
export default function Home() {
  const slides = [
    {
      mobile: "/img/mobile/Banner Mobile - Sustainability.png",
      desktop: "/img/About us/SUSTAINABILITY.webp",
    },
  ];
  return (
    <>
      <Head>
        <title>
          Sustainability - Lift company in Bangalore | Teknix Elevators
        </title>
        <meta
          name="description"
          content="Our Elevators and Lifts are suitable to installed in all category Apartments,Villas,Small,Medium & large-scale Industries; Commercial complex & so on"
        />
        <meta
          name="keywords"
          content="Lift company in bangalore, Lift for home price in bangalore, Lift manufacturers in bangalore, Lift manufacturers in hyderabad, Lift suppliers in bangalore, Lift vendors in bangalore Passenger, Lift Manufacturers In Bangalore"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.teknixelevators.com/sustainability/" />
      </Head>
      <>
        <SimpleCarousel
          slides={slides}
          showIndicators={false}
          showControls={false}
        />
<h1 className='d-none'>Sustainability</h1>
        <section
          className="section position-relative"
          id="experience"
          data-aos="fade-up"
          data-aos-duration={1500}
        >
          <div className="container text-center p-0">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div>
                  <p
                    className="text-center other-heading"
                    data-aos="fade-up"
                    data-aos-duration={2000}
                  >
                    SUSTAINABILITY
                  </p>
                  <p className="p-10  text-justify">
                    {" "}
                    <strong>At TEKNIX</strong>, sustainability is at the heart
                    of our corporate identity, guiding both our strategy and
                    operations. We approach sustainability with a profound sense
                    of responsibility, integrating social, economic, and
                    environmental considerations into every aspect of our
                    decision-making process. Our commitment is to ensure the
                    long-term success of our business while contributing to the
                    well-being of society and the health of the planet.
                  </p>
                  <p className="p-10 text-justify">
                    We recognize that sustainability is not just an ethical
                    imperative but a crucial driver of innovation and growth. As
                    we strive to enhance the value we provide to our customers,
                    investors, and employees, we remain steadfast in our
                    dedication to ethical business practices, environmental
                    stewardship, and social responsibility. Our ultimate
                    ambition is to position TEKNIX as one of the world’s leading
                    brands in corporate sustainability, setting a benchmark for
                    excellence in how businesses can thrive while making a
                    positive impact on the world.
                  </p>
                  <p className="p-10 text-justify">
                    Sustainability, for us, is not simply a set of initiatives
                    but a deep-seated cultural value. It is woven into the very
                    fabric of our company and serves as a key pillar of our
                    long-term strategy. By embracing sustainability, we are not
                    only improving performance but also ensuring that the
                    benefits of our actions extend far beyond the present to
                    positively influence future generations. Our commitment goes
                    beyond eco-friendly practices, encompassing a fundamental
                    shift in how we view our stewardship of the planet’s finite
                    resources. It is an enduring pledge to safeguard the
                    environment and preserve it for those who will inherit it.
                  </p>
                  <p className="p-10 text-justify">
                    At TEKNIX, we have set ambitious goals to become a
                    carbon-neutral company, advancing toward a future where our
                    operations have a net-zero carbon footprint. We are deeply
                    committed to reducing emissions across all areas of our
                    business, from product design and manufacturing to supply
                    chain and energy consumption. Our goal is to eliminate our
                    carbon impact through a combination of direct emissions
                    reductions, operational efficiencies, and investments in
                    carbon offset initiatives. Our efforts are driven by a
                    strategic roadmap that involves the adoption of cleaner
                    technologies, renewable energy sources, and sustainable
                    materials, with the aim of achieving carbon neutrality
                    within the coming years.
                  </p>
                  <p className="p-10 text-justify">
                    In addition to reducing our carbon footprint, we are
                    actively pursuing carbon negativity—going beyond neutrality
                    to remove more carbon from the atmosphere than we emit. This
                    forward-thinking approach will not only help us contribute
                    to global climate goals but also position TEKNIX as a
                    responsible corporate leader in the fight against climate
                    change. We are committed to creating long-term value for our
                    stakeholders by balancing economic success with a deep sense
                    of ecological responsibility.
                  </p>
                  <p className="p-10 text-justify">
                    Sustainability is not merely a corporate objective at
                    TEKNIX; it is an ethos that unites our people and fuels our
                    vision. When sustainability becomes a core value, it fosters
                    a sense of shared purpose, encouraging collaboration and
                    innovation at every level of our organization. Whether it’s
                    a small change in our daily operations or a larger strategic
                    initiative, each action contributes to a collective effort
                    to build a better, more sustainable future.
                  </p>
                  <p className="p-10 text-justify">
                    Our journey toward carbon neutrality and beyond is an
                    ongoing one, and we understand that there is always more to
                    be done. Every step we take brings us closer to realizing
                    our vision of a more sustainable world—one where the success
                    of our business is inextricably linked to the health of the
                    environment and the prosperity of future&nbsp;generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ConnectForm />
      </>
    </>
  );
}
