import express from 'express'


const app = express()
//he
app.listen(5001,()=>console.log("Arya running on port"))

app.get('/',(req,res)=> res.json(' Running :'))
