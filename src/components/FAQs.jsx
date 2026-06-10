import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

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
    <section className="bg-[#f8f9fa] dark:bg-black py-10 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* FAQ Section */}
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-white text-center md:text-left md:mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-white/40 text-center md:text-left mb-6 md:mb-10 font-light">
            Most asked questions all at one place.
          </p>

          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="border border-white/[0.06] bg-[#0a0a0a] overflow-hidden transition-all data-[state=open]:border-[#F47C5A]/30"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between px-5 py-4 text-sm md:text-base font-medium text-gray-800 dark:text-white/80 hover:text-white transition-colors group cursor-pointer">
                    <span className="text-left pr-4">{faq.question}</span>
                    <ChevronDown
                      size={16}
                      className="flex-shrink-0 text-gray-400 dark:text-white/30 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-[#F47C5A]"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="accordion-content overflow-hidden">
                  <div className="px-5 pb-4 text-sm text-gray-500 dark:text-white/50 font-light leading-relaxed border-t border-white/[0.04] pt-3">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

        {/* Ask a Question Form */}
        <div className="bg-[#0a0a0a] border border-white/[0.06] p-6 md:p-8">
          <h3 className="text-lg md:text-2xl font-semibold mb-6 text-white">Make your questions</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full bg-transparent border border-black/10 dark:border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 transition-colors"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full bg-transparent border border-black/10 dark:border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 transition-colors"
            />
            <textarea
              rows="4"
              placeholder="Write Something"
              className="w-full bg-transparent border border-black/10 dark:border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/25 resize-none focus:outline-none focus:border-white/30 transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-200 text-xs uppercase tracking-[0.15em] font-semibold py-3.5 hover:bg-[#e06a4a] transition-colors"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
