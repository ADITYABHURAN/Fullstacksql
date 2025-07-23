import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'; 
import crypto from 'crypto';
import jwt from 'jsonwebtoken'; //if you are using jwt for token generation

const prisma = new PrismaClient();

export const registerUser = async (req, res) => { 
   const {name, email, password, phone} = req.body;
   //Check if all fields are provided
   if(!name || !email || !password || !phone ) {
      console.log("Data is missing");
      return res.status(400).json({
         success: false,
         message: "All fields are required"
      })
   }
   //Find if user exists 
   try {
      const existingUser = await prisma.user.findUnique({
         where: {email}
      }) // added await + assignment
      //if the user exists 
      if(existingUser) {
         return res.status(400).json({
            success: false,
            message: "User already exists"
         });
      }
      //hash the password 
      const hashedPassword =  await bcrypt.hash(password, 10)
      const verificationToken = crypto.randomBytes(32).toString("hex");
      //create user talk to db 
      const user = await prisma.user.create({
        data : {
         name,
         email,
         phone,
         password: hashedPassword,
         verificationToken,
        }
      })
      //send mail to user from nodemailer get from previous fulstack project
   } catch (error) {
      //copy paste from above 
       return res.status(500).json({
            success: false,
            error,
            message: "Registeration failed",
   });
   }
};
//git commit
export const loginUser = async (req, res) => {
 const {email, password} = req.body;
 //Check if all fields are provided
   if(!email || !password) {
      return res.status(400).json({
         success: false,
         message: "All fields are required"
      })
   }
   //abhi database mai check krna padega user hai kya so try catch use krte hai 
   try {
      const user = await prisma.user.findUnique({
         where: {email}
      })
      //if user does not exist
      if(!user) {
         return res.status(400).json({
            success: false,
            message: "User does not exist"
         });
      }
      //to compare the password we need to use bcrypt compare
      const isMatch =  await bcrypt.compare(password, user.password)
      //if password does not match
      if(!isMatch) {
         return res.status(400).json({
            success: false,
            message: "Invalid credentials"
         });
      }
      //jwt token generation 
      const token = jwt.sign(
         { id: user.id, email: user.email },
         process.env.JWT_SECRET, // Make sure to set this in your environment variables
         { expiresIn: '24h' } // Token expiration time, adjust as needed
      )
      const cookieOptions = {
         httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
         maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
      }   
      res.cookie('token', token, cookieOptions);

      return res.status(201).json({
         success: true,
         message: "Login successful",
         user: {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone
         },
      });
   } catch (error) {
       return res.status(400).json({
         success: false,
         message: "Login failed"
   });
   }
};
