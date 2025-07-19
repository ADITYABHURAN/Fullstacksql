import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT || 4000;
const app = express();

//middleware ke liye 
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(express.json()); //json data ko parse karne ke liye
app.use(express.urlencoded({extended: true})); //urlencoded data ko parse karne ke liye



//test route to check if the server is running
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'test checked',
  });
});

app.use("/api/v1/users", userRouter);

app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}`);
});