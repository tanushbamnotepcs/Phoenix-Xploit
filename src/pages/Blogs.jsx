import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar_Phx";
import CreateBlog from "../components/CreateBlog";
import SectionSpacer from "../components/SectionSpacer";
import { StarsBG } from "../components/background/StarsBG";

function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => {
                const transformed = data.map((item) => ({
                    id: item._id,
                    name: item.author?.username || "Anonymous",
                    role: item.category || "Contributor",
                    photo: item.coverImage
                        ? `http://localhost:5000/${item.coverImage}` // or /public/uploads/filename.jpg
                        : "https://randomuser.me/api/portraits/men/32.jpg",
                    date: new Date(item.createdAt).toISOString().split("T")[0],
                    title: item.title,
                    summary: item.content.slice(0, 120) + "...",
                }));
                setBlogs(transformed);
            })
            .catch((err) => console.error("Failed to fetch blogs:", err));
    }, []);

    return (
        <div className="fixed min-h-screen w-screen overflow-hidden">
            <StarsBG className="absolute inset-0 w-full h-full z-0" />
            <Navbar />
            <SectionSpacer size="xs" />
            <CreateBlog blogPosts={blogs} />
        </div>
    );
}

export default Blogs;
