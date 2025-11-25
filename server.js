const express = require("express");
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoute");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
