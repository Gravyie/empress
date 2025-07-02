"use client";

import { Calendar, Clock } from "lucide-react";

const posts = [
  {
    id: 1,
    category: "Technology",
    title: "WordPress Full-Site Editing: A Deep Dive Into The Future",
    date: "27 August, 2024",
    readTime: "20 mins",
    description:
      "Browned Butter And Brown Sugar Caramelly Goodness Crispy Edges...",
    image: "/images/img1.JPG",
  },
  {
    id: 2,
    category: "News",
    title: "Effective Communication For Everyday Meetings",
    date: "27 August, 2024",
    readTime: "20 mins",
    description:
      "Browned Butter And Brown Sugar Caramelly Goodness Crispy Edges...",
    image: "/images/img2.JPG",
  },
  {
    id: 3,
    category: "Gadget",
    title: "A Roadmap For Building A Business Chatbot",
    date: "27 August, 2024",
    readTime: "20 mins",
    description:
      "Browned Butter And Brown Sugar Caramelly Goodness Crispy Edges...",
    image: "/images/img3.JPG",
  },
  {
    id: 4,
    category: "Mobile",
    title: "Easy Fluid Typography With Clamp() Using Sass Functions",
    date: "27 August, 2024",
    readTime: "20 mins",
    description:
      "Browned Butter And Brown Sugar Caramelly Goodness Crispy Edges...",
    image: "/images/img4.JPG",
  },
];

const popularPosts = [
  {
    id: 1,
    category: "Technology",
    title: "Racing Games Browned Ae Cookies Daily Breakfast",
    date: "27 August, 2024",
    readTime: "20 mins",
    image: "/images/img5.JPG",
  },
  {
    id: 2,
    category: "Mobile",
    title: "Effective For Everyday Meetings",
    date: "27 August, 2024",
    image: "/images/img2.JPG",
  },
  {
    id: 3,
    category: "News",
    title: "The Butter Chocolate Cookies Daily",
    date: "27 August, 2024",
    image: "/images/img1.JPG",
  },
  {
    id: 4,
    category: "Gadget",
    title: "The Anatomy Of Themed Design",
    date: "27 August, 2024",
    image: "/images/img6.JPG",
  },
];

export default function WeeklyBestNews() {
  return (
    <section className="px-4 md:px-20 py-10 bg-white text-black">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* LEFT SIDE - 3/4 span */}
        <div className="lg:col-span-3 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg md:text-xl font-bold text-blue-950">
              Weekly Best News
            </h2>
            <button className="text-xs flex items-center gap-1 text-gray-500 hover:text-black">
              VIEW ALL <span className="text-xs">↗</span>
            </button>
          </div>

          {/* Content grid */}
          <div className="space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 shadow-sm"
              >
                {/* Left column - Text content */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase text-white bg-red-500 w-fit px-2 py-1">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-sm text-blue-950 leading-snug">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-snug">
                    {post.description}
                  </p>
                  <button className="text-xs flex items-center gap-1 mt-2 border px-3 py-1 w-fit text-blue-800 border-blue-200 hover:border-blue-800">
                    READ MORE ↗
                  </button>
                </div>

                {/* Right column - Image */}
                <div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40  object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - 1/4 span */}
        <div className="space-y-6">
          {/* Banner */}
          <div className="flex justify-end">
            <img
              src="/images/Discount.jpg"
              alt="Ad banner"
              className="w-full md:w-[80%] h-80 object-cover"
            />
          </div>

          {/* Highlighted Card */}
          <div className="relative overflow-hidden">
            <img
              src={popularPosts[0].image}
              alt={popularPosts[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end text-white">
              <span className="bg-red-500 text-xs px-2 py-0.5 w-fit uppercase mb-1">
                {popularPosts[0].category}
              </span>
              <h4 className="text-sm font-semibold leading-tight">
                {popularPosts[0].title}
              </h4>
              <div className="flex items-center text-xs gap-4 mt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {popularPosts[0].date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {popularPosts[0].readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Popular Tech Title */}
          <h3 className="text-sm font-semibold text-gray-800">Popular Tech</h3>

          {/* Smaller List Items */}
          <div className="space-y-4">
            {popularPosts.slice(1).map((post) => (
              <div key={post.id} className="flex gap-4 items-start">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <span className="text-[10px] text-gray-500 border px-1.5 py-0.5 uppercase">
                    {post.category}
                  </span>
                  <h5 className="text-sm font-semibold leading-snug mt-1 text-gray-800">
                    {post.title}
                  </h5>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    {post.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
