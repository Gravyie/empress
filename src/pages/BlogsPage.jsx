import { useState } from "react";

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
    <div className="bg-white min-h-screen px-4 py-10 md:px-24">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Blogs & Articles
      </h1>

      <div className="mx-auto max-w-5xl h-full flex flex-col md:flex-row bg-[#F9FAFB] rounded-2xl shadow-lg overflow-hidden mb-16">
        <img
          src="/images/img6.JPG"
          alt="Featured Blog"
          className="md:w-1/2 h-64 object-cover"
        />
        <div className="p-6 md:w-1/2">
          <h2 className="text-2xl font-bold text-black mb-2">Featured Blog: NVIDIA RTX 5090</h2>
          <p className="text-gray-600">
            Discover what makes the upcoming RTX 5090 so powerful. From CUDA cores to new AI enhancements — this blog dives deep.
          </p>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap justify-center mb-10">
        {['all', 'nvidia', 'tech', 'computing'].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border text-sm capitalize transition-all duration-200 ${
              selectedCategory === cat ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300'
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
            className="bg-[#F9FAFB] rounded-xl overflow-hidden shadow hover:shadow-md transition"
          >
            <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black mb-1">{blog.title}</h3>
              <p className="text-gray-600 text-sm">{blog.summary}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredBlogs.length > 6 && !showAll && (
        <div className="flex justify-center mt-10">
          <button
            className="px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition rounded-full"
            onClick={() => setShowAll(true)}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
