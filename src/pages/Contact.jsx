import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  const inputClasses = "w-full bg-transparent border border-black/10 dark:border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 transition-colors";

  return (
    <section className="bg-[#f8f9fa] dark:bg-black text-white min-h-screen py-8 md:py-12 px-6 md:px-20 flex flex-col">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
        NEED A HAND?
      </h1>
      <p className="text-center text-gray-400 dark:text-white/30 text-sm mb-12 font-light">We're here to help — get in touch.</p>

      <div className="flex-1 grid md:grid-cols-2 gap-8 md:gap-16 items-start max-w-6xl mx-auto w-full">
        <div className="space-y-8">
          <div className="bg-[#0a0a0a] border border-white/[0.06] p-6">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <div className="space-y-2 text-gray-500 dark:text-white/50 text-sm font-light">
              <p>info@empresspc.com</p>
              <p>+91-98765-43210</p>
              <p>
                MS-101, Sector D, Aliganj<br />
                Lucknow, Uttar Pradesh 226024
              </p>
            </div>
          </div>

          <div className="w-full h-80 overflow-hidden border border-white/[0.06]">
            <iframe
              title="map"
              className="w-full h-full border-none invert brightness-50 contrast-125"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.1757173569677!2d80.93914200662265!3d26.89233959639682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957e2ed209839%3A0x18c74c3fa5f0c56a!2sEmpress%20Computers%20(empresspc.in)!5e0!3m2!1sen!2sin!4v1749731724272!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        
        <div className="bg-[#0a0a0a] border border-white/[0.06] p-6 md:p-8">
          <h2 className="text-lg font-semibold text-white mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="first"
                required
                placeholder="First name *"
                className={inputClasses}
                onChange={handleChange}
              />
              <input
                type="text"
                name="last"
                required
                placeholder="Last name *"
                className={inputClasses}
                onChange={handleChange}
              />
            </div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email *"
              className={inputClasses}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className={inputClasses}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Leave us a message"
              className={`${inputClasses} resize-none`}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-200 text-black text-xs uppercase tracking-[0.15em] font-semibold py-3.5 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
