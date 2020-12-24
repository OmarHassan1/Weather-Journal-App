// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const serverless = require("serverless-http");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

app.use(express.static("website"));

// Setup Server
const port = 8000;

const server = app.listen(port, () => {
  console.log("server is running :)");
  console.log(`running on localhost:${port}`);
});

app.get("/weatherData", function (req, res) {
  res.send(projectData);
});

app.post("/addWeather", function (req, res) {
  projectData = req.body;
  console.log("post request: received");
  console.log(projectData);
  res.send("Post received");
});

module.exports.handler = serverless(app);
