const express = require('express'); 
const {
    signupController,
    signinController,
    currentUser
} = require('../controllers/authController');
// Hoan
const {
    loadEventController, loadEventControllerById
} = require('../controllers/eventController');
//Hoan

const { validate } = require('../validators')
const { rules: registrationRules } = require('../validators/auth/register')
const { rules: loginRules } = require('../validators/auth/login')


const { auth } = require('../middlewares/auth')
const router = express.Router();



router.post('/signup', [registrationRules, validate], signupController)
router.get('/currentuser',auth,currentUser);

router.post('/signin', [loginRules, validate], signinController)

//Hoan
// router.post('/', loadEventController)
router.get('/events', loadEventController)

router.get('/events/:id',loadEventControllerById)

//Hoan

module.exports = router; 