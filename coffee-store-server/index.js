const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;


// middleware
app.use(cors());
app.use(express.json());

// database
require("dotenv").config();

// routes
app.get("/", (req, res) => {
    res.send("This is a coffee store server API");
});





// listen
app.listen(port, () => {
    console.log(`This is a coffee store server  Running 🚀 on ${port}`);
});