import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: '../config.env' });

const database = process.env.DATABASE_URL|| 'mongodb://127.0.0.1:27017/anonnymousMe'

const db = async () => {
  try {
    const con = await mongoose.connect(database);
    console.log(`mongodb connected: ${con.connection.host}`);
    console.log(`DB Connection successful!`);
  } catch (error) {
    console.log(error);
  }
};

export default db;

