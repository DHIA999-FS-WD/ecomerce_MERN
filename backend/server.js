const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const authRoutes = require("./routes/authRoute");
const categoryRoutes = require("./routes/categoryRoutes.js");
const productRoutes = require("./routes/productRoutes.js");

const cors = require("cors");
//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
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
