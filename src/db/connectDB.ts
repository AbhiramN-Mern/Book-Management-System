import mongoose from "mongoose"

const dbUrl = "mongodb://127.0.0.1:27017/library"; 

export const dbConnect=async ()=>{
    try {
        mongoose.connect(dbUrl)
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Databse connection failed')
    }
}