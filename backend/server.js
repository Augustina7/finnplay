const express = require("express");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const app = express();
const setupLoginRoute = require("./src/routes/login");
const setupUserRoute = require("./src/routes/user");
const setupLogoutRoute = require("./src/routes/logout");
const cors = require('cors');
require("path");
require('dotenv').config()

const corsOption = {
    origin: ['http://localhost:3000', 'http://localhost:5000'],
    credentials: true,
};

app.use(cors(corsOption));

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(session({
    secret: process.env.MY_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        Secure: false,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        domain: 'localhost',
    }
}))

app.use(express.static("../frontend/build"));

app.use(express.json());
app.use(cookieParser());

setupLoginRoute(app);
setupUserRoute(app);
setupLogoutRoute(app);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Express listening at http://localhost:${process.env.PORT}`);
});
