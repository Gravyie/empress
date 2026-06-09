import React from 'react';
import { Sparkles, Waves } from 'lucide-react';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    image: '/images/Event/event1.png',
    date: 'JUNE 8, 2025',
    location: 'LUCKNOW',
    title: 'Valorant Showdown 2025',
  },
  {
    id: 2,
    image: '/images/Event/event1.png',
    date: 'JUNE 8, 2025',
    location: 'LUCKNOW',
    title: 'Launch of Creator Be...',
  },
  {
    id: 3,
    image: '/images/Event/event1.png',
    date: 'JUNE 8, 2025',
    location: 'LUCKNOW',
    title: 'Custom Build Workshop',
  },
  {
    id: 4,
    image: '/images/Event/event1.png',
    date: 'JUNE 10, 2025',
    location: 'DELHI',
    title: 'Esports Summit 2025',
  },
  {
    id: 5,
    image: '/images/Event/event1.png',
    date: 'JUNE 12, 2025',
    location: 'MUMBAI',
    title: 'Future of Gaming Expo',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const EventSchedule = () => {
  return (
    <section className="bg-[#f8f9fa] dark:bg-black py-6 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-12">
          <div className="flex-shrink-0 mr-2 sm:mr-4 z-[10] hidden sm:block">
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-400 dark:text-white/30 opacity-50" />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2">
              Events Schedule
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto sm:mx-0">
              <span className="text-[#F47C5A] font-bold">Tech Event 2025</span> showcases groundbreaking innovations, featuring keynote talks,
              interactive workshops, and networking sessions for tech enthusiasts and industry leaders.
            </p>
          </div>

          <div className="flex-shrink-0 ml-2 sm:ml-4 hidden sm:block">
            <Waves className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-400 dark:text-white/30 opacity-50 rotate-90" />
          </div>
        </div>

        {/* Concise Horizontal Scrollable Events */}
        <div className="overflow-x-auto no-scrollbar pb-8 pt-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex flex-row flex-nowrap gap-x-4 sm:gap-x-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="flex-shrink-0 w-[260px] sm:w-[300px]
                  bg-[#f8f9fa] dark:bg-black/40 backdrop-blur-xl rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden 
                  transition-all duration-300 hover:border-black/20 dark:border-white/20 hover:shadow-[0_0_30px_rgba(244,124,90,0.15)] hover:-translate-y-2 
                  cursor-pointer flex flex-col snap-center group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                variants={cardVariants}
              >
                <div className="w-full h-40 sm:h-48 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={`Event banner for ${event.title}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent opacity-90"></div>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white flex flex-col justify-end">
                    <p className="text-[10px] font-semibold text-[#F47C5A] uppercase tracking-widest mb-1.5">
                      {event.date} • {event.location}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold leading-snug line-clamp-2">
                      {event.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
