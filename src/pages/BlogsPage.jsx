import { useState } from "react";
import BlogsHero from "../components/BlogsHero";
import EditorsChoice from "../components/EditorsChoice";
import WeeklyBestNews from "../components/WeeklyBestNews";

const blogs = [
  {
    id: 1,
    category: "nvidia",
    title: "NVIDIA RTX 5090: First Look",
    summary: "Everything we know about NVIDIA’s upcoming powerhouse GPU.",
    image: "/images/img2.JPG",
  },
  {
    id: 2,
    category: "tech",
    title: "5 Must-Have Tools for PC Builders",
    summary: "Level up your build process with these essential gadgets.",
    image: "/images/img3.JPG",
  },
  {
    id: 3,
    category: "computing",
    title: "Future of Quantum Chips",
    summary: "Where computing is headed in the next decade.",
    image: "/images/img4.JPG",
  },
  {
    id: 4,
    category: "nvidia",
    title: "NVIDIA DLSS 4.0 Explained",
    summary: "A deep dive into NVIDIA’s latest AI-based rendering tech.",
    image: "/images/img4.JPG",
  },
  {
    id: 5,
    category: "tech",
    title: "Top 3 Monitors for Editing",
    summary: "Professional-grade monitors for color-accurate workflows.",
    image: "/images/img5.JPG",
  },
  {
    id: 6,
    category: "computing",
    title: "Why RAM Speed Matters",
    summary: "Understanding the impact of RAM speeds on performance.",
    image: "/images/img6.JPG",
  },
  {
    id: 7,
    category: "nvidia",
    title: "NVIDIA RTX 5090: First Look",
    summary: "Everything we know about NVIDIA’s upcoming powerhouse GPU.",
    image: "/images/img2.JPG",
  },
  {
    id: 8,
    category: "tech",
    title: "5 Must-Have Tools for PC Builders",
    summary: "Level up your build process with these essential gadgets.",
    image: "/images/img3.JPG",
  },
  {
    id: 9,
    category: "computing",
    title: "Future of Quantum Chips",
    summary: "Where computing is headed in the next decade.",
    image: "/images/img4.JPG",
  },
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredBlogs = selectedCategory === "all"
    ? blogs
    : blogs.filter((b) => b.category === selectedCategory);

  const blogsToShow = showAll ? filteredBlogs : filteredBlogs.slice(0, 6);

  return (
  <>
    <BlogsHero />
    <EditorsChoice />
    <div className="bg-[#f8f9fa] dark:bg-black min-h-screen px-4 py-10 md:px-24">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#F47C5A] uppercase tracking-widest">
        More Deep Dives..
      </h1>

      <div className="mx-auto max-w-5xl h-full flex flex-col md:flex-row bg-[#f8f9fa] dark:bg-black/40 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl shadow-lg overflow-hidden mb-16">
        <img
          src="/images/img6.JPG"
          alt="Featured Blog"
          className="md:w-1/2 h-64 object-cover"
        />
        <div className="p-6 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-2">Featured Blog: NVIDIA RTX 5090</h2>
          <p className="text-gray-600 dark:text-white/60 font-light leading-relaxed">
            Discover what makes the upcoming RTX 5090 so powerful. From CUDA cores to new AI enhancements — this blog dives deep.
          </p>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap justify-center mb-10">
        {['all', 'nvidia', 'tech', 'computing'].map((cat) => (
          <button
            key={cat}
            className={`px-6 py-2 rounded-full border text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
              selectedCategory === cat ? 'bg-white text-black border-white' : 'bg-transparent text-gray-600 dark:text-white/60 border-black/20 dark:border-white/20 hover:border-white/50 hover:text-white'
            }`}
            onClick={() => {
              setSelectedCategory(cat);
              setShowAll(false);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsToShow.map((blog) => (
          <div
            key={blog.id}
            className="group bg-[#f8f9fa] dark:bg-black/40 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-4 overflow-hidden transition-all duration-500 hover:border-black/20 dark:border-white/20 hover:shadow-[0_0_30px_rgba(244,124,90,0.1)] cursor-pointer"
          >
            <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-500" />
            <div className="p-2">
              <h3 className="text-xl font-semibold text-white mb-2">{blog.title}</h3>
              <p className="text-gray-500 dark:text-white/50 text-sm font-light leading-relaxed">{blog.summary}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredBlogs.length > 6 && !showAll && (
        <div className="flex justify-center mt-10">
          <button
            className="px-8 py-3 border border-black/20 dark:border-white/20 text-gray-800 dark:text-white/80 hover:bg-white hover:text-black hover:border-white rounded text-xs uppercase tracking-widest font-semibold transition-colors duration-300"
            onClick={() => setShowAll(true)}
          >
            Show More
          </button>
        </div>
      )}
    </div>
    <WeeklyBestNews />
  </>
  );
}
