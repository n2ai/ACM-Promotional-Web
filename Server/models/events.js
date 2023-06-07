const mongoose = require('mongoose')
const date= new Date()
const eventSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    /*location: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    shortDescription: {
        type:String,
        required:true
    },
    eDate:{
        type:Date,
        required:true,
        max: date   /*  obj.validateSync() will return err if date is greater than min 
    }*/
});

const event = mongoose.model('Events', eventSchema);

module.exports =  event;