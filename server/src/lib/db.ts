import { Db, MongoClient } from "mongodb";
// import mongoose, { Connection } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI as string; // your mongodb connection string

const client = new MongoClient(uri);

const dbName = "blackcoffer";

let cachedDb: Db | null = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  const db = await client.connect();

  cachedDb = db.db(dbName);

  return cachedDb;
}
