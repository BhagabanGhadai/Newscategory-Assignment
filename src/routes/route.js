const express=require('express')
const router=express.Router()
const createNews=require('../controller/createNews')
const getNews=require('../controller/getNews')

router.post('/news',createNews)
router.get('/news',getNews)
module.exports=router