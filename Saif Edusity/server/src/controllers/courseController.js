const Course = require('../models/Course');

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({}).populate('instructor', 'name');
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get course by ID
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate('instructor', 'name');
        if (course) {
            res.json(course);
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Create a course
// @route   POST /api/courses
// @access  Private/Teacher
const createCourse = async (req, res) => {
    try {
        const { title, description, category, price, thumbnail } = req.body;

        const course = new Course({
            title,
            description,
            category,
            price,
            thumbnail,
            instructor: req.user._id,
        });

        const createdCourse = await course.save();
        res.status(201).json(createdCourse);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Update a course
// @route   PUT /api/courses/:id
// @access  Private/Teacher
const updateCourse = async (req, res) => {
    try {
        const { title, description, category, price, thumbnail, lessons } = req.body;

        const course = await Course.findById(req.params.id);

        if (course) {
            if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
                return res.status(401).json({ message: 'Not authorized' });
            }

            course.title = title || course.title;
            course.description = description || course.description;
            course.category = category || course.category;
            course.price = price || course.price;
            course.thumbnail = thumbnail || course.thumbnail;
            course.lessons = lessons || course.lessons;

            const updatedCourse = await course.save();
            res.json(updatedCourse);
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
};
