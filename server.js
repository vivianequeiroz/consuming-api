const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

app.use(cors());

app.get("/", async(req, res) => {

  try {
    // Getting data from the response
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    console.log(data);
  
    return res.json(data);
  } catch(error) {
    console.log(error);
  }

});

app.listen("4567");
