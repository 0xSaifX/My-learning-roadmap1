import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    const [showVideo, setShowVideo] = React.useState(false);

    return (
        <div className="overflow-hidden">
            {/* Video Modal */}
            {showVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        <video
                            src="https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-3480-large.mp4"
                            className="w-full h-full object-cover"
                            autoPlay
                            controls
                        ></video>
                    </motion.div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 bg-slate-50">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary-200/30 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 text-center lg:text-left"
                        >
                            <span className="inline-block py-1 px-4 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
                                Limitless Learning, Limitless Possibilities
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
                                Master New Skills with <span className="text-primary-600">Edusity</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-10 max-w-2xl">
                                Join over 20,000 students learning from world-class instructors. Start your journey today and unlock your full potential.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/register" className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-200">
                                    Get Started for Free <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link to="/courses" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 border border-slate-200">
                                    Explore Courses
                                </Link>
                            </div>
                            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm text-slate-600">
                                    <div className="flex items-center gap-1 text-yellow-500 font-bold">
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="text-slate-900 ml-1">4.9/5</span>
                                    </div>
                                    <span>from 5,000+ reviews</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1 relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white group">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                                    alt="Students learning"
                                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                                    <button
                                        onClick={() => setShowVideo(true)}
                                        className="bg-white/90 backdrop-blur-sm p-5 rounded-full shadow-2xl hover:scale-110 transition-transform"
                                    >
                                        <PlayCircle className="w-12 h-12 text-primary-600" />
                                    </button>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-bounce">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        <Users className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">20k+</h4>
                                        <p className="text-xs text-slate-500">Active Students</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <Award className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">500+</h4>
                                        <p className="text-xs text-slate-500">Expert Courses</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Top Categories</h2>
                    <p className="text-slate-600 mb-16 max-w-2xl mx-auto">Explore our wide range of categories and find the perfect course to advance your career.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {['Business', 'Technology', 'Design', 'Marketing'].map((cat) => (
                            <div key={cat} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:bg-white hover:shadow-xl transition-all cursor-pointer group">
                                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                    <Star className="w-8 h-8 text-primary-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{cat}</h3>
                                <p className="text-slate-500 text-sm">120+ Courses Available</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
