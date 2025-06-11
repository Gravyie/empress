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

  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
        <p className="text-center text-gray-500 mb-10">
          Most asked questions all at one place.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-b pb-4 transition-all duration-300 ease-in-out"
            >
              <summary className="cursor-pointer flex justify-between items-center py-3 text-lg font-medium text-gray-800 list-none">
                {faq.question}
                <svg
                  className="w-5 h-5 text-gray-600 transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-600 mt-2 px-1">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
