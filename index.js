require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require('body-parser');

const arithmeticRoute = require("./src/routes/arithmeticRouter");

const app = express();

// * cors enablement
app.use(cors());
// API logging
app.use(morgan("tiny"));
// Parse application/json
app.use(bodyParser.json());
// Attach routes
app.use("/", arithmeticRoute);

const server = app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
});

module.exports = server;
