import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173", // client
      "http://localhost:5174", // admin
    ],
    credentials: true,
  })
);

// Static assets (e.g. image uploads)
app.use("/images", express.static("uploads"));

// API routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Health check
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server Started on port: ${PORT}`);
});

