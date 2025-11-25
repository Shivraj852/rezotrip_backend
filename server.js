require("dotenv").config();      // ⭐ Step 1: Load .env

const express = require("express");
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoute");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ⭐ Step 2: Connect DB using .env
connectDB();

// API Routes
app.use("/api/auth", authRoute);

// ⭐ Step 3: PORT ko .env se lo
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
