import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Database/Db.js';
import userRouter from './Routers/user.router.js';
import eventRouter from './Routers/event.router.js';
import formRouter from './Routers/form.router.js';

dotenv.config();
connectDB();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/event', eventRouter);
app.use('/form', formRouter);


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});