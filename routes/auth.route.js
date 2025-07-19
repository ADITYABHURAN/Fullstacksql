import express from 'express';
import { registerUser } from '../controllers/auth.controller.js';


const userrouter = express.Router();

userRouter.post('/register', registerUser);



export default express.Router()