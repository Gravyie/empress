import {
  Gamepad2,
  Users,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import CountUp from 'react-countup';

export default function AboutStats() {
  return (
    <section className="bg-[#f8f9fa] dark:bg-black text-white px-6 py-12 md:py-20 text-center">
      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10 md:mb-16">
        <StatBox number="10,000+" label="Custom Builds" />
        <StatBox number="8,500+" label="Happy Clients" />
        <StatBox number="6" label="Years Experience" />
        <StatBox number="4.9⭐" label="Average Rating" />
      </div>

      {/* Values Heading */}
      <div className="mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-white">Our Values</h2>
        <p className="text-gray-500 dark:text-white/40 mt-1 font-light">
          The core principles that drive everything we do
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
        <ValueCard
          title="Gaming First"
          description="Every decision we make is driven by what's best for the gaming community and experience."
          icon={<Gamepad2 className="w-4 h-4" />}
        />
        <ValueCard
          title="Community"
          description="Build lasting relationships with gamers and foster a supportive gaming ecosystem."
          icon={<Users className="w-4 h-4" />}
        />
        <ValueCard
          title="Quality"
          description="Uncompromising standards in every component, build, and customer interaction."
          icon={<ShieldCheck className="w-4 h-4" />}
        />
        <ValueCard
          title="Innovation"
          description="Constantly pushing boundaries with cutting-edge technology and creative solutions."
          icon={<Sparkles className="w-4 h-4" />}
        />
      </div>

      {/* CTA */}
      <div className="mt-10 md:mt-16 border border-white/[0.08] bg-[#0a0a0a] p-6 md:p-8 max-w-3xl mx-auto">
        <div className="w-12 h-[2px] shine-chrome mx-auto mb-5" />
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
          Ready to Build Your Dream Rig?
        </h3>
        <p className="text-gray-500 dark:text-white/40 mb-6 font-light text-sm">
          Join thousands of satisfied gamers who trust Empress PC for their
          ultimate gaming setup.
        </p>
        <button className="bg-white hover:bg-gray-200 text-black px-7 py-3 text-xs uppercase tracking-[0.15em] font-semibold transition-colors">
          Get Started Today
        </button>
      </div>
    </section>
  );
}

function StatBox({ number, label }) {
  const match = number.match(/^([\d.,]+)([^\d]*)$/); // Extract numeric part + suffix
  const numericPart = match ? parseFloat(match[1].replace(/,/g, '')) : null;
  const suffix = match ? match[2] : '';

  return (
    <div className="border border-white/[0.08] bg-[#0a0a0a] py-6 px-4">
      <p className="text-2xl font-bold text-chrome">
        {numericPart !== null ? (
          <CountUp
            end={numericPart}
            duration={2}
            decimals={number.includes('.') ? 1 : 0}
            separator=","
            suffix={suffix}
          />
        ) : (
          number
        )}
      </p>
      <p className="text-xs text-gray-500 dark:text-white/40 mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
}

function ValueCard({ title, description, icon }) {
  return (
    <div className="group relative bg-[#0a0a0a] border border-white/[0.06] p-5 text-left overflow-hidden hover:border-white/15 transition-all duration-300">
      <div className="shimmer-line" />
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-white/60">
          {icon}
        </div>
        <h4 className="font-semibold text-sm text-white/90">{title}</h4>
      </div>
      <p className="text-sm text-gray-500 dark:text-white/40 leading-relaxed font-light">{description}</p>
    </div>
  );
}
