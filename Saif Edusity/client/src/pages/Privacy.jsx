import React from 'react';
import { Shield, Eye, Lock, Globe } from 'lucide-react';

const Privacy = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="bg-green-100 p-3 rounded-2xl">
                            <Shield className="w-8 h-8 text-green-600" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-slate-900">Privacy Policy</h1>
                            <p className="text-slate-500">Last updated: January 20, 2026</p>
                        </div>
                    </div>

                    <div className="space-y-12 text-slate-600">
                        <p className="text-lg leading-relaxed">
                            At Edusity, your privacy is our priority. This policy explains how we collect, use, and protect your personal data when you use our educational platform.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 bg-slate-50 rounded-2xl">
                                <Eye className="w-10 h-10 text-primary-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Data Collection</h3>
                                <p>We collect information like your name, email, and learning progress to provide a personalized experience.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl">
                                <Lock className="w-10 h-10 text-primary-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Data Security</h3>
                                <p>We use industry-standard encryption to protect your account and payment information from unauthorized access.</p>
                            </div>
                        </div>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Data</h2>
                            <ul className="list-disc pl-6 space-y-4">
                                <li><strong>Account Management:</strong> To create and manage your profile and course enrollments.</li>
                                <li><strong>Communication:</strong> To send you course updates, certificates, and platform news.</li>
                                <li><strong>Platform Improvement:</strong> To analyze how users interact with courses and improve our tools.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
                            <p className="mb-4">You have the right to access, correct, or delete your personal data at any time through your dashboard settings. You can also request a copy of the data we hold about you.</p>
                            <div className="flex items-center gap-2 text-primary-600 font-bold">
                                <Globe className="w-5 h-5" />
                                <span>Edusity complies with GDPR and CCPA regulations.</span>
                            </div>
                        </section>

                        <section className="pt-10 border-t border-slate-100 text-center">
                            <p className="text-sm text-slate-500">Questions about your privacy? Email us at</p>
                            <p className="text-lg font-bold text-slate-900">privacy@edusity.com</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
