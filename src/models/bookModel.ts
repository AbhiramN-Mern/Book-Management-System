import mongoose,{Document,Schema} from "mongoose";

export interface book extends Document{
    name:string
    author:string
    price:number
}
const bookScheema=new Schema<book>({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const BookModel=mongoose.model<book>('books',bookScheema)
export default BookModel