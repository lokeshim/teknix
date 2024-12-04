import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const Footer = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Add scroll event listener for navbar
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 80) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onSubmit = (data) => {
    const { name, email, phone, message } = data;

    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/917090122133?text=Full Name: ${encodeURIComponent(name)}%0AMobile Number: ${encodeURIComponent(phone)}%0AEmail ID: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

    // Open WhatsApp URL in a new tab
    window.open(whatsappUrl, '_blank');

    // Reset form fields after successful submission
    reset();
  };

  return (
    <>
     <section className="section  footer">
  <div className="container-fluid px-md-5">
    <div className="row ">
      <div className="col-md-5 offset-md-1 d-none d-md-block">
        <div className="heading">
          <h2 className="other-heading2  ">
            Our exclusive services <br />
            directly to your inbox.
          </h2>
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
        <div className="row ">
          <div className="col-md-9 ps-md-4 align-items-center  text-md-start text-center   p-10">
            <a
              className="lh-lg text-danger font-13"
              href="sales@teknixelevators.com"
            >
              sales@teknixelevators.com
            </a>{" "}
            <br />
            <a className="lh-lg text-danger  font-13" href="tel:+919148788011">
              {" "}
              +91-9148788011
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-2 d-flex align-items-center justify-content-center justify-content-md-start p-10">
        <div className="row ">
          <div className="col-md-12 ">
            <img
              src="img/logo-white.png"
              className="d-block ms-md-0 mx-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div className="row ">
      <div className="col-md-5 offset-md-1 d-flex align-items-center">
        <div>
          <div className="heading d-md-none ">
            <h2 className="other-heading2 text-center ">
              Our exclusive services <br />
              directly to your inbox.
            </h2>
          </div>
          <div className="footer-email m-20">
            <form className="position-relative">
              <input
                type="text"
                className="form-control bg-transparent border-bottom border-top-0 rounded-0 border-start-0 border-end-0   border-opacity-25 p-20 m-10"
                placeholder="E-mail Addresss "
              />
              <div className="row   m-10">
                <div className="  form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="terms"
                    required=""
                  />
                  <p
                    className="form-check-label font-11 text-justify font-light-color"
                    htmlFor="terms"
                  >
                    By providing Global Collective your contact information, you
                    acknowledge and agree to our Privacy Policy and consent to
                    receiving marketing communications, including through
                    automated calls, texts, and emails, some of which may use
                    artificial or prerecorded voices. This consent isn’t
                    necessary for purchasing any products or services and you
                    may opt out at any time. To opt out from texts, you can
                    reply, ‘stop’ at any time. To opt out from emails, you can
                    click on the unsubscribe link in the emails. Message and
                    data rates may apply.
                  </p>
                </div>
              </div>
              <button
                className="border-0 "
                style={{
                  backgroundColor: "black",
                  position: "absolute",
                  right: 10,
                  top: "10%"
                }}
                type="button"
              >
                <img src="img/right-carousel.png" className="w-12" alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-6 m-30">
        <div className="row ">
          <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
            <ul>
              <li>
                {" "}
                <a className="lh-lg text-light font-13" href="#">
                  Home
                </a>
              </li>
              <li>
                {" "}
                <a className="lh-lg text-light font-13" href="#">
                  Elevators
                </a>
              </li>
              <li>
                {" "}
                <a className="lh-lg text-light font-13" href="#">
                  Escalators
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
            <ul>
              <li>
                {" "}
                <a
                  className="lh-lg text-light font-13 text-decoration-none"
                  href="#"
                >
                  Experience Centre
                </a>
              </li>
              <li>
                {" "}
                <a className="lh-lg text-light font-13" href="#">
                  Blog
                </a>
              </li>
              <li>
                {" "}
                <a className="lh-lg text-light font-13" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
            <ul>
              <li>
                {" "}
                <a
                  className="lh-lg text-light font-16 text-decoration-none"
                  href="https://www.facebook.com/teknixelevators/"
                  target="_blank"
                >
                  <i className="bi bi-facebook" />
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="lh-lg text-light font-16 text-decoration-none"
                  href="https://twitter.com/TeknixE"
                  target="_blank"
                >
                  <i className="bi bi-twitter-x" />
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="lh-lg text-light font-19 text-decoration-none"
                  href="https://www.linkedin.com/company/teknixelevators/"
                  target="_blank"
                >
                  <i className="bi bi-linkedin" />
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="lh-lg text-light font-19 text-decoration-none"
                  href="https://www.instagram.com/teknixelevators_india/"
                  target="_blank"
                >
                  <i className="bi bi-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row p-20 d-flex align-items-center text-center">
      <div className="col-md-12 col-12  d-block mx-auto">
        <p className="text-white font-normal text-center py-3">
          Copyright © 2024 Teknix Elevators. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Footer;
