"use client";
import { useState } from "react";

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
    console.log(formData);
  };

  return (
    <section className="bg-black text-white min-h-screen py-16 px-6 md:px-20 flex flex-col">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        NEED A HAND?
      </h1>

      <div className="flex-1 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="mb-1">info@empresspc.com</p>
            <p className="mb-1">+91-98765-43210</p>
            <p>
              MS-101, Sector D, Aliganj<br />
              Lucknow, Uttar Pradesh 226024
            </p>
          </div>

          <div className="w-full h-96 rounded-md overflow-hidden">
            <iframe
              title="map"
              className="w-full h-full border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.1757173569677!2d80.93914200662265!3d26.89233959639682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957e2ed209839%3A0x18c74c3fa5f0c56a!2sEmpress%20Computers%20(empresspc.in)!5e0!3m2!1sen!2sin!4v1749731724272!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        
        <div className="w-full max-w-md mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-white">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
                type="text"
                name="first"
                required
                placeholder="First name *"
                className="bg-transparent border border-purple-500 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                onChange={handleChange}
            />
            <input
                type="text"
                name="last"
                required
                placeholder="Last name *"
                className="bg-transparent border border-purple-500 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                onChange={handleChange}
            />
            </div>
            <input
            type="email"
            name="email"
            required
            placeholder="Email *"
            className="w-full bg-transparent border border-purple-500 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            onChange={handleChange}
            />
            <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full bg-transparent border border-purple-500 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            onChange={handleChange}
            />
            <textarea
            name="message"
            rows="4"
            placeholder="Leave us a message"
            className="w-full bg-transparent border border-purple-500 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            onChange={handleChange}
            ></textarea>
            <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 w-full"
            >
            Submit
            </button>
        </form>
        </div>

      </div>
    </section>
  );
}
