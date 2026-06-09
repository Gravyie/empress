import { useInView } from 'react-intersection-observer';

export default function UpcomingEvents() {
  const events = [
    {
      title: "The Future of Digital Innovation",
      by: "Make Torello",
      description:
        "Harnessing emerging technologies to revolutionize industries, enhance user experiences, and drive unprecedented growth in a rapidly evolving digital landscape.",
      time: "10:00 AM - 11:00 AM",
      color: "bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10",
      image: "/images/team/member2.png",
    },
    {
      title: "Trends AI and Machine Learning",
      by: "David Brown",
      description:
        "AI and Machine Learning are revolutionizing industries by enabling advanced data analysis, personalized experiences, and intelligent automation.",
      time: "11:15 AM - 12:30 PM",
      color: "bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10",
      image: "/images/team/member3.png",
    },
    {
      title: "Lunch Break & Networking",
      by: "",
      description: "",
      time: "12:30 PM - 2:00 PM",
      color: "bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 opacity-50",
      image: "",
    },
    {
      title: "Digital Marketing for a New Era",
      by: "Jenifer Moore",
      description:
        "Navigate the evolving landscape of digital marketing using innovative strategies and technologies to create compelling campaigns.",
      time: "2:00 PM - 3:00 PM",
      color: "bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10",
      image: "/images/team/member4.png",
    },
    {
      title: "Introduction to Blockchain",
      by: "Emily Davis",
      description:
        "Blockchain introduction: Decentralized ledger tech records secure, transparent, immutable transactions across networks.",
      time: "3:00 PM - 4:00 PM",
      color: "bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10",
      image: "/images/team/member5.png",
    },
  ];

  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  return (
    <section className="pb-10 px-4 bg-[#f8f9fa] dark:bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">UPCOMING GAMING EVENTS</h2>
        <p className="text-gray-600 dark:text-white/60 max-w-2xl mx-auto mb-2">
          Explore the complete event schedule to find sessions, speakers, and activities that match your interests and needs.
        </p>
      </div>

      <div className="space-y-2 max-w-4xl mx-auto">
        {events.map((event, index) => (
          <div
            ref={ref}
            key={index}
            className={`flex flex-col md:flex-row justify-between items-start md:items-center ${event.color} rounded-2xl p-4 md:p-6 shadow-none hover:bg-black/10 dark:bg-white/10 hover:border-black/20 dark:border-white/20 transition-all duration-500
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{
                  transitionDelay: inView ? `${index * 100}ms` : '0ms',
                }}
          >
            {event.image ? (
              <div className="flex items-center gap-4 w-full md:w-3/4">
                <img
                  src={event.image}
                  alt={event.by}
                  className="w-16 h-16 rounded-full object-cover border border-black/20 dark:border-white/20"
                />
                <div>
                  <h3 className="text-sm sm:text-lg md:font-semibold">{event.title}</h3>
                  <p className="text-[0.7rem] sm:text-sm text-white/90">By {event.by}</p>
                  <p className="text-[0.7rem] sm:text-sm text-gray-600 dark:text-white/60 mt-1">{event.description}</p>
                </div>
              </div>
            ) : (
              <div className="w-full text-center">
                <h3 className="text-lg font-semibold">{event.title}</h3>
              </div>
            )}
            <div className="text-[0.5rem] sm:text-sm text-gray-700 dark:text-white/70 sm:font-medium md:text-right w-full md:w-1/4 text-right">
              {event.time}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded text-xs uppercase tracking-widest font-semibold transition-colors">
          See All Schedule
        </button>
      </div>
    </section>
  );
}
