
const insights = [
  {
    type: "image",
    src: "/images/img1.JPG",
    alt: "High-performance custom PC build",
  },
  {
    type: "text",
    icon: "🧠",
    title: (
      <>
        Power Meets <span className="underline decoration-green-500">Precision</span>
      </>
    ),
    description:
      "Every Empress PC is built with hand-picked components to ensure flawless performance, whether you're gaming, editing, or running simulations.",
  },
  {
    type: "text",
    icon: "⚙️",
    title: (
      <>
        Built for <span className="underline decoration-purple-400">Your Workflow</span>
      </>
    ),
    description:
      "From liquid-cooled beasts to silent workstations, our custom rigs are engineered for creators, gamers, engineers, and professionals alike.",
  },
  {
    type: "image",
    src: "/images/img2.JPG",
    alt: "Gamer using Empress PC setup",
  },
];


const InsightBlocks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-xl">
      {insights.map((insight, idx) =>
        insight.type === "image" ? (
          <div key={idx} className="rounded-2xl overflow-hidden shadow">
            <img
              src={insight.src}
              alt={insight.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow p-8 flex flex-col justify-center text-center"
          >
            <div className="text-3xl mb-4">{insight.icon}</div>
            <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
            <p className="text-gray-600 text-sm">{insight.description}</p>
          </div>
        )
      )}
    </div>
  );
};

export default InsightBlocks;
