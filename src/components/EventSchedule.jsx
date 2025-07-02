import React from 'react';
import { Stars, Waves } from 'lucide-react'; // Make sure these are installed

// Dummy data for event cards (same as before)
const events = [
  {
    id: 1,
    image: '/images/Event/event1.png', // Replace with your actual image path
    date: 'JUNE 8, 2025',
    location: 'LUCKNOW',
    title: 'Valorant Showdown 2025',
  },
  {
    id: 2,
    image: '/images/Event/event1.png', // Replace with your actual image path
    date: 'JUNE 8, 2025',
    location: 'LUCKNOW',
    title: 'Launch of Creator Be...',
  },
  {
    id: 3,
    image: '/images/Event/event1.png', // Replace with your actual image path
    date: 'JUNE 8, 2025',
    location: 'LUCKNOW',
    title: 'Custom Build Workshop',
  },
  {
    id: 4,
    image: '/images/Event/event1.png', // Example of more events
    date: 'JUNE 10, 2025',
    location: 'DELHI',
    title: 'Esports Summit 2025',
  },
  {
    id: 5,
    image: '/images/Event/event1.png', // Example of more events
    date: 'JUNE 12, 2025',
    location: 'MUMBAI',
    title: 'Future of Gaming Expo',
  },
];

const EventSchedule = () => {
  return (
    <section className="bg-white py-6 md:py-10 px-4 sm:px-6 lg:px-8">
      {/* Changed max-w-full to max-w-7xl for consistent centering on larger screens */}
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Responsive layout for icons and text */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-12"> {/* KEY FIX: flex-col on mobile, then row on sm+ */}
          
          {/* Star Icon - Hidden on very small screens, visible on sm+ */}
          <div className="flex-shrink-0 mr-2 sm:mr-4 z-[10]"> {/* hide on base, show on sm and up */}
            {/* Corrected invalid lg:h-h-22, color, and opacity for better look */}
            <Stars className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-300 opacity-50" />
          </div>

          {/* Heading and Description - Grouped in one flex-1 div for proper flow */}
          <div className="flex-1 text-center sm:text-left"> {/* KEY FIX: text-center on mobile, left on sm+ */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
              Events Schedule
            </h2>
            {/* Paragraph uses max-w-2xl for desktop, mx-auto for centering on mobile */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto sm:mx-0"> {/* KEY FIX: mx-auto for mobile centering */}
              <span className='text-purple-500'>Tech Event 2025</span> showcases groundbreaking innovations, featuring keynote talks,
              interactive workshops, and networking sessions for tech enthusiasts and industry leaders.
            </p>
          </div>

          {/* Squiggle Icon - Hidden on very small screens, visible on sm+ */}
          <div className="flex-shrink-0 ml-2 sm:ml-4 hidden sm:block"> {/* hide on base, show on sm and up */}
            {/* Corrected invalid lg:h-h-22, color, and rotation */}
            <Waves className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-300 opacity-50 rotate-90" />
          </div>
        </div>

        {/* Horizontal Scroll Block */}
        <div className="overflow-x-auto hide-scrollbar pb-4 md:pb-6">
          <div className="flex flex-row flex-nowrap gap-x-6 md:gap-x-8 lg:gap-x-10"> {/* Gaps between cards */}
            {events.map((event) => (
              <div
                key={event.id}
                className="flex-shrink-0 
                           w-[200px] sm:w-[320px] md:w-[360px] lg:w-[400px] /* Card Widths */
                           bg-gray-800 rounded-xl shadow-lg overflow-hidden 
                           transform transition-transform duration-300 ease-out 
                           hover:scale-x-[1.08] hover:shadow-2xl hover:z-10 
                           cursor-pointer flex flex-col"
              >
                {/* Event Image with Overlay Content */}
                <div className="w-full h-36 sm:h-48 md:h-56 relative rounded-t-xl overflow-hidden"> {/* Added rounded-t-xl, overflow-hidden */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Black Tint Gradient - Adjusted opacity for tint effect */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black opacity-70"></div> {/* KEY FIX: opacity for tint, height to h-1/2 */}
                  
                  {/* Content Overlay - Grouped and using flexbox for proper stacking on image */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white flex flex-col justify-end"> {/* KEY FIX: p-3 for mobile, then sm:p-4 */}
                    {/* Date & Location */}
                    <p className="text-xs sm:text-sm font-semibold mb-1"> {/* mb-1 for spacing between date/title */}
                      {event.date} | {event.location}
                    </p>
                    {/* Event Title */}
                    <h3 className="text-sm sm:text-lg font-bold leading-tight line-clamp-2"> {/* Smaller text for mobile title */}
                      {event.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;