const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db_schema = mongoose.Schema({
    name: {
        type: "string",
        // required: true,
    },
    email: {
        type: "string",
        // required: true,
    },
    phone: {
        type: "string",
        // required: true,
    },
    work: {
        type: "string",
        // required: true,
    },
    password: {
        type: "string",
        // required: true,
    },
    c_password: {
        type: "string",
        // required: true,
    },
    tokens: [{
        token: {
            type: "string",
            required: true,
        },
    }, ],
    resetPasswordToken: String,
    resetPasswordExpires: Date,
});

db_schema.pre("save", async function(next) {
    console.log("Hash Inside");
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    this.c_password = await bcrypt.hash(this.c_password, salt);
    next();
});

db_schema.methods.generateAuthToken = async function() {
    try {
        let token_data_type = jwt.sign({ _id: this.id },
            "mynameisrishavrajsinghworkingonwev"
        );
        this.tokens = this.tokens.concat({ token: token_data_type });
        await this.save();
        return token_data_type;
    } catch (err) {
        console.log(err);
    }
};

const Connect = mongoose.model("amazon", db_schema);

module.exports = Connect;