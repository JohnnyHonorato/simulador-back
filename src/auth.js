const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const verify = (req, res) =>{
    //console.log(req.headers);
    const token = req.headers['x-access-token'];
    if(token){
        jwt.verify(token, config.secret, (err, decoded) => {
        if(err){
            res.json({message: 'authentication failed'});
        }else{
            return decoded
        }
        });
    }else{
        res.json({message: 'authentication required'});
    }
}

module.exports = {
    verify: verify
}