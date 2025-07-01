import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';


const Footer = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const current_date = new Date(); // Create a new Date object
  const current_year = current_date.getFullYear(); // Get the current year
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


  };

  return (
    <>
      <section className="section  footer">
        <div className="container-fluid px-md-5">
          <div className="row ">
            <div className="col-md-5 offset-md-1 d-none d-md-block">
              <div className="heading">
                <h2 className="other-heading2  ">Our exclusive services <br />
                  directly to your inbox.</h2>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
              <div className="row ">
                <div className="col-md-9 ps-md-0 align-items-center  text-md-start text-center   p-10">
                  <Link className="lh-lg text-danger font-13  " href="sales@teknixelevators.com" style={{ "display": "block ruby" }}> <i className="bi bi-envelope-at px-2" /> sales@teknixelevators.com</Link> <br />
                  <Link className="lh-lg text-danger  font-13" href="tel:+919148788011"><i className="bi bi-telephone px-2" /> +91-9148788011</Link> <br />
                  <Link className="lh-lg text-danger  font-13" href="tel:+919141413435"> <i className="bi bi-telephone px-2" /> +919141413435 </Link>
                </div>
              </div>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center justify-content-md-start p-10">
              <div className="row ">
                <div className="col-md-12 ">
                  <Image
                    width={115}
                    height={80}
                    src="/img/logo-white.png"
                    className="d-block ms-md-0 mx-auto img-fluid"
                    alt="teknix logo" layout="intrinsic"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-5 offset-md-1 d-flex align-items-center">
              <div className="w-100">
                <div className="heading d-md-none ">
                  <h2 className="other-heading2 text-center ">Our exclusive services <br />
                    directly to your inbox.</h2>
                </div>
                <div className="footer-email m-20">
                  <form className="position-relative">
                    <input type="text" className="form-control bg-transparent border-bottom border-top-0 rounded-0 border-start-0 border-end-0   border-opacity-25 p-20 m-10 w-100" placeholder="E-mail Addresss " />
                    <div className="row   m-10">
                      <div className=" d-none form-check">
                        <input type="checkbox" className="form-check-input" id="terms" required />
                        <p className="form-check-label font-11 text-justify font-light-color" htmlFor="terms">
                          &nbsp;
                        </p>
                      </div>
                    </div>
                    <button className="border-0 " style={{ "background-color": "black", "position": "absolute", "right": "10px", "top": "10%" }} type="button">
                      <Image src="/img/right-carousel.png" className="w-12" alt="" width={16}
                        height={16} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-30">
              <div className="row ">
                <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
                  <ul>
                    <li> <Link className="lh-lg text-light font-13" href="./">Home</Link></li>
                    <li> <Link className="lh-lg text-light font-13" href="/about">About</Link></li>
                    <li> <Link className="lh-lg text-light font-13" href="/privacy-policy">Privacy Policy</Link></li>
                  </ul>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
                  <ul>
                    <li> <Link className="lh-lg text-light font-13 text-decoration-none" href="/experience-center">Experience Centre</Link></li>
                    <li> <Link className="lh-lg text-light font-13" href="/blog">Blog</Link></li>
                    <li> <Link className="lh-lg text-light font-13" href="/contact">Contact</Link></li>
                  </ul>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start social">
                  <ul>
                    <li> <Link className="lh-lg text-light font-16 text-decoration-none" href="https://www.facebook.com/teknixelevators/" target="_blank"><i className="bi bi-facebook" /></Link></li>
                    <li> <Link className="lh-lg text-light font-16 text-decoration-none" href="https://twitter.com/TeknixE" target="_blank"><i className="bi bi-twitter-x" /></Link></li>
                    <li> <Link className="lh-lg text-light font-19 text-decoration-none" href="https://www.linkedin.com/company/teknixelevators/" target="_blank"><i className="bi bi-linkedin" /></Link></li>
                    <li> <Link className="lh-lg text-light font-19 text-decoration-none" href="https://www.instagram.com/teknixelevators_india/" target="_blank"><i className="bi bi-instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-20 d-flex align-items-center text-center">
            <div className="col-md-12 col-12  d-block mx-auto">
              <p className="text-white font-normal text-center py-3">Copyright © 2025 Teknix Elevators. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>

      <Link href="https://wa.me/918123393168?text=hi" style={{ position: "fixed", right: "10px", bottom: "100px" }}><Image src="/img/whatsapp.png" width={80} height={80} alt="whatsapp" /></Link>
      <div data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ position: "fixed", right: "22px", bottom: "200px", cursor:"pointer"}}><i className="fa-solid fa-envelope" style={{ fontSize: "28px", width: "50px", height: "50px", borderRadius: "50%", border: '1px solid #fff', padding: "10px 10px" }}></i></div>
    </>
  );
};

export default Footer;
