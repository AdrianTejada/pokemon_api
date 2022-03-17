const User = require('../Models/user')
const jwt = require('jsonwebtoken')

const signup = (req, res) => {
    const {email, username, password} = req.body
    const user = new User()
    user.email = email
    user.username = username
    user.password = password
    user.save((err,done)=>{
        if(err){
            return res.status(500).send(err)
        } else {
            res.status(201).send("signed up successfully")
        }
    })
    // put user.fineOne from login if you want to send over a token in the future
}

const login = (req, res) => {
    User.findOne({email: req.body.email}, (err,user)=>{
        if (err || !user) {
            return res.send("user not found")
        } 
        
        if (user.comparePassword(req.body.password)) {
            var token = jwt.sign({id:user._id}, 'thisismysecret')
            res.send({token, username:user.username})
        } else {
            res.send("could not login")
        }
    })
}

module.exports = {
    signup,
    login
}