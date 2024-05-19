import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Initializing express
const app = express();
//configuring cors
app.use(cors());

export default app;
