const dotenv = require("dotenv");
const fs = require("fs");
const express = require("express");
const path = require("path");
const body_parser = require("body-parser");
const mongoose = require("mongoose");
const auth = require("./router/auth");
const http = require("http");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(cookieParser());
// dotenv.config({
//   path: "./config.evn",
// });

const db_url = `mongodb+srv://amazon_db:amazon@cluster0.9b1gj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const Connect = require("./module/Schema");

mongoose
    .connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("working on db");
    })
    .catch((err) => {
        console.log("connection error");
    });

app.use(require("./router/auth"));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST , PUT, PATCH,DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

app.use(cors());

app.get("/contacts", (req, res) => {
    // res.cookie("hello", "world");
    res.send("Contact");
});

app.get("/signin", (req, res) => {
    res.send("Sign in");
});

app.get("/register", (req, res) => {
    res.send("Register");
});

app.listen(port, () => {
    console.log(`Running on Localhost at port ${port}`);
});