import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Book, PlayCircle, Award, Clock, PlusCircle, Settings, Users, BarChart3 } from 'lucide-react';

const Dashboard = () => {
    const { user } = useAuth();

    const StudentDashboard = () => (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Courses in Progress', count: 3, icon: Book, color: 'text-blue-600', bg: 'bg-blue-100' },
                    { label: 'Completed Lessons', count: 24, icon: PlayCircle, color: 'text-green-600', bg: 'bg-green-100' },
                    { label: 'Certificates Earned', count: 1, icon: Award, color: 'text-orange-600', bg: 'bg-orange-100' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-slate-900">{stat.count}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-900">Your Courses</h2>
                    <button className="text-primary-600 font-bold text-sm">View All</button>
                </div>
                <div className="p-6">
                    <div className="space-y-6">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-6 items-center p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                <div className="w-full md:w-48 h-28 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`} alt="course" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Advanced React Patterns & State Management</h4>
                                    <p className="text-slate-500 text-sm mb-4">Instructor: Sarah Johnson</p>
                                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                        <div className="bg-primary-600 h-full w-2/3"></div>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-xs text-slate-500 font-medium">65% Completed</span>
                                        <button className="text-primary-600 text-sm font-bold flex items-center gap-1">Continue Learning <Clock className="w-4 h-4" /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const TeacherDashboard = () => (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Instructor Dashboard</h1>
                    <p className="text-slate-500">Manage your courses and track student progress</p>
                </div>
                <button className="bg-primary-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-700 transition-all shadow-lg shadow-primary-100">
                    <PlusCircle className="w-5 h-5" />
                    Create New Course
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Total Students', count: '1,280', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
                    { label: 'Active Courses', count: '5', icon: Book, color: 'text-purple-600', bg: 'bg-purple-100' },
                    { label: 'Total Revenue', count: '$12,450', icon: BarChart3, color: 'text-green-600', bg: 'bg-green-100' },
                    { label: 'Avg Rating', count: '4.8', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-100' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-slate-900">{stat.count}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                    <h2 className="text-xl font-bold text-slate-900">Your Live Courses</h2>
                </div>
                <div className="p-6">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-slate-500 text-sm border-b border-slate-100">
                                <th className="pb-4 font-semibold">Course Name</th>
                                <th className="pb-4 font-semibold">Enrolled</th>
                                <th className="pb-4 font-semibold">Revenue</th>
                                <th className="pb-4 font-semibold">Status</th>
                                <th className="pb-4 font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {[1, 2, 3].map((i) => (
                                <tr key={i} className="group hover:bg-slate-50 transition-colors">
                                    <td className="py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0">
                                                <img src={`https://images.unsplash.com/photo-1544391682-1717316377dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`} alt="course" className="w-full h-full object-cover" />
                                            </div>
                                            <span className="font-bold text-slate-900">Mastering UI Design for Web</span>
                                        </div>
                                    </td>
                                    <td className="py-4 text-slate-600">450 Students</td>
                                    <td className="py-4 font-bold text-slate-900">$4,500</td>
                                    <td className="py-4">
                                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Published</span>
                                    </td>
                                    <td className="py-4">
                                        <button className="text-slate-400 hover:text-primary-600 transition-colors">
                                            <Settings className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-slate-50 min-h-screen pt-8 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {!user ? (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-bold">Please login to view dashboard</h2>
                    </div>
                ) : (
                    <>
                        <div className="mb-10">
                            <h1 className="text-3xl font-bold text-slate-900">Welcome, {user.name} 👋</h1>
                            <p className="text-slate-500">Here's what's happening with your learning today.</p>
                        </div>

                        {user.role === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />}
                    </>
                )}
            </div>
        </div>
    );
};

// Mock Star icon for teacher dashboard stats
const Star = ({ className }) => <Award className={className} />;

export default Dashboard;
