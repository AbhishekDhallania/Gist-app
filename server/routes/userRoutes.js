const express = require("express");
const app = express();
const router = express.Router();
const userController = require("../controllers/userController");
const passport = require('passport');
const bcrypt = require('bcryptjs');

// Login routes
router.post('/login',passport.authenticate('local',{
    successRedirect : '/profile',
    failureRedirect : '/login'
})); 

// login get route
router.get('/login',(req,res)=>{
    res.send("Login from here");
});

// Profile Route
router.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) return res.redirect('/login');
    res.status(200).json("Your are Successfully Login");
  });
  
router.post("/register",userController.registerUser); // working
router.post("/",userController.createUser);
router.get("/",userController.getAllUsers);
router.get("/:id",userController.getUserById);
router.put("/:id",userController.updatedUser);
router.delete("/:id",userController.deletedUser);

module.exports = router;