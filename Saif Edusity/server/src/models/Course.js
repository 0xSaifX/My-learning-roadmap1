const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String }, // Text content
    videoUrl: { type: String },
    duration: { type: String },
});

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    category: {
        type: String,
        enum: ['School subjects', 'Business', 'Entrepreneurship', 'Technology', 'Design'],
        required: true,
    },
    price: {
        type: Number,
        default: 0,
    },
    thumbnail: {
        type: String,
        default: '',
    },
    lessons: [lessonSchema],
    enrolledStudents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    rating: {
        type: Number,
        default: 0,
    },
    reviews: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        rating: Number,
        comment: String,
    }],
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
