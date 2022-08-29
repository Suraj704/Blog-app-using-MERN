const jwt = require('jsonwebtoken');

module.exports={
    verifyToken:(req,res,next)=>{
        if (!req.headers.token) {
            return res.status(400).json({responseCode:400,responseMessage:"Please provide token .",error:err})
        }
        jwt.verify(token, 'blogProject', function(err, decoded) {
            if (err) {
               return res.status(501).json({responseCode:501,responseMessage:"Something went wrong",error:err})
            } else {
               req.userId=decoded._id
               next()
            }
           });
    }
}