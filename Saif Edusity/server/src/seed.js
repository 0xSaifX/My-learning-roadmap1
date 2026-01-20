const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Course = require('./models/Course');

dotenv.config();

const users = [
    {
        name: 'Admin User',
        email: 'admin@edusity.com',
        password: 'password123',
        role: 'admin',
    },
    {
        name: 'John Teacher',
        email: 'teacher@edusity.com',
        password: 'password123',
        role: 'teacher',
    },
    {
        name: 'Jane Student',
        email: 'student@edusity.com',
        password: 'password123',
        role: 'student',
    }
];

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        // Clear existing data
        await User.deleteMany();
        await Course.deleteMany();

        // Create users
        // Note: User model has a pre-save hook for password hashing
        const createdUsers = await User.create(users);
        const teacherId = createdUsers[1]._id;

        // Create courses
        const courses = [
            {
                title: 'Mastering JavaScript ES6+',
                description: 'Deep dive into modern JavaScript features and asynchronous programming.',
                instructor: teacherId,
                category: 'Technology',
                price: 49.99,
                thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
                lessons: [
                    { title: 'Arrow Functions', content: 'ES6 Arrow functions explanation...', duration: '10m' },
                    { title: 'Destructuring', content: 'Array and Object destructuring...', duration: '15m' }
                ]
            },
            {
                title: 'Business Strategy 101',
                description: 'Learn how to build and scale a successful business from scratch.',
                instructor: teacherId,
                category: 'Business',
                price: 79.99,
                thumbnail: 'https://images.unsplash.com/photo-1507679799987-c7377ec48696?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
                lessons: [
                    { title: 'Market Analysis', content: 'How to analyze your market...', duration: '20m' },
                    { title: 'Financial Planning', content: 'Creating a financial roadmap...', duration: '30m' }
                ]
            }
        ];

        await Course.insertMany(courses);

        console.log('Data Seeded Successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
