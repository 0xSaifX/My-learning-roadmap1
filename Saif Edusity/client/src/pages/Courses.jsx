import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Filter, Star, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'School subjects', 'Business', 'Entrepreneurship', 'Technology', 'Design'];

    useEffect(() => {
        // In a real app, we'd fetch from API
        // For demo, using mock data
        const mockCourses = [
            {
                _id: '1',
                title: 'Complete Web Development Bootcamp 2024',
                instructor: { name: 'Dr. Angela Yu' },
                category: 'Technology',
                price: 94.99,
                rating: 4.8,
                students: 12500,
                thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
                duration: '45.5 hours'
            },
            {
                _id: '2',
                title: 'Mastering Personal Finance & Investing',
                instructor: { name: 'Graham Stephan' },
                category: 'Business',
                price: 49.99,
                rating: 4.9,
                students: 8400,
                thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
                duration: '12 hours'
            },
            {
                _id: '3',
                title: 'Entrepreneurship: From Idea to Exit',
                instructor: { name: 'Mark Cuban' },
                category: 'Entrepreneurship',
                price: 129.99,
                rating: 4.7,
                students: 3200,
                thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
                duration: '20 hours'
            },
            {
                _id: '4',
                title: 'Advanced Mathematics for Engineers',
                instructor: { name: 'Prof. Richard Feynman' },
                category: 'School subjects',
                price: 0,
                rating: 4.9,
                students: 15600,
                thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
                duration: '60 hours'
            },
            {
                _id: '5',
                title: 'UI/UX Design Masterclass with Figma',
                instructor: { name: 'Sarah Johnson' },
                category: 'Design',
                price: 79.99,
                rating: 4.6,
                students: 5800,
                thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
                duration: '15 hours'
            },
            {
                _id: '6',
                title: 'Biology: The Secret of Life',
                instructor: { name: 'Dr. Eric Lander' },
                category: 'School subjects',
                price: 29.99,
                rating: 4.5,
                students: 4200,
                thumbnail: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80',
                duration: '25 hours'
            }
        ];

        setCourses(mockCourses);
        setLoading(false);
    }, []);

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Explore Our Courses</h1>
                    <p className="text-slate-600">Choose from hundreds of expert-led courses across various categories.</p>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-6 mb-12">
                    <div className="flex-grow relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for courses, instructors..."
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-4 rounded-2xl whitespace-nowrap font-bold transition-all ${selectedCategory === cat
                                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-100'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course) => (
                        <div key={course._id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 group hover:shadow-2xl transition-all flex flex-col">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={course.thumbnail}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-slate-900 shadow-sm uppercase tracking-wider">
                                        {course.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center gap-1 text-yellow-500 mb-3">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span className="text-sm font-bold text-slate-900">{course.rating}</span>
                                    <span className="text-sm text-slate-400 ml-1">({course.students.toLocaleString()} students)</span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                                    {course.title}
                                </h3>

                                <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                                    <div className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        <span>{course.instructor.name}</span>
                                    </div>
                                    <span>•</span>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{course.duration}</span>
                                    </div>
                                </div>

                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-black text-slate-900">
                                            {course.price === 0 ? 'Free' : `$${course.price}`}
                                        </span>
                                    </div>
                                    <Link to={`/courses/${course._id}`} className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-primary-600 hover:text-white transition-all flex items-center gap-2">
                                        Details <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold text-slate-900">No courses found</h3>
                        <p className="text-slate-500">Try adjusting your search or filter to find what you're looking for.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Courses;
