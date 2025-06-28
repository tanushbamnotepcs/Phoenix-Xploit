import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
    const [blogs, setBlogs] = useState([]);
    const [form, setForm] = useState({ title: "", content: "", category: "" });
    const [coverImage, setCoverImage] = useState(null);
    const [message, setMessage] = useState("");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const fetchBlogs = async () => {
        const res = await fetch("http://localhost:5000/blogs");
        const data = await res.json();
        setBlogs(data);
    };

    useEffect(() => {
        if (!token) navigate("/notphoenixadmin");
        else fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/blogs/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            if (res.ok) {
                setMessage("✅ Blog deleted successfully");
                fetchBlogs();
            } else {
                setMessage(data.message || "Delete failed");
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleAddBlog = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("content", form.content);
        formData.append("category", form.category);
        if (coverImage) formData.append("coverImage", coverImage);

        try {
            const res = await fetch("http://localhost:5000/blogs/add", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });
            const data = await res.json();
            if (res.ok) {
                setMessage("✅ Blog added successfully");
                setForm({ title: "", content: "", category: "" });
                setCoverImage(null);
                fetchBlogs();
            } else {
                setMessage(data.message || "Failed to add blog");
            }
        } catch (err) {
            console.error(err);
            setMessage("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#0f172a] to-[#020617] text-white px-6 py-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-10 text-cyan-400 text-center drop-shadow-xl">Phoenix Admin Dashboard</h1>

                {message && (
                    <div className="mb-6 bg-cyan-950 border border-cyan-600 px-4 py-2 rounded-lg text-center text-cyan-300">
                        {message}
                    </div>
                )}

                {/* Add Blog */}
                <form onSubmit={handleAddBlog} className="bg-[#0f172a] border border-cyan-800 rounded-xl p-6 shadow-xl mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Create New Blog</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <input
                            type="text"
                            placeholder="Title"
                            value={form.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            required
                            className="bg-gray-900 px-4 py-2 rounded-md border border-cyan-700 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            value={form.category}
                            onChange={(e) => setForm({ ...form, category: e.target.value })}
                            required
                            className="bg-gray-900 px-4 py-2 rounded-md border border-cyan-700 focus:outline-none"
                        />
                        <textarea
                            placeholder="Content"
                            value={form.content}
                            onChange={(e) => setForm({ ...form, content: e.target.value })}
                            required
                            className="bg-gray-900 px-4 py-2 rounded-md border border-cyan-700 focus:outline-none md:col-span-2"
                            rows={5}
                        ></textarea>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setCoverImage(e.target.files[0])}
                            className="text-sm text-gray-300 md:col-span-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-md transition"
                    >
                        ➕ Add Blog
                    </button>
                </form>

                {/* Blogs */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="bg-[#0f172a] border border-cyan-800 rounded-lg shadow-lg p-6 hover:shadow-cyan-700 transition"
                        >
                            <h3 className="text-xl font-bold text-cyan-400 mb-2">{blog.title}</h3>
                            <p className="text-sm text-gray-400 mb-1">Author: {blog.author?.username}</p>
                            <p className="text-sm text-gray-400 mb-1">Category: {blog.category}</p>
                            <p className="text-gray-200 mb-2 text-sm">{blog.content.substring(0, 100)}...</p>
                            <button
                                onClick={() => handleDelete(blog._id)}
                                className="mt-2 bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-3 rounded"
                            >
                                🗑️ Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
