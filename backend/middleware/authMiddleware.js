const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");


// middleare which pass id 
const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if(req?.headers?.authorization?.startsWith('Bearer'))
  {
      token  = req.headers.authorization.split(" ")[1];
      try {
          if(token)
          {
              const decode = jwt.verify(token , process.env.JWT_SECRET)
              const user = await User.findById(decode?.id)
              req.user = user;
              next();
          }
      } catch (error) {
          throw new Error('Not Authorize Token, Please Login')
      }
  }else
  {
      throw new Error('There is no Token Attach TO Headers')
  }
});

//middleware for admin
const isAdmin = asyncHandler(async(req,res,next)=>{
    const {email} = req.user
    const user = await User.findOne({email})
    if(user.role !== 'admin')
    {
        throw new Error('You are not Admin')
    }
    else
    {
        next()
    }
})

module.exports = { authMiddleware ,isAdmin };
