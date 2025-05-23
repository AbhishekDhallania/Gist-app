const express = require('express')
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // -->parsing into json format
// Declare user and gists





// //get route
// app.get('/',(req,res)=>{
//     res.send('get route done');
// })

// //post route || register

// app.post('/register',async(req,res)=>{
//     const hashedPassword = await bcrypt.hash(req.body.password,10);
//     console.log(req.body);
//     console.log(req.body.username);
//     users.push({username:req.body.username , password : hashedPassword });
//     res.json({message: "User Registered Successfully"});
// })

// //Post route || login 

// app.post('/login',async (req,res) => {
//     const user = user.find( u => u.username === req.body.username);
//     if(!user || !(await bcrypt.compare(req.body.password,user.password))){
//         return res.status(401).json({error:"Invalid Credentials"});
//     }

//     const token = jwt.sign(
//         {username:username},
//         "secret_key",{expiresIn:"1h"}
//     );
// })

// //protected Route

// // app.get("/protected",(req,res)=>{
// //     const token = req.headers["authorization"];
// //     if(!token) return res.status(401).json({ error : "Access denied" });
    
// //     jwt.verify(token,"secret_key",(err,decoded)=>{
// //         if(err) return res.status(403).json({error: "Invalid token"});
// //     });
// // });


// // Create a user

// app.post("users",(req,res)=>{
//     const user = req.body;
//     users.push(user);
//     res.status(201).json({message : "User Created Successfully",user});
// });

// //Read all users

// app.get("/users",(req,res)=>{
//     res.json(users);
// });

// // Read One User

// app.get("/users/:id",(req,res)=>{
//     const user = users.find( u => u.id === parseInt(req.params.id));
//     if(!user) return res.status(404).json({error: "User not found !"});
//     res.json(user);
// });

// // Update One User

// app.put("users/:id",(req,res)=>{
//     const index = users.findIndex( u=>u.id === parseInt(req.params.id ));
//     if(index === -1) return res.status(404).json({error:"User not found !"});   
//     users[index] = {...users[index],...req.body};
//     res.json({message:"User Updated Successfully" , user:users[index]});
    
// });

// // Delete One User

// app.delete("/users/:id",(req,res) => {
//     const users = users.find(u => u.id !== parseInt(req.params.id));
//     res.json({ message: "User Deleted Successfully"});
// });

// const PORT = 3000;

// app.listen(PORT,() => console.log(`Server running on port ${PORT}`));