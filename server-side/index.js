
const express = require("express")
const bodyParser = require("body-parser")

const InitiateMongoServer = require('./src/config/db')

const user = require('./src/routes/user')

// Initiate Mongo Server
InitiateMongoServer();

const app = express()

// PORT
const PORT = process.env.PORT || 4000

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);


app.get("/", (req, res) => {
    res.json({ message: "API Working" });
})


app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`)
})