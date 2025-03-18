require("dotenv").config();
require("./mongoose/mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/_index.routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/", router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server is up and runing port " + PORT);
});
