const jwt = require("jsonwebtoken");
const router = require("../router/auth");
const Connect = require("../module/Schema");
const cookieParser = require("cookie-parser");

const Authenticate = async(req, res, next) => {
    try {
        const token = req.cookies.jwt_token;
        const v_token = jwt.verify(token, "mynameisrishavrajsinghworkingonwev");

        const user_data = await Connect.findOne({
            _id: v_token._id,
            "tokens.token": token,
        });
        if (!user_data) {
            throw new Error("User not found");
        }
        req.token = token;
        req.user_data = user_data;
        req.userID = user_data._id;
        next();
    } catch (error) {
        res.status(401).send("Unauthorized");
        console.log(error);
    }
};

module.exports = Authenticate;