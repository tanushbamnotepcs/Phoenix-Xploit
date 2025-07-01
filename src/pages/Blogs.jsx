import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar_Phx";
import CreateBlog from "../components/CreateBlog";
import SectionSpacer from "../components/SectionSpacer";
import { StarsBG } from "../components/background/StarsBG";

// Mock data for when API is not available
const MOCK_BLOGS = [
    {
        id: "1",
        name: "John Doe",
        role: "Tech Lead",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        date: "2023-06-15",
        title: "The Future of Web Development",
        summary: "Exploring the latest trends in web development and what to expect in the coming years. From WebAssembly to Edge Computing...",
    },
    {
        id: "2",
        name: "Jane Smith",
        role: "UX Designer",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        date: "2023-07-22",
        title: "Design Systems: Why They Matter",
        summary: "A comprehensive look at how design systems can transform your workflow and create consistency across products...",
    },
    {
        id: "3",
        name: "Alex Johnson",
        role: "Data Scientist",
        photo: "https://randomuser.me/api/portraits/men/67.jpg",
        date: "2023-08-10",
        title: "Machine Learning in Modern Applications",
        summary: "How AI and ML are being integrated into everyday applications, and what this means for developers and users...",
    }
];

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [usingMockData, setUsingMockData] = useState(false);

    useEffect(() => {
        setLoading(true);
        
        // Try to fetch from API with timeout
        const timeoutId = setTimeout(() => {
            if (loading) {
                console.log("API request timed out, using mock data");
                setBlogs(MOCK_BLOGS);
                setLoading(false);
                setUsingMockData(true);
            }
        }, 5000); // 5 second timeout
        
        fetch("http://localhost:5000/blogs")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch blogs");
                }
                return res.json();
            })
            .then((data) => {
                clearTimeout(timeoutId);
                const transformed = data.map((item) => ({
                    id: item._id,
                    name: item.author?.username || "Anonymous",
                    role: item.category || "Contributor",
                    photo: item.coverImage
                        ? `http://localhost:5000/${item.coverImage}`
                        : "https://randomuser.me/api/portraits/men/32.jpg",
                    date: new Date(item.createdAt).toISOString().split("T")[0],
                    title: item.title,
                    summary: item.content.slice(0, 120) + "...",
                }));
                setBlogs(transformed);
                setLoading(false);
            })
            .catch((err) => {
                clearTimeout(timeoutId);
                console.error("Failed to fetch blogs:", err);
                setBlogs(MOCK_BLOGS);
                setUsingMockData(true);
                setLoading(false);
            });
            
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-y-auto">
            <div className="fixed inset-0 w-full h-full z-0">
                <StarsBG />
            </div>
            <div className="relative z-10">
                <Navbar />
                <SectionSpacer size="xs" />
                {loading ? (
                    <div className="text-center py-20">
                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyan-400 border-r-transparent"></div>
                        <p className="mt-4 text-gray-300">Loading blogs...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-20">
                        <p className="text-red-400">{error}</p>
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-300">No blogs found.</p>
                    </div>
                ) : (
                    <>
                        {usingMockData && (
                            <div className="bg-amber-900/30 border border-amber-600/30 rounded-lg max-w-4xl mx-auto mb-6 p-4 text-center">
                                <p className="text-amber-200">
                                    Using demo content - Backend API not connected
                                </p>
                            </div>
                        )}
                        <CreateBlog blogPosts={blogs} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Blogs;
