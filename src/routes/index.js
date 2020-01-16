var express = require('express');
var router = express.Router();

import UserController from '../controllers/userController';
import EventController from '../controllers/eventController';

const userController = new UserController();
const eventController = new EventController();




router.post('/signup', userController.addUser);
router.post('/signin', userController.login);
router.get('/allusers', userController.getUsers); //dummy


router.get('/event', eventController.get); 
router.post('/event', eventController.add); 



router.get('*', (req, res, next) => {
    res.render('index.html');
});

module.exports = router;
