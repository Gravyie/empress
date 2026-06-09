"use client";

const blogPosts = [
  {
    id: 1,
    category: "Technology",
    title:
      "Game Changing Virtual Reality Console Technololows Profit To Serve The Community",
    author: "Admin",
    date: "27 August, 2024",
    readTime: "20 mins",
    image: "/images/img1.JPG",
  },
  {
    id: 2,
    category: "Mobile",
    title: "New Modern Iphone 14pro Max Extrea Revolutionary Features",
    date: "27 August, 2024",
    image: "/images/img2.JPG",
  },
  {
    id: 3,
    category: "Gadget",
    title: "A Guide To Image Optimization On Jamstack Sites",
    date: "27 August, 2024",
    image: "/images/img3.JPG",
  },
  {
    id: 4,
    category: "News",
    title: "Using Automated Test Results To Improve Accessibility",
    date: "27 August, 2024",
    image: "/images/img4.JPG",
  },
];

export default function BlogsHero() {
  return (
    <section className="py-8 px-4 md:px-30 bg-[#f8f9fa] dark:bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-4 text-[#F47C5A] uppercase tracking-widest">
        Blogs & Articles
      </h1>

      <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-6 h-[600px]">
        {/* Big left card spans 2 cols and all 3 rows */}
        <div className="col-span-2 row-span-3 relative overflow-hidden group rounded-2xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:border-white/20 transition-all shadow-[0_0_30px_rgba(244,124,90,0.05)] hover:shadow-[0_0_30px_rgba(244,124,90,0.15)]">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
            <span className="bg-black/10 dark:bg-white/10 backdrop-blur-md border border-black/20 dark:border-white/20 text-xs px-3 py-1 rounded w-fit mb-2 uppercase font-semibold">
              {blogPosts[0].category}
            </span>
            <h3 className="text-sm md:text-xl md:font-semibold mb-2 leading-snug">
              {blogPosts[0].title}
            </h3>
            <div className="flex items-center text-xs gap-4 opacity-80">
              <span>👤 {blogPosts[0].author}</span>
              <span>📅 {blogPosts[0].date}</span>
              <span>⏱️ {blogPosts[0].readTime}</span>
            </div>
          </div>
        </div>

        {/* Right column: 3 stacked cards */}
        {blogPosts.slice(1).map((post) => (
          <div
            key={post.id}
            className="relative overflow-hidden group rounded-2xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:border-white/20 transition-all shadow-[0_0_30px_rgba(244,124,90,0.05)] hover:shadow-[0_0_30px_rgba(244,124,90,0.15)]"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 text-white">
              <span className="bg-black/10 dark:bg-white/10 backdrop-blur-md border border-black/20 dark:border-white/20 text-xs px-2 py-1 rounded w-fit mb-1 uppercase font-semibold">
                {post.category}
              </span>
              <h4 className="text-sm font-semibold leading-tight">
                {post.title}
              </h4>
              <p className="text-xs mt-1 opacity-80">📅 {post.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view (stacked cards) */}
      <div className="md:hidden space-y-6">
        {blogPosts.map((post, index) => (
          <div key={post.id} className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 text-white">
              <span className="bg-black/10 dark:bg-white/10 backdrop-blur-md border border-black/20 dark:border-white/20 text-xs px-2 py-1 rounded w-fit mb-1 uppercase font-semibold">
                {post.category}
              </span>
              <h4 className="text-base font-semibold leading-tight">
                {post.title}
              </h4>
              {index === 0 && (
                <div className="flex items-center text-xs gap-4 mt-1 opacity-80">
                  <span>👤 {post.author}</span>
                  <span>📅 {post.date}</span>
                  <span>⏱️ {post.readTime}</span>
                </div>
              )}
              {index !== 0 && (
                <p className="text-xs mt-1 opacity-80">📅 {post.date}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
