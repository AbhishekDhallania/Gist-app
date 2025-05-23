const user = require("../models/user");
const User = require("../Schema/userSchema"); 
const bcrypt = require('bcryptjs');


//new add on
// post req --> User Register Route
exports.registerUser = async (req,res) => {
    try {
        const registerUser = await bcrypt.hash(req.body.password,10);
        console.log(req.body);
        console.log(req.body.username);
        res.status(200).json("User Register Successfully");
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

//new add on
// post req --> User Login Route
// exports.loginUser = async (req,res) => {
//     try {

//         // const loginUser = user.find( u => u.username === req.body.username);
//         // if(!user || !( await bcrypt.compare(req.body.password,user.password))){
//         //     return res.status(401).json({error : "Invalid Credentials"});
//         // }

//         // const token = jwt.sign(
//         //     {username : username},
//         //     "secret_key" , {expiresIn : "1h"}
//         // );
//     } catch (error) {
//         res.status(500).json({error : error.message});
//     }
// }




// Create User
exports.createUser = async(req,res) => {
   try {
    const user = await User.create(req.body);
    res.status(201).json(user);
   } catch (error) {
    res.status(500).json({error : error.message});
   }
};

// Get -> all users
exports.getAllUsers = async(req,res) => {
   try {
    const users = await User.find();
    res.json(users);
   } catch (error) {
    res.status(500).json({error : error.message});
   }
};

// Get-> One user
exports.getUserById = async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if(!user) res.status(404).json({msg : "User not found"});
        res.json(user);
    } catch (error) {
        res.status(500).json({error : error.message});
        res.json(User);
    }
};

// Update a user 
exports.updatedUser = async(req,res)=> {
    try {
        const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
        );
        if(!updatedUser) return res.status(404).json({msg : "User not found"});
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({error : error.message});
    }
};
 
// Delete a user
exports.deletedUser = async(req,res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser) return res.status(404).json({msg : "User Not Found"});
        res.json("User Deleted Successfully");
    } catch (error) {
        res.status(500).json({error : error.message});
    }
};
