import { useState, useEffect } from "react";

export default function AdminEventPage() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    description: ""
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.title || !form.date || !form.location) {
      alert("Please fill all required fields.");
      return;
    }

    const newEvent = {
      id: Date.now(),
      ...form
    };

    setEvents([newEvent, ...events]);
    setForm({ title: "", date: "", location: "", description: "" });
  };

  const handleDelete = (id) => {
    const updated = events.filter(e => e.id !== id);
    setEvents(updated);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Events</h1>

      <form onSubmit={handleAdd} className="space-y-4 mb-10">
        <input
          type="text"
          placeholder="Event Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border w-full px-4 py-2 rounded"
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border w-full px-4 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="border w-full px-4 py-2 rounded"
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border w-full px-4 py-2 rounded h-28"
        />
        <button
          type="submit"
          className="bg-red-500 text-white font-semibold px-6 py-2 rounded hover:bg-red-600"
        >
          Add Event
        </button>
      </form>

      {events.length === 0 ? (
        <p>No events added.</p>
      ) : (
        <div className="space-y-4">
          {events.map(event => (
            <div key={event.id} className="border p-4 rounded">
              <h2 className="font-bold text-lg">{event.title}</h2>
              <p className="text-sm text-gray-500">
                {event.date} — {event.location}
              </p>
              <button
                onClick={() => handleDelete(event.id)}
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
