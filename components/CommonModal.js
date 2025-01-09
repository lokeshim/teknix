import { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

const CommanModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    if (!formData.terms)
      errors.terms = "You must accept the terms and conditions";

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
        "service_id027qq", // Replace with your EmailJS service ID
        "template_s4cr05c", // Replace with your EmailJS template ID
        formData,
        "uHS1XaSG1S6EWQMSD" // Replace with your EmailJS public key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          terms: false,
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog border border-light">
          <div className="modal-content">
            <div className="modal-header bg-black">
            <h2 className="text-white">Enquire Now</h2>
              <button
                type="button"
                class="btn-close bg-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body bg-black">
            
              <div className="box-outer">
                <div className="form-box-t">
                  
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
                      {errors.name && (
                        <small className="text-danger">{errors.name}</small>
                      )}
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
                      {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                      )}
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
                      {errors.phone && (
                        <small className="text-danger">{errors.phone}</small>
                      )}
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
                      {errors.message && (
                        <small className="text-danger">{errors.message}</small>
                      )}
                    </div>

                    <div className="form-check mb-4 d-none">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                      />
                      <p
                        className="form-check-label font-11 font-light-color text-white "
                        htmlFor="terms"
                      >
                        By providing Global Collective your contact information,
                        you acknowledge and agree to our{" "}
                        <a
                          href="#"
                          className="text-white text-decoration-none fw-bold"
                        >
                          Privacy Policy
                        </a>{" "}
                        and consent to receiving marketing communications.
                      </p>
                      {errors.terms && (
                        <small className="text-danger">{errors.terms}</small>
                      )}
                    </div>

                    <div className="py-md-3 py-0 m-center text-center">
                      <button
                        type="submit"
                        className="btn text-danger rounded-1 font-12 px-3 font-28 text-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "SEND"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommanModal;
