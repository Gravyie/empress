import React from "react";

const events = [
  {
    id: 1,
    title: "Valorant Showdown 2025",
    date: "June 8, 2025",
    location: "Lucknow",
    description: "Join India's top FPS teams in a high-stakes Valorant tournament powered by our ultimate gaming rigs. Open to all.",
    image: "/images/valotour.jpeg",
  },
  {
    id: 2,
    title: "Launch of Creator Beast X1",
    date: "June 25, 2025",
    location: "New Delhi",
    description: "Unveiling our flagship content creation PC with live demos and hands-on experience.",
    image: "/images/img1.JPG",
  },
  {
    id: 3,
    title: "Custom Build Workshop",
    date: "July 10, 2025",
    location: "Bangalore",
    description: "Join us for a DIY PC building session with experts and get exclusive discounts.",
    image: "/images/img2.JPG",
  },
  {
    id: 4,
    title: "Liquid Cooling Masterclass",
    date: "August 5, 2025",
    location: "Mumbai",
    description: "Advanced session for enthusiasts wanting to explore performance cooling systems.",
    image: "/images/img6.JPG",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#F47C5A] mb-3">Events & Experiences</h1>
        <p className="text-gray-600 text-lg">
          Connect with fellow builders, enthusiasts, and pros at our upcoming events.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
            <div
            key={event.id}
            className="bg-white rounded shadow overflow-hidden flex flex-col h-full"
            >
            <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-[#F47C5A]">{event.title}</h2>
                <p className="text-sm text-gray-500 mb-1">
                📅 {event.date} | 📍 {event.location}
                </p>
                <p className="text-gray-700 mb-4">{event.description}</p>

                <div className="mt-auto pt-2">
                <button className="w-full bg-[#F47C5A] text-white px-4 py-2 rounded">
                    Know More
                </button>
                </div>
            </div>
            </div>
        ))}
      </section>

    </div>
  );
};

export default Events;
