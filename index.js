const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const urlEncoded = bodyParser.urlencoded({ extended: false });

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.post("/message", urlEncoded, (req, res) => {
  console.log(`Sender Name: ${req.body.name}`);
  console.log(`Sender Email: ${req.body.email}`);
  console.log(`Sender Message: ${req.body.message}`);
  res.redirect("/?form=submitted");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
