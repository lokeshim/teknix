import { useState } from 'react';
import Image from 'next/image';

const ConnectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted', formData);
  };

  return (
  <section className="section">
  <div className="container-fluid p-0 ">
    <div className="row  py-0">
      <div className="col-md-5 offset-md-1 sub-section">
        <div className="">
          <p className="other-heading">
            Let us <br />
            Connect you
          </p>
          <p className="py-3 text-start p-30">
            <a
              href=""
              className="text-light text-decoration-none font-11 fw-normal letter-spacing"
            >
              We’ll put you in touch with your acclaimed Global Collective™
              member.
            </a>
          </p>
        </div>
        <form className="p-1 myform">
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control border-bottom rounded-0 bg-transparent border-light border-opacity-25 border-top-0 border-start-0 border-end-0 p-20"
              id="name"
              placeholder="Name"
              required=""
            />
          </div>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control border-bottom rounded-0 bg-transparent border-light border-opacity-25 border-top-0 border-start-0 border-end-0 p-20"
              id="email"
              placeholder="Email"
              required=""
            />
          </div>
          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control border-bottom rounded-0 bg-transparent border-light border-opacity-25 border-top-0 border-start-0 border-end-0 p-20"
              id="message"
              rows={3}
              placeholder="Enter your message"
              required=""
              defaultValue={""}
            />
          </div>
          {/* Terms and Conditions Checkbox */}
          <div className="  form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              required=""
            />
            <p
              className="form-check-label font-11 font-light-color"
              htmlFor="terms"
            >
              By providing Global Collective your contact information, you
              acknowledge and agree to our <a href="#" className="text-white text-decoration-none fw-bold">
                Privacy Policy </a> and consent to receiving marketing communications, including
              through automated calls, texts, and emails, some of which may use
              artificial or prerecorded voices. This consent isn’t necessary for
              purchasing any products or services and you may opt out at any
              time. To opt out from texts, you can reply ‘stop’ at any time. To
              opt out from emails, you can click on the unsubscribe link in the
              emails. Message and data rates may apply.
            </p>
          </div>
          <div className="py-md-5 py-0 m-center">
            {/* Submit Button */}
            <button
              type="submit "
              className="btn text-danger rounded-1 font-12 px-3"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-6">
        <img src="img/lets connect with us.png" alt="" className="w-100" />
      </div>
    </div>
  </div>
</section>

  );
};

export default ConnectForm;
