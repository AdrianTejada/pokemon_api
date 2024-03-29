const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    email: {type: String, unique: true},
    username: {type: String, unique: true},
    password: {type: String, minlength: 6}
});

UserSchema.pre('save', function (next) {
    const user = this

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash){
            user.password = hash
            next()
        });
    });
});

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model("User", UserSchema)

module.exports = User;