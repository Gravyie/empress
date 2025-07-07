import { useState, useEffect } from "react";

export default function AdminBlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    author: "",
    content: "",
    image: ""
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.content) {
      alert("Please fill all required fields.");
      return;
    }

    const newBlog = {
      id: Date.now(),
      ...form
    };

    setBlogs([newBlog, ...blogs]);
    setForm({ title: "", author: "", content: "", image: "" });
  };

  const handleDelete = (id) => {
    const updated = blogs.filter(b => b.id !== id);
    setBlogs(updated);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>

      <form onSubmit={handleAdd} className="space-y-4 mb-10">
        <input
          type="text"
          placeholder="Blog Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border w-full px-4 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          className="border w-full px-4 py-2 rounded"
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="border w-full px-4 py-2 rounded h-32"
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="border w-full px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-red-500 text-white font-semibold px-6 py-2 rounded hover:bg-red-600"
        >
          Add Blog
        </button>
      </form>

      {blogs.length === 0 ? (
        <p>No blogs added.</p>
      ) : (
        <div className="space-y-4">
          {blogs.map(blog => (
            <div key={blog.id} className="border p-4 rounded">
              <h2 className="font-bold text-lg">{blog.title}</h2>
              <p className="text-sm text-gray-500">by {blog.author}</p>
              <button
                onClick={() => handleDelete(blog.id)}
                className="mt-2 text-red-500 font-semibold"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
