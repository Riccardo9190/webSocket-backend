require("dotenv").config();

import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose.set("strictPopulate", false);

const DATABASE: string = process.env.DATABASE_URL || "";

export async function connect() {
  try {
    await mongoose.connect(DATABASE);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err.messsage);
  }
}
