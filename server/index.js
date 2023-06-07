const express = require('express')
const cors = require('cors')

const app = express()


app.use(cors({
    credentials:true,
    origin:'http://127.0.0.1:5173',
}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.post('/login', (req,res)=>{
    try{
        const {email,password} = req.body
        res.status(200).json(email,password)
    }catch(e){
        res.status(422).json(e)
    }
})

app.listen(4000)