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
    <section className="bg-white py-6 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-12">
          <div className="flex-shrink-0 mr-2 sm:mr-4 z-[10] hidden sm:block">
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-300 opacity-50" />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
              Events Schedule
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto sm:mx-0">
              <span className="text-purple-500">Tech Event 2025</span> showcases groundbreaking innovations, featuring keynote talks,
              interactive workshops, and networking sessions for tech enthusiasts and industry leaders.
            </p>
          </div>

          <div className="flex-shrink-0 ml-2 sm:ml-4 hidden sm:block">
            <Waves className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-300 opacity-50 rotate-90" />
          </div>
        </div>

        {/* Scrollable Events */}
        <div className="overflow-x-auto hide-scrollbar pb-4 md:pb-6">
          <div className="flex flex-row flex-nowrap gap-x-6 md:gap-x-8 lg:gap-x-10">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="flex-shrink-0 w-[200px] sm:w-[320px] md:w-[360px] lg:w-[400px]
                  bg-gray-800 rounded-xl shadow-lg overflow-hidden 
                  transform hover:scale-x-[1.08] hover:shadow-2xl hover:z-10 
                  cursor-pointer flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                variants={cardVariants}
              >
                <div className="w-full h-36 sm:h-48 md:h-56 relative rounded-t-xl overflow-hidden">
                  <img
                    src={event.image}
                    alt={`Event banner for ${event.title}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black opacity-70"></div>
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white flex flex-col justify-end">
                    <p className="text-xs sm:text-sm font-semibold mb-1">
                      {event.date} | {event.location}
                    </p>
                    <h3 className="text-sm sm:text-lg font-bold leading-tight line-clamp-2">
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
