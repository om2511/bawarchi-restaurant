import { useEffect, useState } from "react";
import {
  fetchMenuAdmin,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from "../api/menuApi";

const emptyForm = {
  name: "",
  description: "",
  price: "",
  quantity: "",
  category: "",
  vegOnly: true,
  available: true,
};

export default function MenuManager() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [filterCat, setFilterCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");
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

  useEffect(() => {
    loadData();
  }, []);

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
    setForm({
      ...emptyForm,
      category: categories.length > 0 ? categories[0]._id : "",
    });
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form, price: Number(form.price) };
    try {
      if (editingId) {
        await updateMenuItem(editingId, payload);
      } else {
        await createMenuItem(payload);
      }
      setShowForm(false);
      loadData();
    } catch (err) {
      console.error("Failed to save menu item:", err);
      alert("Failed to save menu item. Please verify all inputs.");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this menu item permanently?")) return;
    try {
      await deleteMenuItem(id);
      loadData();
    } catch (err) {
      console.error("Failed to delete menu item:", err);
    }
  };

  // 1. Filter
  let displayItems = items.filter((item) => {
    const matchesCategory = filterCat === "all" || (item.category?._id || item.category) === filterCat;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // 2. Sort
  displayItems.sort((a, b) => {
    if (sortBy === "name-asc") return a.name.localeCompare(b.name);
    if (sortBy === "name-desc") return b.name.localeCompare(a.name);
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-teal-800 font-heading text-lg animate-pulse">Loading menu items database...</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl text-teal-900 font-bold">Menu Manager</h1>
          <p className="text-teal-700/70 text-sm">Create, edit, and categorize dishes on the live restaurant menu.</p>
        </div>
        <button
          onClick={handleNew}
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-teal-900 font-heading font-semibold px-6 py-3 rounded-full text-sm transition-all hover:scale-105 shadow-glow"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add Menu Item
        </button>
      </div>

      {/* Control panel */}
      <div className="bg-white p-5 rounded-2xl border border-teal-100/50 shadow-xs grid gap-4 sm:grid-cols-3">
        {/* Category filter */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-teal-900 uppercase tracking-wider">Cuisine Category</label>
          <select
            value={filterCat}
            onChange={(e) => setFilterCat(e.target.value)}
            className="w-full border border-teal-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-600 bg-white text-teal-800"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-teal-900 uppercase tracking-wider">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full border border-teal-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-600 bg-white text-teal-800"
          >
            <option value="name-asc">Name (A &rarr; Z)</option>
            <option value="name-desc">Name (Z &rarr; A)</option>
            <option value="price-asc">Price (Low &rarr; High)</option>
            <option value="price-desc">Price (High &rarr; Low)</option>
          </select>
        </div>

        {/* Search */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-teal-900 uppercase tracking-wider">Search Item</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-teal-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search by name, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-teal-200 focus:outline-none focus:border-teal-600 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Items list */}
      {displayItems.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center text-teal-700/60 border border-teal-100/50">
          <svg className="w-12 h-12 text-teal-300 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <p className="text-sm font-semibold">No menu items found.</p>
          <p className="text-xs text-teal-700/40 mt-1">Try updating your filters or search keywords.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-teal-100/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-sm text-left">
              <thead className="bg-teal-50 text-teal-900 font-semibold border-b border-teal-100">
                <tr>
                  <th className="px-5 py-4">Item Details</th>
                  <th className="px-5 py-4">Category</th>
                  <th className="px-5 py-4">Price</th>
                  <th className="px-5 py-4">Quantity</th>
                  <th className="px-5 py-4 text-center">Status</th>
                  <th className="px-5 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal-50">
                {displayItems.map((item) => (
                  <tr key={item._id} className="hover:bg-teal-50/10 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        {item.vegOnly && (
                          <span className="w-3.5 h-3.5 border-2 border-green-600 flex items-center justify-center rounded-sm shrink-0" title="Veg Only">
                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                          </span>
                        )}
                        <p className="font-semibold text-teal-950">{item.name}</p>
                      </div>
                      {item.description && (
                        <p className="text-xs text-teal-700/60 mt-1 max-w-sm line-clamp-1">{item.description}</p>
                      )}
                    </td>
                    <td className="px-5 py-4 text-teal-800 font-medium">
                      {item.category?.name || "—"}
                    </td>
                    <td className="px-5 py-4 text-teal-900 font-semibold">
                      ₹{item.price}
                    </td>
                    <td className="px-5 py-4 text-teal-700 text-xs">
                      {item.quantity || <span className="text-teal-300">—</span>}
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className={`text-[10px] tracking-wider uppercase font-bold px-2 py-0.5 rounded-full border ${
                        item.available
                          ? "bg-green-100 text-green-700 border-green-200"
                          : "bg-red-100 text-red-700 border-red-200"
                      }`}>
                        {item.available ? "Active" : "Hidden"}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Edit Button */}
                        <button
                          onClick={() => handleEdit(item)}
                          className="w-8 h-8 inline-flex items-center justify-center bg-teal-50 hover:bg-teal-100 text-teal-800 rounded-lg border border-teal-200 transition-colors shrink-0"
                          title="Edit Item"
                          aria-label="Edit Item"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.83 19.82a4.5 4.5 0 01-1.897 1.13l-3.885 1.206 1.206-3.885a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                        </button>
                        
                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="w-8 h-8 inline-flex items-center justify-center bg-red-50 hover:bg-red-100 text-red-600 rounded-lg border border-red-100 transition-colors shrink-0"
                          title="Delete Item"
                          aria-label="Delete Item"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      </div>

      {/* Modern Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-teal-950/60 flex items-start justify-center z-50 p-4 sm:p-6 backdrop-blur-xs overflow-y-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 w-full max-w-md space-y-4 shadow-2xl border border-teal-100 my-8"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-heading text-xl text-teal-900 font-bold">
                {editingId ? "Edit Menu Item" : "Create New Item"}
              </h3>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-teal-400 hover:text-teal-700 p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-teal-900 uppercase">Item Name</label>
              <input
                name="name"
                placeholder="e.g. Bawarchi Special Sizzler"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-teal-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-650"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-teal-900 uppercase">Ingredients / Description</label>
              <input
                name="description"
                placeholder="e.g. Served with fried rice, vegetables and house steak sauce"
                value={form.description}
                onChange={handleChange}
                className="w-full border border-teal-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-650"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-teal-900 uppercase">Price (₹)</label>
                <input
                  name="price"
                  type="number"
                  placeholder="e.g. 240"
                  required
                  value={form.price}
                  onChange={handleChange}
                  className="w-full border border-teal-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-650"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-teal-900 uppercase">Quantity / Portion</label>
                <input
                  name="quantity"
                  placeholder="e.g. 250ml or 1 Plate"
                  value={form.quantity}
                  onChange={handleChange}
                  className="w-full border border-teal-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-650"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-teal-900 uppercase">Cuisine Category</label>
              <select
                name="category"
                required
                value={form.category}
                onChange={handleChange}
                className="w-full border border-teal-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-650 bg-white text-teal-800"
              >
                <option value="">Select Cuisine Category</option>
                {categories.map((c) => (
                  <option key={c._id} value={c._id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-6 text-sm text-teal-800 pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="vegOnly"
                  checked={form.vegOnly}
                  onChange={handleChange}
                  className="rounded border-teal-300 text-teal-600 focus:ring-teal-500"
                />
                100% Vegetarian
              </label>
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="available"
                  checked={form.available}
                  onChange={handleChange}
                  className="rounded border-teal-300 text-teal-600 focus:ring-teal-500"
                />
                Active (In Stock)
              </label>
            </div>

            <div className="flex gap-3 pt-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 border border-teal-200 text-teal-800 py-3 rounded-full text-sm font-semibold hover:bg-teal-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-teal-800 hover:bg-teal-900 text-cream-100 py-3 rounded-full text-sm font-bold shadow-md transition-all"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}