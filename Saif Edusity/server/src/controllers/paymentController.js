const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Course = require('../models/Course');
const User = require('../models/User');

const createCheckoutSession = async (req, res) => {
    const { courseId } = req.body;

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: course.title,
                            images: [course.thumbnail],
                        },
                        unit_amount: Math.round(course.price * 100),
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/dashboard?success=true&courseId=${courseId}`,
            cancel_url: `${process.env.CLIENT_URL}/courses/${courseId}?canceled=true`,
            client_reference_id: req.user._id.toString(),
            metadata: {
                courseId: courseId.toString(),
            },
        });

        res.json({ id: session.id, url: session.url });
    } catch (error) {
        console.error('Stripe Error:', error);
        res.status(500).json({ message: 'Payment error' });
    }
};

module.exports = { createCheckoutSession };
