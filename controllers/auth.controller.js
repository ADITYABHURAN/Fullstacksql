import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'; 
import crypto from 'crypto';

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
      prisma.user.findUnique({
         where: {email}
      })//if the user exists 
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