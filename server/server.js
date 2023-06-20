//handle apis
const express = require("express");
//handle db
const mongoose = require("mongoose");
//handle cors
const cors = require("cors");

//invoking express and cors app
const app = express();
app.use(express.json());

app.use(cors());

const uri =
  "mongodb+srv://prannat:prannat.123@cluster0.1wwdrvu.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongoDB"))
  .catch(console.error);

//import created model for db
const SaleInventory = require("./models/SaleInventory");

//make a request to localhost:3001/saleinventory, find the inventory and pass it to the constant as the result
app.get("/saleinventory", async (req, res) => {
  const saleinventory = await SaleInventory.find();

  res.json(saleinventory);
});

app.listen(3001, () => console.log("Server started on port 3001"));
