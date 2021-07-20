const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));
const port = process.env.PORT || 5000;