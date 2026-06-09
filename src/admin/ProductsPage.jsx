import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: ""
  });

  // Load products from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(saved);
  }, []);

  // Save to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.category) return alert("Fill all fields");

    const newProduct = {
      id: Date.now(),
      ...form,
      price: parseFloat(form.price),
    };

    setProducts(prev => [newProduct, ...prev]);
    setForm({ name: "", price: "", category: "", image: "" });
  };

  const handleDelete = (id) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>

      {/* Form */}
      <form onSubmit={handleAdd} className="space-y-4 mb-10">
        <input
          type="text"
          placeholder="Product Name"
          className="border w-full px-4 py-2 rounded"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          className="border w-full px-4 py-2 rounded"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          className="border w-full px-4 py-2 rounded"
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          className="border w-full px-4 py-2 rounded"
          value={form.image}
          onChange={e => setForm({ ...form, image: e.target.value })}
        />
        <button
          type="submit"
          className="bg-red-500 text-white font-semibold px-6 py-2 rounded hover:bg-red-600"
        >
          Add Product
        </button>
      </form>

      {/* Product List */}
      {products.length === 0 ? (
        <p>No products added.</p>
      ) : (
        <div className="space-y-4">
          {products.map(prod => (
            <div key={prod.id} className="border p-4 rounded flex items-center justify-between">
              <div>
                <h3 className="font-bold">{prod.name}</h3>
                <p className="text-sm text-gray-500">${prod.price} — {prod.category}</p>
              </div>
              <button
                onClick={() => handleDelete(prod.id)}
                className="text-red-500 font-bold"
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
