const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    position:{
        type:String,
        required:true,
    },
    linkedInLink:{
        type:String,
        required:false,
    },
    gitHubLink:{
        type:String,
        required:true,
    }
})