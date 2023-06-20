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

app.listen(3001, () => console.log("Server started on port 3001"));
