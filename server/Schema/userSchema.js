const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

// Define Schema of User
const userSchema = new mongoose.Schema({
    username:{
    type:String,  
    required:true,
    unique:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
}
});


// new add on from here
//Hash Password Before Saving
userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
});

// Compare passwords
userSchema.methods.isValidPassword = function(password){
    return bcrypt.compare(password,this.password);
};

const User = mongoose.model('User',userSchema)
module.exports = mongoose.model('User', userSchema);
