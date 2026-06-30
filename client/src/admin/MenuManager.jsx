import { useEffect, useState } from "react";
import {
  fetchMenuAdmin,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from "../api/menuApi";

const emptyForm = {
  name: "", description: "", price: "", quantity: "",
  category: "", vegOnly: true, available: true,
};

export default function MenuManager() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [filterCat, setFilterCat] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadData = () => {
    setLoading(true);
    fetchMenuAdmin()
      .then(({ categories, items }) => {
        setCategories(categories);
        setItems(items);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => { loadData(); }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setForm({
      name: item.name,
      description: item.description || "",
      price: item.price,
      quantity: item.quantity || "",
      category: item.category?._id || item.category,
      vegOnly: item.vegOnly,
      available: item.available,
    });
    setShowForm(true);
  };

  const handleNew = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form, price: Number(form.price) };
    if (editingId) {
      await updateMenuItem(editingId, payload);
    } else {
      await createMenuItem(payload);
    }
    setShowForm(false);
    loadData();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this item permanently?")) return;
    await deleteMenuItem(id);
    loadData();
  };

  const filteredItems =
    filterCat === "all"
      ? items
      : items.filter((i) => (i.category?._id || i.category) === filterCat);

  if (loading) return <p className="text-teal-700">Loading menu...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-heading text-3xl text-teal-900">Menu Items</h1>
        <button
          onClick={handleNew}
          className="bg-amber-500 hover:bg-amber-600 text-teal-900 font-heading font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
        >
          + Add Item
        </button>
      </div>

      {/* Category filter */}
      <select
        value={filterCat}
        onChange={(e) => setFilterCat(e.target.value)}
        className="border border-teal-200 rounded-lg px-4 py-2 text-sm mb-6"
      >
        <option value="all">All Categories</option>
        {categories.map((c) => (
          <option key={c._id} value={c._id}>{c.name}</option>
        ))}
      </select>

      {/* Items table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-teal-50 text-teal-800 text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Available</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item._id} className="border-t border-teal-100">
                <td className="px-4 py-3 font-medium text-teal-900">{item.name}</td>
                <td className="px-4 py-3 text-teal-700">{item.category?.name || "—"}</td>
                <td className="px-4 py-3 text-teal-700">₹{item.price}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}>
                    {item.available ? "Yes" : "No"}
                  </span>
                </td>
                <td className="px-4 py-3 text-right space-x-3">
                  <button onClick={() => handleEdit(item)} className="text-teal-700 hover:underline">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item._id)} className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal form */}
      {showForm && (
        <div className="fixed inset-0 bg-teal-950/50 flex items-center justify-center z-50 p-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 w-full max-w-md space-y-3 shadow-card"
          >
            <h3 className="font-heading text-xl text-teal-900 mb-2">
              {editingId ? "Edit Item" : "New Item"}
            </h3>
            <input
              name="name" placeholder="Name" required
              value={form.name} onChange={handleChange}
              className="w-full border border-teal-200 rounded-lg px-3 py-2 text-sm"
            />
            <input
              name="description" placeholder="Description"
              value={form.description} onChange={handleChange}
              className="w-full border border-teal-200 rounded-lg px-3 py-2 text-sm"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                name="price" type="number" placeholder="Price" required
                value={form.price} onChange={handleChange}
                className="border border-teal-200 rounded-lg px-3 py-2 text-sm"
              />
              <input
                name="quantity" placeholder="Quantity (e.g. 250ml)"
                value={form.quantity} onChange={handleChange}
                className="border border-teal-200 rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <select
              name="category" required
              value={form.category} onChange={handleChange}
              className="w-full border border-teal-200 rounded-lg px-3 py-2 text-sm"
            >
              <option value="">Select category</option>
              {categories.map((c) => (
                <option key={c._id} value={c._id}>{c.name}</option>
              ))}
            </select>
            <div className="flex gap-6 text-sm text-teal-800">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="vegOnly" checked={form.vegOnly} onChange={handleChange} />
                Veg
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="available" checked={form.available} onChange={handleChange} />
                Available
              </label>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 border border-teal-200 text-teal-800 py-2.5 rounded-full text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-teal-800 hover:bg-teal-900 text-cream-100 py-2.5 rounded-full text-sm font-semibold"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}