const express = require('express');
const router = express.Router({ mergeParams: true });

const categoryController = require('../controllers/categoryController');
const authController = require('../controllers/authController');

// Allow redirect to subjectRoutes
// router.use('/:categoryId/subjects', subjectRouter)
// router.use('/:category/subjects', subjectRouter)

// CATEGORY ROUTES

// Protect Routes
router.use(authController.protect)

router
    .route('/')
    .get(categoryController.getAllCategories)

router  
    .route('/:id')
    .get(categoryController.getCategory)

// Restrict to Admins
router.use(authController.restrictTo('admin'))

router
    .route('/')
    .post(categoryController.createCategory)
router  
    .route('/:id')
    .patch(categoryController.updateCategory)
    .delete(categoryController.deleteCategory)


module.exports = router;