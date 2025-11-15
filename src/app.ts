import express from 'express';
import path from 'path';
import router from "./routes/libraryRouter";
import { dbConnect } from './db/connectDB';

const app=express()
dbConnect()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs')
app.use('/',router)
app.set('views',path.join(__dirname, '../views'))

app.use(express.static(path.join(__dirname, '../public')))

let PORT:number = 5555
app.listen(PORT, ()=> console.log(`Server is connected at ${PORT}`) )