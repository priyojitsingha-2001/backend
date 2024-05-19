import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

//load environment variables from .env file
dotenv.config();
//define an asynchronous function to connect to the MongoDB database
const connectDb = async () => {
  try {
    // Attempt to connect to the MongoDB database using the connection URI from environment variables
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    // Log a success message with the host of the connected database
    console.log(
      `\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    // Log an error message if the connection attempt fails
    console.log("MONGODB connection error", error);
    // Exit the process with a failure status code
    process.exit(1);
  }
};

export default connectDb;
