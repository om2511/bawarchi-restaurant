import { useEffect, useState } from "react";
import {
  fetchGallery,
  createGalleryImage,
  deleteGalleryImage,
  uploadImage,
} from "../api/galleryApi";

const categories = ["Ambience", "Food", "Banquet", "Events", "Exterior"];
const emptyForm = { title: "", imageUrl: "", category: "Ambience", order: 0 };

export default function GalleryManager() {
  const [images, setImages] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadData = () => {
    setLoading(true);
    fetchGallery().then(setImages).finally(() => setLoading(false));
  };

  useEffect(() => { loadData(); }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      let imageUrl = form.imageUrl;

      if (file) {
        const uploaded = await uploadImage(file);
        imageUrl = uploaded.url;
      }

      if (!imageUrl) {
        alert("Please select an image or provide a URL.");
        setUploading(false);
        return;
      }

      await createGalleryImage({
        ...form,
        imageUrl,
        order: Number(form.order),
      });

      setForm(emptyForm);
      setFile(null);
      setPreview("");
      setShowForm(false);
      loadData();
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this image?")) return;
    await deleteGalleryImage(id);
    loadData();
  };

  const handleClose = () => {
    setShowForm(false);
    setFile(null);
    setPreview("");
    setForm(emptyForm);
  };

  if (loading) return <p className="text-teal-700">Loading gallery...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-heading text-3xl text-teal-900">Gallery</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-amber-500 hover:bg-amber-600 text-teal-900 font-heading font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
        >
          + Add Image
        </button>
      </div>

      {/* Image grid */}
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img._id} className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="aspect-square bg-teal-50">
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <p className="text-sm font-medium text-teal-900 truncate">
                {img.title || "Untitled"}
              </p>
              <p className="text-xs text-teal-600 mb-2">{img.category}</p>
              <button
                onClick={() => handleDelete(img._id)}
                className="text-xs text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Upload modal */}
      {showForm && (
        <div className="fixed inset-0 bg-teal-950/50 flex items-center justify-center z-50 p-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 w-full max-w-md space-y-3 shadow-card"
          >
            <h3 className="font-heading text-xl text-teal-900 mb-2">Add Gallery Image</h3>

            {/* File upload area */}
            <div
              onClick={() => document.getElementById("fileInput").click()}
              className="border-2 border-dashed border-teal-200 rounded-xl h-40 flex items-center justify-center cursor-pointer hover:border-teal-400 transition-colors overflow-hidden"
            >
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center text-teal-700/60">
                  <p className="text-2xl mb-1">📷</p>
                  <p className="text-sm">Click to upload image</p>
                  <p className="text-xs">JPG, PNG, WEBP supported</p>
                </div>
              )}
            </div>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            <input
              name="title"
              placeholder="Title (optional)"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-teal-200 rounded-lg px-3 py-2 text-sm"
            />

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-teal-200 rounded-lg px-3 py-2 text-sm"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <input
              name="order"
              type="number"
              placeholder="Display order (lower = first)"
              value={form.order}
              onChange={handleChange}
              className="w-full border border-teal-200 rounded-lg px-3 py-2 text-sm"
            />

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 border border-teal-200 text-teal-800 py-2.5 rounded-full text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={uploading}
                className="flex-1 bg-teal-800 hover:bg-teal-900 disabled:opacity-60 text-cream-100 py-2.5 rounded-full text-sm font-semibold"
              >
                {uploading ? "Uploading..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}