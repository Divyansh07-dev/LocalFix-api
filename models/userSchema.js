const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,
        minLength:3,
        maxLength:20
    },
    lastName:{
        type:String,
        minLength:3,
        maxLength:20,
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        trim: true,
        lowercase:true,
        immutable: true,
    },
    
    role:{
        type:String,
        enum:['user','admin','serviceprovider'],
        default: 'user'
    },
    password:{
        type:String,
        required: true,
        minLength:6
    }
    },
    {
    timestamps:true
});

const User = mongoose.model("user",userSchema);

module.exports = User;
