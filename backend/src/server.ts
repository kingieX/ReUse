import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "API is running" });
});
// import auth routes
import authRoutes from "./routes/authRoutes.ts";

// use auth routes
app.use("/api/auth", authRoutes);

// not found
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

// error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: "Server Error" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
