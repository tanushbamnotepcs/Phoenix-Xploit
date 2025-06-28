import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (res.ok && data.user.role === "admin") {
                localStorage.setItem("token", data.token); // save JWT
                navigate("/admin/dashboard");
            } else {
                setError("Access denied. Not an admin.");
            }
        } catch (err) {
            console.error(err);
            setError("Login failed.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-900 shadow-lg rounded-xl p-8 max-w-md w-full space-y-6 border border-cyan-400"
            >
                <h2 className="text-2xl font-bold text-center text-cyan-400">Phoenix Admin Login</h2>
                {error && <p className="text-red-400 text-sm text-center">{error}</p>}

                <div>
                    <label className="block text-sm text-gray-300">Username</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 mt-1 rounded bg-gray-800 text-white border border-cyan-600 focus:outline-none"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm text-gray-300">Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 mt-1 rounded bg-gray-800 text-white border border-cyan-600 focus:outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded transition duration-200"
                >
                    Login as Admin
                </button>
            </form>
        </div>
    );
}

export default Login;
