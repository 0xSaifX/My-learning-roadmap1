import React from 'react';
import { Shield, FileText, CheckCircle } from 'lucide-react';

const Terms = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="bg-primary-100 p-3 rounded-2xl">
                            <FileText className="w-8 h-8 text-primary-600" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-slate-900">Terms of Service</h1>
                            <p className="text-slate-500">Last updated: January 20, 2026</p>
                        </div>
                    </div>

                    <div className="space-y-12 prose prose-slate max-w-none">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-slate-600 leading-relaxed">
                                By accessing or using the Edusity platform, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. User Accounts</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                You are responsible for maintaining the confidentiality of your account credentials. You agree to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                <li>Provide accurate and complete information</li>
                                <li>Notify us immediately of any unauthorized use</li>
                                <li>Not share your account with others</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Course Enrollment and Payments</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Enrollment in a course is for your personal use only. Many courses require payment. Our refund policy allows for a full refund within 30 days of purchase, provided that less than 50% of the content has been consumed.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
                            <p className="text-slate-600 leading-relaxed">
                                All content on the platform, including videos, text, and graphics, is the property of Edusity or its instructors. You may not reproduce, distribute, or create derivative works without explicit permission.
                            </p>
                        </section>

                        <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">Contact for Legal Issues</h2>
                            <p className="text-slate-600 mb-4">If you have any questions regarding these terms, please contact our legal team:</p>
                            <p className="font-bold text-primary-600">legal@edusity.com</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
