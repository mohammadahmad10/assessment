import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use("/auth", authRouter);

//Port
app.listen(3000, () => console.log("Server running on port 3000"));
