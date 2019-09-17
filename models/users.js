//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PACKAGE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const mongoose =  require("mongoose");
const bcrypt = require("bcrypt");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SETUP ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const environment = process.env.NODE_ENV;
const stage = require("./../config")[environment];

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SCHEMA ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: "String",
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: "String",
        required: true,
        trim: true,
    }
});

//Encrypt password before saving the user
userSchema.pre("save", function(next) {
    const user = this;

    if(!user.isModified || !user.isNew) {
        next();
    } else {
        bcrypt.hash(user.password, stage.saltingRounds, function(err, hash) {
            if(err){
                console.log(`Error hashing password for user: ${user.name}`);
            } else {
                user.password = hash;
                next();
            }
        });
    }
});

module.exports = mongoose.model("User", userSchema);


