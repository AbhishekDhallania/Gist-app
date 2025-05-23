const express = require('express');
const app = express();
const userRoutes = require("./routes/userRoutes");
const gistRoutes = require("./routes/gistRoutes");
const session = require('express-session');
const passport = require('passport');
const initializePassport = require('./config/passportConfig');

// cors for allow request that come on different server
const cors = require('cors');
app.use(cors({ origin : 'http://localhost:3000', credentials:true}));


app.use(express.json());
app.use("/users",userRoutes);

app.use("/gists",gistRoutes);

const mongoose = require('mongoose');
require('dotenv').config();

// Connect to mongoose          -->  // mongoose.connect(process.env.MONGO_URL)
  
// Old 

  mongoose.connect("mongodb://localhost:27017/myDB")
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

  app.use(express.json());

// SESSION CONFIG
app.use(
  session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport
initializePassport(passport); // Your function from config/passportConfig.js
app.use(passport.initialize());
app.use(passport.session());



