
const insights = [
  {
    type: "image",
    src: "/images/img1.JPG",
    alt: "High-performance custom PC build",
  },
  {
    type: "text",
    title: (
      <>
        Power Meets <span className="text-chrome">Precision</span>
      </>
    ),
    description:
      "Every Empress PC is built with hand-picked components to ensure flawless performance, whether you're gaming, editing, or running simulations.",
  },
  {
    type: "text",
    title: (
      <>
        Built for <span className="text-chrome">Your Workflow</span>
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
    <div className="md:px-30 grid grid-cols-1 md:grid-cols-2 gap-2 px-3 py-3 sm:px-4 bg-[#0a0a0a]">
      {insights.map((insight, idx) => {
        // Reorder 3rd and 4th items on mobile only
        let orderClass = "";
        if (idx === 2) orderClass = "order-4 md:order-3";
        else if (idx === 3) orderClass = "order-3 md:order-4";

        const baseClass =
          insight.type === "image"
            ? "overflow-hidden border border-white/[0.06]"
            : "bg-[#f8f9fa] dark:bg-black border border-white/[0.06] px-4 py-5 sm:px-5 sm:py-6 flex flex-col justify-center text-center";

        return (
          <div key={idx} className={`${baseClass} ${orderClass}`}>
            {insight.type === "image" ? (
              <img
                src={insight.src}
                alt={insight.alt}
                className="w-full object-cover max-h-48 sm:max-h-72"
              />
            ) : (
              <>
                <h3 className="text-sm sm:text-base font-semibold mb-1.5 text-white">{insight.title}</h3>
                <p className="text-gray-500 dark:text-white/40 text-xs sm:text-sm leading-relaxed font-light">{insight.description}</p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};


export default InsightBlocks;
