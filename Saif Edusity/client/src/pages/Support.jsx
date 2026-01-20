import React from 'react';
import { HelpCircle, Mail, MessageSquare, Phone, Search, ChevronRight } from 'lucide-react';

const Support = () => {
    const faqs = [
        { q: "How do I take a course?", a: "Once you purchase or enroll in a course, it will appear in your dashboard. You can access all lessons and materials from there." },
        { q: "Can I get a refund?", a: "Yes, we offer a 30-day money-back guarantee for all premium courses if you are not satisfied with the content." },
        { q: "Will I get a certificate?", a: "Absolutely! Upon successful completion of all lessons and quizzes in a course, a digital certificate will be generated for you." },
        { q: "Are courses available offline?", a: "Currently, our lessons are streamed online, but you can download additional resources and assignments." }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="bg-primary-600 py-24 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-4xl lg:text-5xl font-black text-white mb-8">How can we help?</h1>
                    <div className="relative">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
                        <input className="w-full pl-16 pr-8 py-6 rounded-2xl shadow-xl outline-none focus:ring-4 focus:ring-primary-500/20" placeholder="Search for help articles..." />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                            <Mail className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Email Support</h3>
                        <p className="text-slate-500 mb-6">Response within 24 hours</p>
                        <button className="text-primary-600 font-bold hover:underline">support@edusity.com</button>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                            <MessageSquare className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                        <p className="text-slate-500 mb-6">Available 9am - 5pm EST</p>
                        <button className="bg-primary-600 text-white px-8 py-3 rounded-xl font-bold">Start Chat</button>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                            <Phone className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Call Us</h3>
                        <p className="text-slate-500 mb-6">For urgent issues</p>
                        <button className="text-primary-600 font-bold hover:underline">+1 (555) 000-0000</button>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mb-24">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h4>
                                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
