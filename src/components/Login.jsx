import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import checkIcon from '../assets/file.svg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'user@zamp.ai' && password === 'demo123') {
            navigate('/done');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 bg-grid-pattern">
            <div className="max-w-[400px] w-full p-8 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <div className="flex flex-col items-center mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        {/* Zamp Logo Icon */}
                        <img src={checkIcon} alt="check" className="mr-2 w-10 h-10" />
                        <span className="text-3xl font-bold text-black tracking-tight">zamp</span>
                    </div>
                </div>

                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:ring-0 transition-colors"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:ring-0 transition-colors"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2.5 px-4 bg-[#1a202c] hover:bg-[#2d3748] text-white text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
