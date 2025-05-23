const authMiddleware = async (req, res, next) => {
    if (req.isAuthenticated()) {
      return next(); // user is logged in, go to next middleware/route
    }
    res.redirect("/login"); // or send a 401 if it's an API
  };
  
  module.exports = authMiddleware;
  