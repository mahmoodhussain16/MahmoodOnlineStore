const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.render('home')
})
router.get('/signup',(req,res)=>{
    res.render('signup')
})
router.post('/login',(req, res)=>{
    res.render('login')
})
router.post('/users',(req, res)=>{
    res.render('dashboard')
})
router.get('/dashboard',)


module.exports=router