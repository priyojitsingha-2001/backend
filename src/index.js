import connectDb from "./db/db.js";
import dotenv from "dotenv";
import app from "./app.js";

// Load environment variables from the .env file
dotenv.config();

// Call the connectDb function to connect to the MongoDB database
connectDb()
  .then(() => {
    // If the database connection is successful, start the Express server
    app.listen(process.env.PORT || 8000, () => {
      // Log a message indicating that the server is running and listening on the specified port
      console.log(`Server running at PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    // If the database connection fails, log an error message
    console.log(`MONGO DB Connection failed !!!`, err);
  });
