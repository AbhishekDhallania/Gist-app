var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");


const User = require("../Schema/userSchema")
var passport = require("passport");
var LocalStrategy = require("passport-local");

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) return done(null, false, { message: "No user found" });

      const match = await user.isValidPassword(password);
      if (!match) return done(null, false, { message: "Wrong password" });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
  });

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/register',userController.createUser)

module.exports = router;



























// const express = require('express');
// const mongoose = require('mongoose');
// var session = require('express-session');
// const bcrypt = require('bcryptjs');
// var passport = require('passport');
// const initializePassport = require('../config/passportConfig');


// //encrypt password using bcrypt
// app.get('/',()=>{
//   bcrypt.genSalt( 10, (err,salt)=>{
//     bcrypt.hash( "password" , ()=>{
//       console.log(hash);
//       res.send("Working");
//     });
//   });
// });


// //Mongodb connection.
// mongoose.connect('mongodb://localhost/27017/myDB', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });

// // Middleware
// app.use(express.urlencoded({ extended: false }));

// app.use(
//   session({
//     secret: 'mysecret',
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// initializePassport(passport);
// app.use(passport.initialize());
// app.use(passport.session());


