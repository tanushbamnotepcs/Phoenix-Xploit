import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar_Phx";
import SectionSpacer from "../components/SectionSpacer";
import { StarsBG } from "../components/background/StarsBG";

// Mock data for when API is not available
const MOCK_BLOG = {
    title: "The Future of Web Development",
    author: { username: "John Doe" },
    createdAt: "2023-06-15T12:00:00Z",
    coverImage: null,
    content: `
    Web development continues to evolve at a rapid pace. As we look to the future, several key trends are emerging that will shape how we build and interact with web applications.

    WebAssembly is gaining significant traction, enabling high-performance code execution in browsers. This technology allows developers to run code written in languages like C, C++, and Rust directly in the browser at near-native speed, opening up new possibilities for web applications.

    Edge computing is another transformative trend, bringing computation and data storage closer to the location where it's needed. This reduces latency and improves performance for users across the globe, making applications feel more responsive regardless of a user's location.

    The rise of headless CMS and API-first approaches continues to change how we architect web applications. By decoupling the frontend from the backend, developers can create more flexible, scalable systems that can adapt to changing requirements more easily.

    AI and machine learning are increasingly being integrated into web development workflows, from code generation to automated testing. These technologies are helping developers work more efficiently and create more intelligent applications.

    As we move forward, the focus on performance, accessibility, and user experience will only intensify. Web applications will continue to close the gap with native applications in terms of capabilities and performance, while becoming more inclusive and easier to use for people of all abilities.
    `
};

function BlogDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [usingMockData, setUsingMockData] = useState(false);

    useEffect(() => {
        // Try to fetch from API with timeout
        const timeoutId = setTimeout(() => {
            if (loading) {
                console.log("API request timed out, using mock data");
                setBlog(MOCK_BLOG);
                setLoading(false);
                setUsingMockData(true);
            }
        }, 5000); // 5 second timeout

        fetch(`http://localhost:5000/blogs/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Blog not found");
                }
                return res.json();
            })
            .then((data) => {
                clearTimeout(timeoutId);
                setBlog(data);
                setLoading(false);
            })
            .catch((err) => {
                clearTimeout(timeoutId);
                console.error("Error fetching blog:", err);
                setBlog(MOCK_BLOG);
                setUsingMockData(true);
                setLoading(false);
            });

        return () => clearTimeout(timeoutId);
    }, [id]);

    return (
        <div className="relative min-h-screen w-full overflow-y-auto text-white">
            <div className="fixed inset-0 w-full h-full z-0">
                <StarsBG />
            </div>
            <div className="relative z-10">
                <Navbar />
                <SectionSpacer size="md" />
                
                {loading ? (
                    <div className="text-center py-20">
                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyan-400 border-r-transparent"></div>
                        <p className="mt-4 text-gray-300">Loading blog content...</p>
                    </div>
                ) : !blog ? (
                    <div className="text-center py-20">
                        <p className="text-red-400 text-xl mb-4">Blog not found</p>
                        <button 
                            onClick={() => navigate('/blogs')}
                            className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md transition-colors"
                        >
                            Back to Blogs
                        </button>
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto px-4 pb-20">
                        {usingMockData && (
                            <div className="bg-amber-900/30 border border-amber-600/30 rounded-lg mx-auto mb-6 p-4 text-center">
                                <p className="text-amber-200">
                                    Displaying demo content - Backend API not connected
                                </p>
                            </div>
                        )}
                        <div className="bg-black/70 rounded-2xl shadow-xl p-8">
                            <h1 className="text-3xl font-bold text-cyan-400 mb-4">{blog.title}</h1>
                            <p className="text-sm text-cyan-300 mb-6">
                                By {blog.author?.username || "Unknown"} — {new Date(blog.createdAt).toDateString()}
                            </p>
                            {blog.coverImage && (
                                <img
                                    src={`http://localhost:5000/${blog.coverImage}`}
                                    alt="cover"
                                    className="w-full max-h-80 object-cover rounded-lg mb-6"
                                />
                            )}
                            <div className="text-lg leading-relaxed text-gray-200 whitespace-pre-wrap">
                                {blog.content}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BlogDetail;
