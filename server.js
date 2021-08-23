const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.json([{ name: "João" }, { name: "Viviane" }]);
});

app.listen("4567");
