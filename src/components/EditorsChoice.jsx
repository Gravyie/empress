import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

const editorPosts = [
  {
    id: 1,
    category: "Mobile",
    title: "Using Automated Test Results To Improve",
    date: "27 August, 2024",
    image: "/images/img2.JPG",
  },
  {
    id: 2,
    category: "Gadget",
    title: "How To Search For A Developer Job Abroad",
    date: "27 August, 2024",
    image: "/images/img3.JPG",
  },
  {
    id: 3,
    category: "Technology",
    title: "New Smashing Front-End & UX Workshops",
    date: "27 August, 2024",
    image: "/images/img4.JPG",
  },
  {
    id: 4,
    category: "News",
    title: "Exploring the Future of Augmented Reality",
    date: "27 August, 2024",
    image: "/images/img5.JPG",
  },
  {
    id: 5,
    category: "Design",
    title: "Top Figma Plugins for Productivity in 2024",
    date: "27 August, 2024",
    image: "/images/img6.JPG",
  },
  {
    id: 6,
    category: "AI",
    title: "How GPT is Changing the Landscape of Content Creation",
    date: "27 August, 2024",
    image: "/images/img7.JPG",
  },
];

export default function EditorsChoice() {
  const scrollRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const scrollWidth = el.scrollWidth - el.clientWidth;
    const percent = (scrollLeft / scrollWidth) * 100;
    setScrollPercent(scrollWidth > 0 ? percent : 0);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-4 px-4 md:px-10 bg-[#f8f9fa] dark:bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-md md:text-2xl font-bold text-white uppercase tracking-widest">Editors Choice</h2>
          <div className="relative mt-2 h-[3px] w-32 bg-black/10 dark:bg-white/10 overflow-hidden rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-[#F47C5A] transition-all duration-300"
              style={{ width: `${scrollPercent}%` }}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="border border-black/20 dark:border-white/20 p-2 hover:bg-black/10 dark:bg-white/10 transition rounded-lg"
          >
            <ArrowLeft className="w-4 h-4 text-gray-600 dark:text-white/60" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="border border-black/20 dark:border-white/20 p-2 hover:bg-black/10 dark:bg-white/10 transition rounded-lg"
          >
            <ArrowRight className="w-4 h-4 text-gray-600 dark:text-white/60" />
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 md:gap-6 no-scrollbar"
      >
        {editorPosts.map((post) => (
          <div
            key={post.id}
            className="group min-w-[260px] md:min-w-[360px] bg-[#f8f9fa] dark:bg-black/40 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl flex overflow-hidden hover:border-black/20 dark:border-white/20 hover:shadow-[0_0_30px_rgba(244,124,90,0.1)] transition-all duration-300 cursor-pointer"
          >
            {/* Image */}
            <div className="w-[90px] md:w-1/3 h-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div className="p-3 md:p-4 w-full md:w-2/3 flex flex-col justify-between">
              <span className="text-xs w-fit bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-2 py-0.5 text-gray-600 dark:text-white/60 rounded font-medium mb-2 inline-block uppercase">
                {post.category}
              </span>
              <h4 className="text-sm font-semibold text-white leading-snug line-clamp-2">
                {post.title}
              </h4>
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-white/40 mt-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
