import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import dotenv from 'dotenv'


dotenv.config();

const app = express()
const port = process.env.PORT || 5000;
const connection_url = "mongodb+srv://admin-debjit:hKOIXl3bHrISym7C@cluster0.e6nrm.mongodb.net/amazonDB?retryWrites=true&w=majority";

mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})



app.use(express.json());
app.use(cors());



app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get('/',(req,res)=>res.status(200).send('Hello Debjit here. It is Amazon clone project.'))





// Listening to  server

app.listen(port,()=>console.log(`Listening on local host:${port}`))