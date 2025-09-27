import React from 'react';

const ContactForm = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-12">
        {/* Contact Info */}
        <div className="flex-1 text-gray-700">
          <h2 className="text-4xl text-[#111827] font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-[#4B5563] mb-10">
            Ready to start your next project? Contact us today and let's discuss how we can help transform your business.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <img src="/Homeimages/Overlay-9.svg" alt="Email icon" className="w-10 h-10" />
              <div>
                <p className="text-base"><strong>Email:</strong></p>
                <p className="text-sm text-[#4B5563]">zoroinnovations@yahoo.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src="/Homeimages/Overlay-10.svg" alt="Phone icon" className="w-10 h-10" />
              <div>
                <p className="text-base"><strong>Phone:</strong></p>
                <p className="text-sm text-[#4B5563]">+919481414295</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src="/Homeimages/Overlay-11.svg" alt="Address icon" className="w-10 h-10" />
              <div>
                <p className="text-base"><strong>Address:</strong></p>
                <p className="text-sm text-[#4B5563]">#117 Reddys Colony Street,Thondebhavi, Gowribidanuru Taluk, Chikkaballapur District, KA 561213</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
          <div className="contact-right">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">Your City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your goals or concerns..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13" stroke="white" strokeWidth="2" />
                      <path
                        d="M22 2L15 22L11 13L2 9L22 2Z"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    Send Message
                  </>
                )}
              </button>

              {status.message && (
                <p
                  style={{
                    color: status.type === "success" ? "green" : "red",
                    marginTop: "10px",
                  }}
                >
                  {status.message}
                </p>
              )}

              <p className="privacy-text">
                By submitting this form, you agree to our{" "}
                <a href="#">Privacy Policy</a>
              </p>
            </form>
          </div>
      </div>
    </section>
  );
};

export default ContactForm;
