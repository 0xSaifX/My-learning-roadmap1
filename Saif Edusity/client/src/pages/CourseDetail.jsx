import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Play, FileText, HelpCircle, Lock, Star, Users, Globe, Clock, ShieldCheck } from 'lucide-react';

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock fetch
        setTimeout(() => {
            setCourse({
                _id: id,
                title: 'Advanced React Patterns & State Management',
                description: 'Take your React skills to the next level by mastering advanced patterns, performance optimization, and complex state management with Redux and Context API. This course is designed for developers who already have a solid foundation in React and want to build production-scale applications.',
                instructor: {
                    name: 'Sarah Johnson',
                    bio: 'Senior Software Engineer at Google with 10+ years of experience in frontend development.',
                    avatar: 'https://i.pravatar.cc/150?u=sarah'
                },
                category: 'Technology',
                price: 89.99,
                rating: 4.8,
                numReviews: 450,
                students: 3200,
                thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
                duration: '18 hours',
                lastUpdated: 'Jan 2024',
                language: 'English',
                whatYouLearn: [
                    'High-level patterns like Render Props and HOCs',
                    'Implementing Compound Components',
                    'Performance optimization with useMemo and useCallback',
                    'Deep dive into Context API and custom hooks',
                    'State management with Redux Toolkit',
                    'Testing React components with Jest and React Testing Library'
                ],
                lessons: [
                    { title: 'Introduction to Advanced Patterns', duration: '15m', type: 'video', free: true },
                    { title: 'The Render Props Pattern', duration: '45m', type: 'video', free: false },
                    { title: 'Compound Components Deep Dive', duration: '60m', type: 'video', free: false },
                    { title: 'State Initializers & Reducers', duration: '40m', type: 'video', free: false },
                    { title: 'Performance Optimization Techniques', duration: '55m', type: 'video', free: false },
                ]
            });
            setLoading(false);
        }, 500);
    }, [id]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
    );

    return (
        <div className="bg-white">
            {/* Header / Intro */}
            <div className="bg-slate-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <nav className="flex gap-2 text-sm text-primary-400 mb-6 font-bold">
                                <Link to="/courses">Courses</Link>
                                <span>&gt;</span>
                                <span className="text-white">{course.category}</span>
                            </nav>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{course.title}</h1>
                            <p className="text-lg text-slate-300 mb-8 max-w-3xl">{course.description}</p>

                            <div className="flex flex-wrap gap-6 items-center">
                                <div className="flex items-center gap-1 text-yellow-400">
                                    <span className="font-bold">{course.rating}</span>
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <span className="text-slate-400 font-normal">({course.numReviews} ratings)</span>
                                </div>
                                <div className="text-slate-300">
                                    <span className="font-bold text-white">{course.students.toLocaleString()}</span> students
                                </div>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
                                <div className="flex items-center gap-2">
                                    <span className="text-slate-400">Created by</span>
                                    <span className="text-primary-400 font-bold underline cursor-pointer">{course.instructor.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="w-4 h-4" />
                                    <span>{course.language}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>Last updated {course.lastUpdated}</span>
                                </div>
                            </div>
                        </div>

                        {/* Sticky Order Box */}
                        <div className="relative">
                            <div className="lg:absolute lg:top-0 lg:right-0 w-full bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-20">
                                <div className="aspect-video relative group cursor-pointer">
                                    <img src={course.thumbnail} alt="preview" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                                            <Play className="w-8 h-8 text-slate-900 fill-current ml-1" />
                                        </div>
                                    </div>
                                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold drop-shadow-lg">Preview this course</span>
                                </div>

                                <div className="p-8">
                                    <div className="flex items-baseline gap-2 mb-6">
                                        <span className="text-4xl font-black">${course.price}</span>
                                        <span className="text-slate-400 line-through">$149.99</span>
                                        <span className="text-green-600 font-bold">40% off</span>
                                    </div>

                                    <button className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all mb-4">
                                        Add to Cart
                                    </button>
                                    <button className="w-full bg-white border-2 border-slate-900 text-slate-900 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                                        Buy Now
                                    </button>

                                    <p className="text-center text-xs text-slate-500 mt-4">30-Day Money-Back Guarantee</p>

                                    <div className="mt-8">
                                        <h4 className="font-bold text-slate-900 mb-4">This course includes:</h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                                <Play className="w-4 h-4 text-slate-400" />
                                                <span>18 hours on-demand video</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                                <FileText className="w-4 h-4 text-slate-400" />
                                                <span>15 downloadable resources</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                                <Users className="w-4 h-4 text-slate-400" />
                                                <span>Full lifetime access</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                                <ShieldCheck className="w-4 h-4 text-slate-400" />
                                                <span>Certificate of completion</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Content Body */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="lg:w-2/3">
                    {/* What you'll learn */}
                    <div className="p-8 border border-slate-200 rounded-2xl mb-12 bg-slate-50/50">
                        <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.whatYouLearn.map((item, i) => (
                                <div key={i} className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Curriculum */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">Course content</h2>
                        <div className="border border-slate-200 rounded-2xl overflow-hidden">
                            {course.lessons.map((lesson, i) => (
                                <div key={i} className={`flex items-center justify-between p-4 border-b border-slate-100 last:border-0 ${lesson.free ? 'bg-white' : 'bg-slate-50/30'}`}>
                                    <div className="flex items-center gap-4">
                                        {lesson.free ? (
                                            <Play className="w-5 h-5 text-primary-600" />
                                        ) : (
                                            <Lock className="w-5 h-5 text-slate-300" />
                                        )}
                                        <div>
                                            <h4 className={`font-medium ${lesson.free ? 'text-slate-900 underline cursor-pointer' : 'text-slate-500'}`}>
                                                {lesson.title}
                                            </h4>
                                            <div className="flex gap-4 mt-1 text-xs text-slate-400">
                                                <span>{lesson.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {lesson.free && (
                                        <span className="text-primary-600 text-sm font-bold cursor-pointer">Preview</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Instructor */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Instructor</h2>
                        <div className="flex items-start gap-6">
                            <img src={course.instructor.avatar} alt={course.instructor.name} className="w-16 h-16 rounded-full" />
                            <div>
                                <h3 className="text-xl font-bold text-primary-600 underline cursor-pointer">{course.instructor.name}</h3>
                                <p className="text-slate-500 text-sm mb-4">React Expert & Tech Lead</p>
                                <p className="text-slate-600 leading-relaxed mb-4">{course.instructor.bio}</p>
                                <div className="flex gap-6 mt-4">
                                    <div className="flex items-center gap-2 text-sm font-bold">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span>4.9 Instructor Rating</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold">
                                        <Users className="w-4 h-4" />
                                        <span>258,000 Students</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold">
                                        <Play className="w-4 h-4" />
                                        <span>12 Courses</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
