import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function FAQSection() {
  const faqs = [
    {
      question: "Can I customize my own PC using components from your website?",
      answer:
        "Yes, absolutely! We offer a wide range of components to customize your PC build including CPUs, graphics cards, motherboards, RAM, storage, and more.",
    },
    {
      question: "Can you help me choose the right components for my custom PC?",
      answer:
        "Yes, our support team is happy to assist you in selecting compatible parts based on your needs and budget.",
    },
    {
      question: "What components do I need to build my own PC?",
      answer:
        "You'll typically need a CPU, motherboard, GPU, RAM, storage (SSD/HDD), power supply, and a PC case.",
    },
    {
      question: "Do pre-built PCs come with a warranty?",
      answer:
        "Yes, all our pre-built systems include a warranty. The duration varies based on the components and package.",
    },
    {
      question: "What is the shipping cost and delivery time for my order?",
      answer:
        "Shipping cost depends on your location and the weight of the order. Delivery typically takes 3–7 business days.",
    },
    {
      question: "Do you offer any promotions or discounts?",
      answer:
        "Yes, we regularly offer deals and seasonal discounts. Subscribe to our newsletter or follow us on social media to stay updated.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 md:gap-12 flex justify-center items-center">
        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold text-center md:text-left mb-2">
            Frequently asked questions
          </h2>
          <p className="text-gray-500 text-center md:text-left mb-4 md:mb-10">
            Most asked questions all at one place.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.15,
              });

              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  ref={ref}
                  className={`rounded-md transition-all duration-300 border ${
                    isOpen
                      ? 'border-[#F47C5A]'
                      : 'border-gray-200 bg-white'
                  } ${
                    inView ? 'animate-fadeUp' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    animationDelay: inView ? `${index * 0.1}s` : '0s',
                    animationFillMode: 'both'
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full text-left flex justify-between items-center px-4 py-3 text-lg font-medium transition-colors ${
                      isOpen ? 'text-[#F47C5A]' : 'text-gray-800'
                    }`}
                  >
                    {faq.question}
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#F47C5A]' : 'text-gray-500'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-sm text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Ask a Question Form */}
        <div className="bg-gray-50 rounded-xl shadow-sm p-4 md:p-8">
          <h3 className="text-2xl font-semibold mb-6">Make your questions</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F47C5A]"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F47C5A]"
            />
            <textarea
              rows="4"
              placeholder="Write Something"
              className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#F47C5A]"
            />
            <button
              type="submit"
              className="w-full bg-[#F47C5A] text-white py-3 rounded-md hover:bg-orange-500 transition-colors"
            >
              SEND REQUEST
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
