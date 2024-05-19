import connectDb from "./db/db.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running at PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MONGO DB Connection failed !!!`, err);
  });
