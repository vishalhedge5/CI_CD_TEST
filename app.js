const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my CI/CD application and testing!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

module.exports = app;