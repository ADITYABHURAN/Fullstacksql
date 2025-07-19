import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const registerUser = async (req, res) => { 
   console.log("User registered");
   //this is how you register a user
   //and also this is how you use prisma to interact with the database
   await prisma.user.findUnique({
      where: {email}
   })

};
