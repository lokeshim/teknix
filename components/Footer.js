import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

const Footer = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

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
  <section className="section py-5 footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5 offset-md-1 px-4">
          <div className="heading">
            <h2 className="other-heading2 ">
              Our exclusive services <br />
              directly to your inbox.
            </h2>
          </div>
          <div>
            <div className="footer-email">
              <form className="">
                <input
                  type="text"
                  className="form-control bg-transparent border-bottom border-top-0 rounded-0 border-start-0 border-end-0 px-0 mb-3 py-3"
                  placeholder="E-mail Addresss "
                />
                <div className="row mt-2">
                  <div className="col-1 text-center">
                    <div className="form-check text-center ">
                      <input
                        className="form-check-input px-2 py-2"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="col-11 p-0">
                    <p className="font-12 d-inline  ">
                      By providing Global Collective your contact information,
                      you acknowledge and agree to our Privacy Policy and
                      consent to receiving marketing communications, including
                      through automated calls, texts, and emails, some of which
                      may use artificial or prerecorded voices. This consent
                      isn’t necessary for purchasing any products or services
                      and you may opt out at any time. To opt out from texts,
                      you can reply, ‘stop’ at any time. To opt out from emails,
                      you can click on the unsubscribe link in the emails.
                      Message and data rates may apply.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="row mb-5">
            <div className="col-md-9 my-5">
              <a
                className="lh-lg text-danger font-15"
                href="sales@teknixelevators.com"
              >
                sales@teknixelevators.com
              </a>{" "}
              <br />
              <a
                className="lh-lg text-danger  font-15"
                href="tel:+919148788011"
              >
                {" "}
                +91-9148788011
              </a>
            </div>
          </div>
          <div className="row mt-5 mb-3">
            <div className="col-md-6">
              <ul>
                <li>
                  {" "}
                  <a className="lh-lg text-light font-15" href="#">
                    Home
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="lh-lg text-light font-15" href="#">
                    Elevators
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="lh-lg text-light font-15" href="#">
                    ESCALATORS
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  {" "}
                  <a
                    className="lh-lg text-light font-15 text-decoration-none"
                    href="#"
                  >
                    EXPERIENCE CENTRE
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="lh-lg text-light font-15" href="#">
                    BLOG
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="lh-lg text-light font-15" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-2 px-md-5">
          <img
            src="img/logo-white.png"
            className="d-block mx-auto my-5 py-3"
            alt=""
          />
          <ul className="mt-5 my-5">
            <li>
              {" "}
              <a
                className="lh-lg text-light font-15 text-decoration-none"
                href="#"
              >
                facebook
              </a>
            </li>
            <li>
              {" "}
              <a className="lh-lg text-light font-15" href="#">
                instagram
              </a>
            </li>
            <li>
              {" "}
              <a className="lh-lg text-light font-15" href="#">
                linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-footer bg-dark">
    <div className="container">
      <div className="row  d-flex align-items-center">
        <div className="col-md-12 col-12  d-block mx-auto">
          <p className="text-white font-normal mb-0 text-center py-3">
            Copyright © 2024 Teknix Elevators. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </section>
</>

  );
};

export default Footer;
