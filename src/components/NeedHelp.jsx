import { Mail, Phone, MapPin } from 'lucide-react';
import { useInView } from "react-intersection-observer";

export default function SupportSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-[#f8f9fa] dark:bg-black py-6 md:py-12 px-4 sm:px-8 lg:px-24 transition-opacity duration-1000 ${
        inView ? "animate-fadeInFromBack" : "opacity-0"
      }`}
    >
      <div className="border border-white/[0.08] bg-[#0a0a0a] text-white p-6 sm:p-8 lg:p-10 max-w-7xl mx-auto space-y-8 sm:space-y-10 text-sm sm:text-base">
        {/* Chrome accent line at top */}
        <div className="w-16 h-[2px] shine-chrome" />

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center lg:text-left">
          Need help?
        </h2>

        <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 lg:gap-16 text-center lg:text-left">
          {/* Left text section */}
          <div className="lg:w-1/2 space-y-3 sm:space-y-4">
            <p className="text-gray-500 dark:text-white/50 leading-relaxed font-light">
              If you need assistance, check out our FAQ section for answers to common questions.
            </p>
            <p className="text-gray-500 dark:text-white/50 leading-relaxed font-light">
              Still need help? Reach out to our customer service team via email or phone.
            </p>
          </div>

          {/* Contact info section */}
          <div className="lg:w-1/2 flex flex-col gap-4 items-center lg:items-start text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gray-400 dark:text-white/30" />
              <span className="text-gray-600 dark:text-white/60">customerhelp@empress.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gray-400 dark:text-white/30" />
              <span className="text-gray-600 dark:text-white/60">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gray-400 dark:text-white/30" />
              <span className="text-gray-600 dark:text-white/60">123 Business Street, Lucknow, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
