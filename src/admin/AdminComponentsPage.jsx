import { useEffect, useState } from "react";

const COMPONENT_TYPES = [
  "Processor", "Motherboard", "RAM", "GPU", "SSD", "HDD", "Case", "Cooler", "PSU", "Fan"
];

export default function AdminComponentsPage() {
  const [components, setComponents] = useState({});
  const [type, setType] = useState("Processor");
  const [form, setForm] = useState({ name: "", price: "", specs: "" });

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("components")) || {};
    setComponents(saved);
  }, []);

  // Save whenever components change
  useEffect(() => {
    localStorage.setItem("components", JSON.stringify(components));
  }, [components]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return alert("Fill all required fields");

    const newItem = {
      id: Date.now(),
      ...form,
      price: parseFloat(form.price)
    };

    setComponents(prev => ({
      ...prev,
      [type]: [newItem, ...(prev[type] || [])]
    }));

    setForm({ name: "", price: "", specs: "" });
  };

  const handleDelete = (type, id) => {
    const updatedList = (components[type] || []).filter(item => item.id !== id);
    setComponents(prev => ({ ...prev, [type]: updatedList }));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Manage PC Components</h1>

      {/* Component Type Selector */}
      <div className="mb-4">
        <label className="block text-sm mb-1 font-semibold">Select Component Type:</label>
        <select
          value={type}
          onChange={e => setType(e.target.value)}
          className="border px-4 py-2 rounded w-full"
        >
          {COMPONENT_TYPES.map(ct => (
            <option key={ct} value={ct}>{ct}</option>
          ))}
        </select>
      </div>

      {/* Form */}
      <form onSubmit={handleAdd} className="space-y-3 mb-10">
        <input
          type="text"
          placeholder="Component Name"
          className="border w-full px-4 py-2 rounded"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price (in $)"
          className="border w-full px-4 py-2 rounded"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Specs / Description (optional)"
          className="border w-full px-4 py-2 rounded"
          value={form.specs}
          onChange={e => setForm({ ...form, specs: e.target.value })}
        />
        <button
          type="submit"
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          Add Component
        </button>
      </form>

      {/* Component List */}
      {Object.entries(components).map(([compType, items]) => (
        <div key={compType} className="mb-10">
          <h2 className="text-xl font-bold mb-2">{compType}</h2>
          {items.length === 0 ? (
            <p className="text-sm text-gray-500">No items added.</p>
          ) : (
            <ul className="space-y-2">
              {items.map(item => (
                <li
                  key={item.id}
                  className="border rounded p-3 flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">{item.name} — ${item.price}</p>
                    {item.specs && (
                      <p className="text-xs text-gray-500">{item.specs}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleDelete(compType, item.id)}
                    className="text-red-500 font-semibold"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
