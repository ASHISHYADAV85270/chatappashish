import express from 'express';
import {
    LoginUser, RegisterUser, setavatar, getAllUsers, logoutuser,
} from '../controllers/userControl.js';
import { isAuthenticated, checkauth } from '../middlewares/isAuthenticated.js';

const router = express();
router.post('/register', RegisterUser); //api/auth/register
router.post('/login', LoginUser); //api/auth/register
router.post('/setavatar', setavatar);
router.post('/checkauth', checkauth);
router.get("/allusers/:id", getAllUsers);
router.get('/logoutuser', logoutuser);


export default router;  