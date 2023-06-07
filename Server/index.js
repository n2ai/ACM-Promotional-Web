const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const event = require("./models/events")
const user = require("./models/user")
const jwt = require("jsonwebtoken")

app.use(express.json())
app.use(cors())
const mongoDbURI = "mongodb+srv://chanh:Passla123@cluster0.ncwslur.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoDbURI).then(console.log("Connecting")).catch(err=>console.log(err))

app.get("/events",(req,res)=>{
    event.find().limit(3).then((result)=>{
        res.json(result)
    }).catch(err=>console.log(err))
})

app.post("/login",(req,res)=>{
    const {email,password} = req.body
    const userAuth =  user.findOne(email)
    let token
    if(bcrypt.compareSync(password, userAuth.password)){
        try {
            token = jwt.sign(
            { email: userAuth.email, passwprd: userAuth.password },
            "secretkey",
            { expiresIn: "1h" }
            );
        } catch (err) {
            console.log(err);
            res.send(err)
        }
    }else{
        res.send("Wrong password!")
    }   
    res.json(token)
 
})



app.post("/post",(req,res)=>{
    const data = new event({
        name:req.body.name
    })
    data.save()
    res.send(data)
})
app.listen(4000)