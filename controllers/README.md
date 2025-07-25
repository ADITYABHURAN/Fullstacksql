firstly import what ever is needed like prisma client , bcrypt for hasihing the password, crypto for tokenization and jwt for auth 


  const {name, email, password, phone} = req.body;
   //Check if all fields are provided
   if(!name || !email || !password || !phone ) {
      console.log("Data is missing"); }  this checks if all fields are filled and what fields are needed if its unsuccessful it returns res.response 

      for hasing password 
      step one import what needed like crypto and bcrypt 
      step 2 - const hashedPassword =  await bcrypt.hash(password, 10)
      const verificationToken = crypto.randomBytes(32).toString("hex");

    now to login user we use LoginUser 
    export const loginUser = async (req, res) => {
 const {email, password} = req.body;
 //Check if all fields are provided
   if(!email || !password) {
    
   }}