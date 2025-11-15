import {Request,Response}from 'express';
import Book from '../models/bookModel';
// import mongoose from "mongoose";

export default class modifyBook{

    loadPanel=async (req:Request,res:Response)=>{
        const books=await Book.find()
        res.render('adminPanel',{
             books:books
           
        })
    }
    addBook=async (req:Request,res:Response)=>{
        const{name,author,price}=req.body
        const data={
            name:name,
            author:author,
            price:price
        }
        await Book.create(data)
        res.redirect('/')
    }
    editBook=async(req:Request,res:Response)=>{
        const{name,author,price}=req.body
        const id=req.params.id;
        await Book.findByIdAndUpdate(id,{
            name,author,price
    }
)
            res.redirect('/')
    }
    deleteBook=async(req:Request,res:Response)=>{
        const id=req.params.id
        await Book.findByIdAndDelete(id)
        res.redirect('/')
    }
}