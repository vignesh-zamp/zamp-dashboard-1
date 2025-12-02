import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import checkIcon from '../assets/file.svg';
import {
    Layout,
    ChevronDown,
    FileText,
    Settings,
    User,
    Database,
    Users,
    PanelLeft,
    Share2,
    BookOpen,
    LogOut
} from 'lucide-react';

const DashboardLayout = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isAirbnbOpen, setIsAirbnbOpen] = useState(false);

    const handleLogout = () => {
        setIsAirbnbOpen(false);
        navigate('/');
    };

    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar */}
            {isSidebarOpen && (
                <div className="w-[240px] bg-white border-r border-gray-200 flex flex-col flex-shrink-0 transition-all duration-300">
                    {/* Logo Area */}
                    <div className="h-14 flex items-center px-4 border-b border-gray-100">
                        <img src={checkIcon} alt="check" className="mr-2 w-10 h-10" />
                    </div>

                    <nav className="flex-1 overflow-y-auto py-4">
                        <div className="space-y-1">
                            <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
                                <Database className="w-4 h-4 mr-3" />
                                Data
                            </a>
                            <NavLink
                                to="/done"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 text-sm ${isActive ? 'bg-gray-50 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`
                                }
                            >
                                <Users className="w-4 h-4 mr-3" />
                                People
                            </NavLink>
                        </div>

                        <div className="mt-6">
                            <div className="px-4 text-xs font-medium text-gray-400 propercase tracking-wider mb-2">
                                Processes
                            </div>
                            <NavLink
                                to="/done"
                                className={({ isActive }) =>
                                    `flex items-center px-3 py-2 text-sm ${isActive ? 'bg-gray-50 text-gray-900' : 'text-gray-300 hover:bg-gray-50'}`
                                }
                            >
                                <img src="/random.svg" alt="process icon" className="w-6 h-6 mr-3" />
                                Kyriba Processing
                            </NavLink>
                        </div>

                        <div className="mt-6">
                            <div className="px-4 text-xs font-medium text-gray-400 propercase tracking-wider mb-2">
                                Pages
                            </div>
                            <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 justify-between group">
                                <span className="flex items-center">
                                    <FileText className="w-4 h-4 mr-3 opacity-0" /> {/* Spacer/Placeholder */}
                                </span>
                                <FileText className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                            </a>
                        </div>
                    </nav>

                    {/* Bottom Airbnb Section */}
                    <div className="border-t border-gray-200 relative">
                        <button
                            onClick={() => setIsAirbnbOpen(!isAirbnbOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                        >
                            <div className="flex items-center">
                                <div className="w-5 h-5 bg-pink-200 rounded text-xs flex items-center justify-center text-pink-700 font-bold mr-3">
                                    A
                                </div>
                                Airbnb
                            </div>
                            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isAirbnbOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {isAirbnbOpen && (
                            <div className="absolute bottom-full left-0 right-0 mb-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                                <div className="py-1">
                                    <button
                                        className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                        onClick={() => setIsAirbnbOpen(false)}
                                    >
                                        <div className="w-5 h-5 bg-pink-200 rounded text-xs flex items-center justify-center text-pink-700 font-bold mr-3">
                                            A
                                        </div>
                                        Airbnb
                                    </button>
                                    <div className="border-t border-gray-100 my-1"></div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                    >
                                        <LogOut className="w-4 h-4 mr-3" />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden bg-white">
                {/* Header */}
                <header className="h-14 border-b border-gray-200 flex items-center justify-between px-6 bg-white">
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="mr-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            <PanelLeft className="w-5 h-5" />
                        </button>
                        <h1 className="text-sm text-gray-900">Kyriba Processing</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center text-xs text-gray-600 hover:text-gray-900 font-medium">
                            <BookOpen className="w-4 h-4 mr-1.5" />
                            Knowledge Base
                        </button>
                        <button className="flex items-center text-xs text-gray-600 hover:text-gray-900 font-medium">
                            <Share2 className="w-4 h-4 mr-1.5" />
                            Share
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
