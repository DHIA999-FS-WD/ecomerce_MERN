const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const authRoutes = require("./routes/authRoute");

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("hello sirrrrrrr");
});

//PORT
const PORT = process.env.PORT || 4000;
// run listen
app.listen(PORT, (err) => {
  err ? console.log("err", err) : console.log(`server run on port ${PORT}`);
});
