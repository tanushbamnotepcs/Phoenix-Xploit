import React from "react";
import { useNavigate } from "react-router-dom";

function CreateBlog({ blogPosts }) {
    const navigate = useNavigate();

    return (
        <div className="bg-black min-h-screen py-10 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-100">Our Blog</h1>
            <div className="grid gap-8 md:grid-cols-1 max-w-4xl mx-auto">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="group relative rounded-2xl shadow-2xl flex flex-col md:flex-row items-center p-6 mb-4 overflow-hidden
                                   transition-transform duration-300 hover:scale-[1.035] hover:shadow-[0_8px_40px_0_rgba(0,255,255,0.25),0_1.5px_8px_0_rgba(0,0,0,0.25)]"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(22,27,34,0.98) 80%, rgba(0,255,255,0.10) 100%)",
                            border: "1.5px solid rgba(0,255,255,0.13)",
                            boxShadow:
                                "0 2px 24px 0 rgba(0,255,255,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.15)",
                            backdropFilter: "blur(2px)",
                        }}
                    >
                        {/* Enhanced Animated Glow Border */}
                        <span className="pointer-events-none absolute left-0 top-0 w-full h-full z-20 rounded-2xl border-2 border-cyan-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-[3px]"></span>
                        {/* Animated Border on Hover */}
                        {/* Top Border */}
                        <span className="pointer-events-none absolute left-0 top-0 w-full h-1 z-30">
                            <span className="block h-full w-full bg-gradient-to-r from-cyan-400 via-white to-cyan-400 opacity-0 group-hover:opacity-100 rounded-t-2xl
                                animate-border-horizontal origin-left"></span>
                        </span>
                        {/* Right Border */}
                        <span className="pointer-events-none absolute right-0 top-0 w-1 h-full z-30">
                            <span className="block w-full h-full bg-gradient-to-b from-cyan-400 via-white to-cyan-400 opacity-0 group-hover:opacity-100 rounded-r-2xl
                                animate-border-vertical origin-top"></span>
                        </span>
                        {/* Bottom Border */}
                        <span className="pointer-events-none absolute left-0 bottom-0 w-full h-1 z-30">
                            <span className="block h-full w-full bg-gradient-to-r from-cyan-400 via-white to-cyan-400 opacity-0 group-hover:opacity-100 rounded-b-2xl
                                animate-border-horizontal-reverse origin-right"></span>
                        </span>
                        {/* Left Border */}
                        <span className="pointer-events-none absolute left-0 top-0 w-1 h-full z-30">
                            <span className="block w-full h-full bg-gradient-to-b from-cyan-400 via-white to-cyan-400 opacity-0 group-hover:opacity-100 rounded-l-2xl
                                animate-border-vertical-reverse origin-bottom"></span>
                        </span>

                        {/* Card Content */}
                        <div className="absolute inset-0 rounded-2xl bg-[#161b22] z-0 opacity-90"></div>
                        <div className="flex flex-col items-center md:w-1/4 w-full mb-4 md:mb-0 z-40">
                            <img
                                src={post.photo}
                                alt={post.name}
                                className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-cyan-400 shadow-lg shadow-cyan-400/30"
                            />
                            <span className="font-semibold text-gray-100">{post.name}</span>
                            <span className="text-cyan-300 text-sm">{post.role}</span>
                        </div>
                        <div className="flex-1 md:w-2/4 w-full px-4 text-center md:text-left z-40">
                            <span className="text-cyan-400 text-xs">{post.date}</span>
                            <h2 className="text-xl font-semibold mb-1 text-gray-100">{post.title}</h2>
                            <p className="text-gray-300">{post.summary}</p>
                        </div>
                        <div className="md:w-1/4 w-full flex justify-center md:justify-end mt-4 md:mt-0 z-40">
                            {/* Enhanced Button */}
                            <div className="relative group">
                                <button
                                    type="button"
                                    onClick={() => navigate(`/blog/${post.id}`)}
                                    className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-cyan-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-cyan-600"
                                >
                                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                                        <div className="relative z-10 flex items-center space-x-3">
                                            <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-cyan-300">View Blog</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-cyan-300">
                                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                            </svg>
                                        </div>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Border Animations */}
            <style>
                {`
                @keyframes border-horizontal {
                  0% { transform: scaleX(0); }
                  50% { transform: scaleX(1); }
                  100% { transform: scaleX(0); }
                }
                @keyframes border-horizontal-reverse {
                  0% { transform: scaleX(0); }
                  50% { transform: scaleX(1); }
                  100% { transform: scaleX(0); }
                }
                @keyframes border-vertical {
                  0% { transform: scaleY(0); }
                  50% { transform: scaleY(1); }
                  100% { transform: scaleY(0); }
                }
                @keyframes border-vertical-reverse {
                  0% { transform: scaleY(0); }
                  50% { transform: scaleY(1); }
                  100% { transform: scaleY(0); }
                }
                .animate-border-horizontal {
                  animation: border-horizontal 2.5s cubic-bezier(.4,0,.2,1) infinite;
                }
                .animate-border-horizontal-reverse {
                  animation: border-horizontal-reverse 2.5s cubic-bezier(.4,0,.2,1) infinite reverse;
                }
                .animate-border-vertical {
                  animation: border-vertical 2.5s cubic-bezier(.4,0,.2,1) infinite;
                }
                .animate-border-vertical-reverse {
                  animation: border-vertical-reverse 2.5s cubic-bezier(.4,0,.2,1) infinite reverse;
                }
                `}
            </style>
        </div>
    );
}

export default CreateBlog;