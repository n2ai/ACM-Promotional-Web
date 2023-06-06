const mongoose = require('mongoose')
const date= new Date()
const events = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    eDate:{
        type:Date,
        required:true,
        max: date   /*  obj.validateSync() will return err if date is greater than min */
    },
    imgUrl:{
        type:String,
        required:true,
    }
});

const Event = mongoose.model('Events', events);

module.exports =  Event;