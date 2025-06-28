import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar_Phx";
import SectionSpacer from "../components/SectionSpacer";
import { StarsBG } from "../components/background/StarsBG";

function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setBlog(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching blog:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-white p-10">Loading...</div>;
    if (!blog) return <div className="text-red-400 p-10">Blog not found</div>;

    return (
        <div className="fixed min-h-screen w-screen overflow-hidden text-white">
            <StarsBG className="absolute inset-0 w-full h-full z-0" />
            <Navbar />
            <SectionSpacer size="md" />
            <div className="relative z-10 max-w-4xl mx-auto p-8 bg-black/70 rounded-2xl shadow-xl">
                <h1 className="text-3xl font-bold text-cyan-400 mb-4">{blog.title}</h1>
                <p className="text-sm text-cyan-300 mb-2">By {blog.author?.username || "Unknown"} — {new Date(blog.createdAt).toDateString()}</p>
                {blog.coverImage && (
                    <img
                        src={`http://localhost:5000/${blog.coverImage}`}
                        alt="cover"
                        className="w-full max-h-80 object-cover rounded-lg mb-6"
                    />
                )}
                <div className="text-lg leading-relaxed text-gray-200">
                    {blog.content}
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
