import modifyBook from "../controllers/bookControllers";
import {Router}from 'express'
const router=Router()
const alterBook=new modifyBook()

router.get('/',alterBook.loadPanel)
router.post('/addBook',alterBook.addBook)
router.post('/editBook/:id',alterBook.editBook)
router.get('/deleteBook/:id',alterBook.deleteBook)

export default router