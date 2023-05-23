import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.URI;
console.log(uri);

const client = new MongoClient(uri);

(async () => {
  try {
    await client.connect();
    console.log("randika ganteng database connect");
  } catch (error) {
    console.log("Error mongodb connection" + error);
  }
})();

const db = client.db("darcik");

export default db;
