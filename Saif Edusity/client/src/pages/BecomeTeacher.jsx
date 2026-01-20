import React, { useState } from 'react';
import { Presentation, CheckCircle, ArrowRight, User, Mail, GraduationCap } from 'lucide-react';

const BecomeTeacher = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
                <div className="max-w-md w-full bg-white p-12 rounded-3xl shadow-xl text-center border border-slate-100">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Application Received!</h2>
                    <p className="text-slate-600 mb-8">Thank you for your interest in teaching at Edusity. Our team will review your profile and get back to you within 3-5 business days.</p>
                    <button onClick={() => window.location.href = '/'} className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold hover:bg-primary-700 transition-all">
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="flex-1">
                        <span className="inline-block py-1 px-4 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
                            Join Our Instructor Community
                        </span>
                        <h1 className="text-5xl font-black text-slate-900 mb-8 leading-tight">
                            Share Your Knowledge and <span className="text-primary-600">Inspire Others</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                            Edusity provides you with the tools and audience to turn your expertise into impact. Join thousands of instructors who are already changing lives.
                        </p>

                        <div className="space-y-6 mb-12">
                            {[
                                "Earn money on every student enrollment",
                                "Reach a global audience of millions",
                                "Easy-to-use course creation tools",
                                "Expert support team to help you grow"
                            ].map((task, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="bg-green-100 p-1 rounded-full">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{task}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-xl">
                        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Instructor Application</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                        <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                        <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                    <input required type="email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Expertise / Subject</label>
                                    <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500">
                                        <option>Technology</option>
                                        <option>Business</option>
                                        <option>Design</option>
                                        <option>Marketing</option>
                                        <option>School Subjects</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Tell us about your experience</label>
                                    <textarea required rows="4" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-500" placeholder="I have 10 years of experience in..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all flex items-center justify-center gap-2">
                                    Submit Application <ArrowRight className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeTeacher;
