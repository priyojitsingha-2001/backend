import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Initializing express
const app = express();
//configuring cors
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({}));
app.use(express.static("public"));

export { app };
