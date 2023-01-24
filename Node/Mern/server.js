const express = require("express");

const app = express();

app.use(express.json());

require("dotenv").config();

const PORT = process.env.PORT;

app.use("/api/user", require("./routes/userRoutes"));

const connect = require("./config/ConnectDB");
connect();
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server is running on port : ${PORT}`);
});
