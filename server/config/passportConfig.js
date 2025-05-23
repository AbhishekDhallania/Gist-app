const LocalStrategy = require('passport-local').Strategy;
const User = require("../Schema/userSchema");

function initialize(passport) {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      console.log(username);
      console.log(password);
      const user = await User.findOne({ username });
      if (!user) return done(null, false, { message: 'No user found' });

      const match = await user.isValidPassword(password);
      if (!match) return done(null, false, { message: 'Wrong password' });

      return done(null, user);
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });
}

module.exports = initialize;
