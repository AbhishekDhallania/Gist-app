// const express = require('express');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const passport = require('passport');
// const User = require('./models/User');
// const initializePassport = require('./config/passportConfig');

// const app = express();
// const PORT = 3000;

// // MongoDB Connection
// mongoose.connect('mongodb://localhost/passport_auth', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

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

// // Routes
// app.get('/', (req, res) => res.send('<h1>Home</h1><a href="/login">Login</a> | <a href="/register">Register</a>'));

// app.get('/register', (req, res) => {
//   res.send(`
//     <form method="POST" action="/register">
//       <input name="username" required placeholder="Username" />
//       <input name="password" type="password" required placeholder="Password" />
//       <button type="submit">Register</button>
//     </form>
//   `);
// });

// app.post('/register', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = new User({ username, password });
//     await user.save();
//     res.redirect('/login');
//   } catch (err) {
//     res.send('Error: ' + err.message);
//   }
// });

// app.get('/login', (req, res) => {
//   res.send(`
//     <form method="POST" action="/login">
//       <input name="username" required placeholder="Username" />
//       <input name="password" type="password" required placeholder="Password" />
//       <button type="submit">Login</button>
//     </form>
//   `);
// });

// app.post(
//   '/login',
//   passport.authenticate('local', {
//     successRedirect: '/profile',
//     failureRedirect: '/login',
//   })
// );

// app.get('/profile', (req, res) => {
//   if (!req.isAuthenticated()) return res.redirect('/login');
//   res.send(`<h1>Welcome ${req.user.username}!</h1><a href="/logout">Logout</a>`);
// });

// app.get('/logout', (req, res) => {
//   req.logout(() => res.redirect('/'));
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
