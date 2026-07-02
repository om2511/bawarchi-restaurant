import { useEffect, useState } from "react";
import {
  fetchGallery,
  createGalleryImage,
  deleteGalleryImage,
  updateGalleryImage,
  uploadImage,
} from "../api/galleryApi";

const categories = ["Ambience", "Food", "Banquet", "Events", "Exterior"];
const emptyForm = { title: "", imageUrl: "", category: "Ambience", order: 0 };

export default function GalleryManager() {
  const [images, setImages] = useState([]);
  const [filterCat, setFilterCat] = useState("All");
  const [editingId, setEditingId] = useState(null);
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

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleEdit = (img) => {
    setEditingId(img._id);
    setForm({
      title: img.title || "",
      imageUrl: img.imageUrl,
      category: img.category,
      order: img.order || 0,
    });
    setPreview(img.imageUrl);
    setShowForm(true);
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

      if (!imageUrl && !editingId) {
        alert("Please select an image file or enter an image URL.");
        setUploading(false);
        return;
      }

      const payload = {
        ...form,
        imageUrl: imageUrl || form.imageUrl,
        order: Number(form.order),
      };

      if (editingId) {
        await updateGalleryImage(editingId, payload);
      } else {
        await createGalleryImage(payload);
      }

      setForm(emptyForm);
      setFile(null);
      setPreview("");
      setEditingId(null);
      setShowForm(false);
      loadData();
    } catch (err) {
      console.error("Upload/update failed:", err);
      alert("Failed to save image. Please verify file and try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to remove this image from the gallery?")) return;
    try {
      await deleteGalleryImage(id);
      loadData();
    } catch (err) {
      console.error("Failed to delete image:", err);
    }
  };

  const handleClose = () => {
    setShowForm(false);
    setFile(null);
    setPreview("");
    setEditingId(null);
    setForm(emptyForm);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-teal-800 font-heading text-lg animate-pulse">Loading gallery images...</p>
      </div>
    );
  }

  // Filter gallery items
  const displayedImages =
    filterCat === "All"
      ? images
      : images.filter((img) => img.category === filterCat);

  return (
    <>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-heading text-3xl text-teal-900 font-bold">Gallery Manager</h1>
            <p className="text-teal-700/70 text-sm">Upload, categorize, and organize photos for the public website gallery.</p>
          </div>
          <button
            onClick={() => {
              setEditingId(null);
              setForm(emptyForm);
              setPreview("");
              setShowForm(true);
            }}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-teal-900 font-heading font-semibold px-6 py-3 rounded-full text-sm transition-all hover:scale-105 shadow-glow"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Upload Photo
          </button>
        </div>

        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar bg-white p-3 rounded-2xl border border-teal-100/50 shadow-xs">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold font-heading transition-all ${
                filterCat === cat
                  ? "bg-teal-800 text-cream-100 shadow-sm"
                  : "bg-teal-50/50 text-teal-800 hover:bg-teal-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        {displayedImages.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center text-teal-700/60 border border-teal-100/50">
            <svg className="w-12 h-12 text-teal-300 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm font-semibold">No images in this category.</p>
            <p className="text-xs text-teal-700/40 mt-1">Click the button above to upload a new gallery photo.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedImages.map((img) => (
              <div
                key={img._id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-teal-100/50 hover:shadow-md transition-shadow group relative"
              >
                <div className="aspect-[4/3] bg-teal-50 overflow-hidden relative">
                  <img
                    src={img.imageUrl}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Actions overlay on hover (top-right corner) */}
                  <div className="absolute inset-0 bg-teal-950/25 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-start justify-end p-3">
                    <div className="flex gap-2">
                      {/* Edit Button */}
                      <button
                        onClick={() => handleEdit(img)}
                        className="bg-teal-800 hover:bg-teal-900 text-white rounded-lg p-2 shadow-md transition-all hover:scale-110"
                        aria-label="Edit photo"
                        title="Edit Photo"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.83 19.82a4.5 4.5 0 01-1.897 1.13l-3.885 1.206 1.206-3.885a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                      </button>
                      
                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(img._id)}
                        className="bg-red-600 hover:bg-red-500 text-white rounded-lg p-2 shadow-md transition-all hover:scale-110"
                        aria-label="Delete photo"
                        title="Delete Photo"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 space-y-1">
                  <p className="text-sm font-semibold text-teal-950 truncate">
                    {img.title || "Untitled Showcase"}
                  </p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-teal-50 text-teal-800 font-medium px-2 py-0.5 rounded-md">
                      {img.category}
                    </span>
                    <span className="text-teal-700/50 font-light">
                      Order: {img.order || 0}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Upload/Add Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-teal-950/60 flex items-start justify-center z-50 p-4 sm:p-6 backdrop-blur-xs overflow-y-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 w-full max-w-md space-y-4 shadow-2xl border border-teal-100 my-8"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-heading text-xl text-teal-900 font-bold">
                {editingId ? "Edit Gallery Image" : "Add Gallery Image"}
              </h3>
              <button
                type="button"
                onClick={handleClose}
                className="text-teal-400 hover:text-teal-700 p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drag & drop upload area */}
            <div
              onClick={() => document.getElementById("fileInput").click()}
              className="border-2 border-dashed border-teal-200 hover:border-teal-500 rounded-2xl h-44 flex items-center justify-center cursor-pointer transition-colors overflow-hidden bg-teal-50/20"
            >
              {preview ? (
                <img src={preview} alt="Selected preview" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center text-teal-700/60 space-y-2 p-4">
                  <svg className="w-8 h-8 text-teal-400 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-teal-900">Click to upload photo file</p>
                    <p className="text-xs text-teal-700/50 mt-1">Supports JPEG, PNG, or WEBP formats</p>
                  </div>
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

            <div className="space-y-1">
              <label className="text-xs font-semibold text-teal-900 uppercase">Image Title</label>
              <input
                name="title"
                placeholder="e.g. Banquet Decoration Setups"
                value={form.title}
                onChange={handleChange}
                className="w-full border border-teal-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-650"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-teal-900 uppercase">Category</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full border border-teal-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-650 bg-white text-teal-800"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-teal-900 uppercase">Display Order</label>
                <input
                  name="order"
                  type="number"
                  placeholder="e.g. 0"
                  value={form.order}
                  onChange={handleChange}
                  className="w-full border border-teal-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-650"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-3">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 border border-teal-200 text-teal-800 py-3 rounded-full text-sm font-semibold hover:bg-teal-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={uploading}
                className="flex-1 bg-teal-800 hover:bg-teal-900 disabled:opacity-60 text-cream-100 py-3 rounded-full text-sm font-bold shadow-md transition-all"
              >
                {uploading ? "Uploading Image..." : editingId ? "Save Changes" : "Publish Photo"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}