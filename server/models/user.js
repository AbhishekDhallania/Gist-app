// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const userSchema = require("../Schema/userSchema");

// Hash password before saving

// userSchema.pre('save', async (next) => {
//     if(!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password,10);
//     next();
// });

// // Compare passwords
// userSchema.methods.isValidPassword = (password)=>{
//     return bcrypt.compare(password,this.password);
// };

// module.exports = mongoose.model('User', userSchema);