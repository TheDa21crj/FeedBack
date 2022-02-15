const { compare } = require("bcryptjs");
const express = require("express");
const router = express.Router();
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Connect = require("../module/Schema");
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");

router.get("/", (req, res) => {
    res.send("Home auth hekko");
});

router.post("/register", async(req, res) => {
    console.log(req.body);
    const { name, email, phone, work, password, c_password } = req.body;
    // if (!name || !email || !phone || !work || !password || !c_password) {
    //   return res.status(422).send({ error: "Error in typing" });
    // }
    try {
        const u_exists = await Connect.findOne({ email: email });
        if (u_exists) {
            return res.status(422).json({ error: "Error user exists" });
        }
        const myData = new Connect({
            name,
            email,
            phone,
            work,
            password,
            c_password,
        });

        myData.save(function(err) {
            if (err) {
                console.log("Can't create new user: %s", err);
            } else {
                res.status(201).json({ message: "User Registered" });
                console.log("User Registered");
            }
        });
    } catch (err) {
        res.status(500).json({ error: "Error " });
        console.log(err);
    }
});

router.post("/signin", async(req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Error" });
        }
        // checking the email
        const u_l = await Connect.findOne({ email: email });
        if (u_l) {
            //checking the password
            const p_l = await bcrypt.compare(password, u_l.password);

            const token = await u_l.generateAuthToken();
            console.log(`The token is: \n${token}`);

            res.cookie("jwt_token", token, {
                expries: new Date(Date.now() + 60000),
                httpOnly: true,
            });

            if (p_l != null) {
                res.status(200).json({ message: "Sgin-In" });
            } else {
                res.status(400).json({ message: "NOT Sgin-In" });
            }
        } else {
            res.status(400).json({ message: "NOT Sgin-In" });
        }
    } catch (err) {
        console.log(err);
    }
});

router.get("/abouts", authenticate, (req, res) => {
    console.log("About")
    res.send(req.user_data);
});

router.get("/logout", (req, res) => {
    console.log("Logout");
    res.clearCookie("jwt_token", { path: "/" });
    res.status(200).send("Logout Done");
});

module.exports = router;