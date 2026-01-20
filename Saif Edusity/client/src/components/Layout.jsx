import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, BookOpen, LayoutDashboard, User } from 'lucide-react';

const Layout = () => {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center gap-2">
                                <BookOpen className="w-8 h-8 text-primary-600" />
                                <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
                                    Edusity
                                </span>
                            </Link>
                        </div>
                        <div className="flex items-center gap-6">
                            <Link to="/courses" className="text-slate-600 hover:text-primary-600 font-medium">Courses</Link>
                            {user ? (
                                <>
                                    <Link to="/dashboard" className="flex items-center gap-2 text-slate-600 hover:text-primary-600 font-medium">
                                        <LayoutDashboard className="w-4 h-4" />
                                        Dashboard
                                    </Link>
                                    <div className="relative group">
                                        <button className="flex items-center gap-2 text-slate-600 hover:text-primary-600 font-medium">
                                            <User className="w-4 h-4" />
                                            {user.name}
                                        </button>
                                        <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                            <button
                                                onClick={logout}
                                                className="w-full text-left px-4 py-2 text-red-600 hover:bg-slate-50 flex items-center gap-2"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="text-slate-600 hover:text-primary-600 font-medium">Login</Link>
                                    <Link to="/register" className="bg-primary-600 text-white px-5 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                                        Join for Free
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-grow">
                <Outlet />
            </main>

            <footer className="bg-slate-900 text-slate-400 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <Link to="/" className="flex items-center gap-2 mb-4 text-white">
                                <BookOpen className="w-8 h-8 text-primary-400" />
                                <span className="text-2xl font-bold font-sans tracking-tight">Edusity</span>
                            </Link>
                            <p className="max-w-sm">
                                Empowering learners around the globe with high-quality courses from expert instructors.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-6">Explore</h4>
                            <ul className="space-y-3">
                                <li><Link to="/courses" className="hover:text-white transition-colors">Digital Marketing</Link></li>
                                <li><Link to="/courses" className="hover:text-white transition-colors">Web Development</Link></li>
                                <li><Link to="/courses" className="hover:text-white transition-colors">Graphic Design</Link></li>
                                <li><Link to="/courses" className="hover:text-white transition-colors">School Subjects</Link></li>
                                <li><Link to="/courses" className="hover:text-white transition-colors">Business Strategy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-6">Company</h4>
                            <ul className="space-y-3">
                                <li><Link to="/teachers" className="hover:text-white transition-colors">Become a Teacher</Link></li>
                                <li><Link to="/support" className="hover:text-white transition-colors">Support Center</Link></li>
                                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
                        &copy; {new Date().getFullYear()} Edusity Inc. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
