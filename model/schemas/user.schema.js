/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")
/** Schema creation */
const userSchema = new mongoose.Schema({
    name:{
        type: "String",
        requerid: true
    },
    lastname:{
        type: "String",
        requerid: true
    },
    username:{
        type: "String",
        requerid: true,
        unique: true
    },
    password:{
        type: "String",
        requerid: true
    },
    role:{
        type: "Number",
        requerid: true
    }
});

/** Schema exportation */
userSchema.plugin(validator);
module.exports = userSchema; 