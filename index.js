const express=require('express')
const app=express()
const staticRouter=require('./routes/staticRouter')
const port=process.env.PORT || 3000

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',staticRouter)

app.listen(port,()=>{
    console.log(`Server is started on port ${port}`)
})