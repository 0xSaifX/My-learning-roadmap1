const express = require('express');
const router = express.Router();
const {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
} = require('../controllers/courseController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.get('/', getCourses);
router.get('/:id', getCourseById);
router.post('/', protect, authorize('teacher', 'admin'), createCourse);
router.put('/:id', protect, authorize('teacher', 'admin'), updateCourse);

module.exports = router;
