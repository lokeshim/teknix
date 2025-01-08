import { useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';

const ConnectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    if (!formData.terms) errors.terms = 'You must accept the terms and conditions';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    emailjs
      .send(
        'service_id027qq', // Replace with your EmailJS service ID
        'template_s4cr05c', // Replace with your EmailJS template ID
        formData,
        'uHS1XaSG1S6EWQMSD' // Replace with your EmailJS public key
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '', terms: false });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section className="section">
      <div className="container-fluid p-0">
        <div className="row py-0">
          <div className="col-md-5 offset-md-1 sub-section">
            <div className="">
              <p className="other-heading">
                Let us <br /> Connect you
              </p>
              <p className="py-3 text-start p-30">
                <a
                  href=""
                  className="text-light text-decoration-none font-11 fw-normal letter-spacing"
                >
                  We&apos;ll put you in touch with your acclaimed Global Collective™ member.
                </a>
              </p>
            </div>
            <form className="p-1 myform" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control border-bottom rounded-0 bg-transparent border-light border-opacity-25 border-top-0 border-start-0 border-end-0 p-20"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control border-bottom rounded-0 bg-transparent border-light border-opacity-25 border-top-0 border-start-0 border-end-0 p-20"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="form-label">
                  Mobile
                </label>
                <input
                  type="text"
                  className="form-control border-bottom rounded-0 bg-transparent border-light border-opacity-25 border-top-0 border-start-0 border-end-0 p-20"
                  id="phone"
                  placeholder="Mobile"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control border-bottom rounded-0 bg-transparent border-light border-opacity-25 border-top-0 border-start-0 border-end-0 p-20"
                  id="message"
                  rows={3}
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <small className="text-danger">{errors.message}</small>}
              </div>

              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                <label className="form-check-label font-11 font-light-color" htmlFor="terms">
                  By providing Global Collective your contact information, you acknowledge and agree to our
                  <a href="#" className="text-white text-decoration-none fw-bold">
                    Privacy Policy
                  </a>
                  and consent to receiving marketing communications.
                </label>
                {errors.terms && <small className="text-danger">{errors.terms}</small>}
              </div>

              <div className="py-md-5 py-0 m-center">
                <button
                  type="submit"
                  className="btn text-danger rounded-1 font-12 px-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'SEND'}
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <Image
              src="/img/lets connect with us.png"
              alt="teknix"
              width={956}
              height={587}
              className="w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectForm;
